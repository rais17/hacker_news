import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuery } from "../Utils/Slices/newsSlice";
import useSuggestion from "../CustomHooks/useSuggestion";
import { SEARCH_SUGGESTION_API } from "../Utils/constant";
import { isVisible } from "../Utils/Slices/suggestionSlice";

const SuggestionList = ({ searchTxt, setSearchTxt }) => {
  const suggestedQueries = useSuggestion(SEARCH_SUGGESTION_API, searchTxt);
  const visible = useSelector((store) => store.suggestion.visible);

  const dispatch = useDispatch();

  const handleClick = (list) => {
    dispatch(addQuery(list));
    dispatch(isVisible(false));
    setSearchTxt(list);
  };

  return (
    <div
      className={`flex w-full flex-col ${
        visible ? "" : "hidden"
      } absolute mt-2 rounded-md bg-white`}
    >
      {suggestedQueries &&
        suggestedQueries.map((list, index) => (
          <h1
            className="px-4 py-1 cursor-pointer font-Mullish"
            onClick={() => handleClick(list)}
            key={index}
          >
            {list}
          </h1>
        ))}
    </div>
  );
};

export default SuggestionList;
