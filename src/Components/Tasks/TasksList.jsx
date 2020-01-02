import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tasks/TasksList.css"

class TasksList extends React.Component {
    render(){
        return(
            <section className="tasksList">
                
                {this.props.data.length > 0 ? this.props.data.map((task) => {  
                    return (
                        <Link to={`/tasks/${task.id}`} key={task.id} className="tasksList-task">
                            <div  >
                                  <h2 className="tasksList-task__name">{task.name}</h2>
                            </div>
                        </Link>
                    )  
                })
                    : <h1>No hay tareas :D</h1>}
            </section>
        )
    }
}

export default TasksList;