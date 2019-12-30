import React from "react";
import TasksList from "../Components/Tasks/TasksList";
import "./Styles/Tasks.css"

class Tasks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasksList: [
                {
                    id: 0,
                    name: "caminar",
                    description: "solo deves mover las piernas",
                    creationDate: new Date(),
                    expirationDate: new Date() +10
                },
            ]
        }
    }

    render(){
        return(
            <section className="tasks">
                <div className="tasks-tasksList">
                    <h1 className="task__name">Tus Tareas:</h1>
                    <TasksList data={this.state.tasksList} />
                </div>
                
            </section>
        )
    }
}

export default Tasks