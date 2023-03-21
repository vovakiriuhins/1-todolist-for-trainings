import React, {Dispatch, FC, SetStateAction} from 'react';
import {FilterValueType} from "./App";
import {SuperButton} from "./components/SuperButton";
import {Input} from "./components/Input";



export type tasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: tasksPropsType[]
    removeTask:(id: string)=>void
    changeFilter:(filter: FilterValueType)=>void
    addTask:()=>void
    newTitle:string
    setNewTitle:(Dispatch<SetStateAction<string>>)
}



export const TodoList: FC<TodoListPropsType> = (props) => {





    const todoListItems = props.tasks.map(t=>{
        const onClickHandler = () => {
            props.removeTask(t.id)
        }
        return (
            <li><input type='checkbox' checked={t.isDone}/> <span>{t.title}</span>
                <button onClick={onClickHandler}>x</button></li>
        )})

    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <Input newTitle={props.newTitle}
                           setNewTitle={props.setNewTitle}
                    />
                    <span>
                        <SuperButton callBack={props.addTask}/>
                    </span>
                </div>
                <ul>
                    { todoListItems }
                </ul>
                <div>
                    <button onClick={()=>props.changeFilter("All")}>All</button>
                    <button onClick={()=>props.changeFilter("Active")}>Active</button>
                    <button onClick={()=>props.changeFilter("Complete")}>Completed</button>
                </div>
            </div>
        </div>
    );
};
