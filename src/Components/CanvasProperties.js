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
      }
      else{
        alert("You have to select an object to copy.")
      }
    }
    function paste(){
      if(copiedObject)
      {
        props.canvas.add(copiedObject);
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
            <div id="canvasProperties">
              <div id="canvasPropertiesTitle">
                <label>Canvas Properties</label>
              </div>
              <div>
                <div id="undo">
                  <button onClick={undo}>Undo</button>
                </div>
                <div id="redo">
                  <button onClick={redo}>Redo</button>
                </div>
                <div id="undo">
                  <button onClick={copy}>Copy</button>
                </div>
                <div id="redo">
                  <button onClick={paste}>Paste</button>
                </div>
                <div id="redo">
                  <button onClick={remove}>Remove</button>
                </div>
                <div id="clearCanvas">
                  <button onClick={clearCanvas}>Clear</button>
                </div>
              </div>
            </div>
          </div>
      );
    }
export default CanvasProperties;
