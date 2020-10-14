import { NowRequest, NowResponse } from '@vercel/node';

const d = [
    { name: "Lorem", age: 10},
    { name: "Ipsum", age: 20},
    { name: "Etsit", age: 30},
    { name: "Amet", age: 44}
];

export default (request: NowRequest, response: NowResponse) => {
    response.status(200).json(d);
};
