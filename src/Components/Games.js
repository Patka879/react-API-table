import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table} from 'react-bootstrap';
import Filters from "./Filters";
import icon from "../images/icon.png"

export default function Games() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        axios('/series')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => console.log(err))
    }, []);
    console.log(data)

    useEffect(() => {
        setFilteredData(data)
    }, [data])

    function padTo2Digits(num) {
        return String(num).padStart(2, '0');
      }
    
    function randomNumber() {
        const randomInteger = Math.floor(Math.random() * 30) + 1
        return randomInteger
    }
  
    return(
        <div>
            <Filters 
                filterData={function(title, tournamentName) {
                    console.log(title, tournamentName)
                    setFilteredData((title === "" && tournamentName === "") 
                        ? data 
                        : data
                            .filter(dataItem => title === "" ? true : dataItem.title === title)
                            .filter(dataItem => dataItem.tournament.name.toLowerCase().indexOf(tournamentName.toLowerCase()) !== -1)
                    )
                }}
            />
            <Table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>TIME</th>
                        <th>TEAM 1</th>
                        <th></th>
                        <th>TEAM 2</th>
                        <th>TOURNAMENT</th>
                    </tr>
                </thead>
                {filteredData.map(data => (
                        <tbody key={data.id}>
                    <tr>
                        <td>{data.title}</td>
                        <td>{padTo2Digits(new Date(data.startTime).getUTCHours()) + `:` + padTo2Digits(new Date(data.startTime).getUTCMinutes())}</td>
                        <td>
                            <div className="team1-cell">
                                {data.teams[0].name}
                                <img className="team-logo" alt="team-logo" src={data.teams[0].logoUrl} />
                                {randomNumber()}
                            </div>
                        </td>
                        <td><img className="vs-img" src={icon} alt="icon" /></td>
                        <td>
                            <div className="team2-cell">
                                {randomNumber()}
                                <img className="team-logo" alt="team-logo" src={data.teams[1].logoUrl} />
                                {data.teams[1].name}
                            </div>
                        </td>
                        <td>{data.tournament.name}</td>
                    </tr>
                </tbody>))}
            </Table>  
        </div>  
    )
}