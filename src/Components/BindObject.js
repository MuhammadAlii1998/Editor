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
  function bindTop() {
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
  function bindBottom() {
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
    <div id="bindObjects">
      <div id="bindObjectsTitle">
        <h3>Bind Objects</h3>
      </div>
      <div>
        <button className="btn-bind-object" onClick={bindRight}>
          Bind Right
        </button>
      </div>
      <div>
        <button className="btn-bind-object" onClick={bindLeft}>
          Bind Left
        </button>
      </div>
      <div>
        <button className="btn-bind-object" onClick={bindTop}>
          Bind Top
        </button>
      </div>
      <div>
        <button className="btn-bind-object" onClick={bindBottom}>
          Bind Bottom
        </button>
      </div>
    </div>
  );
};
export default BindObject;
