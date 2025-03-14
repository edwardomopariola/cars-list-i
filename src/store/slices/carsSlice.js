import { createSlice, nanoid } from '@reduxjs/toolkit';

// Define the initial state of the cars slice and the reducers to update the state based on the action
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  // Add a new reducer to change the search term in the state based on the action 
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // Add a new reducer to add a car to the list of cars in the state
    addCar: (state, action) => {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
    });
    },
    // Add a new reducer to remove a car from the list of cars in the state
    removeCar: (state, action) => {
        //assumption: the payload is the id of the car to be removed
        //filter out the car with the id equal to the payload
        //action.payload === the id of the car to be removed
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
        //update the state with the filtered cars
        state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;   // Export the action creators 
export const carsReducer = carsSlice.reducer;  // Export the reducer function