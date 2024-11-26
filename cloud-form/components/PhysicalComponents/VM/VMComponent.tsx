import React from "react";
import VMIcon from "@/components/icons/vm";


export interface VMComponentProps {
    id_val: string,
    cpu_val: number,
    mem_val: number
};
const VMComponent = (props: VMComponentProps) => {
    const id_val = props.id_val;
    const cpu_val = props.cpu_val;
    const mem_val = props.mem_val;
    return (<div>
        <div className="inline-block items-center border-black rounded-[30px] border-2 p-4 columns-2 m-4 bg-white">
            <VMIcon className="w-[96px] h-[96px]"/>
            <div className="flex bg-[#E9E9EB] rounded-[30px] flex-col p-4">
                <div>ID: {id_val}</div>
                <div>CPU: {cpu_val}%</div>
                <div>MEM: {mem_val}%</div>
            </div>
        </div>
    </div>);
};

export default VMComponent;