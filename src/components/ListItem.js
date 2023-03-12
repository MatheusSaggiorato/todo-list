import React from "react";
import Card from "./Card";

function ListItem(props) {

    function DoneImg(props) {

        if (props.done) {
            return (<img id="done" alt="done" src="./assets/correct.png"></img>)
        } else {
            return (<img id="undone" alt="undone" src="./assets/correct-clear.png"></img>)
        }
    }

    return (<li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
            <div>
                <button className="btn-card" onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                <button className="btn-card" onClick={() => { props.onItemDeleted(props.item) }}><img id="trash" alt="trash" src="./assets/trash.png"></img></button>
            </div>
            </Card>
        </li>)
}

export default ListItem;