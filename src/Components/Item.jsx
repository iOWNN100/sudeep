import React, { useState } from 'react'
import {BsTrash} from "react-icons/bs";


export default function Item(props) {
    const [done,setDone] = useState(false);
   

   const time = props.item.time.getHours() + ':' + props.item.time.getMinutes() + ':' + props.item.time.getSeconds();

  return (
    <div onClick={() => setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex
     justify-between items-center`}>
        <div>
            <span className='pr-2 text-[14px] text-slate-400'>
              {time}
               </span>
               <span className={`${done === true ?  'line-through' : ''} text-[20px]`}>
                {props.item.name}
               </span>
        </div>
        <div onClick={()=>{
          props.removeHandler(props.item.name)
        }}>
            <BsTrash className='text-red-600'/>
        </div>
    </div>
  )
}
