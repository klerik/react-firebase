import React from "react";

const Spinner = () => {
    return(
        <div className="spinner-border text-primary mx-auto" role="status" style={{display: 'block', marginTop: '20rem'}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;
