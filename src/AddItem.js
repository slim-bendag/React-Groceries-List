import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  


  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <input 
        autoFocus
        id='addItem'
        type='text'
        placeholder='Input text'
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
        />
        <button
        type='submit'
        >+</button>
    </form>
    
  )
}

export default AddItem