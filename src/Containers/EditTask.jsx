
import React from "react";
import { connect } from "react-redux";
import "./Styles/EditTask.css"
/* eslint eqeqeq: 0 */
class EditTask extends React.Component {
    constructor(props){
        super(props);
        this.filterTask = this.props.tasksList.filter((data) => {
            return data.id == this.props.match.params.id;
        })
        this.state = {
            time: {
                declarate: false,
                seconds: 59 - new Date().getSeconds(),
                minutes: "",
                hours: ""
            }
        }
        
    }

    /*
    componentWillMount(){
        const selft = this;
        function conditionalMinute(){
            if (selft.filterTask[0].expirationDate.time.minutes < new Date().getMinutes()) {
                selft.setState({
                    time: {
                        ...selft.state.time,
                        minutes: selft.filterTask[0].expirationDate.time.minutes + 59 - new Date().getMinutes()
                    }
                })
                selft.declarateMinMax()
            } else {
                selft.setState({
                    time: {
                        ...selft.state.time,
                        minutes: selft.filterTask[0].expirationDate.time.minutes - new Date().getMinutes()
                    }
                })
                selft.declarateMinMax()
            }
        }
            if (selft.filterTask[0].expirationDate.time.hours < new Date().getHours()) {
                selft.setState({
                    time: {
                        ...selft.state.time,
                        hours: selft.filterTask[0].expirationDate.time.hours + 24 - new Date().getHours()
                    }
                })
                conditionalMinute()
            } else {
                selft.setState({
                    time: {
                        ...selft.state.time,
                        hours: selft.filterTask[0].expirationDate.time.hours - new Date().getHours()
                    }
                })
                conditionalMinute()
            }        
    }

    declarateMinMax(){
        let selft = this;
        setInterval(() => {
            if (selft.state.time.seconds > 0) {
                selft.setState({
                    time: {
                        ...selft.state.time,
                        seconds: selft.state.time.seconds - 1
                    }
                })

            } else {
                 selft.setState({
                    time: {
                        ...selft.state.time,
                        seconds: 59,                            
                        minutes: selft.state.time.minutes - 1
                   }
                })
            }
            if (selft.state.time.minutes < 0) {
                selft.setState({
                      time: {
                        ...selft.state.time,
                        minutes: 59,
                        hours: selft.state.time.hours - 1
                       }
                })
            }
        }, 1000)    
    }
*/
    render(){  
        return(
            <section className="TaskInformation__container">
                <section className="TaskDetails">
                    <h1 className="TaskDetails__name">{this.filterTask[0].name}</h1>
                    <p className="TaskDetails__description">{this.filterTask[0].description}</p>
                    
                </section>
                <section className="TaskPanel">
                    <button className="TaskPanel__completeButton">Completada!</button>
                    
                    <div className="TaskPanel-functions">
                        <p className="TaskPanel-functions__delete">Borrar</p>
                        <p className="TaskPanel-functions__edit">Editar</p>
                    </div>
                    <div className="TaskDetails-container">
                        <h6>
                            vence: {this.filterTask[0].expirationDate.text} {this.filterTask[0].expirationDate.textHour} 
                        </h6>
                        <h6>
                            se creo: {this.filterTask[0].creationDate.text} {this.filterTask[0].creationDate.textHour} 
                        </h6>    
                        <h6>
                            quedan:
                        </h6>
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