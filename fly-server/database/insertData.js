import data from '../dataset.json' assert { type: 'json'}
import Flight from '../models/Flight.js';
import Origin from '../models/Origin.js';
import Destination from '../models/Destination.js';
import { getPlaces } from '../utils/getPlaces.js';

export const insertData = () => {
    Flight.collection.count((err, count) => {
        if (!err && count === 0) {
            Flight.collection.insertMany(data);
        }
    });

    Origin.collection.count((err, count) => {
        if (!err && count === 0) {
            const places = getPlaces(data, 'origin');
            Origin.collection.insertMany(places);
        }
    });

    Destination.collection.count((err, count) => {
        if (!err && count === 0) {
            const places = getPlaces(data, 'destination');
            Destination.collection.insertMany(places);
        }
    });
}