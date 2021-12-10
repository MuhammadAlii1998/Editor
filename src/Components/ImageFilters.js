import React, {useState} from "react";
import { fabric } from "fabric";
import BindObject from "./BindObject";
import { normal } from 'color-blend';
const ImageFilters = (props) => {
    let[red, setRed] = useState(0);
    let[green, setGreen] = useState(0);
    let[blue, setBlue] = useState(0);
    let[ambient, setAmbient] = useState(0);
    let canvas  = props.canvas;
  function isGrayScale() {
      if(props.canvas.getActiveObject()) {
          let reader = canvas.getActiveObject();
          reader.filters.push(new fabric.Image.filters.Grayscale());
          reader.applyFilters();
          canvas.add(reader);
      }
      else
          alert("You must have to select an image");
  }
  function Sepia() {
      if(props.canvas.getActiveObject()) {
          let reader = canvas.getActiveObject();
          reader.filters.push(new fabric.Image.filters.Sepia());
          reader.applyFilters();
          canvas.add(reader);
      }
      else
          alert("You must have to select an image");
  }
  function Pixelate() {
      if(props.canvas.getActiveObject()) {
          let reader =canvas.getActiveObject();
          reader.filters.push(new fabric.Image.filters.Pixelate());
          reader.applyFilters();
          canvas.add(reader);
      }
      else
          alert("You must have to select an image");
  }
    function BlendColor() {
      if(props.canvas.getActiveObject()) {
            let reader = canvas.getActiveObject();
            reader.filters.push(new fabric.Image.filters.BlendColor());
            reader.applyFilters();
            canvas.add(reader);
        }
      else
          alert("You must have to select an image");
    }
    function Invert() {
      if(props.canvas.getActiveObject()) {
            let reader = canvas.getActiveObject();
            reader.filters.push(new fabric.Image.filters.Invert());
            reader.applyFilters();
            canvas.add(reader);
        }
      else
          alert("You must have to select an image");
    }
    function rgbToHex() {
        return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    }
    function Overlay(){
        {canvas.setOverlayColor(`rgba(${red} , ${green},  ${blue},  ${ambient})`,  canvas.renderAll.bind(canvas))
        };
    }
    function OverlayOrange() {
        let Background = { r: red, g: green, b: blue, a: ambient};
        let orangeForeground = { r: 255, g: 79, b: 41, a: 0.1 };
        let blendedColor1= normal(Background, orangeForeground);
        setRed(blendedColor1.r);
        setGreen(blendedColor1.g);
        setBlue(blendedColor1.b);
        setAmbient(blendedColor1.a);
        Overlay();
        rgbToHex();
    }
    function OverlayGreen() {
        let Background = { r: red, g: green, b: blue, a: ambient}
        let greenForeground = { r: 5, g: 249, b: 190, a: 0.1 };
        let blendedColor2= normal(Background, greenForeground);
        setRed(blendedColor2.r);
        setGreen(blendedColor2.g);
        setBlue(blendedColor2.b);
        setAmbient(blendedColor2.a);
        Overlay();
  }
    function OverlayPurple() {
        let Background = { r: red, g: green, b: blue, a: ambient}
        let purpleForeground = { r: 197, g: 5, b: 240, a: 0.1 }
        let blendedColor3= normal(Background, purpleForeground);
        setRed(blendedColor3.r);
        setGreen(blendedColor3.g);
        setBlue(blendedColor3.b);
        setAmbient(blendedColor3.a);
        Overlay();
  }
  return (
    <div id="imageFilters">
      <div>
        <h3>Image Filters</h3>
      </div>
      <div>
        <button className="btn-img-filters" onClick={isGrayScale}>
          Gray Scale
        </button>
      </div>
      <div>
        <button className="btn-img-filters" onClick={Sepia}>
          Sepia
        </button>
      </div>
      <div>
        <button className="btn-img-filters" onClick={Pixelate}>
          Pixelate
        </button>
      </div>
      <div>
        <button className="btn-img-filters" onClick={Invert}>
          Invert
        </button>
      </div>
      <div>
        <button className="btn-img-filters" onClick={BlendColor}>
          BlendColor
        </button>
      </div>
      <div>
        <button className="btn-img-filters" onClick={OverlayOrange}>
         Overlay Orange
        </button>
      </div>
        <div>
            <button className="btn-img-filters" onClick={OverlayGreen}>
                Overlay Green
            </button>
        </div>
        <div>
            <button className="btn-img-filters" onClick={OverlayPurple}>
                Overlay Purple
            </button>
        </div>
      <div>
        <BindObject canvas={canvas}
        />
      </div>
    </div>
  );
};
export default ImageFilters;
