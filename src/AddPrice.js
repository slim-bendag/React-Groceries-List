import React from 'react'
import { useState } from 'react'

const AddPrice = () => {

    const [counter, setCounter] = useState(0)
    const [price, setPrice] = useState([])

    const finalPrice = () => {
        return (counter*price);
    }


  return (
    <div className='addForm'>
        <input 
        id='price'
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        />
                        
        <button onClick={()=>setCounter(counter + 1)}>+</button><p>{counter}</p><button onClick={()=>setCounter(counter - 1)}>-</button>

        <p>{finalPrice()} $</p>
    </div>
  )
}

export default AddPrice