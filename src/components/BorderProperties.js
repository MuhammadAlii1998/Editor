import React from "react";
const BorderProperties = (props) => {
  function stroke(e) {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().set({stroke: e.target.value});
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  function changeStrokeWidth(strokeWidth) {
    let stroke = parseInt(strokeWidth);
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().set({strokeWidth: stroke});
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  return (
        <div id="changeStrokeWidth" >
          <div className="text-sub-panel-align">
            <h6>Stroke Width</h6>
              <div>
                <select
                  onChange={(e) => {
                    changeStrokeWidth(e.target.value);
                  }}
                  name="StrokeSize"
                  id="StrokeSize"
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

            <div className="text-sub-panel-align" >
            <h6>Stroke Color</h6>
              <div>
                <p>
                  <label>
                    <input
                      type="color"
                      onInput={(e) => {
                        stroke(e);
                      }}
                      placeholder="#000"
                      title="StrokeColor"
                    />
                  </label>
                </p>
              </div>
            </div>
          </div>
  );
};
export default BorderProperties;
