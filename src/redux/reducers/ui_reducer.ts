import { IStoreState, IUiState } from "../../types";
import { SET_LINKS_STAtUS, SET_TASK_ACTIVE_STATUS, SET_TASK_STATUS, SET_WIDTH_BLOCK } from "../action-types";

const initialState: IUiState = {
  linksStatus: "taskWindow",
  taskStatus: "completed",
  taskActiveStatus: "description",
  widthBlock: 0
};

const getInitialState = () => {
    const localState = localStorage.localState;
    if (localState) {
      const parse = JSON.parse(localState);
      const { ui } = parse;
      return ui;
    }
    return initialState;
};

const uiReducer = (state = getInitialState(), action: any) => {
    switch (action.type) {
      case SET_LINKS_STAtUS:
        const { linksStatus } = action;
        return {
          ...state,
          linksStatus,
        };
        case SET_TASK_STATUS:
        const { taskStatus } = action;
        return {
          ...state,
          taskStatus,
        };
        case SET_TASK_ACTIVE_STATUS:
        const { taskActiveStatus } = action;
        return {
          ...state,
          taskActiveStatus,
        };
        case SET_WIDTH_BLOCK:
        const { widthBlock } = action;
        return {
          ...state,
          widthBlock,
        };
      default: {
        return state;
      }
    }
  };
  
  export default uiReducer;