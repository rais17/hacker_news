import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addQuery } from '../Utils/Slices/newsSlice';
import { isVisible } from '../Utils/Slices/suggestionSlice';

const Icon = ({ searchTxt }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(addQuery(searchTxt));
      dispatch(isVisible(false));
    }
  return <div onClick={handleClick} className='p-3 bg-orange-500'><AiOutlineSearch style={{color: "white", fontSize: "18", fontWeight: "900"}} /></div>;
}

export default Icon