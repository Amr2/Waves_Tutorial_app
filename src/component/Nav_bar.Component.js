import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import Svglogo from "./Logo.component";

export default function NavBar(props) {
  return (
    <header className=" Nav-bar">
      <Svglogo prime={"#2E2E2E"} />
      <button onClick={() => props.Set_apper(!props.display_lib)}>
        <FontAwesomeIcon icon={faMusic} size="xs" /> Library
      </button>
    </header>
  );
}
