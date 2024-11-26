// components/FormComponent.js

import React from 'react';
import SortDataComponent from './SortDataComponent';
import FormComponent from './FormComponent';

const WrapperComponent = () => {

  return (
    <div>
        <div className="grid grid-cols-2 justify-items-center">
        <FormComponent/>
        {/* <SortDataComponent/> */}
        <SortDataComponent/>
      </div>
    </div>
      
  );
};

export default WrapperComponent;
