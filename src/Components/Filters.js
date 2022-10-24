import React, {useState, useEffect} from "react"

export default function Filters({filterData}) {

    const [title, setTitle] = useState("")
    const [tournament, setTournament] = useState("")

    useEffect(() => {
        filterData(title, tournament)
    }, [title, tournament])

    return(
        <div>
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
            <input 
                onChange = {e => {
                    setTournament(e.currentTarget.value)
                }}
                type="text" />
        </div>
    )
}