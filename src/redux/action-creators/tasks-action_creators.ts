import { IFile } from "../../types";
import {
  DELETE_FILES,
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_FILES,
} from "../action-types";

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setCountOfPages = (countOfPages: number) => ({
  type: SET_COUNT_OF_PAGES,
  countOfPages,
});

export const setFiles = (files: IFile[]) => ({
  type: SET_FILES,
  files
})

export const deleteFiles = () => ({
  type: DELETE_FILES
})