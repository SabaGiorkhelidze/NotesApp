import NoteForm from "./NoteForm";
import { UseNote } from "../Hooks/UseNote";
import { EditNoteProps } from "../Types/EditNoteTypes";

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = UseNote();
  return (
    <div>
      <h1 className="mb-4">EditNote</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default EditNote;
