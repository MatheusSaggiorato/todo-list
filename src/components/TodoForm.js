import React, { useState } from "react";

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            /*  SetItems([...items, text]) */
            props.onAddItem(text);
            setText("");
        }
    }

    return (<form>
        <input onChange={handleChange} type="text" placeholder="Insira sua tarefa" value={text}></input>
        <button className="btn-add" onClick={addItem}>Adicionar</button>
    </form>)
}

export default TodoForm