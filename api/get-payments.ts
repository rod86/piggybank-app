import { NowRequest, NowResponse } from '@vercel/node';
import { StatusCodes } from 'http-status-codes';

const d = "2020-10-12T15:02:10.560Z";

const payments = [
    { id: 1, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'paid' },
    { id: 2, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'pending' },
    { id: 3, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'pending' },
    { id: 4, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'pending' },
    { id: 5, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'pending' },
    { id: 6, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'pending' },
    { id: 7, concept: "Concept X", amount: 1, createdAt: d, updatedAt: d, status: 'pending' }
];

export default (request: NowRequest, response: NowResponse) => {
    response.status(StatusCodes.OK).json(payments);
};
