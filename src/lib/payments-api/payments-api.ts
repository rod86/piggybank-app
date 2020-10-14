import fetch, { Response } from 'node-fetch';
import { Payment } from './payment';

class APIRequestError extends Error {
    constructor(public statusCode: number, public message: string) {
        super(message);
    }
}

const checkResponse = (response: Response): Promise<any> => {
    if (!response.ok) {
        throw new APIRequestError(response.status, 'An error ocurred in api request payments api');
    }

    return response.json();
};

const getPayments = (): Promise<Payment[]> => {
    return fetch('http://localhost:3000/api/get-payments')
        .then(res => checkResponse(res))
        .then(data => data as Payment[]);
}

export { getPayments };