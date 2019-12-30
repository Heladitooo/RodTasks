import React from "react";
import "./Styles/Home.css"

class Home extends React.Component{
    render(){
        return(
            <>
                <section className="hero">
                    <p className="hero__text">
                        Completa tus tareas y gana puntos para subir de nivel
                    </p>
                    <div className="hero-task">
                        <h4 className="hero-task__name">Tareas cerca de expirar:</h4>
                        
                        <div className="task-tasksListHome">
                            <div className="tasksListHome-task">
                                <h5 className="tasksListHome-task__text">Tender cama</h5>
                            </div>
                            <div className="tasksListHome-task">
                                <h5 className="tasksListHome-task__text">Tender cama</h5>
                            </div>
                            <div className="tasksListHome-task">
                                <h5 className="tasksListHome-task__text">Tender cama</h5>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </>
        )
    }
}

export default Home;