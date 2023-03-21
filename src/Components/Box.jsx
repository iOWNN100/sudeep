import React from 'react'
import Item from './Item'

export default function Box(props) {
    // const items = props.data.map(
    //     () => {
    //         return <Item/>
    //     }
    // )
  return (
    <div className='p-3'>
      {props.data.map((item)=>(
        <div key={item.name}>
          <Item item={item} removeHandler={props.removeHandler} />
          </div>
      ))}
            {/* {items} */}
        {/* <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/> */}
    </div>
  )
}
