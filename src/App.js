import { useRef, useState } from "react";
import "./style/stlye.scss";

// importing Component
import NavBar from "./component/Nav_bar.Component";
import Library from "./component/Library.Component";
import CurrMedia from "./component/Current_Media.Component";

// importing Util Files
import List from "./Utils/Media_list";

function App() {
  //  states
  // isPlaying will help to detect if some media is playing or not
  const [isPlaying, SetMediaState] = useState(false);

  // declration of Media list State
  const [media_list, Getmedia_list] = useState(List());

  // media_list.filter( media => media.active === true)
  // declration of Current running Media State
  const [curr_media, Setcurr_media] = useState(media_list[0]);

  // display library component
  const [display_lib, Set_apper] = useState(false);

  // config the audio help on run the media
  const Media_audio = useRef(null);

  return (
    <>
      <main className={`Cont ${display_lib ? "lib_display_anim" : ""}`}>
        <NavBar display_lib={display_lib} Set_apper={Set_apper} />
        <div className={`sctions`}>
          <CurrMedia
            media_list={media_list}
            Media_audio={Media_audio}
            CurrMedia={curr_media}
            Setcurr_media={Setcurr_media}
            isPlaying={isPlaying}
            display_lib={display_lib}
            Set_apper={Set_apper}
            SetMediaState={SetMediaState}
            Getmedia_list={Getmedia_list}
          />
        </div>
      </main>
      <Library
        Media={media_list}
        setcurr_media={Setcurr_media}
        Curr_media={curr_media}
        Media_audio={Media_audio}
        SetMediaState={SetMediaState}
        display_lib={display_lib}
        Getmedia_list={Getmedia_list}
        Set_apper={Set_apper}
        isPlaying={isPlaying}
      />
    </>
  );
}

export default App;
