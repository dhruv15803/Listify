import { useState } from "react";
import Header from "./Components/Header"
import PendingTasks from "./Pages/PendingTasks"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CompletedTasks from "./Pages/CompletedTasks";

function App() {

  const [tasks,setTasks] = useState([
    {
      "id":0,
      "task":"",
    }
  ]);
  const [completedTasks,setCompletedTasks] = useState([]);


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
