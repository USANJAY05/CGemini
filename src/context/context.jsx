import { createContext, useState } from "react";
import runChat from "../api/gemini";
import { v4 as uuidv4 } from 'uuid';

export const context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [collections, setCollections] = useState([]);
    const [previousOutput, setPreviousOutput] = useState([]);
    const [output, setOutput] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [select, setSelect] = useState(null);

    const onSent = async (prompt) => {
        return runChat(prompt);
    };

    const generateUniqueId = (email) => {
        const uuid = uuidv4();
        const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
        return `${uuid}-${date}-${email}`;
    };

    const createNewItem = (content, data) => {
        const email = JSON.parse(localStorage.getItem('userCredentials')).email;
        const id = generateUniqueId(email);
        return { id, content, type: 'human', data };
    };

    const newItem = (type, content) => {
        const item = createNewItem(type, content);
        const updatedItems = [...items, item];
        setItems(updatedItems);
        // localStorage.setItem('CGemini-data', JSON.stringify(updatedItems));
    };

    const handleCollection = async (type, content) => {
        const email = JSON.parse(localStorage.getItem('userCredentials')).email;
        const newItemData = createNewItem(type, content);

        if (select === null) {
            const collectionId = generateUniqueId(email + "_Collection");
            const newCollection = { id: collectionId, items: [newItemData] };
            const updatedCollections = [...collections, newCollection];
            setCollections(updatedCollections);
            setSelect(collectionId);
            localStorage.setItem("CGemini-collections", JSON.stringify(updatedCollections));
        } else {
            const updatedCollections = collections.map(collection => {
                if (collection.id === select) {
                    // setSelect(collection.id)
                    return { ...collection, items: [...collection.items, newItemData] };
                }
                return collection;
            });
            setCollections(updatedCollections);
            localStorage.setItem("CGemini-collections", JSON.stringify(updatedCollections));
        }
    };

    console.log(collections)

    const contextValue = {
        input, setInput, previousOutput, setPreviousOutput, output, setOutput, showOutput, setShowOutput, loading, setLoading, onSent, items, setItems, newItem, select, setSelect, handleCollection, collections,setCollections
    };

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    );
};

export default ContextProvider;