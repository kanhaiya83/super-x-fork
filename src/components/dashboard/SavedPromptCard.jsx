import { GrMagic } from "react-icons/gr";

const SavedPromptCard = ({ data }) => {
  return (
    <div className="promptCard">
      <h1>{data.title}</h1>
      <h2>
        {data.prompt.slice(0,80)}...
      </h2>
      <button
        className="sidebarButton bg-transparent"
        style={{ width: "90%", minWidth: "10rem", margin: "0" }}
      >
        <GrMagic style={{ marginRight: "1rem" }}></GrMagic>
        <h1 style={{ fontSize: "1rem" }}>Modify</h1>
      </button>
    </div>
  );
};

export default SavedPromptCard;
