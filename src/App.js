import { useState } from "react";
import "./style/stlye.scss"

// importing Component
import NavBar from "./component/Nav_bar.Component";
import Library from "./component/Library.Component";
import CurrMedia from "./component/Current_Media.Component";

// importing Util Files
import List from "./Utils/Media_list";


function App() {

    //  states
  // isPlaying will help to detect if some media is playing or not
  const [isPlaying , SetMediaState] = useState(false);

  // declration of Media list State 
  const [media_list , Getmedia_list] = useState(List());
  
  // media_list.filter( media => media.active === true)
  // declration of Current running Media State 
  const [curr_media , Setcurr_media] = useState(media_list[0])

  return (
    <main className ="Cont">
      <NavBar />
      <div className = "sctions">
        <Library Media={media_list}/>
        <CurrMedia CurrMedia = { curr_media } isPlaying={isPlaying} SetMediaState={SetMediaState} />
      </div>
    </main>
  );
}

export default App;
