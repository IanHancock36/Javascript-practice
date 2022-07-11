import React, { useState } from 'react';
import './style.css';
import Userdata from './MOCK_DATA.json';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [searchClick, setSearchClick] = useState(false);

  return (
    <div>
      <h1>Search This </h1>
      <input
        type="text"
        placeholder="SEARCH THIS"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => setSearchClick(true)}>SEARCH ME PLEASE</button>
      {searchClick ? (
        <div>
          {Userdata.filter((item) => {
            if (searchText === '') {
              return item;
            } else if (
              searchText.toLowerCase().includes(item.first_name.toLowerCase())
            ) {
              return item;
            }
          }).map((item, index) => {
            return (
              <div key={index}>
                <p>{item.first_name}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}