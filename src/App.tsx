import React, {useState} from 'react';
import './App.css';
import {tasksPropsType, TodoList} from "./TodoList";
import {v1} from "uuid";

export type FilterValueType = "All" | "Complete" | "Active"

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

    let [newTitle, setNewTitle] = useState("")

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t=>t.id !== id))
    }

    let filteredTasks = tasks
    if(filter=== "Complete") filteredTasks = tasks.filter(t=>t.isDone)
    if(filter=== "Active") filteredTasks = tasks.filter(t=>!t.isDone)


    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    const addTask = () => {
        let newTask =  {id: v1(),
            title: newTitle,
            isDone: true
        }
        setTasks([newTask, ...tasks])
        setNewTitle("")
    }




    return (
        <div>
            <TodoList title={"What to buy"}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      newTitle={newTitle}
                      setNewTitle={setNewTitle}
            />

        </div>
    )
}

export default App;
