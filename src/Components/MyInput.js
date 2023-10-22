import { useDispatch } from "react-redux";
import { isVisible } from "../Utils/Slices/suggestionSlice";
import { addQuery } from "../Utils/Slices/newsSlice";

const MyInput = ({ setSearchTxt, searchTxt }) => {

    const dispatch = useDispatch();

    const handleSearch = (value) => {
      setSearchTxt(value);
      !value && dispatch(addQuery(value));
    };
    
  return (
    <input
      className="w-full px-4 py-2 text-base tracking-wide border-2 border-gray-200 font-Mullish placeholder:italic focus:outline-none"
      type="text"
      placeholder="Search yours news..."
      value={searchTxt}
      onChange={(e) => handleSearch(e.target.value)}
      onClick={() => dispatch(isVisible(true))}
      
    />
  );
}

export default MyInput