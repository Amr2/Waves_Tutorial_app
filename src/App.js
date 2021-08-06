import { useState } from "react";

// importing Component
import NavBar from "./Component/Nav_bar.Component";
import Library from "./Component/Library.Component";
import CurrMedia from "./Component/Current_Media.Component";

// importing Util Files
import List from "./Utils/Media_list";


function App() {
  // declration of Media list State 
  const [media_list , Getmedia_list] = useState(List());
  
  // declration of Current running Media State 
  const [curr_media , Setcurr_media] = useState(2)

  return (
    <div>
      <NavBar />
      <main>
        <Library/>
        <CurrMedia/>
      </main>
    </div>
  );
}

export default App;
