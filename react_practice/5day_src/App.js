import { useState } from "react";
import AddWordForm from "./AddWordForm";
import WordList from "./WordList";
import "./App.css";

function App() {
    const[words, setWords]=useState([]);
    //입력 삭제는 appjs 에서 처리
    const handleAddWord=(newWord)=>{
        setWords([...words, newWord])
        console.log(words)
    }
    const handleDeleteWord=(id)=>{
        setWords(words.filter(word=>word.id !== id))
        console.log('words.id',words.id)
        console.log("id",id)
    }
    return (
        <div className="app-container">
            <h1>나의 단어장</h1>
            <AddWordForm onAddWord={handleAddWord}/>
            <WordList words={words} onDeleteword={handleDeleteWord}/>
        </div>
    );
}

export default App;
