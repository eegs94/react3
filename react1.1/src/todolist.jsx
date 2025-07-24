import React from "react";
import { TodoItem } from "./TodoItem";
import { Fragment } from "react";


/*
export function TodoList(){
    return (<h1>Hola TODOList</h1>

        <>
        <h1>Listado de Tareas</h1>
            <ul>
                <li>Tarea1</li>
                <li>Tarea2</li>
                <li>Tarea3</li>
            </ul>
        </>

    );
}
*/

export function TodoList(){
    return(
        <Fragment>
            <h1>Listado de Tareas</h1>
            <ul className="list-group">
                <TodoItem/> 
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ul>
         </Fragment>
    );

}
