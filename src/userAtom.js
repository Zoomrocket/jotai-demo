import { atom } from "jotai";

const initalUser = {
    email: "",
    name: ""
}

// Assigning
const userAtom = atom(initalUser);

export const loginAtom = atom(null, (get, set, args) => {
    set(userAtom, {
        email: "harish@zoomrocket.co",
        name: "harish"
    })

});


export default userAtom;