import React from 'react';
import VMComponent from '../PhysicalComponents/VM/VMComponent';
import ClusterBox from '../LoadBalance/ClusterBox';

import {VMComponentProps} from '../PhysicalComponents/VM/VMComponent';


const LoadBalance = ()=>{
    const PropsVal:VMComponentProps = {
        id_val: 'VM1',
        cpu_val: 20,
        mem_val: 50
    };

    const PropsValArr:VMComponentProps[] = [
        {id_val: 'VM1', cpu_val: 20, mem_val: 50},
        {id_val: 'VM2', cpu_val: 20, mem_val: 50},
        {id_val: 'VM3', cpu_val: 20, mem_val: 50},
        {id_val: 'VM4', cpu_val: 20, mem_val: 50},
        {id_val: 'VM5', cpu_val: 20, mem_val: 50},
        {id_val: 'VM6', cpu_val: 20, mem_val: 50}
    ]
        
    return(
        <div> Load Balancing Test
            <div className='border-black rounded-[30px] border-2 p-4 m-4 overflow-scroll h-[800px] w-[1080px]'> 
                <ClusterBox {...PropsValArr}/>
                <ClusterBox {...PropsValArr}/>
                <ClusterBox {...PropsValArr}/>
            </div>
            
        </div>
    )
}

export default LoadBalance;