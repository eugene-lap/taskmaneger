import { IAuthResp, IUserImgs, IUserState, IUserTeam } from "../../types";
import { SET_ADD_USERS, SET_USER, SET_USERS_TEAM, SET_USER_IMGS } from "../action-types";

const initialState: IUserState = {
    user: {} as IAuthResp,
    userImg: {} as IUserImgs,
    usersTeam: [],
    addUsers: [],
};

const getInitialState = () => {
    const localState = localStorage.localState;
    if (localState) {
      const parse = JSON.parse(localState);
      const { user } = parse;
      return user;
    }
    return initialState;
};

const userReducer = (state = getInitialState(), action: any) => {
    switch (action.type) {
      case SET_USER:
        const { user } = action;
        return {
          ...state,
          user,
        };
      case SET_USER_IMGS:
        const { userImg } = action;
        return {
          ...state,
          userImg,
        };
      case SET_USERS_TEAM:
        const { usersTeam } = action;
        return {
          ...state,
          usersTeam,
        };
      case SET_ADD_USERS:
          const { addUsers } = action;
          return {
            ...state,
            addUsers,
          };  
      default: {
        return state;
      }
    }
  };
  
  export default userReducer;