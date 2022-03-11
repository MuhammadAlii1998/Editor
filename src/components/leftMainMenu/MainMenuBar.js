import React, {useEffect, useState} from "react";
import ImageAndShape from "../ImageAndShape";
import BrushProperties from "../BrushProperties";
import Design from "../Design";
import Text from "../Text";
import {fabric} from "fabric";
const MainMenuBar = (props) =>{
    let [isDesign, setIsDesign] = useState(false);
    let [isBrushTool, setIsBrushTool] = useState(false);
    let [isDrawingModeOn] = useState(false);
    let [isText, setIsText] = useState(false);

    function drawingMode() {
        if (isDrawingModeOn === false) {
            props.canvas.isDrawingMode = true;
            isDrawingModeOn = true;

            setIsDesign(false);
            setIsText(false);
            props.setimageSelected(false);
            props.setshapeSelected(false);
            setIsBrushTool(true);
        }
        else {
            props.canvas.isDrawingMode = false;
            isDrawingModeOn = false;
            setIsBrushTool(false);
        }
        props.canvas.renderAll();
    }
    function imageIsSelected() {
        setIsDesign(false);
        setIsText(false);
        props.setimageSelected(true);
        props.setshapeSelected(false);
        setIsBrushTool(false);
    }
    function shapeIsSelected() {
        setIsDesign(false);
        setIsText(false);
        props.setimageSelected(false);
        props.setshapeSelected(true);
        setIsBrushTool(false);
    }
    function textArea() {
        console.log("You are in Text area");
        let text = new fabric.Textbox("Text", {
            left: 100,
            top: 100,
        });
        text.set({fill: "#000"});
        props.canvas.add(text);
        setIsDesign(false);
        setIsText(true);
        props.setimageSelected(false);
        props.setshapeSelected(false);
        setIsBrushTool(false);
    }
    function designSelection() {
        setIsDesign(true);
        setIsText(false);
        props.setimageSelected(false);
        props.setshapeSelected(false);
        setIsBrushTool(false);
    }


    return(
        <div className="main-menu-bar">
            <div className="main-menu-bar-items" onClick={designSelection}>
                <div className="main-menu-bar-item-icon">
                    <img src="https://img.icons8.com/color/344/color-switch.png" width="40px" height="40px"/>
                </div>
                <h5 className="main-menu-bar-item-title" type="button">Design</h5>
            </div>
            <div className="main-menu-bar-items" onClick={textArea}>
                <div className="main-menu-bar-item-icon">
                    <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/344/external-text-text-formatting-prettycons-lineal-color-prettycons.png" width="40px" height="40px"/>
                </div>
                <h5 className="main-menu-bar-item-title" type="button" >Text</h5>
            </div>
            <div className="main-menu-bar-items" onClick={imageIsSelected}>
                <div className="main-menu-bar-item-icon">
                    <img src="https://img.icons8.com/external-others-justicon/344/external-image-photography-others-justicon-2.png" width="40px" height="40px"/>
                </div>
                <h5 className="main-menu-bar-item-title" type="button" >Image</h5>
            </div>
            <div className="main-menu-bar-items" onClick={shapeIsSelected}>
                <div className="main-menu-bar-item-icon">
                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/344/external-shapes-kindergarten-icongeek26-flat-icongeek26.png" width="40px" height="40px"/>
                </div>
                <h5 className="main-menu-bar-item-title" type="button" >Shape</h5>
            </div>
            <div className="main-menu-bar-items" onClick={drawingMode}>
                <div className="main-menu-bar-item-icon">
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/344/external-pencil-back-to-school-vitaliy-gorbachev-flat-vitaly-gorbachev.png" width="40px" height="40px"/>
                </div>
                <h5 className="main-menu-bar-item-title" type="button" >Drawing</h5>
            </div>
            <div className="left-panel">
            {
                isDesign ?
                    <Design canvas={props.canvas} />
                    :
                    ("")
            }
            {
                isText ?
                    <Text canvas={props.canvas} setIsText={setIsText}/>
                    :
                    ("")
            }
            {
                props.imageSelected || props.shapeSelected ?
                <ImageAndShape
                    imageSelected={props.imageSelected}
                    shapeSelected={props.shapeSelected}
                    canvas={props.canvas}
                    setimageSelected={props.setimageSelected}
                    setshapeSelected={props.setshapeSelected}
                    overlay={props.overlay}
                    setOverlay={props.setOverlay}
                />
                :
                    ("")
            }


            {
                isBrushTool ?
                    <BrushProperties
                        isDrawingModeOn={props.isDrawingModeOn}
                        setIsBrushTool={props.setIsBrushTool}
                        canvas={props.canvas}
                    />
                    :
                    ("")
            }
            </div>
        </div>
    );
};

export default MainMenuBar;