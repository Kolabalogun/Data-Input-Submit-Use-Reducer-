import React from 'react'

const Reducer = (state, action) => {
    if (action.type === "TESTING") {
      const newItems = [...state.people, action.payload];
      return {
        ...state,
        people: newItems,
        isModalOpen: true,
        modalContext: "Item Added",
      };
    }
    if (action.type === "NO_VALUE") {
      return {
        ...state,
        isModalOpen: true,
        modalContext: "No Value Added",
      };
    }
    if (action.type === "CLOSE_MODAL") {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    if (action.type === "DELETE") {
      const newData = state.people.filter((p) => p.id !== action.payload);
  
      return {
        ...state,
        people: newData,
      };
    }
  
    return state;
  };
  

export default Reducer