import React from "react";
import TasksList from "../Components/Tasks/TasksList";
import "./Styles/Tasks.css";
import ReactDOM from "react-dom";
import ModalCenterNewTask from "../Components/Tasks/ModalCenterNewTask";

class Tasks extends React.Component {

    state = {
        showNewModal: false
    }

    openNewTask = (e) => {
        this.setState({
            showNewModal: true,
        })
    }

    closeNewTask = (e) => {
        this.setState({
            showNewModal: false,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showNewModal: false,
        })
    }
    render(){
        return(
            <section className="tasks" >
                <button className="tasks__new" onClick={this.openNewTask}>Crear Tarea</button>
                <div className="tasks-tasksList">
                    <h1 className="task__name">Tus Tareas:</h1>
                    <TasksList/>
                </div>
                {ReactDOM.createPortal(
                    <ModalCenterNewTask show={this.state.showNewModal} handleSubmit={this.handleSubmit} handleClose={this.closeNewTask}/>
                ,document.getElementById("modal"))}
               
            </section>
        )
    }
}
 
export default Tasks