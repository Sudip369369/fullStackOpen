import React, { useState } from 'react';

function MultiItemListManager() {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(), // unique id
      count: 0
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id, action) => {
    setItems(items.map(item => {
      if (item.id === id) {
        if (action === 'inc') return { ...item, count: item.count + 1 };
        if (action === 'dec') return { ...item, count: item.count - 1 };
        if (action === 'reset') return { ...item, count: 0 };
      }
      return item;
    }));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <h1>Multi-Item List Manager</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>Count: {item.count}</strong>
            <button 
            
            
            onClick={() => updateItem(item.id, 'inc')}
            
            
            style={{
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: ' 10px ',
    margin: '10px',
    border: 'solid black 3px',
    borderRadius: '10px',
    background: 'burlywood'}}
            >[ + ]
            
            
            </button>
            <button
                   
            style={{
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: ' 10px ',
    margin: '10px',
    border: 'solid black 3px',
    borderRadius: '10px',
    background: 'burlywood'}}
            onClick={() => updateItem(item.id, 'dec')} disabled={item.count <= 0}>[ - ]</button>
            <button
            
                   
            style={{
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: ' 10px ',
    margin: '10px',
    border: 'solid black 3px',
    borderRadius: '10px',
    background: 'burlywood'}}
            onClick={() => updateItem(item.id, 'reset')}>[ Reset ]</button>
            <button 
            
                   
            style={{
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '10px',
  paddingBottom: ' 10px ',
    margin: '10px',
    border: 'solid black 3px',
    borderRadius: '10px',
    background: 'burlywood'}}
            onClick={() => deleteItem(item.id)}>[ ❌ ]</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MultiItemListManager;
