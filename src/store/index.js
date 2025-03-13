import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";  // Import the carsReducer and the addCar, removeCar, and changeSearchTerm actions from the carsSlice
import { formReducer, changeName, changeCost } from "./slices/formSlice";  // Import the formReducer and the changeName and changeCost actions from the formSlice

// Configure the store with the carsReducer and the formReducer 
const store = configureStore({
  reducer: ({
    cars: carsReducer,
    form: formReducer,
  }),
});

export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost };  // Export the store, addCar, removeCar, changeSearchTerm, changeName, and changeCost functions from the store file