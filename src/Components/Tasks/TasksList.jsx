import React from "react";
import "../styles/Tasks/TasksList.css"

class TasksList extends React.Component {
    render(){
        return(
            <section className="tasksList">
                
                {this.props.data.map((task) => {
                    return (
                        <div className="tasksList-task" key={task.id}>
                            <h2 className="tasksList-task__name">{task.name}</h2>
                            <p  className="tasksList-task__expirationDate">Vence: {task.expirationDate}</p>
                        </div>
                    )
                })
                }
            </section>
        )
    }
}

export default TasksList;