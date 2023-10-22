import React, { useState } from "react";
import MyInput from "./MyInput";
import Icon from "./Icon";
import SuggestionList from "./SuggestionList";

const Search = () => {

  const [searchTxt, setSearchTxt] = useState("");
  
  return (
    <div className="relative w-2/3">
      <div className="flex items-center w-full">
        <MyInput
          searchTxt={searchTxt}
          setSearchTxt={setSearchTxt}
        />
        <Icon searchTxt={searchTxt} />
      </div>
      <SuggestionList searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
    </div>
  );
};

export default Search;
