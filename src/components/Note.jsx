import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Zoom } from "@mui/material";

function Note(props) {
  const [red,changered]=React.useState(true);


  function handleClick() {
    changered(false);
    setTimeout(rod,300);
  }

  function rod(){
    props.onDelete(props.id);
    changered(true);
  }

  return (
    <Zoom in={red} style={{ transitionDelay: "150ms" }}>
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
    </Zoom>
  );
}

export default Note;
