import React from "react";
import ModalCenter from "../ModalCenter";
import "../styles/Tasks/DateTime.css"
import Datetime from 'react-datetime';

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
                    <h1>Ok!</h1>
                    <input type="text" value={this.props.formTextName} name="name" placeholder="Nombre..." onChange={this.props.handleOnChange} />
                    <input type="text" value={this.props.formTextDescription} name='description' placeholder="Descripcion..." onChange={this.props.handleOnChange} />
                    <Datetime locale=" es " 
                    inputProps={{ placeholder: 'expira...', disabled: false }} value={this.props.formDate} name="expirationDate" onChange={this.props.handleOnChangeDate}/>
                    <button onClick={this.props.close}>Cerrar</button>
                    <button onClick={this.props.handleNewTask}>Crear!</button>
                </ModalCenter>
                
        )
    }
}



export default ModalCenterNewTask