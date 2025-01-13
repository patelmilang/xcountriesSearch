import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Country from "./component/Country";
import useDebounce from "./useDebounce";

function App() {
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  useEffect(() => {
    performAPICall();
  }, []);
  
  const performAPICall = async () => {
     
    try {
      const result = await axios.get(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data: " + error);
    } finally {
       
    }
  };
  const performSearchAPICall = async (search) => {
     console.log('search',search)
    try {
      const result = await axios.get(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data: " + error);
    } finally {
       
    }
  };

  const debounceSearch = (event, debounceTimeout) => {
    const value = event.target.value;
console.log(value);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeOut = setTimeout(async () => {
      console.log('search');
      await performSearchAPICall(value);
    }, 1000);
    setDebounceTimeout(timeOut);
  };

  return (
    <div style={{padding:"20px"}} >
     <input type="text" 
     placeholder="Search for Countries"
     onChange={(e) => debounceSearch(e, debounceTimeout)} 
     name="search" style={{width:'80%',marginBottom:"10px"}} />
     <Country countries={data} /> 
    </div>
  );
}

export default App;
