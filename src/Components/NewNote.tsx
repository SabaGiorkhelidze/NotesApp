import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../App";
type newNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
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
