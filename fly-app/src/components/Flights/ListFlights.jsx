import React, { useEffect } from 'react'
import { Grid } from '@mui/material';
import { ItemFlight } from './ItemFlight';
import { useGetData } from '../../hooks/useGetData';
import { FLIGHTS_BY_PRICE_AND_AVAILABILITY } from '../../graphql/queris/flights/flightsByPriceAndAvailability';


export const ListFlights = ({ flights, setFlights, dataForm, setDataForm }) => {
    const [getFlights, resultFlights] = useGetData(FLIGHTS_BY_PRICE_AND_AVAILABILITY);
    const { origin, destination, price, availability, limit } = dataForm;

    useEffect(() => {
        if (resultFlights.data) {
            setFlights(resultFlights.data.flightsByPriceAndAvailability);
        }
    }, [resultFlights]);

    useEffect(() => {
        getFlights({
            variables: {
                origin: origin,
                destination: destination,
                price: price,
                availability: Number(availability),
                limit: Number(limit)
            }
        })
    }, [limit]);

    const scrollToEnd = () => {
        setDataForm({ ...dataForm, limit: limit + 20 })
    }

    window.onscroll = () => (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && scrollToEnd();
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {
                flights?.map(item => <ItemFlight item={item} key={item._id} />)
            }
        </Grid>
    )
}
