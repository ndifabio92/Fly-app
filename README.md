Se
Se crea una aplicacion para que un usuario pueda buscar vuelos filtrando por diferente parametros, esto devuelve una lista de cards con los valores obtenidos

Se realiza con las siguiente tecnologias:
App:

- React
- Apollo Client
- Material-UI
- Formik

Server:

- NodeJS
- Express
- GraphQL / Apollo Server
- MondoDB / Mongoose

El dataset con la información necesaria para realizar las búsquedas tiene el siguiente formato:

```js
[
  {
    origin: String,
    destination: String,
    price: Float,
    availability: Number,
    date: String,
  },
];
```
