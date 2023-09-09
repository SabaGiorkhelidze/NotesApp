import { useOutletContext } from "react-router-dom";
import { Note } from "../Types/AppTypes";

export function UseNote(){
    return useOutletContext<Note>()
}