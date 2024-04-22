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

export type UserStatistic = {
  allTime: number;
  closedTasks: number;
  developedTasks: number;
  recyclingTime: number;
  lateness: number;
}

export type StatisticItemType = {
  icon: string;
  title: string;
  info: string;
}