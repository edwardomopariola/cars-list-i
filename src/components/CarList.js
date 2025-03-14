import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";


function CarList() {
    const dispatch = useDispatch();
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = (data || []).filter((car) =>  //filter the cars based on the search term
            car.name?.toLowerCase().includes(searchTerm?.toLowerCase())  // safeguard against null values or undefined values
        );

        //return the filtered cars and the name from the form state
        return {
            cars: filteredCars,
            name: form.name,
        }
    });

    // Define a function to handle car deletion by dispatching the removeCar action
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }


    // Map over the cars and render each car in a panel with a delete button
    const renderedCars = cars.map((car) => {
        const bold = name && car.name?.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold ? 'bold' : ''}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>

            </div>
        );
    });

    // Return the rendered cars
    return(
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;