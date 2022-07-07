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