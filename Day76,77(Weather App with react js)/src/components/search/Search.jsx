import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useAppStore } from "../../hooks/Context";
const Search = () => {
  const { setSearchChange, loadOptions, setStatus } = useAppStore();
  const [search, setsearch] = useState("");

  const handleChange = (searchedData) => {
    setStatus(true);
    setsearch(searchedData);
    setSearchChange(searchedData);
  };

  return (
    <div className="pt-2">
      <AsyncPaginate
        placeholder="search for city..."
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
