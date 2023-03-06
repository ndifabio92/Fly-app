import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { formSchema } from '../../components/validationSchema/formSchema'
import { SelectPrimary } from '../ui/Select/SelectPrimary';
import { TextInput } from '../ui/TextField/TextInput';
import { ButtonPrimary } from '../ui/Button/ButtonPrimary';
import { Box } from '@mui/material';
import { swalAlert } from '../../utils/swalAlert';
import { useGetData } from '../../hooks/useGetData';
import { FLIGHTS_BY_PRICE_AND_AVAILABILITY } from '../../graphql/queris/flights/flightsByPriceAndAvailability';
import { ALL_DESTINATIONS } from '../../graphql/queris/destinations/destinations';
import { ALL_ORIGINS } from '../../graphql/queris/origins/origins';


export const Form = ({ dataForm, setDataForm, setFlights }) => {

    const [getFlights, resultFlights] = useGetData(FLIGHTS_BY_PRICE_AND_AVAILABILITY);
    const [getOrigins, resultOrigin] = useGetData(ALL_ORIGINS);
    const [getDestinations, resultDestination] = useGetData(ALL_DESTINATIONS);

    if (resultOrigin.error || resultDestination.error) {
        swalAlert('error', 'Error', 'Fallo el intento de llamado a la API')
        console.error(resultOrigin.error);
    }

    const [origins, setOrigins] = useState(null);
    const [destinations, setDestinations] = useState(null);

    const { origin, destination, price, availability } = dataForm;

    useEffect(() => {
        getOrigins();
        getDestinations();
    }, []);

    useEffect(() => {
        if (resultOrigin.data) {
            setOrigins(resultOrigin.data.allOrigins);
        }

        if (resultDestination.data) {
            setDestinations(resultDestination.data.allDestinations);
        }

        if (resultFlights.data) {
            !(resultFlights.data.flightsByPriceAndAvailability.length === 0) ?
                setFlights(resultFlights.data.flightsByPriceAndAvailability) :
                swalAlert('info', 'No se encontraron vuelos', 'Por favor ingrese nuevos parametros de busqueda')
        }

    }, [resultOrigin, resultDestination, resultFlights]);

    const formik = useFormik({
        initialValues: {
            price: price,
            availability: availability,
            origin: origin,
            destination: destination
        },
        validationSchema: formSchema,
        onSubmit: ({ price, availability, origin, destination }) => {
            setDataForm({ price, availability, limit: 20, origin, destination });
            getFlights({
                variables: {
                    origin: origin,
                    destination: destination,
                    price: price,
                    availability: Number(availability),
                    limit: Number(20)
                }
            })
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{
                display: "flex",
                justifyContent: "center"

            }}>
                <Box sx={{
                    width: "80vw",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    border: "2px solid black",
                    height: "120px",
                    mt: "120px"
                }}>
                    <SelectPrimary
                        title="Origen"
                        name="origin"
                        value={formik.values.origin}
                        onChange={formik.handleChange}
                        items={origins}
                        valueItem="origin"
                    />
                    <SelectPrimary
                        title="Destino"
                        name="destination"
                        value={formik.values.destination}
                        onChange={formik.handleChange}
                        items={destinations}
                        valueItem="destination"
                    />
                    <TextInput
                        id="price"
                        name="price"
                        label="Presupuesto"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price}
                    />

                    <TextInput
                        id="availability"
                        name="availability"
                        label="Cantidad de Pasajeros"
                        type="string"
                        value={formik.values.availability}
                        onChange={formik.handleChange}
                        error={formik.touched.availability && Boolean(formik.errors.availability)}
                        helperText={formik.touched.availability && formik.errors.availability}
                    />

                    <ButtonPrimary variant="contained" type="submit" title="Buscar" />
                </Box>
            </Box>
        </form>
    )
}
