
export interface IStoreState {
  ui: IUiState;
  tasks: ITasksState;
  user: IUserState;
}

export interface IUiState {
  linksStatus: string;
  taskStatus: string;
  taskActiveStatus: string;
  widthBlock: number;
  passwordStatus: boolean
  isLoading: boolean;
  modalInfo: IModal;
  active: boolean
}

export interface ITasksState {
  currentPage: number;
  countOfPages: number;
  imgs: IImgs[];
  previewTask: ITaskPreview,
  task: ITask,
  imagesTask: IImageTask[]
}

export interface IUserState{
  user: IAuthResp;
  userImg: IUserImgs;
  usersTeam: IUserTeam[];
  addUsers: IAddUser[]
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

export interface IUserAutch{
  login: string,
  password: string
}

export interface IAuthResp{
  id: number,
  name: string,
  middleName: string,
  surname: string,
  position: string,
  role: string
  team: number
}

export interface IModal {
  text?: string;
  showModal: boolean;
}

export interface IUserImgs{
  userId: number,
  imgUrl: string
}

export interface INewUser{
  name: string,
  middleName: string,
  surname: string,
  position: string,
  login: string,
  password: string,
  team: number
}

export interface IUserTeam{
  userId: number,
  url: string,
  name: string,
  middleName: string,
  surname: string,
  position: string
}

export interface IAddUser{
  userId: number,
  url: string,
  name: string,
  surname: string,
}

export interface INewTask{
  name: string,
  typeTasks: string,
  team: number,
  openingDate: Date,
  description: string,
  deadline: Date,
  userIds: number[]
}

export interface ITaskPreviewResponse{
  userId: number,
  isCompleted: string,
  agePage: number,
  currentPage: number
}

export interface ITaskPreview{
  countOfPages: number,
  tasks: {
          id: number,
          name: string,
          typeTasks: string,
          progress: number,
          openingDate: Date,
          userTasks: number[]
        }[]
}

export interface ITask{
    id: 1,
    name: string,
    isCompleted: string,
    progress: number,
    openingDate: Date,
    description: string,
    deadline: Date,
    usersCount: number
}

export interface IUpdateActiveTask {
  id: number,
  updateData : {
    fieldToUpdate: string,
    valueToUpdate: number | string
  }[]
}

export interface IImageTask{
  nameImgs: string,
  urlImgs: string,
  textImgs: string,
  timeAdd: Date;
  name: string,
  middleName: string,
  surname: string
}