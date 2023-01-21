import Nav from "../../Components/Nav/nav";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../Components/Input/input";
import GetSearch from "../../Components/Searched/getsearch";

function Search() {
  return (
    <div>
      <Nav />
      <Input />
      <GetSearch />
    </div>
  );
}

export default Search;
