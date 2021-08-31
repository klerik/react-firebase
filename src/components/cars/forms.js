import React, { useReducer } from "react";
import { carsCollection, fireBseTimestamp } from '../../utils/firebase';
import { useHistory } from 'react-router-dom';

const initialState = { brand: '', color: '', price: '', available: '' };

const reducer = (state, action) => {
    switch (action.type) {
        case `${[action.type]}`:
            return {
                ...state,
                [action.type]: action.payload
            }
        default:
            throw new Error();
    }
}

const Forms = () => {
    const history = useHistory();
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleForm = (e) => {
        e.preventDefault();

        /// set data (if you need custom id) - if you do not set id - firebase create id

        carsCollection.doc('customId').set({
            ...state,
            price: parseInt(state.price),
            available: !!state.available,
            createdAt: fireBseTimestamp(),
            dealers: {
               washington: true,
               california: true,
               newYork: true
            },
            tags: ['good', 'comfortable', 'expensive']
        }).then((data) => {
            history.push('/cars');
        }).catch(e => {
            throw new Error(e);
        })

        /// add to the db

        // carsCollection.add({
        //     ...state,
        //     price: parseInt(state.price),
        //     available: !!state.available,
        //     createdAt: fireBseTimestamp()
        // }).then((data) => {
        //     console.log(data)
        //     history.push('/cars');
        // }).catch(e => {
        //     throw new Error(e);
        // })
    }

    const changeHandler = (e) => {
        return dispatch({
            type: e.target.name,
            payload: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={(e) => handleForm(e)}>
                <div className="form-group my-4">
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        name="brand"
                        onChange={(e) => changeHandler(e)}
                        value={state.brand}
                        placeholder="Brand"
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="color">Color</label>
                    <input
                        type="text"
                        className="form-control"
                        name="color"
                        onChange={(e) => changeHandler(e)}
                        value={state.color}
                        placeholder="Color"
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        onChange={(e) => changeHandler(e)}
                        value={state.price}
                        placeholder="Price"
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="available">Available</label>
                    <select
                        className="form-control"
                        name="available"
                        onChange={(e) => changeHandler(e)}
                        value={state.available}
                        placeholder="Available"
                    >
                        <option defaultValue={null}>Open this select menu</option>
                        <option value={true}>YES</option>
                        <option value={false}>NO</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary my-4">Submit</button>
            </form>
        </>
    )
}

export default Forms;