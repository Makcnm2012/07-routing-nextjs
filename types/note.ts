export interface Note {
  content: string;
  createdAt: string;
  id: string;
  tag: string;
  title: string;
  updatedAt: string;
}
export interface NewNote {
  content: string;
  tag: string;
  title: string;
}
