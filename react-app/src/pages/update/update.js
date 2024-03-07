import React, { useEffect, useState } from "react"
import axios from "axios"
import Base from "../../components/base/base"
import { useParams } from "react-router-dom";


function Update(){
    const params = useParams()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/contact-list-create/${params.id}`);
            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/contact-list-create/${params.id}/`, formData);
            // Redirect to the detail page or show success message
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <Base>
            <div className="createForm">
                <form className="createForm" onSubmit={handleSubmit}>
                    <div>    
                        <label htmlFor="name" className="required" title="Preenchimento obrigatório">Nome:</label>
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="name" className="required" title="Preenchimento obrigatório">Email:</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="name" className="required" title="Preenchimento obrigatório">Telefone:</label>
                        <input id="telephone" type="number" name="telephone" value={formData.telephone} onChange={handleChange} />
                    </div>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </Base>
    )
}

export default Update;