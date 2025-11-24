import api from './api';

export const createBooking = async (flightId, noOfSeats = 1) => {
    // POST /api/v1/bookings
    const response = await api.post('/bookings', {
        flightId,
        noofSeats: noOfSeats
    });
    return response.data;
};

export const makePayment = async (bookingId, totalCost) => {
    // Generate a random idempotency key (browser native)
    const idempotencyKey = crypto.randomUUID();

    // POST /api/v1/bookings/payments
    const response = await api.post('/bookings/payments', 
        { bookingId, userId: 1, totalCost }, // Hardcoding userId: 1 for demo if not in context
        {
            headers: {
                'x-idempotency-key': idempotencyKey
            }
        }
    );
    return response.data;
};
