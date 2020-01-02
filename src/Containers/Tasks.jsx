import React from "react";
import { connect } from "react-redux";
import TasksList from "../Components/Tasks/TasksList";
import "./Styles/Tasks.css";
import ReactDOM from "react-dom";
import { newTask } from "../Actions/index";
import ModalCenterNewTask from "../Components/Tasks/ModalCenterNewTask";

class Tasks extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            showNewModal: false,
            lengthTasks: this.props.tasksList.length,
            form: {
                name: "",
                description: "",
                expirationDate: ""
            }
        }
    }

    handleOnChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleNewTask = (e) => {
        this.setState({
            lengthTasks: this.state.lengthTasks+1,
            showNewModal: false,
        })
        
        this.props.newTask({
            id: this.state.lengthTasks,
            name: this.state.form.name,
            description: this.state.form.description,
            creationDate: new Date(),
            expirationDate: this.state.form.expirationDate
        })
    }

    handleOnChangeDate(e) {
        this.setState({
            form: {
                ...this.state.form,
                expirationDate: e.target.value
            }
        })
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

    render(){
        return(
            <section className="tasks" >
                <button className="tasks__new" onClick={this.openNewTask}>Crear Tarea</button>
                <div className="tasks-tasksList">
                    <h1 className="task__name">Tus Tareas:</h1>
                    <TasksList data={this.props.tasksList} />
                </div>
                {ReactDOM.createPortal(
                    <ModalCenterNewTask 
                        formTextName = {this.state.form.name}
                        formTextDescription = {this.state.form.description}
                        show={this.state.showNewModal} 
                        close={this.closeNewTask}
                        handleOnChange={this.handleOnChange}
                        handleNewTask={this.handleNewTask} 
                        handleOnChangeDate={this.handleOnChangeDate}
                        formDate={this.state.form.expirationDate}/>
                ,document.getElementById("modal"))}
               
            </section>
        )
    }
}

const mapStateToProps = (data) => {
    return {
        tasksList: data.tasksList
    }   
}

const mapsDispatchToProps = {
    newTask
}

export default connect(mapStateToProps, mapsDispatchToProps)(Tasks);