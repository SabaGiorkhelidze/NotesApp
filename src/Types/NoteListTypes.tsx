import { Tag } from "./AppTypes";
export type SimplifiedNotes = {
  tags: Tag[];
  title: string;
  id: string;
};

export type NoteListProp = {
  availableTags: Tag[];
  notes: SimplifiedNotes[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};
