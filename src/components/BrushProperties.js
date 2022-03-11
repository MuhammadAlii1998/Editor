import React from "react";
import {fabric} from "fabric";
const BrushProperties = (props) => {

  function changeBrushWidth(width) {
    props.canvas.freeDrawingBrush.width = width;
    props.canvas.renderAll();
  }
  function changeBrushColor(e) {
    props.canvas.freeDrawingBrush.color = e.target.value;
    props.canvas.renderAll();
  }
  function onClose(){
    console.log("On close");
    props.isDrawingModeOn = false ;
    props.setIsBrushTool(false);
  }
  return (
    <div>
      <div onClick={onClose}>
        <img src="https://img.icons8.com/fluent/344/delete-sign.png" alt="Cross" width="30px" height="30px" className="cursor cross-alignment"/>
      </div>
      <h4>Brush Properties</h4>
        <div className="text-sub-panel-align">
            <br />
          <h6>Brush Width</h6>
                <div>
                  <select
                    onChange={(e) => {
                      changeBrushWidth(e.target.value);
                    }}
                    name="BrushWidth"
                    id="BrushWidth"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                  </select>
                </div>
        </div>

            <div className="text-sub-panel-align">
              <h6> Brush Color</h6>
                <div>
                      <input
                        type="color"
                        onInput={(e) => {
                          changeBrushColor(e);
                        }}
                        placeholder="#000"
                        title="BrushColor"
                      />
                </div>

            </div>
    </div>
  );
};
export default BrushProperties;
