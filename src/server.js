import { createServer, Response } from 'miragejs';
import { PROFILES_URL, SUBSCRIBE_URL, UNSUBSCRIBE_URL, COMMUNITY_ID_URL } from './constants';

const COMMUNITY_DATA = [
    {
        avatar: "/avatar1.png",
        firstName: "Mary",
        id: "2f1b6bf3-f23c-47e4-88f2-e4ce89409376",
        lastName: "Smith",
        position: "Lead Designer at Company Name"
    },
    {
        avatar: "/avatar2.png",
        firstName: "Bill",
        id: "1157fea1-8b72-4a9e-b253-c65fa1556e26",
        lastName: "Filler",
        position: "Lead Engineer at Company Name",
    },
    {
        avatar: "/avatar3.png",
        firstName: "Tim",
        id: "b96ac290-543c-4403-80fe-0c2d44e84ea9",
        lastName: "Gates",
        position: "CEO at Company Name",
    }
];

createServer({
    routes() {
        this.get(PROFILES_URL,
            () => COMMUNITY_DATA,
            { timing: 4000 });

        this.get(COMMUNITY_ID_URL,
            (schema, request) => {
                let id = request.params.id;
                let profile = COMMUNITY_DATA.find(elem => elem.id === id);
                return profile || new Response(404);
            },
            { timing: 4000 }
        )

        this.post(SUBSCRIBE_URL, (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            console.log(attrs);
        });
        this.post(UNSUBSCRIBE_URL, (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            console.log(attrs);
        });
        this.passthrough();
    },
});





