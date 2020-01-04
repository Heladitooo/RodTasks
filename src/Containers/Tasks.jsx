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
                
                expirationDate: {
                    text: "",
                    day: "",
                    month: "",
                    year: "",
                    time: {
                        minutes: "",
                        hours: "",
                        text: ""
                    }
                }
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
            creationDate: {
                text: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                day: new Date().getDate(),
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                time: {
                    minutes: new Date().getMinutes(),
                    hours: new Date().getHours(),
                    text: `${new Date().getHours()}:${new Date().getMinutes()}`
                }
            },
            expirationDate: this.state.form.expirationDate
        })
    }

    handleOnChangeDate = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                
                expirationDate: {
                    ...this.state.form.expirationDate,
                    day: e.date(),
                    month: e.month(),
                    year: e.year(),
                    text: `${e.date()}/${e.month()}/${e.year()}`,
                }
            }
        })
    }

    handleOnChangeTime = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                expirationDate: {
                    ...this.state.form.expirationDate,
                    time: {
                        ...this.state.form.expirationDate.time,
                        hours: e.hour(),
                        minutes: e.minute(),
                        text: `${e.hour()}:${e.minute()}`
                    },
                }
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
                        formDate={this.state.form.expirationDate}
                        handleOnChangeTime={this.handleOnChangeTime} />
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