import { put, takeEvery } from "redux-saga/effects";
import { AUTH, GET_USER_IMGS , SET_USER_IMGS,  SET_USER, ADD_NEW_USER, GET_USERS_TEAM, SET_USERS_TEAM, SET_ADD_USERS } from "../action-types";
import { IAddUser, IAuthResp, INewUser, IUserAutch, IUserImgs, IUserTeam } from "../../types";
import { toggleModal } from "./ui-action_creators";


export const auth = (authData : IUserAutch) => ({
    type: AUTH,
    authData
})

export const setUser = (user : IAuthResp) => ({
    type: SET_USER,
    user
})

export const getUserImgs = (userId: number) => ({
  type: GET_USER_IMGS,
  userId
})

export const setUserImgs = (userImg: IUserImgs) => ({
  type: SET_USER_IMGS,
  userImg
})

export const addNewUser = (newUser: INewUser) => ({
  type: ADD_NEW_USER,
  newUser
})

export const getUsersTeam = (team: number) => ({
  type: GET_USERS_TEAM,
  team
})

export const setUsersTeam = (usersTeam: IUserTeam[]) => ({
  type: SET_USERS_TEAM,
  usersTeam
})

export const setAddUsers = (addUsers: IAddUser[]) => ({
  type: SET_ADD_USERS,
  addUsers
})

function* fetchAuth(action: any){
    const {authData} = action
    const resp: Response =  yield fetch(
      'http://localhost:8080/user/auth',
    {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(authData)
    }
    )
    if(resp.status === 200){
        const res : IAuthResp = yield resp.json();
        yield put(setUser(res))
        window.location.pathname = "/mainWindow"
    } else{
      const res : string = yield resp.text();
      yield put(
        toggleModal({
          showModal: true,
          text: res,
        })
      ); 
    }
  }

  function* fetchGetUserImgs(action: any){
    const {userId} = action
    const resp: Response =  yield fetch(
      `http://localhost:8080/user/get-images?userId=${userId}`,
    {
      method: "GET",
    }
    )
    if(resp.status === 200){
      const res: IUserImgs = yield resp.json();
      yield put(setUserImgs(res));
    }
  }

  function* fetchAddNewUser(action: any){
    const {newUser} = action
    const resp: Response =  yield fetch(
      'http://localhost:8080/user/registration',
    {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newUser)
    }
    )
    if(resp.status === 200){
      yield put(
        toggleModal({
          showModal: true,
          text: 'Пользователь успешно создан',
        })
      ); 
    } else{
      yield put(
        toggleModal({
          showModal: true,
          text: 'Некоректно введенные данные, попробуйте еще раз',
        })
      ); 
    }
  }

  function* fetchGetUsersTeam(action: any){
    const {team} = action
    const resp: Response =  yield fetch(
      `http://localhost:8080/user/team?team=${team}`,
    {
      method: "GET",
    }
    )
    if(resp.status === 200){
      const res: IUserTeam[] = yield resp.json();
      yield put(setUsersTeam(res));
    }
  }


export function* watcherTask(){
    yield takeEvery(AUTH, fetchAuth)
    yield takeEvery(GET_USER_IMGS, fetchGetUserImgs)
    yield takeEvery(ADD_NEW_USER, fetchAddNewUser)
    yield takeEvery(GET_USERS_TEAM, fetchGetUsersTeam)
  }