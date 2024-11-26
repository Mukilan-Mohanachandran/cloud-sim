//http://127.0.0.1:8000/get-data
// components/SortDataComponent.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import VMIcon from './icons/vm';

const SortDataComponent = () => {
    const [clusters, setClusters] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/get-data'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setClusters(result.value || []); // Assuming "value" is an array of clusters
      } catch (err:any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        
      }}
    >
      <VMIcon/>
      <Typography variant="h4" component="h2" gutterBottom>
        VM Icons
      </Typography>
      {clusters.map((cluster, clusterIndex) => (
       <Box 
         key={clusterIndex} 
         sx={{ 
           display: 'flex', 
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           gap: 2, 
           borderRadius: '50%', 
           border: '2px solid #ddd', 
           width: 200, 
           height: 200,
           padding: 2,
         }}
       >
          {cluster.map((id, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <CloudIcon fontSize="large" color="primary" />
              <Typography variant="body2">{id}</Typography> {/* Display the VM ID below the icon */}
            </Box>
          ))}
        </Box>
     ))};
    </Box>
    
  );
};

export default SortDataComponent;

