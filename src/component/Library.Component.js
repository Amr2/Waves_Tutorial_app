export default function Library(props) {
  return (
    <div className="library-cont">
      {props.Media.map((media) => {
        return <div key={media.id}>{media.name}</div>;
      })}
    </div>
  );
}
