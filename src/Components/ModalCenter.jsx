import React from "react";
import "./styles/ModalCenter.css"

const ModalCenter = (props) => {
    if(props.show){
        return (
            <section className="modal-container">
                <div className="modal">
                    {props.children}
                </div>
            </section>
        )
    }else {
        return null
    }
    
}

export default ModalCenter;