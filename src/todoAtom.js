import produce from "immer";
import { atom } from "jotai";

// Atoms are of two types
// 1. Assign Atom
// 2. Writable Atom



// Assign Atom
const todoAtom = atom([]);


// Writable Atom
export const insertTodoAtom = atom(
    null,
    async (get, set, args) => {
        // 1st Argument in which atom
        // 2nd Argument what value
        set(todoAtom, produce((draft) => { draft.push(args) }))
    }
)

export default todoAtom;