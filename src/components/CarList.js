import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

// Define the CarList component to display the list of cars and a delete button for each car
function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => {
        return state.cars.data;
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="Button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>

            </div>
        );
    });

    return(
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;