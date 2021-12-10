import React from "react";
const CoreFeatures = (props) => {
  function imageIsSelected() {
    if (
      (props.imageSelected === false && props.shapeSelected === false) ||
      (props.imageSelected === false && props.shapeSelected === true)
    ) {
      props.setimageSelected(true);
      props.setshapeSelected(false);
    } else props.setimageSelected(true);
  }
  function shapeIsSelected() {
    if (
      (props.shapeSelected === false && props.imageSelected === false) ||
      (props.shapeSelected === false && props.imageSelected === true)
    ) {
      props.setshapeSelected(true);
      props.setimageSelected(false);
    } else props.setshapeSelected(true);
  }
  return (
    <div>
      <div id="coreOptions">
        <div id="coreFeaturesTitle">
          <label>Core Features</label>
        </div>
        <div id="textButton">
          <button onClick={props.textArea}>Text</button>
        </div>
        <div id="imageButton">
          <button onClick={imageIsSelected}>Image</button>
        </div>
        <div id="shapeButton">
          <button onClick={shapeIsSelected}>Shape</button>
        </div>
        <div id="drawingMode">
          <button onClick={props.drawingMode}>Drawing Mode</button>
        </div>
      </div>
    </div>
  );
};
export default CoreFeatures;
