import React, { useState, useEffect } from "react";
import Dropdown from "../common/DropDown";
import VMInputTable from "./VMDetailInputTable";

import { DropdownProps } from "../common/DropDown";
import { VMComponentProps } from "../PhysicalComponents/VM/VMComponent";

export interface VMInputFormPropsInterface {
    setVMVal?: React.Dispatch<React.SetStateAction<VMComponentProps[][]>>;
}
const VMInputForm = (props: VMInputFormPropsInterface) => {
    const [dropDownVal, setDropDownVal] = useState("select");
    const setVMVal = props.setVMVal;

    const DropDownProps: DropdownProps = {
        val: dropDownVal,
        setVal: setDropDownVal
    }

    useEffect(() => {
        console.log(dropDownVal);
    }, [dropDownVal]);

    const HandleButtonOnClick = async () => {
        // const vmMatrix: VMComponentProps[][] = [
        //     [
        //         { id_val: "vm1", cpu_val: 2, mem_val: 4 },
        //         { id_val: "vm2", cpu_val: 4, mem_val: 8 }
        //     ],
        //     [
        //         { id_val: "vm3", cpu_val: 1, mem_val: 2 },
        //         { id_val: "vm4", cpu_val: 2, mem_val: 4 }
        //     ],
        // ];
        const payload = {
            cluster_method: "kmeans",
            data: [
                ["vm1", 1.0, 2.0],
                ["vm2", 2.0, 3.0],
                ["vm3", 10.0, 10.0],
                ["vm4", 11.0, 11.0]
            ]
        };
        try {
            const response = await fetch("http://127.0.0.1:8000/cluster-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // If your API requires a request body, include it here.
                // If not, you can remove the `body` field.
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                console.error("Network response was not ok");
                return;
            }

            const result = await response.json();
            console.log("API response data:", result);

            const transformedData: VMComponentProps[][] = result.clusters.map(
                        (cluster: any) =>
                          cluster.points.map(([id, cpu, mem]: [string, string, string]) => ({
                            id_val: id,
                            cpu_val: parseFloat(cpu),
                            mem_val: parseFloat(mem),
                          }))
                      );

            // Set the transformed data
            setVMVal?.(transformedData);
            console.log("clicked and data set");
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
        console.log("clicked");
    }

    return (
        <div>
            <div> 
                {dropDownVal}
            </div>
            <div className="flex items-end justify-end">
              <Dropdown {...DropDownProps}/>
            </div>
            <div>
              <VMInputTable />
            </div>
            <div>
                <button onClick={HandleButtonOnClick}>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default VMInputForm;
