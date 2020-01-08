import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tasks/TasksList.css";
import { connect } from "react-redux";

class TasksList extends React.Component {
    render(){
        return(
            <section className="tasksList">
                
                {this.props.tasksList.length > 0 ? this.props.tasksList.map((task) => {  
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

const mapStateToProps = (data) => {
    return{
        tasksList: data.tasksList
    }
}

export default connect(mapStateToProps,null)(TasksList);