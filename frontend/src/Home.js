import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
        const navigate = useNavigate();
        const handleDelete = (id) => {
            axios.delete('http://localhost:8081/delete/'+id)
            .then(res => navigate('/'))
            .catch(err => console.log(err));
        }
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50'>
                <h2>My CRUD App</h2>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td className="text-left">{d.name}</td>
                                <td className="text-left">{d.phone}</td>
                                <td className="text-left">{d.email}</td>
                                <td>
                                <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary'>Update</Link>
                                    <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;


