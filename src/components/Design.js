import React, {useEffect, useState} from "react";
import {fabric} from "fabric";
const Design = (props) =>{
    let [isDesignPanel,setIsDesignPanel] =useState("true");

    function onChangeColor (e) {
        console.log(e.target.value);
        props.canvas.setBackgroundColor(e.target.value, props.canvas.renderAll.bind(props.canvas));
    }

    function onClose(){
        console.log("On close");
        setIsDesignPanel(false);
    }


return(
    <div>
        {
            isDesignPanel ? (
                <div>
                    <div>
                        <div>
                            <div onClick={onClose}>
                                <img src="https://img.icons8.com/fluent/344/delete-sign.png" alt="Cross" width="30px" height="30px" className="cursor cross-alignment"/>
                            </div>
                            <h4>Canvas Design</h4>
                        </div>
                    </div>
                    <br />
                    <div >
                        <div className="text-sub-panel-align">
                            <h6>Change Color</h6>
                        </div>
                        <div>
                            <input type="color" defaultValue="#ffffff" onChange={onChangeColor} className="cursor"/>
                        </div>
                    </div>

                </div>
            ):[]
        }

    </div>
);
}
export default Design;




