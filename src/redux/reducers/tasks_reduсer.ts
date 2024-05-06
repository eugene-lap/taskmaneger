import { IImgs, ITasksState } from "../../types";
import {
  DELETE_IMGS,
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_IMGS,
} from "../action-types";

const initialState : ITasksState = {
  currentPage: 1,
  countOfPages: 20,
  imgs: []
};

const getInitialState = () => {
  const localState = localStorage.localState;
  if (localState) {
    const parse = JSON.parse(localState);
    const { tasks } = parse;
    return tasks;
  }
  return initialState;
};

const tasksReducer = (state = getInitialState(), action: any) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      const { currentPage } = action;
      return {
        ...state,
        currentPage,
      };
    }
    case SET_COUNT_OF_PAGES: {
      const { countOfPages } = action;
      return {
        ...state,
        countOfPages,
      };
    }
    case SET_IMGS: {
      const { imgs } = action;
      const OldImgsArr = []
      const OldImgs : IImgs[] = state.imgs
      OldImgsArr.push(imgs)
      const newImgs = OldImgsArr.filter(newImg => !OldImgs.some(oldImg => oldImg.nameImgs === newImg.nameImgs))
      return {
        ...state,
        imgs: state.imgs.concat(newImgs),
      };    
    }
      case DELETE_IMGS:
        return{
          ...state,
          imgs: []
        };
    default: {
      return state;
    }
  }
};

export default tasksReducer;
