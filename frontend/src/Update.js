import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    // Fetch user data based on the id parameter
    axios.put(`http://localhost:8081/update/${id}`, { name, phone, email })
      .then((res) => {
        const userData = res.data;
        setName(userData.name);
        setPhone(userData.phone);
        setEmail(userData.email);
      })
      .catch((err) => console.log(err));
  }, [id]); // Make sure to include id in the dependency array

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/update/${id}`, { name, phone, email })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rouded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name} // Set value attribute to name state
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone"
              className="form-control"
              value={phone} // Set value attribute to phone state
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email} // Set value attribute to email state
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
