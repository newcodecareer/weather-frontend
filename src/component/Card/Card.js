import React, { useEffect, useState } from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';
import Forecast from '../Forecast/Forecast';
import { getWeathers } from '../../api/api';


const Card = () => {
    const [data, setDate] = useState({})

    useEffect(() => {
        const getData = async () => {
            const data = await getWeathers()
            setDate(data.data)
        }
        getData();
    },[])
    
    return (
        <div className='Card'>
            <CardHeader />
            <Forecast data={data}/>
        </div>
    )
}

export default Card;