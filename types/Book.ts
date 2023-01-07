export interface BookI {
  title: string;
  genre: string;
  author: string;
  read?: boolean;
  id?: string;
}

export interface PatchBookI {
  title?: string;
  genre?: string;
  author?: string;
  read?: boolean;
}
