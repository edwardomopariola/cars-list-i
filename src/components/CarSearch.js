import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm} from "../store";

// Define the CarSearch component to search for cars
function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (e) => {   // Define a function to handle the search term change
        dispatch(changeSearchTerm(e.target.value));  
    };

    // Render the search input field
    return(
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input 
                    className="input" value={searchTerm} onChange={handleSearchTermChange}/>
            </div>

        </div>
    )
}

export default CarSearch;