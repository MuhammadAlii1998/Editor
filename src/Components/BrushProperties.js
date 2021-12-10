import React from "react";
const BrushProperties = (props) => {
  function changeBrushWidth(width) {
    props.canvas.freeDrawingBrush.width = width;
    props.canvas.renderAll();
  }
  function changeBrushColor(e) {
    props.canvas.freeDrawingBrush.color = e.target.value;
    props.canvas.renderAll();
  }
  return (
    <div>
      <div id="brushProperties">
        <div id="brushPropertiesTitle">
          <label>Brush</label>
        </div>
        <div>
          <div id="brushWidth">
            <div>
              <label
                title="Brush Width"
                data-toggle="popover"
                data-trigger="focus"
                data-content=""
              >
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
              </label>
            </div>
          </div>
          <div id="brushColor">
            <div>
              <label
                title="Brush Color"
                data-toggle="popover"
                data-trigger="focus"
                data-content=""
              >
                <div>
                  <p>
                    <label>
                      <input
                        type="color"
                        onInput={(e) => {
                          changeBrushColor(e);
                        }}
                        placeholder="#000"
                        title="BrushColor"
                      />
                    </label>
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrushProperties;
