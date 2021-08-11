import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Library(props) {
  // Handlers
  // this handler allow the user to browse the media freely
  const Library_Handler = async (M) => {
    await props.setcurr_media(M);
    const new_songs = props.Media.map((media) => {
      // to hielight the current media
      return media.id === M.id
        ? { ...media, active: true }
        : { ...media, active: false };
    });
    props.Getmedia_list(new_songs);
    props.isPlaying
      ? props.Media_audio.current.play()
      : props.Media_audio.current.pause();
  };

  return (
    <div className={`library-cont ${props.display_lib ? "displaylib" : ""}`}>
      {props.Media.map((media) => {
        return (
          <div
            className={`lib_Media_cont ${media.active ? "active" : ""}`}
            key={media.id}
            onClick={(e) => {
              Library_Handler(media);
            }}
          >
            <img src={media.cover} alt="Media Img" />
            <div className="info_cont">
              <h2>{media.name}</h2>
              <p>{media.artist}</p>
            </div>
          </div>
        );
      })}
      <FontAwesomeIcon
        className="close-btn"
        size="4x"
        icon={faArrowLeft}
        onClick={() => props.Set_apper(!props.display_lib)}
      />
    </div>
  );
}
