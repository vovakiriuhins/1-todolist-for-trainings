import React, {useState} from 'react';
import './App.css';
import {tasksPropsType, TodoList} from "./TodoList";
import {v1} from "uuid";
import {SuperButton} from "./components/SuperButton";

export type FilterValueType = "All" | "Completed" | "Active"

function App(){

    let [tasks, setTasks] = useState<tasksPropsType[]>([
        {id: v1(), title: "Молоко", isDone: true},
        {id: v1(), title: "Хлеб", isDone: true},
        {id: v1(), title: "Мука", isDone: false},
        {id: v1(), title: "Фрукты", isDone: true},
        {id: v1(), title: "Кофе", isDone: false},
        {id: v1(), title: "Шоколад", isDone: true},
    ])

    let [filter, setFilter] = useState<FilterValueType>("All")

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t=>t.id!==id))
    }

   let tasksForTodoList = tasks
    if (filter === "Active") tasksForTodoList = tasks.filter(t=> !t.isDone)
    if (filter === "Completed") tasksForTodoList = tasks.filter(t=>t.isDone)

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    const addTask = (title: string) => {
        const newTask = {
            id: v1(),
            title: title,
            isDone: true}
        setTasks([newTask, ...tasks])
    }





    return (
        <div>
            <TodoList title={"What to buy"}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />

        </div>
    )
}

export default App;
