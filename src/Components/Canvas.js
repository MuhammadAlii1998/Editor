import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import "fabric-history";
import CoreFeatures from "./CoreFeatures";
import TextProperties from "./TextProperties";
import TextPropertiesNav from "./TextPropertiesNav";
import BorderProperties from "./BorderProperties";
import BrushProperties from "./BrushProperties";
import CanvasProperties from "./CanvasProperties";
import ImageAndShape from "./ImageAndShape";
const Canvas = () => {
  let [canvas, setcanvas] = useState();
  let [overlay, setOverlay] = useState(false);
  let [imageSelected, setimageSelected] = useState(false);
  let [shapeSelected, setshapeSelected] = useState(true);
  let [isDrawingModeOn] = useState(false);
  let [activeObject] = useState();
  let [fontSize, setFontSize] = useState(40);
  let [fontColor, setFontColor] = useState("#000000");
  let [fontFamily, setFontFamily] = useState("Times New Roman");
  let [fontStyle, setFontStyle] = useState("normal");
  useEffect(() => {
    const canvas = new fabric.Canvas("c-id", {
      width: 900,
      height: 460,
      backgroundColor: "white",
    });
    setcanvas(canvas);
    canvas.renderAll();
  }, []);
  function textProperties() {
    activeObject = canvas.getActiveObject();
    setFontSize(activeObject.get("fontSize"));
    setFontFamily(activeObject.get("fontFamily"));
    setFontStyle(activeObject.get("fontWeight"));
    setFontColor(activeObject.get("fill"));
  }
  function textArea() {
    let text = new fabric.Textbox("Text", {
      left: 100,
      top: 100,
    });
    text.set({ fill: "#000" });
    canvas.add(text);
    text.on("selected", function () {
      textProperties();
    });
  }
  function drawingMode() {
    if (isDrawingModeOn === false) {
      canvas.isDrawingMode = true;
      isDrawingModeOn = true;
       }
    else {
      canvas.isDrawingMode = false;
      isDrawingModeOn = false;
    }
    canvas.renderAll();
  }
  return (
    <div>
      <div>
        <div id="top-nav-bar">
          <CoreFeatures
            drawingMode={drawingMode}
            textArea={textArea}
            textProperties={textProperties}
            activeObject={activeObject}
            imageSelected={imageSelected}
            shapeSelected={shapeSelected}
            setimageSelected={setimageSelected}
            setshapeSelected={setshapeSelected}
            canvas={canvas}
          />
          <TextPropertiesNav
              canvas={canvas}
          />
          <BorderProperties
              canvas={canvas}
          />
          <BrushProperties
              canvas={canvas}
          />

          <ImageAndShape
            imageSelected={imageSelected}
            shapeSelected={shapeSelected}
            canvas={canvas}
            setimageSelected={setimageSelected}
            setshapeSelected={setshapeSelected}
            overlay={overlay}
            setOverlay={setOverlay}
          />
        </div>
        <TextProperties
          fontSize={fontSize}
          fontFamily={fontFamily}
          fontColor={fontColor}
          fontStyle={fontStyle}
        />
        <div id="canvas">
          <center>
            <canvas id="c-id">
            </canvas>
          </center>
        </div>
      </div>
      <div>
      <CanvasProperties
          canvas={canvas} activeObject={activeObject}
      />
      </div>
    </div>
  );
}
export default Canvas;
