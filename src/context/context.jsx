import { createContext, useState } from "react";
import runChat from "../api/gemini"

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

    const newItem = (content,data) => {
        const id = items.length;
        const item = { id, content, type: 'human',data };
        const updatedItems = [...items, item];
        setItems(updatedItems);
        setSelect(id)
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