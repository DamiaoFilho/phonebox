import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Base from "../../components/base/base.js"
import "./style.css"

function Detail(){
    const [contact, setContact] = useState({});
    const params = useParams();

    useEffect(() => {
        try{
        const getContact = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/contact-list-create/${params.id}`)
            setContact(response.data);
        };
        getContact();
        }catch(error){
            console.log("Failed to fecth data", error)
        }
    }, [params.id]);

    if (!contact) {
        return <div>Loading...</div>;
    }
    
    return (
        <Base>
            <div className="details">
                <span>Nome: {contact.name}</span>
                <span>Nome: {contact.email}</span>
                <span>Nome: {contact.telephone}</span>
            </div>
        </Base>
    );
}

export default Detail;