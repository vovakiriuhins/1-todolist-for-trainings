import React, {ChangeEvent, KeyboardEvent, FC, useState} from 'react';
import {FilterValueType} from "./App";
import {SuperButton} from "./components/SuperButton";


export type tasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: tasksPropsType[]
    removeTask:(id: string)=>void
    changeFilter:(value: FilterValueType)=>void
    addTask:(title: string)=>void
}



export const TodoList: FC<TodoListPropsType> = (props) => {

    const [title, setTitle] = useState("")

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }

    const setLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)


    const maxTitleLength = 20
    const recommendedTitleLength = 5
    const isAddTaskNotPossible: boolean = !title.length || title.length > maxTitleLength

    const onKeyDownAddTaskHandler = isAddTaskNotPossible
        ? undefined
        : (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTaskHandler()

    const longTimeWorning = title.length > recommendedTitleLength && <div style={{color: "hotpink"}}>Title should be shorter</div>
    const longTitleErrorMessage = title.length > maxTitleLength && <div style={{color: "red"}}>Too long title</div>


    const todoListItems = props.tasks.map(t=>{

        const removeTaskHandler = () => {
            props.removeTask(t.id)
        }

        return (
            <li><input type='checkbox' checked={t.isDone}/> <span>{t.title}</span>
                <button onClick={removeTaskHandler}>x</button></li>
        )})

        // <SuperButton callBack={removeTaskHandler}/>

    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={title}
                           onChange={setLocalTitleHandler}
                           onKeyDown={onKeyDownAddTaskHandler}

                    />
                    <SuperButton callBack={addTaskHandler}
                                 // disabled={isAddTaskNotPossible}
                        name={"xx"}
                    />

                    {longTimeWorning}
                    {longTitleErrorMessage}
                </div>
                <ul>
                    { todoListItems }
                </ul>
                <div>
                    <button onClick={()=>{props.changeFilter("All")}}>All</button>
                    <button onClick={()=>{props.changeFilter("Active")}}>Active</button>
                    <button onClick={()=>{props.changeFilter("Completed")}}>Completed</button>
                </div>
            </div>
        </div>
    );
};
