import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
    const { id } = request.query;

    if (id === undefined) {
        response.status(400).send('missing id');
        return;
    }

    response.status(200).send(`Item id #${id}`);
};