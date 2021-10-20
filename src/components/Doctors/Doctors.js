import React, { useEffect, useState } from 'react';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

import './Doctors.css';
const Teachers = () => {
    const { doctors } = useDoctors();
    return (
        <div className="doctor-container">
            <div className="doctor-section">
                {doctors.map((doctor) => (
                    <Doctor doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default Teachers;
