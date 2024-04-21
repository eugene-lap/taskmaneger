import { IStoreState, IUiState } from "../../types";
import { SET_LINKS_STAtUS, SET_TASK_STATUS } from "../action-types";

const initialState: IUiState = {
  linksStatus: "taskWindow",
  taskStatus: "completed"
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
      default: {
        return state;
      }
    }
  };
  
  export default uiReducer;