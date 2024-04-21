export interface IStoreState {
  ui: IUiState;
  tasks: ITasksState;
}

export  interface IUiState {
  linksStatus: string;
  taskStatus: string;
}

export interface ITasksState {
  currentPage: number;
  countOfPages: number;
}