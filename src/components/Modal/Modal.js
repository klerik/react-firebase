import React, {useContext, useState} from "react";

import './style.css';
import { ModalContext } from "../../context";

export const Modal = (props) => {
    const { children, title } = props;
    const { closeModal } = useContext(ModalContext);
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 100)
    }

    const backdropClasses = closing ? 'back-drop backdrop-hide' : 'back-drop';

    return (
        <div className={backdropClasses} onClick={handleClose}>
            <div className="modal-custom" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{title}</h3>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}
