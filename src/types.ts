
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
  files: IFile[];
}

export interface IFile {
  name: string,
  size: number,
  type: string,
}