import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../App";
import { UseNote } from "../Hooks/UseNote";
type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
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
