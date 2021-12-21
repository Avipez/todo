import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncronizedItem, setSyncronizedItem] = React.useState(true)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        setSyncronizedItem(true)
      },3000);
    } catch (error) {
      setError(error);
    }
  }, [syncronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const syncronizeItem = () => {
    setLoading(true);
    setSyncronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    syncronizeItem
  };
}

export { useLocalStorage };
