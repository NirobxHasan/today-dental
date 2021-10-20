import React from 'react';
import './Doctor.css';
const Doctor = (props) => {
    const { name, age, email, img } = props.doctor;
    return (
        <div className="doctor-card">
            <div className="profile-image">
                <img src={img} alt="" />
            </div>
            <div className="name my-3">
                <h4>{name}</h4>
            </div>
            <div className="doctorinfo">
                <p>Age: {age}</p>
                <h6 className="fw-bold">Dentist</h6>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Doctor;
