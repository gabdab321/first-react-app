import React, {useState} from 'react';
import classes from "./MyModal.module.css";
import {CSSTransition} from "react-transition-group";

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]
    if(visible) rootClasses.push(classes.active)

    return (
        <div
            data-isclickable = "true"
            onClick={e => {
                if(e.target.dataset.isclickable) setVisible(false)
            }}
            className={rootClasses.join(" ")}
        >
            <div className={classes.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;