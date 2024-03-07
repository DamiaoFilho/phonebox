import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../deleteButton/delete'
import './table.css';

function SimpleTable(){
    const[data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/contact-list-create/');
            setData(response.data);
        }catch (error){
            console.error('error fetching data:', error);
        }
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data) => (
                    <tr key={data.id}>
                        <th>{data.name}</th>
                        <th>{data.email}</th>
                        <th>{data.telephone}</th>
                        <th>
                            <Link to={`/update/${data.id}`}>Atualizar</Link>
                            <Delete itemId={data.id}/>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SimpleTable;