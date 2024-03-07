import axios from "axios";
import React, { useState } from "react";
import "./style.css"
function Create(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axios.post('http://127.0.0.1:8000/api/contact-list-create/', formData)
        }catch(error){
            console.log("Error creating object", error)
        }
    }

    return (
        <div className="createForm">
            <form className="createForm" onSubmit={handleSubmit}>
                <div>    
                    <label for="name" class="required" title="Preenchimento obrigatório">Nome:</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label for="name" class="required" title="Preenchimento obrigatório">Email:</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label for="name" class="required" title="Preenchimento obrigatório">Telefone:</label>
                    <input id="telephone" type="number" name="telephone" value={formData.telephone} onChange={handleChange} />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default Create;