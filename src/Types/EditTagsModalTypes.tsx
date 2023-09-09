import { Tag } from "./AppTypes";
export type EditTagsModalProps = {
    show: boolean;
    availableTags: Tag[];
    handleClose: () => void;
    onDeleteTag: (id: string) => void
    onUpdateTag: (id: string, label: string) => void
  
  };
  