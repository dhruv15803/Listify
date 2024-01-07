import {useEffect, useState } from "react";
import Header from "./Components/Header"
import PendingTasks from "./Pages/PendingTasks"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CompletedTasks from "./Pages/CompletedTasks";

function App() {

  let tasksLocal = JSON.parse(localStorage.getItem('tasksLocal_Listify'));
  let completedTasksLocal = JSON.parse(localStorage.getItem('completedTasksLocal_Listify'));

  if(tasksLocal===undefined || tasksLocal===null){
    tasksLocal = [{
      "id":0,
      "task":"",
    }]
  }
  if(completedTasksLocal===undefined || completedTasksLocal===null){
    completedTasksLocal = [];
  }

  const [tasks,setTasks] = useState(tasksLocal);
  const [completedTasks,setCompletedTasks] = useState(completedTasksLocal);

  useEffect(()=>{
    localStorage.setItem('tasksLocal_Listify',JSON.stringify(tasks));
    localStorage.setItem('completedTasksLocal_Listify',JSON.stringify(completedTasks));
  },[tasks,completedTasks])

  return (
    <>
    <Router>
    <Header noOfCompletedTasks={completedTasks.length}/>
      <Routes>
        <Route path="/" element={<PendingTasks tasks={tasks} setTasks={setTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>}/>
        <Route path="/completed" element={<CompletedTasks completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
