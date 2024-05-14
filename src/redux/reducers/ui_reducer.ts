import { IStoreState, IUiState } from "../../types";
import { SET_LINKS_STAtUS, SET_PASSWORD_STATUS, SET_TASK_ACTIVE_STATUS, SET_TASK_STATUS, SET_WIDTH_BLOCK, TOGGLE_LOADING, TOGGLE_MODAL, TOGGLE_MODAL_USERS } from "../action-types";

const initialState: IUiState = {
  linksStatus: "taskWindow",
  taskStatus: "completed",
  taskActiveStatus: "description",
  widthBlock: 0,
  passwordStatus: true,
  isLoading: false,
  active: false,
  modalInfo: {
    text: "",
    showModal: false,
  },
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
        case SET_PASSWORD_STATUS:
          const {passwordStatus} = action;
          return{
            ...state,
            passwordStatus
          }
          case TOGGLE_MODAL: {
            const { modalInfo } = action;
            return {
              ...state,
              modalInfo,
            };
          }
          
          case TOGGLE_LOADING: {
            const { isLoading } = action;
            return {
              ...state,
              isLoading,
            };
          }
          case TOGGLE_MODAL_USERS: {
            const { active } = action;
            return {
              ...state,
              active,
            };
          }
      default: {
        return state;
      }
    }
  };
  
  export default uiReducer;