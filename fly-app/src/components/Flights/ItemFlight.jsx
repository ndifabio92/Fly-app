import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import moment from 'moment';

export const ItemFlight = ({ item }) => {
    const days = Math.floor(Math.random() * (30 - 0) + 0);
    const finalDate = moment(item.data).add(days, 'days').format('YYYY-MM-DD');

    return (
        <Card sx={{
            width: "400px",
            height: "300px",
            mt: 5,
            ml: 5,
            background: 'rgb(184, 227, 151)',
            borderRadius: '40px 0 40px 0'
        }}
            key={item._id}
        >
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" justifyContent="space-between" display="flex">
                    <FlightTakeoffIcon fontSize="large" />
                    {item.origin.origin}
                    <ArrowRightAltIcon fontSize="large" />
                    {item.destination.destination}
                    <FlightLandIcon fontSize="large" />
                </Typography>
                <Typography variant="body1" sx={{ mt: 5 }}>
                    Fecha de Ida: {item.data}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Fecha de Vuelta: {finalDate}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Cantidad de dias: {days}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Lugares Disponibles: {item.availability}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Precio: ${item.price}
                </Typography>
            </CardContent>
        </Card >
    )
}
