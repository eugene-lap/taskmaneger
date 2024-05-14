import { IModal } from "../../types"
import { SET_LINKS_STAtUS, SET_TASK_ACTIVE_STATUS, SET_TASK_STATUS, SET_WIDTH_BLOCK, SET_PASSWORD_STATUS, TOGGLE_LOADING, TOGGLE_MODAL, TOGGLE_MODAL_USERS } from "../action-types"

export const setLinksStatus = (linksStatus : string) => ({
    type: SET_LINKS_STAtUS,
    linksStatus
})

export const setTaskStatus = (taskStatus : string) => ({
    type: SET_TASK_STATUS,
    taskStatus
})

export const setTaskActiveStatus = (taskActiveStatus : string) => ({
    type: SET_TASK_ACTIVE_STATUS,
    taskActiveStatus
})

export const setWidthBlock = (widthBlock : number) => ({
    type: SET_WIDTH_BLOCK,
    widthBlock
})

export const setPasswordStatus = (passwordStatus : boolean) => ({
    type: SET_PASSWORD_STATUS,
    passwordStatus
})
  export const toggleLoading = (isLoading: boolean) => ({
    type: TOGGLE_LOADING,
    isLoading,
  });

  export const toggleModal = (modalInfo: IModal) => ({
    type: TOGGLE_MODAL,
    modalInfo,
  });

  export const setToggleModalUsers = (active: boolean) => ({
    type: TOGGLE_MODAL_USERS,
    active
  })