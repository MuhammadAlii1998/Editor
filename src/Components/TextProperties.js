import React from "react";
const TextProperties = (props) => {
  return (
    <div id="properties">
      <div id="propertiesTitle">
        <h3>Text properties</h3>
      </div>
      <br />
      <div id="text-properties-body-title">
        <div className="text-properties-body">
          <label>
            <b> Size : </b>
          </label>
          <label>{props.fontSize}</label>
        </div>
        <br />
        <div className="text-properties-body">
          <label>
            <b>Family :</b>
          </label>
          <label>{props.fontFamily}</label>
        </div>
        <br />
        <div className="text-properties-body">
          <label>
            <b>Color :</b>
          </label>
          <label>{props.fontColor}</label>
        </div>
        <br />
        <div className="text-properties-body">
          <label>
            <b>Style :</b>
          </label>
          <label>{props.fontStyle}</label>
        </div>
        <br />
      </div>
    </div>
  );
};
export default TextProperties;
