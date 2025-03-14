import { useSelector } from "react-redux";  // Import the useSelector hook from react-redux to access the state from the store

// Define the CarValue component to calculate the total cost of the cars
function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
        const filteredCars = data.filter((car => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())));  // Filter the cars based on the search term and return the filtered cars
        return filteredCars.reduce((acc, car) => acc + parseInt(car.cost), 0);  // Calculate the total cost of the filtered cars using reduce method(), reduce method takes a callback function and an initial value
    });
    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
};

export default CarValue;