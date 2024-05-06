
export interface IStoreState {
  ui: IUiState;
  tasks: ITasksState;
}

export  interface IUiState {
  linksStatus: string;
  taskStatus: string;
  taskActiveStatus: string;
  widthBlock: number;
}

export interface ITasksState {
  currentPage: number;
  countOfPages: number;
  imgs: IImgs[];
}

export interface IFile {
  name: string,
  size: number,
  type: string,
}

export interface IImgs{
  urlImgs: string,
  nameImgs: string,
  textImgs?: string,
  timeAdd?: Date,
  tasks?: number,
  users?: number
}