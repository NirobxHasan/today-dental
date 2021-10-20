import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Serivces = () => {
    const { services } = useServices();

    return (
        <div>
            <div className="container mt-5">
                <Row xs={1} md={2} lg={3} className="mx-3 g-3">
                    {services.map((service) => (
                        <Service key={service.id} service={service} />
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Serivces;
