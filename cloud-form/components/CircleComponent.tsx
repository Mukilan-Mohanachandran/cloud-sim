import React from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import { Box, Typography } from '@mui/material';
import BoxComponent from "./BoxComponent";


const CircleComponent = () => {
    const size = 10;
    const vm_names = ["vm1", "vm2"];

    return(
        <div>
            <BoxComponent/>
            <div className="inline-flex items-center justify-center rounded-full bg-[#c2d9fc] text-white p-4"
            style={{
                width: `${size}rem`,
                height: `${size}rem`,
              }}
            >
                {vm_names.map((id, index) =>(
                    <Box key={index} sx={{ textAlign: 'center' }}>
                    <CloudIcon fontSize="large" color="primary" />
                    <Typography variant="body2">{id}</Typography> {/* Display the VM ID below the icon */}
                  </Box>
                )
                 ) }
    </div>
        </div>
    )

}

export default CircleComponent;
