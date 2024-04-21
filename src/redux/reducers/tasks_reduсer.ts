import { IStoreState, ITasksState } from "../../types";
import {
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
} from "../action-types";

const initialState = {
  currentPage: 1,
  countOfPages: 20,
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
    default: {
      return state;
    }
  }
};

export default tasksReducer;
