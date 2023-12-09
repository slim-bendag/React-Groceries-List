import Header from "./Header";
import Content from "./content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useState } from "react";


function App() {

  const  [items,setItems] = useState(JSON.parse(localStorage.getItem('ToDoList')));

  const [newItem, setNewItem] = useState('');

  const [newColor, setNewColor] = useState();

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('ToDoList', JSON.stringify(newItems));
  }



  const handleCheck = (id) => {
    let newArray = items.map((item)=>(item.id === id ? {...item, checked: !item.checked} : item));
    setAndSaveItems(newArray);

  }

  const handleDelete = (id) => {
    let newArray = items.filter((item)=>(item.id !== id));
    setAndSaveItems(newArray);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }

  const addItem = (item) => {
    let newArray = [...items, {id: items.length + 1, checked: false, item}]
    setAndSaveItems(newArray);
  }

  
  const styleContainer = {
    backgroundColor: newColor
  }
  
  

    

  

  return (
    <div className="App">
      <Header
        styleContainer={styleContainer}
      /> 
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem/>
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      /> 
      <div>
        <input 
          type="text"
          placeholder="Pick a theme color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        {/* <button type="submit">Submit</button> */}
      </div>
      <Footer
        value={items.length}
        styleContainer={styleContainer}
      />






    </div>
    
  );
}

export default App;
