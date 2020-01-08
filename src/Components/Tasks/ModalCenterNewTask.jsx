import React from "react";
import ModalCenter from "../ModalCenter";
import "../styles/Tasks/DateTime.css"
import Datetime from 'react-datetime';
import "../styles/Tasks/ModalCenterNewTask.css";
import { newTask } from "../../Actions/index";
import { connect } from "react-redux";

require('moment/locale/es');
class ModalCenterNewTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showNewModal: false,
            lengthTasks: this.props.tasksList.length,
            form: {
                name: "",
                description: "",

                expirationDate: {
                    text: "",
                    day: "",
                    month: "",
                    year: "",
                    minutes: "",
                    hours: "",
                }
            }
        }
    }

    handleOnChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleNewTask = (e) => {
        this.setState({
            lengthTasks: this.state.lengthTasks + 1,
        })
        this.props.newTask({
            id: this.state.lengthTasks,
            name: this.state.form.name,
            description: this.state.form.description,
            creationDate: {
                text: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}  `,
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
                minutes: new Date().getMinutes(),
                hours: new Date().getHours(),
                textHour: `${new Date().getHours()}:${new Date().getMinutes()}`                
            },
            expirationDate: this.state.form.expirationDate
        })
    }

    handleOnChangeDate = (e) => {
        this.setState({
            form: {
                ...this.state.form,

                expirationDate: {
                    ...this.state.form.expirationDate,
                    day: e.date(),
                    month: e.month() + 1,
                    year: e.year(),
                    text: `${e.date()}/${e.month()+1}/${e.year()}`,
                }
            }
        })
    }

    handleOnChangeTime = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                expirationDate: {
                    ...this.state.form.expirationDate,
                     hours: e.hour(),
                    minutes: e.minute(),
                    textHour: `${e.hour()}:${e.minute()}`
                }
            }
        })
    }

    render(){
        return(
                <ModalCenter show={this.props.show}>
                <form className="form" onSubmit={this.props.handleSubmit}>
                    
                    <div className="form-data" >
                        <h4 className="form__closeButton" onClick={this.props.handleClose}>X</h4>
                            <h1 className="form-data__initialText">Ok!</h1>
                            <div>
                                <h4 className="form-data__text">Nombre de la tarea: </h4>
                                <input className="form-data__name" type="text" value={this.state.name} name="name" placeholder="Nombre..." onChange={this.handleOnChange} />
                            </div>
                            <div>
                                <h4 className="form-data__text">Descripcion: </h4>
                                <textarea className="form-data__description" value={this.state.description} name='description' placeholder="Descripcion..." onChange={this.handleOnChange} cols="30" rows="10"></textarea>
                            </div>
                        
                            <div>
                                <button onClick={this.handleNewTask}>Crear!</button>
                            </div>
                        </div>

                        <div className="dates">
                            vence en...
                            <Datetime
                                locale=" es "
                                input={false}
                                timeFormat={false}
                                onChange={this.handleOnChangeDate}
                            />
                            <Datetime
                                locale=" es "
                                input={false}
                                dateFormat={false}
                                onChange={this.handleOnChangeTime}
                            />
                        </div>
                    </form>
                </ModalCenter>
                
        )
    }
}

const mapDispatchToProps = {
    newTask,
}

const mapStateToProps = (data) => {
    return{
        tasksList: data.tasksList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCenterNewTask)