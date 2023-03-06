import React, { useState } from "react";
import { Form } from "../../components/Form/Form";
import { ListFlights } from "../../components/Flights/ListFlights";

export const HomePage = () => {

  const [flights, setFlights] = useState(null);
  const [dataForm, setDataForm] = useState({
    price: "",
    availability: "",
    limit: 20,
    origin: "COR",
    destination: "ALL"
  });

  return (
    <>
      <Form dataForm={dataForm} setDataForm={setDataForm} setFlights={setFlights} />
      <ListFlights flights={flights} setFlights={setFlights} dataForm={dataForm} setDataForm={setDataForm} />
    </>
  );
};
