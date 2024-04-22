export interface IStoreState {
  ui: IUiState;
}

export  interface IUiState {
  linksStatus: any;
  taskStatus: any;
}

export type User = {
  photo: string;
  name: string;
  position: string;
}