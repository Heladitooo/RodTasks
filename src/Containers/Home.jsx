import React from "react";
import "./Styles/Home.css";
import TaskListHome from "../Components/Home/TaskListHome";

class Home extends React.Component{
    render(){
        return(
            <>
                <section className="hero">
                    <p className="hero__text">
                        Completa tus tareas y gana puntos para subir de nivel
                    </p>
                    <TaskListHome/>
                </section>
            </>
        )
    }
}

export default Home;