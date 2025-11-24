import api from './api';

export const getCities = async () => {
    // GET /api/v1/flights/cities (Assuming you have a cities endpoint, or you can search flights directly)
    // For this demo, we might skip this if you don't have a city list API yet.
    // But normally: return api.get('/flights/cities');
};

export const searchFlights = async (params) => {
    // GET /api/v1/flights?from=DEL&to=MUM&date=...
    // The Gateway proxies this to flightsservice:3002
    const response = await api.get('/flights', { params }); 
    return response.data;
};

export const getFlightById = async (id) => {
    // GET /api/v1/flights/:id
    const response = await api.get(`/flights/${id}`);
    return response.data;
};
