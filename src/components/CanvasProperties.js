import React from "react";
import { fabric } from "fabric";
import "fabric-history";
const CanvasProperties = (props) => {
  function clearCanvas() {
    props.canvas.clear();
  }
    function redo() {
      props.canvas.redo();
    }
    function undo() {
      props.canvas.undo();
    }
    let copiedObject;
    function copy(){
      if(props.canvas.getActiveObject()){
        let selectedObject = props.canvas.getActiveObject();
        let object = fabric.util.object.clone(selectedObject);
        copiedObject = object ;
        console.log("Object Copied");
        alert("Object Copied");
      }
      else{
        alert("You have to select an object to copy.")
      }
    }
    function paste(){
      if(copiedObject)
      {
        props.canvas.add(copiedObject);
        alert("Object Pasted");
      }
      else{
        alert("You didn't copy any object")
      }
    }
    function remove() {
      if(props.canvas.getActiveObject())
      {
        let objectDeleted = props.canvas.getActiveObject();
        props.canvas.remove(objectDeleted);
      }
      else{
        alert("You didn't select any object");
      }
    }

      return (
          <div>
            <div className="canvas-properties">
              <div>
                <div className="cursor canvas-properties-element" onClick={undo}>
                    <img src="https://img.icons8.com/fluency/344/undo.png" alt="Undo" width="40px" height="40px"/>
                </div>
                <div className="cursor canvas-properties-element" onClick={redo}>
                    <img src="https://img.icons8.com/fluency/344/redo.png" alt="Redo" width="40px" height="40px"/>
                </div>
                <div className="cursor canvas-properties-element" onClick={copy}>
                    <img src="https://img.icons8.com/fluency/344/copy.png" alt="Copy" width="40px" height="40px"/>
                </div>
                <div className="cursor canvas-properties-element" onClick={paste}>
                    <img src="https://img.icons8.com/fluency/344/paste.png" alt="Paste" width="40px" height="40px"/>
                </div>
                <div className="cursor canvas-properties-element" onClick={remove}>
                    <img src="https://img.icons8.com/fluency/344/filled-trash.png" alt="Remove" width="40px" height="40px"/>
                </div>
                <div className="cursor canvas-properties-element" onClick={clearCanvas}>
                    <img src="https://img.icons8.com/color/344/clear-symbol--v1.png" alt="Clear" width="40px" height="40px"/>
                </div>
              </div>
            </div>
          </div>
      );
    }
export default CanvasProperties;
