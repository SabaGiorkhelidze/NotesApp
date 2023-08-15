import { useOutletContext } from "react-router-dom";
import { Note } from "../App";

export function UseNote(){
    return useOutletContext<Note>()
}