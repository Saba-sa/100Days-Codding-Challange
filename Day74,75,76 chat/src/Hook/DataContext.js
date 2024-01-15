import React, { createContext, useContext, useState ,useEffect} from 'react';
import Data from '../components/Data';

const DataContext = createContext();


const DataContextProvider = ({ children }) => {
  const dateNew=new Date()

  const [allContacts, setAllContacts] = useState([]);
  // const [allContacts, setAllContacts] = useState(Data);
  
  const [showMessagesOf, setShowMessagesOf] = useState({});
  const [date] = useState(dateNew.toDateString());


useEffect(() => {
  let temp = JSON.parse(localStorage.getItem('contactDetail'))||[]
  if (temp && Array.isArray(temp)) {
    setAllContacts(temp)
    setShowMessagesOf(temp[0])
    
  }
}, [])



  useEffect(() => {
    if(allContacts.length>0){
localStorage.setItem('contactDetail',JSON.stringify(allContacts))
    }
  }, [allContacts])
  
  return (
    <DataContext.Provider value={{ allContacts, setAllContacts,showMessagesOf,setShowMessagesOf,date }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider };
export const useAppStore = () => useContext(DataContext);