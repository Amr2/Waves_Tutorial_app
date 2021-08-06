import { useState } from "react";
import Nav_bar from "./component/Nav_bar.Component";


function App() {
  // declration of Media list State 
  const [media_list , Setmedia_list] = useState([]);
  
  // declration of Current running Media State 
  const [curr_media , Setcurr_media] = useState()

  return (
    <div>
      <Nav_bar/>
    </div>
  );
}

export default App;
