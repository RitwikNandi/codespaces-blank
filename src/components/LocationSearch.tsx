import { FC, useState } from "react";


interface SearchProp{
    onSearch:(search:string)=>void;
}

const LocationSearch:FC<SearchProp> =({onSearch})=>{
    const [search, setSearch] = useState<string>("St. Halena")
    
    const disableSearch = search.trim()==='';
const addLocation = ()=>{
    onSearch(search)
    setSearch('')
}
    return (
        <div className="container">
        <label>
            Add location 
            <input className="m1-1 mr-1" type="text" value={search} onChange={e=>setSearch(e.currentTarget.value)}/>
        </label>
        <button className="btn btn-primary" onClick={addLocation} disabled={disableSearch}>Search</button>
    </div>
    )
}

export default LocationSearch