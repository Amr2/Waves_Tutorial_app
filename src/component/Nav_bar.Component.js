import Svglogo from "./Logo.component";

export default function NavBar(props) {
  return (
    <header className=" Nav-bar">
      <Svglogo prime={"#2E2E2E"} />
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Library
      </button>
    </header>
  );
}
