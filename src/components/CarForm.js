import { useDispatch, useSelector } from 'react-redux';   // importing the useDispatch and useSelector hooks from react-redux  
import { changeName, changeCost, addCar } from '../store';  // importing the changeName action from the store slice 


// Define the CarForm component to add a new car
function CarForm() {
    // Get the dispatch function from the useDispatch hook and the name and cost from the form state using the useSelector hook
    const dispatch = useDispatch();
    const name = useSelector((state) => state.form.name);  // Get the name from the form state
    const cost = useSelector((state) => state.form.cost);  // Get the cost from the form state

    const handleNameChange = (e) => {   // Define a function to handle the name change
       dispatch(changeName(e.target.value));
    }
    const handleCostChange = (e) => {   // Define a function to handle the cost change
        const carCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(e.target.value));
    }
    const handleSubmit = (e) => {    // Define a function to handle the form submissio and prevent it from reloading the page
        e.preventDefault();

        dispatch(addCar({ name, cost }));
        
    }

    // Render the form with input fields for name and cost
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type='number'
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>

            </form >
        </div>
    )
}

export default CarForm;