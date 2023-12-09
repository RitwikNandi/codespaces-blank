import { FC, useState } from "react";
import { locationsList } from "../helper";
import LocationSearch from "./LocationSearch";
import LocationTable from "./LocationTable";



const Form = ()=>{
  

    const [locations, setLocations] = useState<string[]>(locationsList);
const addLocation = (location: string)=> setLocations([location, ...locations])



return(
    <>
    <LocationSearch onSearch={addLocation}/>
    <LocationTable locations={locations}/>
    </>
)
}

export default Form;