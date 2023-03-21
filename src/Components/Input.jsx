import React,{useRef} from 'react'
import {AiOutlinePlus} from "react-icons/ai";

export default function Input(props) {
    const inputBox = useRef();
  
  return (
    <div className='p-3 flex justify-around'>
        <input type="text" placeholder='Enter data here!!' className='p-3 focus:outline-none w-[90%]
         border border-slate-400' ref={inputBox} />
        <div className='cursor-pointer w-[50px] h-[50px] bg-red-600 text-white text-3xl rounded-[50%] flex
         justify-center items-center' onClick={()=>{
          props.handler({name:inputBox.current.value,time : new Date()})
          inputBox.current.value = "";
         } }>
            <AiOutlinePlus />
        </div>
        {/* <div className='cursor-pointer w-[50px] h-[50px] bg-red-600 text-white text-3xl rounded-[50%] flex
         justify-center items-center' onClick={() => props.handler(inputBox.current.value) }>
            <AiOutlinePlus />
        </div> */}
    </div>
  ) 
  
}
