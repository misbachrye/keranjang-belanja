import { useState } from "react";

function ItemHandler() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  function AddItemHandler(namaItem) {
    const dataItems = {
      nama: namaItem,
      id: Date.now(),
      isCompleted: false,
    };
    setItems((prevItem) => [...prevItem, dataItems]);
  }

  function DeleteItemHandler(itemId, isCompleted) {
    if (isCompleted) {
      setCompletedItems((prevItem) =>
        prevItem.filter((item) => item.id !== itemId)
      );
    } else {
      setItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
    }
  }

  function MarkAsCompleted(itemId) {
    const selectItem = items.find((item) => item.id === itemId);
    if (selectItem) {
      const updatedItem = { ...selectItem, isCompleted: true };
      setCompletedItems((prevItem) => [...prevItem, updatedItem]);
      setItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
    }
  }

  function UndoMarkAsCompleted(itemId) {
    const selectItem = completedItems.find((item) => item.id === itemId);
    if (selectItem) {
      const updatedItem = { ...selectItem, isCompleted: false };
      setItems((prevItem) => [...prevItem, updatedItem]);
      setCompletedItems((prevItem) =>
        prevItem.filter((item) => item.id !== itemId)
      );
    }
  }

  return {
    AddItemHandler,
    DeleteItemHandler,
    MarkAsCompleted,
    UndoMarkAsCompleted,
    items,
    completedItems
  };
}

export default ItemHandler;
