import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from "../context";

const Header = () => {
    const {openModal} = useContext(ModalContext);
    
    const handleClickBtn = () => {
      openModal({
          title: "This is a awesome title for modal",
          children: <h1>Hello</h1>
      })
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="/">Awesome</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cars">Cars</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addCar">Add car</Link>
                        </li>
                        <li>
                            <button onClick={handleClickBtn}>
                                Open Modal
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
