import InputBarang from "./components/InputBarang";
import ItemList from "./components/ItemList";
import './App.css';
import ItemHandler from "./hooks/ItemHandler";

function App() {
  const {AddItemHandler, DeleteItemHandler, MarkAsCompleted, UndoMarkAsCompleted, items, completedItems} = ItemHandler();
  
  return (
    <div className="app-container">
      <h1>Keranjang Belanja</h1>
      <InputBarang addItem={AddItemHandler} />
      <p>Total Item: {items.length + completedItems.length}</p>
      
      <hr /> 
      
      <ItemList 
        items={items} 
        hapus={DeleteItemHandler} 
        markdone={MarkAsCompleted} 
        itemsDone={completedItems} 
        unmarkdone={UndoMarkAsCompleted} 
      />
    </div>
  );
}

export default App;