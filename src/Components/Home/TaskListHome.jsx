import React from "react";
import { connect } from "react-redux";
import "../styles/Home/TaskListHome.css"

const TaskListHome = ({tasksList}) =>{
    return(
        <div className="hero-task">
            <h4 className="hero-task__name">Tareas cerca de expirar:</h4>
            <div className="task-tasksListHome">
                {tasksList.map((data)=>{
                    return(
                        <div className="tasksListHome-task">
                            <h5 className="tasksListHome-task__text">{data.name}</h5>
                        </div>
                    )
                })
                }
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