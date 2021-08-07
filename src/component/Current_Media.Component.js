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
  });

  // config the audio help on run the media
  const Media_audio = useRef(null);

  // handlers

  // this handler functions helps on detecting if ther is..
  // Media playing or not
  const HandlePlayEvent = () => {
    props.isPlaying ? Media_audio.current.pause() : Media_audio.current.play();
    props.SetMediaState(!props.isPlaying);
  };

  // this handler for geting the current media info
  const Mediainfo_handler = (e) => {
    UpdateMediainfo({
      ...mediainfo,
      current_time: e.target.currentTime,
      duration: e.target.duration,
    });
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
    // This link looks un-needed now.
    // UpdateMediainfo({...mediainfo , current_time : e.target.value});
    Media_audio.current.currentTime = e.target.value;
  };

  return (
    <div className="media-cont">
      <div className="media-info">
        <img src={props.CurrMedia.cover} alt="Media`s img here" />
        <h2>{props.CurrMedia.name}</h2>
        <h4>{props.CurrMedia.artist}</h4>
      </div>
      <div className="contorller-cont">
        <div className="time-controller">
          <p>{Format_time(mediainfo.current_time)}</p>
          <input
            type="range"
            value={mediainfo.current_time}
            min="0"
            max={mediainfo.duration}
            onChange={Dragable_slider}
          />
          <p>{Format_time(mediainfo.duration)}</p>
        </div>
        <div className="options-controler">
          <FontAwesomeIcon size="2x" icon={faAngleDoubleLeft} />
          <FontAwesomeIcon
            onClick={HandlePlayEvent}
            size="2x"
            icon={props.isPlaying ? faPause : faPlay}
          />
          <FontAwesomeIcon size="2x" icon={faAngleDoubleRight} />
        </div>
        <audio
          ref={Media_audio}
          src={props.CurrMedia.audio}
          onLoadedMetadata={Mediainfo_handler}
          onTimeUpdate={Mediainfo_handler}
          onEnded={() => props.SetMediaState(!props.isPlaying)}
        ></audio>
      </div>
    </div>
  );
}
