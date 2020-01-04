import React from "react";
import ModalCenter from "../ModalCenter";
import "../styles/Tasks/DateTime.css"
import Datetime from 'react-datetime';
import "../styles/Tasks/ModalCenterNewTask.css"

require('moment/locale/es');
class ModalCenterNewTask extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            formText: {
                name: "",
                description: ""
            }
        }
    }

    handleOnChange = (e) => {
        this.setState({
            formText: {
                ...this.state.formText,
                [e.target.name]: e.target.value
            }
        })
    }

    handleNewTask = (e) => {
        this.props.show = false;
        this.props.newTask({
                id: this.props.id + 1,
                name: this.state.formText.name,
                description: this.state.formText.description,
                creationDate: new Date(),
                expirationDate: new Date() + 10
        })
    }

    render(){
        
        return(
                <ModalCenter show={this.props.show}>
                    <form className="form">
                        <div className="form-data">
                            <h1 className="form-data__initialText">Ok!</h1>
                            <div>
                                <h4 className="form-data__text">Nombre de la tarea: </h4>
                                <input className="form-data__name" type="text" value={this.props.formTextName} name="name" placeholder="Nombre..." onChange={this.props.handleOnChange} />
                            </div>
                            <div>
                                <h4 className="form-data__text">Descripcion: </h4>
                                <textarea className="form-data__description" value={this.props.formTextDescription} name='description' placeholder="Descripcion..." onChange={this.props.handleOnChange} cols="30" rows="10"></textarea>
                            </div>
                        
                            <div>
                                <button onClick={this.props.close}>Cerrar</button>
                                <button onClick={this.props.handleNewTask}>Crear!</button>
                            </div>
                        </div>

                        <div className="dates">
                            <Datetime
                                locale=" es "
                                input={false}
                                timeFormat={false}
                                onChange={this.props.handleOnChangeDate}
                            />
                            <Datetime
                                locale=" es "
                                input={false}
                                dateFormat={false}
                                onChange={this.props.handleOnChangeTime}
                            />
                        </div>
                    </form>
                </ModalCenter>
                
        )
    }
}



export default ModalCenterNewTask