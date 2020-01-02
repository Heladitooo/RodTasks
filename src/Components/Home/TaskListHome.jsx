import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Home/TaskListHome.css"

const TaskListHome = ({tasksList}) =>{
    return(
        <div className="hero-task">
            <h4 className="hero-task__name">Tareas cerca de expirar:</h4>
            <div className="task-tasksListHome">
                {tasksList.length > 0 ? tasksList.map((data)=>{
                    return(
                        <Link to={`/tasks/${data.id}`} className="tasksListHome-task">
                            <div key={data.id}>
                                <h5 className="tasksListHome-task__text">{data.name}</h5>
                            </div>
                        </Link>
                    )
                })
                : <h5>No hay tareas :D</h5>}
            </div>
        </div>
    )
}

const mapStateToProps = (data) => {
    return{
        tasksList: data.tasksList
    }
}

export default connect(mapStateToProps, null)(TaskListHome);