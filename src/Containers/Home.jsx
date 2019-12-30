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
                        
                        <div className="task-tasksList">
                            <div className="tasksList-task">
                                <h5 className="tasksList-task__text">Tender cama</h5>
                            </div>
                            <div className="tasksList-task">
                                <h5 className="tasksList-task__text">Tender cama</h5>
                            </div>
                            <div className="tasksList-task">
                                <h5 className="tasksList-task__text">Tender cama</h5>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </>
        )
    }
}

export default Home;