import React, { useState, useEffect } from "react";
import Dropdown from "../common/DropDown";

import { DropdownProps } from "../common/DropDown";

const VMInputForm = () => {
    const [dropDownVal, setDropDownVal] = useState("select");

    const DropDownProps: DropdownProps = {
        val: dropDownVal,
        setVal: setDropDownVal
    }

    useEffect(() => {
        console.log(dropDownVal);
    }, [dropDownVal]);

    return (
        <div>
            <div> 
                {dropDownVal}
            </div>
            <div className="flex items-end justify-end">
              <Dropdown {...DropDownProps}/>
            </div>
        </div>
    )
}
export default VMInputForm;
