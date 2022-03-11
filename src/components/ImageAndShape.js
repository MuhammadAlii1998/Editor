import { fabric } from "fabric";
import React,{useState} from "react";
import ImageFilters from "./ImageFilters";
import BorderProperties from "./BorderProperties";

const ImageAndShape = (props) => {
  let [isUploadClicked, setIsUploadClicked] = useState(false);
  let [isEditModeOn, setIsEditModeOn] = useState(false);
  let [isSubMenuOption, setIsSubMenuOption] = useState(true);

  function onClose(){
    props.setimageSelected(false);
    props.setshapeSelected(false);
  }
  function onBack(){
  setIsUploadClicked(false);
  setIsEditModeOn(false);
  setIsSubMenuOption(true);
  }

  function click(shape) {
    if (shape === "rectangle") {
      drawRectangle();
    } else if (shape === "circle") {
      drawCircle();
    } else if (shape === "triangle") {
      drawTriangle();
    }
  }
  function drawRectangle() {
    let rect = new fabric.Rect({
      left: 50,
      top: 100,
      width: 40,
      height: 20,
    });
    props.canvas.add(rect);
  }
  function drawCircle() {
    let circle = new fabric.Circle({
      left: 50,
      top: 150,
      radius: 20,
    });
    circle.set({ fill: "#ff0" });
    props.canvas.add(circle);
  }
  function drawTriangle() {
    let tri = new fabric.Triangle({
      left: 100,
      top: 200,
      width: 30,
      height: 20,
    });
    tri.set({ fill: "#ffa500" });
    props.canvas.add(tri);
  }
  function uploadButtonClick(){
    setIsEditModeOn(false);
    setIsUploadClicked(true);
  }
  function editModeOn() {
    setIsUploadClicked(false);
    setIsSubMenuOption(false);
    setIsEditModeOn(true);

  }
  function onFileChange() {
    let reader = new FileReader();
    let dataElement = document.getElementById("uploadImage");
    let file = dataElement.files[0];
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      fabric.Image.fromURL(reader.result, function (img) {
        props.canvas.add(img);
    });
  });
  }
  return (
    <div>
      <div onClick={onClose}>
        <img src="https://img.icons8.com/fluent/344/delete-sign.png" alt="Cross" width="30px" height="30px" className="cursor cross-alignment"/>
      </div>
        <div className="add-image-panel">
          {props.imageSelected ? (
              <div>
                {
                  !isUploadClicked && isSubMenuOption ? (
                      <div>
                        <div className="sub-panel-title">
                          <h3>Image</h3>
                        </div>
                        <div className="sub-panel-element">
                          <div className="cursor sub-panel-element-adjustment">
                            <img src="https://img.icons8.com/bubbles/344/upload.png" alt="Upload Image" width="120px" height="120px" onClick={uploadButtonClick}/>
                          </div>
                          <div id="upload-image-btn">
                            <button onClick={uploadButtonClick} type="button" className="btn btn-primary">UPLOAD</button>
                          </div>
                        </div>
                        <div className="sub-panel-element">
                          <div className="cursor sub-panel-element-adjustment">
                            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-edit-graphic-design-justicon-lineal-color-justicon-1.png" alt="Upload Image" width="100px" height="100px"/>
                          </div>
                          <div>
                            <button onClick={editModeOn} type="button" className="btn btn-primary">EDIT</button>
                          </div>
                        </div>
                      </div>
                  ) :
                      []}
                { isUploadClicked ? (
                      <div>
                        <div onClick={onBack}>
                          <img src="https://img.icons8.com/fluency/344/back.png" alt="Back" width="30px" height="30px" className="cursor back-arrow-alignment"/>
                        </div>
                        <h5> Upload Image</h5>
                        <div className="drag-and-drop-container" onChange={onFileChange}>
                          <div>
                            <input type="file" name="image" id="uploadImage"/>
                          </div>
                        </div>
                      </div>
                  ):[]}
                { isEditModeOn ?
                    (
                        <div>
                          <div onClick={onBack}>
                            <img src="https://img.icons8.com/fluency/344/back.png" alt="Back" width="30px" height="30px" className="cursor back-arrow-alignment"/>
                          </div>
                          <h5> Edit Image</h5>
                              <BorderProperties />
                              <ImageFilters canvas={props.canvas}/>
                        </div>
                    ):[]

                }

              </div>
          ) : (
              ""
          )
          }

          { props.shapeSelected ? (
              <div className="add-image-panel">
                <div>
                  <h3> Shape </h3>
                </div>
                <br />
                <div className="text-sub-panel-align">
                  <select
                      id="shapes"
                      name="shapeSelection"
                      title="shapeSelection"
                      onChange={(e) => {
                        click(e.target.value);
                      }}
                  >
                    <option value="Not Selected">Not Selected</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="circle">Circle</option>
                    <option value="triangle">Triangle</option>
                  </select>
                </div>
                <div className="text-sub-panel-align">
                  <BorderProperties canvas={props.canvas}/>
                </div>
              </div>
          ) : (
              ""
          )}
        </div>



      {/*<ImageFilters*/}
      {/*    canvas={props.canvas}*/}
      {/*    overlay={props.overlay}*/}
      {/*    setOverlay={props.setOverlay}*/}
      {/*/>*/}
    </div>

  );
};
export default ImageAndShape;
