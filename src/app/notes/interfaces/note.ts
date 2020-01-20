export interface Note {
  id?: number;
  userId?: number;
  title: string;
  body: string;
  favourite?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
