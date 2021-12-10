import { fabric } from "fabric";
import ImageFilters from "./ImageFilters";
const ImageAndShape = (props) => {
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
    // props.canvasToString();
    // props.canvas.on("object:modified", function (e) {
    //   props.canvasToString();
    // });
    // props.canvas.on("object:scaled", function (e) {
    //   props.canvasToString();
    // });
    // props.canvas.on("object:moving", function (e) {
    //   props.canvasToString();
    // });
  }
  function drawCircle() {
    let circle = new fabric.Circle({
      left: 50,
      top: 150,
      radius: 20,
    });
    circle.set({ fill: "#ff0" });
    props.canvas.add(circle);
    // props.canvasToString();
    // props.canvas.on("object:modified", function (e) {
    //   props.canvasToString();
    // });
    // props.canvas.on("object:scaled", function (e) {
    //   props.canvasToString();
    // });
    // props.canvas.on("object:moving", function (e) {
    //   props.canvasToString();
    // });
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
    // props.canvasToString();
    // props.canvas.on("object:modified", function (e) {
    //   props.canvasToString();
    // });
    // props.canvas.on("object:scaled", function (e) {
    //   props.canvasToString();
    // });
    // props.canvas.on("object:moving", function (e) {
    //   props.canvasToString();
    // });
  }
  function onFileChange() {
    let reader = new FileReader();
    let dataElement = document.getElementById("uploadImage");
    let file = dataElement.files[0];
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      fabric.Image.fromURL(reader.result, function (img) {
        props.canvas.add(img);
      //   props.canvasToString();
      //   props.canvas.on("object:modified", function (e) {
      //     props.canvasToString();
      //   });
      //   props.canvas.on("object:scaled", function (e) {
      //     props.canvasToString();
      //   });
      //   props.canvas.on("object:moving", function (e) {
      //     props.canvasToString();
      //   });
        props.setimageSelected(false);
        props.setshapeSelected(true);
      // });
    });
  });
  }
  return (
    <div>
      <div id="childObject">
        {props.imageSelected ? (
          <div id="image">
            <div id="childObjectTitle">
              <label> Image </label>
            </div>
            <div>
              <div id="image-div">
                <input
                  id="uploadImage"
                  onChange={onFileChange}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.shapeSelected ? (
          <div id="showShapes">
            <div id="childObjectTitle">
              <label> Shape </label>
            </div>
            <div id="shapesDropdown">
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
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
      </div>
      <ImageFilters
          canvas={props.canvas}
          overlay={props.overlay}
          setOverlay={props.setOverlay}
          // canvasToString={props.canvasToString}
      />
    </div>
  );
};
export default ImageAndShape;
