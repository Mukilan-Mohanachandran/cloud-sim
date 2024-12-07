"use client";
import React, { useEffect, useState } from 'react';
import VMComponent from '../PhysicalComponents/VM/VMComponent';
import ClusterBox from '../LoadBalance/ClusterBox';
import VMInputForm from './VMInputForm';

import {VMComponentProps} from '../PhysicalComponents/VM/VMComponent';


const LoadBalance = ()=>{
    const [clusterData, setClusterData] = useState<VMComponentProps[][]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/get-data"); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          // Transform the data
          const transformedData: VMComponentProps[][] = result.value.map(
            (cluster: any) =>
              cluster.points.map(([id, cpu, mem]: [string, string, string]) => ({
                id_val: id,
                cpu_val: parseFloat(cpu),
                mem_val: parseFloat(mem),
              }))
          );
  
          setClusterData(transformedData);
  
        } catch (err: any) {
          setError(err.message || "An error occurred");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log(clusterData);

    const PropsValArr:VMComponentProps[] = [
        {id_val: 'VM1', cpu_val: 20, mem_val: 50},
        {id_val: 'VM2', cpu_val: 20, mem_val: 50},
        {id_val: 'VM3', cpu_val: 20, mem_val: 50},
        {id_val: 'VM4', cpu_val: 20, mem_val: 50},
        {id_val: 'VM5', cpu_val: 20, mem_val: 50},
        {id_val: 'VM6', cpu_val: 20, mem_val: 50}
    ]

    const PropsValArr1:VMComponentProps[] = [
        {id_val: 'VM1', cpu_val: 20, mem_val: 50},
        {id_val: 'VM2', cpu_val: 20, mem_val: 50},
        {id_val: 'VM3', cpu_val: 20, mem_val: 50},
        {id_val: 'VM4', cpu_val: 20, mem_val: 50}
        
    ]
    return(
        <div> 
          <div className='flex flex-row columns-2 p-8'>
         <div className='border-black rounded-[30px] border-2 p-4 m-4 overflow-scroll h-[800px] w-[540px]'>
         <VMInputForm />
         </div>
        
        <div className='border-black rounded-[30px] border-2 p-4 m-4 overflow-scroll h-[800px] w-[1080px]'> 
            {clusterData.map((propsArr, index) => (
          <ClusterBox key={index} {...propsArr} />
        ))}
            </div>

          </div>
        </div>
    )
}
export default LoadBalance;