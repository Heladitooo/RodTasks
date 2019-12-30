import React from "react";
import { connect } from "react-redux";
import TasksList from "../Components/Tasks/TasksList";
import "./Styles/Tasks.css"

class Tasks extends React.Component {
    

    render(){
        return(
            <section className="tasks">
                <div className="tasks-tasksList">
                    <h1 className="task__name">Tus Tareas:</h1>
                    <TasksList data={this.props.tasksList} />
                </div>
                
            </section>
        )
    }
}

const mapStateToProps = (data) => {
    return {
        tasksList: data.tasksList
    }
    
}

export default connect(mapStateToProps, null)(Tasks)