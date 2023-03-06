import * as yup from 'yup';
export const formSchema = yup.object({
    price: yup
        .string('Ingrese el presupuesto')
        .matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, "Solo acepta numeros")
        .required('El presupuesto es requerido'),
    availability: yup
        .string('Ingrese la cantidad de pasajeros')
        .matches(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/, "Solo acepta numeros")
        .min(1, 'La cantidad de pasajeros tiene que ser minimo 1')
        .max(10, 'Alcanzaste la máxima cantidad de pasajeros que es 10')
        .required('La cantidad de pasajeros es requerida')
});