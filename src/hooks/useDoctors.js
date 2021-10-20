import { useEffect, useState } from 'react';

// load all the teachers
const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return { doctors };
};

export default useDoctors;
