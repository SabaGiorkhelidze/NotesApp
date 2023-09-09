import NoteForm from "./NoteForm";
import { newNoteProps } from "../Types/NewNoteTypes";
const NewNote = ({ onSubmit, onAddTag, availableTags }: newNoteProps) => {
  return (
    <div>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default NewNote;
