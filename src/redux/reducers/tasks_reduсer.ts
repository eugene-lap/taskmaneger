import { ITasksState } from "../../types";
import {
  DELETE_FILES,
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_FILES,
} from "../action-types";

const initialState : ITasksState = {
  currentPage: 1,
  countOfPages: 20,
  files: []
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
    case SET_FILES: {
      const { files } = action;
      return {
        files: [...state.files,
          ...files
        ]
      };
    }
    case DELETE_FILES:
        return {
          ...state,
          files: [] 
        };
    default: {
      return state;
    }
  }
};

export default tasksReducer;
