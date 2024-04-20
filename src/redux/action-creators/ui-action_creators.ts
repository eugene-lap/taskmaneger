import { SET_LINKS_STAtUS, SET_TASK_STATUS } from "../action-types"

export const setLinksStatus = (linksStatus : string) => ({
    type: SET_LINKS_STAtUS,
    linksStatus
})

export const setTaskStatus = (taskStatus : string) => ({
    type: SET_TASK_STATUS,
    taskStatus
})