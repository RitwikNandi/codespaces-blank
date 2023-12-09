import { FC } from "react"

interface LocationTableProps{
    locations:string[];
}

const LocationTable:FC<LocationTableProps>=({locations})=>{
    return (
        <div>
        <h2>Locations</h2>
        <table className="table table-hover">
            <thead>
                <tr><td>Name</td></tr>
            </thead>
            <tbody>
                {
                    locations.map((location, index)=>{
                        return(
                            
                <tr key={index}><td>{location}</td></tr>

                        )
                    })
                }

            </tbody>
        </table>
    </div>
    )
}

export default LocationTable;