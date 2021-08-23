import React, { useEffect, useState } from "react";
import { carsCollection } from '../../utils/firebase';
import { firebaseLooper } from '../../utils/tools';
import Spinner from '../spinner';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllTheCars();

        // GET DOC BY ID
        carsCollection
            .doc('pnTa8rPtc5C6LNkTJaef')
            .get()
            .then(snapshot => {
                console.log(snapshot.data())
        })

        // employeeRef.get().then((querySnapshot) => {
        //     const employees = firebaseLooper(querySnapshot);
        //     console.log(employees)
        // })
    }, []);

    const getAllTheCars = () => {
        carsCollection
            .orderBy('price', 'desc')
            .get()
            .then(snapshot => {
                const cars = firebaseLooper(snapshot);
                setCars(cars);
        setLoading(false);
        })
    }

    const handleCarData = (cars) => {
        return cars.map((car, i) => {
            return (
                <tr key={i}>
                    <th>{car.id}</th>
                    <th>{car.brand}</th>
                    <th>{car.color}</th>
                    <th>{car.price}</th>
                </tr>
            )
        })
    }

    return(
        <>
            {loading ? (
                <Spinner />
            ) : (
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {handleCarData(cars)}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Cars;
