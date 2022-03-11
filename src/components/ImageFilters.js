import React, {useState} from "react";
import { fabric } from "fabric";
import BindObject from "./BindObject";
const ImageFilters = (props) => {
    let canvas  = props.canvas;
  function isGrayScale() {
      if(canvas.getActiveObject()) {
          let reader = props.canvas.getActiveObject();
          reader.filters.push(new fabric.Image.filters.Grayscale());
          reader.applyFilters();
          canvas.add(reader);
      }
      else
          alert("You must have to select an image");
  }
  function Sepia() {
      if(canvas.getActiveObject()) {
          let reader = canvas.getActiveObject();
          reader.filters.push(new fabric.Image.filters.Sepia());
          reader.applyFilters();
          canvas.add(reader);
      }
      else
          alert("You must have to select an image");
  }
  function Pixelate() {
      if(canvas.getActiveObject()) {
          let reader =canvas.getActiveObject();
          reader.filters.push(new fabric.Image.filters.Pixelate());
          reader.applyFilters();
          canvas.add(reader);
      }
      else
          alert("You must have to select an image");
  }
    function BlendColor() {
      if(canvas.getActiveObject()) {
            let reader = canvas.getActiveObject();
            reader.filters.push(new fabric.Image.filters.BlendColor());
            reader.applyFilters();
            canvas.add(reader);
        }
      else
          alert("You must have to select an image");
    }
    function Invert() {
      if(canvas.getActiveObject()) {
            let reader = canvas.getActiveObject();
            reader.filters.push(new fabric.Image.filters.Invert());
            reader.applyFilters();
            canvas.add(reader);
        }
      else
          alert("You must have to select an image");
    }



  return (
    <div >
        <h6>Image Filters</h6>
      <div className="cursor text-sub-panel-align" onClick={isGrayScale}>
          <img src="https://img.icons8.com/stickers/344/grayscale.png" alt="Gray Scale" width="50px" height="50px"/>
      </div>
      <div className="cursor text-sub-panel-align" onClick={Sepia}>
          <img src="https://img.icons8.com/fluency/344/old-fashioned-family-photo.png" alt="Sepia" width="50px" height="50px"/>
      </div>
      <div className="cursor text-sub-panel-align" onClick={Pixelate}>
          <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-pixel-gaming-dreamstale-lineal-dreamstale.png" alt="Pixelate" width="50px" height="50px"/>
      </div>
      <div className="cursor text-sub-panel-align" onClick={Invert}>
          <img src="https://img.icons8.com/fluency/344/invert-colors.png" alt="Invert" width="50px" height="50px"/>
      </div>
      <div className="cursor text-sub-panel-align" onClick={BlendColor}>
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/344/external-blend-tool-graphic-design-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="Blend Color" width="50px" height="50px"/>
      </div>

      <div>
        <BindObject canvas={canvas}/>
      </div>
    </div>
  );
};
export default ImageFilters;
