import React, {useState, useEffect} from "react"

export default function Filters({filterData}) {

    const [title, setTitle] = useState("")
    const [tournament, setTournament] = useState("")

    useEffect(() => {
        filterData(title, tournament)
    }, [title, tournament])

    return(
        <div className='filters-container'>
            <div className="select-filter">
            <h3>Filter by Title: </h3>
                <select 
                    onChange = {e => {
                        setTitle(e.currentTarget.value)
                    }} 
                >
                    <option value="">-</option>
                    <option value="CSGO">CSGO</option>
                    <option value="LOL">LOL</option>
                    <option value="DOTA">DOTA</option>
                </select>
            </div>
            <div className="input-filter">
            <h3>Filter by Tournament:</h3>
                <input 
                    onChange = {e => {
                        setTournament(e.currentTarget.value)
                    }}
                    type="text" 
                />
            </div>
        </div>
    )
}