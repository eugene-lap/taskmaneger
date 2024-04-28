import { SET_LINKS_STAtUS, SET_TASK_ACTIVE_STATUS, SET_TASK_STATUS, SET_WIDTH_BLOCK } from "../action-types"

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