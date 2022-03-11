import React from "react";
const BindObject = (props) => {
  function bindRight() {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().animate("left", 820, {
        onChange: props.canvas.renderAll.bind(props.canvas),
      });
      props.canvas.renderAll();
      props.canvas.calcOffset();
    }
    else
      alert("You must have to select an object");
  }
  function bindLeft() {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().animate("left", 0, {
        onChange: props.canvas.renderAll.bind(props.canvas),
      });
      props.canvas.renderAll();
      props.canvas.calcOffset();
    }
    else
      alert("You must have to select an object");
  }
  function bindUp() {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().animate("top", 0, {
        onChange: props.canvas.renderAll.bind(props.canvas),
      });
      props.canvas.renderAll();
      props.canvas.calcOffset();
    }
    else
      alert("You must have to select an object");
  }
  function bindDown() {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().animate("top", 450, {
        onChange: props.canvas.renderAll.bind(props.canvas),
      });
      props.canvas.renderAll();
      props.canvas.calcOffset();
    }
    else
      alert("You must have to select an object");
  }
  return (
    <div className="bind-object">
      <div className="cursor bind-object-element" onClick={bindRight}>
        <img src="https://img.icons8.com/color/344/chevron-right.png" alt="Bind Right" width="40" height="40"/>
      </div>
      <div className="cursor bind-object-element" onClick={bindLeft}>
        <img src="https://img.icons8.com/color/344/chevron-left.png" alt="Bind Left" width="40" height="40"/>
      </div>
      <div className="cursor bind-object-element" onClick={bindUp}>
        <img src="https://img.icons8.com/color/344/chevron-up.png" alt="Bind Up" width="40" height="40"/>
      </div>
      <div className="cursor bind-object-element" onClick={bindDown}>
        <img src="https://img.icons8.com/color/344/chevron-down.png" alt="Bind Down" width="40" height="40"/>
      </div>
    </div>
  );
};
export default BindObject;
