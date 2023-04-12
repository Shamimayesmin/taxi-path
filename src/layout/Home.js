import React from 'react';
import Banner from '../components/pages/Banner';
import TaxiPath from '../components/pages/TaxiPath';
import Service from '../components/pages/Service';
import ChooseUs from '../components/pages/ChooseUs';
import Form from '../components/pages/Form';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <TaxiPath></TaxiPath>
                <div className="divider w-full"></div> 
                <Service></Service>
                <ChooseUs></ChooseUs>
                <Form></Form>
            </div>
            
        </div>
    );
};

export default Home;