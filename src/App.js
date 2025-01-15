import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Country from "./component/Country";
import useDebounce from "./useDebounce";

function App() {
  const [allcountry, setAllcountry] = useState([]);
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  useEffect(() => {
    performAPICall();
  }, []);
  
  const performAPICall = async () => {
     
    try {
      const result = await axios.get(
        "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
      );
      setData(result.data);
      setAllcountry(result.data);
    } catch (error) {
      console.error("Error fetching data: " + error);
    } finally {
       
    }
  };
  const performSearchAPICall = async (search) => {
      
    try {
      const result =  allcountry.filter((item)=>{
        console.log(item)
        return item.common.toLowerCase().includes(search.toLowerCase());
      })
      setData(result);
      
    } catch (error) {
      console.error("Error fetching data: " + error);
    } finally {
       
    }
  };

  const debounceSearch = (event, debounceTimeout) => {
    const value = event.target.value;
 
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeOut = setTimeout(async () => {
       
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
