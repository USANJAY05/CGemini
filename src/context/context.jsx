import { createContext, useState } from "react";
import runChat from "../api/gemini"
import { v4 as uuidv4 } from 'uuid';

export const context =createContext();

const ContextProvider=(props)=>{

    const [input,setInput]=useState("")
    const [items, setItems] = useState([]);
    const [previousOutput,setPreviousOutput]=useState([])
    const [output,setOutput]=useState("")
    const [showOutput,setShowOutput]=useState(false)
    const [loading,setLoading]=useState(false)
    const [select, setSelect] = useState(null);

    const onSent=async (prompt)=>{
        return(runChat(prompt))
    }


    // Function to generate a unique identifier with UUID and additional context
    const generateUniqueId = (email) => {
      // Generate a UUID
      const uuid = uuidv4();
      
      // Get current date in YYYYMMDD format
      const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
      
      // Append the email hash and date to the UUID
      return `${uuid}-${date}-${email}`;
    };
    
    // Usage in the newItem function
    const newItem = (content, data) => {
      const email = JSON.parse(localStorage.getItem('userCredentials')).email;
      const id = generateUniqueId(email);
      const item = { id, content, type: 'human', data };
      const updatedItems = [...items, item];
      setItems(updatedItems);
      setSelect(id);
      localStorage.setItem('CGemini-data', JSON.stringify(updatedItems));
    };

    const contextValue={
        input,setInput,previousOutput,setPreviousOutput,output,setOutput,showOutput,setShowOutput,loading,setLoading,onSent,items,setItems,newItem,select,setSelect
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider