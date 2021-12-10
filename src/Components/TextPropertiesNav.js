import React, { useState } from "react";
const TextPropertiesNav = (props) => {
  let [underLineSelected, setunderLineSelected] = useState(false);
  let [boldSelected, setboldSelected] = useState(false);
  let [italicSelected, setitalicSelected] = useState(false);
  function changeColor(e) {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().set("fill", e.target.value);
      props.canvas.renderAll();
    }
    else
     alert("You must have to select an object");

    // props.canvasToString();
  }
  function doBold() {
    if(props.canvas.getActiveObject()) {
      if (String(boldSelected) === "false") {
        props.canvas.getActiveObject().set("fontWeight", "bold");
        setboldSelected(true);
      } else {
        props.canvas.getActiveObject().set("fontWeight", "normal");
        setboldSelected(false);
      }
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  function doItalic() {
    if(props.canvas.getActiveObject()) {
      if (String(italicSelected) === "false") {
        props.canvas.getActiveObject().set("fontWeight", "italic");
        setitalicSelected(true);
      } else {
        props.canvas.getActiveObject().set("fontWeight", "normal");
        setitalicSelected(false);
      }
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  function doUnderline() {
    if(props.canvas.getActiveObject()) {
      if (String(underLineSelected) === "false") {
        props.canvas.getActiveObject().set({underline: true});
        setunderLineSelected(true);
      } else {
        props.canvas.getActiveObject().set({underline: false});
        setunderLineSelected(false);
      }
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  function changeSize(size) {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().set("fontSize", size);
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  function changeStyle(fam) {
    if(props.canvas.getActiveObject()) {
      props.canvas.getActiveObject().set("fontFamily", fam);
      props.canvas.renderAll();
    }
    else
      alert("You must have to select an object");
  }
  return (
    <div>
      <div id="textProperties">
        <div id="textPropertiesTitle">
          <label>Text Properties</label>
        </div>
        <div id="textPropertiesInner">
          <div id="style">
            <div>
              <label
                title="Font Family"
                data-toggle="popover"
                data-trigger="focus"
                data-content=""
              >
                <div>
                  <select
                    onChange={(e) => {
                      changeStyle(e.target.value);
                    }}
                    name="fontStyle"
                    id="fontStyle"
                  >
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="serif">Serif</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="cursive">Cursive</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="ui-monospace">UI-monospace</option>
                    <option value="georgia">Georgia</option>
                    <option value="garamond">Garamond</option>
                    <option value="copperplate">Copperplate</option>
                    <option value="papyrus">Papyrus</option>
                  </select>
                </div>
              </label>
            </div>
          </div>
          <div id="color">
            <div>
              <label
                title="Font Color"
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
                          changeColor(e);
                        }}
                        border="none"
                        placeholder="#000"
                        title="FontColor"
                      />
                    </label>
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div id="size">
            <div>
              <label
                title="Font Size"
                data-toggle="popover"
                data-trigger="focus"
                data-content=""
              >
                <div>
                  <select
                    onClick={(e) => {
                      changeSize(e.target.value);
                    }}
                    name="fontSize"
                    id="fontSize"
                  >
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
                    <option value="80">80</option>
                    <option value="90">90</option>
                    <option value="100">100</option>
                    <option value="110">110</option>
                  </select>
                </div>
              </label>
            </div>
          </div>
          <div id="dropdown-div">
            <div className="dropdown">
              <button className="dropbtn btn btn-default dropdown-toggle">
                Font Style
              </button>
              <div className="dropdown-content">
                <div>
                  <option
                    type="button"
                    onClick={doBold}
                    style={{ fontWeight: "bold" }}
                  >
                    Bold
                  </option>
                </div>
                <div>
                  <option
                    type="button"
                    onClick={doItalic}
                    style={{ fontStyle: "italic" }}
                  >
                    Italic
                  </option>
                </div>
                <div>
                  <option
                    type="button"
                    onClick={doUnderline}
                    style={{ textDecoration: "underline" }}
                  >
                    Underline
                  </option>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextPropertiesNav;
