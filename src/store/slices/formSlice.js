import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

// Define the initial state of the form slice and the reducers to update the state based on the action
const formSlice = createSlice({
  name: "form",
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCost: (state, action) => {
            state.cost = action.payload;
        },
    },
    // Add an extra reducer to reset the form state when a new car is added to the list
    //extraRReducer is a function that takes a builder object as an argument and adds a case to the reducer based on the action 
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = "";
            state.cost = 0;
        });
    }
});

export const { changeName, changeCost } = formSlice.actions;
//combineReducers({ form: formReducer });
// Export the reducer function
export const formReducer = formSlice.reducer;