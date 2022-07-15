import React, { useState, useMemo } from 'react';
import './style.css';
import UserData from './MOCK_DATA.json';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [submitSearch, setSubmitSearch] = useState(false);
 const handleChange = (e)=>{
  setSearchText(e.target.value)
 } 
  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <div>
      <h1>Search</h1>
      <input
        value={searchText}
        type="text"
        onChange={debouncedResults}
      />
      <button onClick={() => setSubmitSearch(true)} type="submit">
        Search Me
      </button>
      {submitSearch ? 
      <div>
        {UserData.filter((item) => {
          let searchValue = searchText.toLowerCase();
          let firstName = item.first_name.toLowerCase();
          if (searchValue === '') {
            return item;
          } else if (firstName.includes(searchValue)) {
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
      : null}
    </div>
  );
}

// need state const[searchText,setSearchText] = useState("")
// need state for boolean search list const[submitSearch, setSubmitSearch] = useState(false)

// input  type ='text', onChange={(e)=> setSearchText(e.target.value) value={searchText}}/>

// button type ="submit" onClick={()=> setSubmitSearch(true)}/>

// filter and map the array of data
