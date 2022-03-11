import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import "fabric-history";
import MainMenuBar from "./leftMainMenu/MainMenuBar";
import Header from "./header/Header";
import BindObject from "./BindObject";
import CanvasProperties from "./CanvasProperties";
const Canvas = () => {
  let [canvas, setcanvas] = useState();
  let [overlay, setOverlay] = useState(false);
  let [imageSelected, setimageSelected] = useState(false);
  let [shapeSelected, setshapeSelected] = useState(false);
  let [activeObject] = useState();
  let [fontSize, setFontSize] = useState(40);
  let [fontColor, setFontColor] = useState("#000000");
  let [fontFamily, setFontFamily] = useState("Times New Roman");
  let [fontStyle, setFontStyle] = useState("normal");
  useEffect(() => {
    const canvas = new fabric.Canvas("c-id", {
      width: 880,
      height: 530,
      backgroundColor: "white",
    });
    setcanvas(canvas);
    canvas.renderAll();
  }, []);

  return (
      <div>
        <div >
          <Header />
          <MainMenuBar
              activeObject={activeObject}
              imageSelected={imageSelected}
              shapeSelected={shapeSelected}
              setimageSelected={setimageSelected}
              setshapeSelected={setshapeSelected}
              canvas={canvas}

              overlay={overlay}
              setOverlay={setOverlay}
          />
        </div>
        <CanvasProperties canvas={canvas}/>
        <div id="canvas">
          <center>
            <canvas id="c-id" />

            <BindObject canvas={canvas}/>
        </center>

      </div>

      {/*<div>*/}
      {/*<CanvasProperties*/}
      {/*    canvas={canvas} activeObject={activeObject}*/}
      {/*/>*/}
      {/*</div>*/}

    </div>
  );
}
export default Canvas;
