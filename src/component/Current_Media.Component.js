import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CurrMedia(props) {
  //  states
  // media info will help on control the time slider and represent the media current , end time
  const [mediainfo, UpdateMediainfo] = useState({
    current_time: 0,
    duration: 0,
    animtion: 0,
  });

  // handlers

  // this handler functions helps on detecting if ther is..
  // Media playing or not
  const HandlePlayEvent = () => {
    props.isPlaying
      ? props.Media_audio.current.pause()
      : props.Media_audio.current.play();
    props.SetMediaState(!props.isPlaying);
  };

  // this handler for geting the current media info
  const Mediainfo_handler = (e) => {
    UpdateMediainfo({
      ...mediainfo,
      current_time: e.target.currentTime,
      // on the duration prop i give its Value "0" while the Media Been loaded
      duration: e.target.duration ? e.target.duration : "0",
      animtion: `${
        isNaN((mediainfo.current_time / mediainfo.duration) * 100)
          ? 0
          : Math.round((mediainfo.current_time / mediainfo.duration) * 100)
      }`,
    });
  };

  // this handle the skiping logice (Forward and backward)
  const Handle_SkipEvent = async (diraction) => {
    let curr_indx = props.media_list.findIndex(
      (M) => props.CurrMedia.id === M.id
    );
    if (diraction === "Forward") {
      curr_indx = (curr_indx + 1) % props.media_list.length;
      await props.Setcurr_media(props.media_list[curr_indx]);
    } else {
      curr_indx - 1 === -1
        ? (curr_indx = props.media_list.length - 1)
        : (curr_indx = curr_indx - 1);
      await props.Setcurr_media(props.media_list[curr_indx]);
    }

    const new_songs = props.media_list.map((media) => {
      // to hielight the current media
      return media.id === props.media_list[curr_indx].id
        ? { ...media, active: true }
        : { ...media, active: false };
    });
    props.Getmedia_list(new_songs);
    props.isPlaying
      ? await props.Media_audio.current.play()
      : await props.Media_audio.current.pause();
  };

  // to format the duration and current media info
  const Format_time = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //this handler allow the user to interact
  // with the time slid bar
  const Dragable_slider = (e) => {
    // This line looks un-needed now.
    // UpdateMediainfo({...mediainfo , current_time : e.target.value});
    props.Media_audio.current.currentTime = e.target.value;
  };

  return (
    <div
      className="media-cont"
      onClick={() =>
        props.display_lib ? props.Set_apper(!props.display_lib) : ""
      }
    >
      <div className="media-info">
        <img src={props.CurrMedia.cover} alt="Media`s img here" />
        <h2>{props.CurrMedia.name}</h2>
        <h4>{props.CurrMedia.artist}</h4>
      </div>
      <div className="contorller-cont">
        <div className="time-controller">
          <p>{Format_time(mediainfo.current_time)}</p>
          <div
            className="track"
            style={{
              background: `linear-gradient(to right, ${props.CurrMedia.colors[0]} , ${props.CurrMedia.colors[1]})`,
            }}
          >
            <input
              type="range"
              value={mediainfo.current_time}
              min="0"
              max={mediainfo.duration}
              onChange={Dragable_slider}
            />
            <div
              className="animation"
              style={{ transform: `translateX(${mediainfo.animtion}%)` }}
            ></div>
          </div>
          <p>{Format_time(mediainfo.duration)}</p>
        </div>
        <div className="options-controler">
          <FontAwesomeIcon
            onClick={() => Handle_SkipEvent("Backward")}
            size="2x"
            icon={faAngleDoubleLeft}
          />
          <FontAwesomeIcon
            onClick={HandlePlayEvent}
            size="2x"
            icon={props.isPlaying ? faPause : faPlay}
          />
          <FontAwesomeIcon
            onClick={() => Handle_SkipEvent("Forward")}
            size="2x"
            icon={faAngleDoubleRight}
          />
        </div>
        <audio
          ref={props.Media_audio}
          src={props.CurrMedia.audio ? props.CurrMedia.audio : ""}
          onLoadedMetadata={Mediainfo_handler}
          onTimeUpdate={Mediainfo_handler}
          onEnded={() => Handle_SkipEvent("Forward")}
        ></audio>
      </div>
    </div>
  );
}
