/* eslint eqeqeq: 0 */

import React from "react";
import { connect } from "react-redux";
import "./Styles/EditTask.css"

class EditTask extends React.Component {
    render(){ 
               
         let filterTask = this.props.tasksList.filter((data) => {
        
            return data.id == this.props.match.params.id;
        }) 

        return(
            <section className="TaskInformation__container">
                <section className="TaskDetails">
                    <div className="TaskDetails-container">
                        <h1 className="TaskDetails__name">{filterTask[0].name}</h1>
                        <h6>{filterTask[0].expirationDate}</h6>
                    </div>
                    <p className="TaskDetails__description">{filterTask[0].description}</p>
                    
                </section>
                <section className="TaskPanel">
                    <button className="TaskPanel__completeButton">Completada!</button>
                    <div className="TaskPanel-functions">
                        <p className="TaskPanel-functions__delete">Borrar</p>
                        <p className="TaskPanel-functions__edit">Editar</p>
                    </div>
                </section>
            </section>
        )
    }
}

const mapStateToProps = (data) => {
    return {
        tasksList: data.tasksList
    }
}

export default connect(mapStateToProps, null)(EditTask)