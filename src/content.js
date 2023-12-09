
import AddPrice from "./AddPrice"

const Content = ({items, handleCheck, handleDelete}) => {
    

  return (
    <main>
        <ul>
            {items.map((item) => (
                <li className='item'>
                    <input
                        type='checkbox'
                        onChange={()=> handleCheck(item.id)}
                        checked={item.checked}
                    />

                    <label
                    className='label'
                    style={(item.checked) ? { textDecoration: 'line-through' } : null}
                    > {item.item} 
                    </label>
                    
                    <AddPrice />
                    

                    <button onDoubleClick={()=> handleDelete(item.id)}>Delete</button>

                    
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Content