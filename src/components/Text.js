import React, {useState} from "react";
import BorderProperties from "./BorderProperties";
const Text = (props) => {
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
    function onClose(){
        console.log("On close");
        props.setIsText(false);
    }
    return(
        <div>
            <div onClick={onClose}>
                <img src="https://img.icons8.com/fluent/344/delete-sign.png" alt="Cross" width="30px" height="30px" className="cursor cross-alignment"/>
            </div>
            <h4>Text Properties</h4>
            <br />
            <h6>Font Family</h6>
            <div>
                <select
                    onChange={(e) => {
                        changeStyle(e.target.value);
                    }}
                    name="fontStyle"
                    id="fontStyle"
                >
                    <option value="times-new-roman">Times New Roman</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="verdana">Verdana</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="tahoma">Tahoma</option>
                    <option value="monospace">Monospace</option>
                    <option value="cursive">Cursive</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="georgia">Georgia</option>
                    <option value="garamond">Garamond</option>
                    <option value="papyrus">Papyrus</option>
                </select>
            </div>
                <div className="text-sub-panel-align">
            <h6>Font Color</h6>
            <div >
                <input
                    type="color"
                    onInput={(e) => {
                        changeColor(e);
                    }}
                    border="none"
                    placeholder="#000"
                    title="FontColor"
                />
            </div>
                </div>
                <div className="text-sub-panel-align">
            <h6>Font Size</h6>
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
                </div>
                <div className="text-sub-panel-align">
            <h6>Font Style</h6>
            <div className="font-style-container">
                <div className="font-style">
                    <img src="https://img.icons8.com/bubbles/344/bold.png" alt="Bold" onClick={doBold} width="50px" height="50px" className="cursor"/>
                </div>
                <div className="font-style">
                    <img src="https://img.icons8.com/bubbles/344/italic.png" alt="Italic" onClick={doItalic} width="50px" height="50px" className="cursor"/>
                </div>
                <div className="font-style">
                    <img src="https://img.icons8.com/bubbles/344/underline.png" alt="Underline" onClick={doUnderline} width="50px" height="50px" className="cursor"/>
                </div>

            </div>
                </div>

            <div className="text-sub-panel-align">
                <BorderProperties canvas={props.canvas}/>
            </div>
            </div>
    )
}
export default Text;
