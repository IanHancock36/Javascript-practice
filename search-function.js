import "./App.css";
import React, { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search....."
        onChange={(e) => {
       setSearchTerm(e.target.value);
        }}
      />
      {JSONDATA.filter((value)=>{
        if(searchTerm === ""){
          return value
        }else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return value
        }})
      .map((value, key) => {
        return (
          <div className="user" key={key}>
            <p>{value.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [searchValue, setSearchValue] = useState("");

  const onChangeTextHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={onChangeTextHandler}
        />
        <button onClick={() => onSearch(searchValue)}>Search Text</button>
      </div>
      <div className="user">
        {JSONDATA.filter((item) => {
          const searchTerm = searchValue.toLowerCase();
          const fullName = item.first_name.toLowerCase();
          return fullName.startsWith(searchTerm);
        }).map((item) => {
          return <div>{item.first_name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;