// ScrollContext.js
import {createContext, useContext, useState} from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children, data, setData }) => {
  const updateScrollData = (newData) => {
    setData(newData);
  };

  const contextValue = {
    ...data,
    updateScrollData,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};