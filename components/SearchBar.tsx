import React, { useState } from "react";
import { Searchbar, Text } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;
