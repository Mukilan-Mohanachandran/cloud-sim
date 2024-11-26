import React from "react";
import VMComponent from '../PhysicalComponents/VM/VMComponent';


import {VMComponentProps} from "../PhysicalComponents/VM/VMComponent";

export interface ClusterBoxProps {
    vmComponents: { [key: string]: VMComponentProps }; // Object with numbered keys
  }

const ClusterBox = (props: VMComponentProps[]) => {
    const VMComponentArr = Object.values(props)
    return (<div>
        <div className="inline-block items-center border-black rounded-[30px] border-2 p-4 columns-3 bg-[#E9E9EB] m-2">
        {VMComponentArr.map((item, index) => (
        // Pass each VMComponentProps object as props
        <VMComponent key={index} {...item} />
      ))}
        </div>
       
    </div>);
};

export default ClusterBox;