import React from 'react';
import CustomButton from './Button';


const Function = ({click}: {click: () => void}) => {
  return (
    <div className='flex-flex-col gap-3 border p-3 mt-3'>
        <h1>Function Component</h1>
        {/* <button onClick={() => {click()}}>Click Me</button> */}
        <CustomButton onClick={() => {click()}}>Click</CustomButton>
    </div>
  )
}

export default Function