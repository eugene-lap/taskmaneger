import {
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
} from "../action-types";

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setCountOfPages = (countOfPages: number) => ({
  type: SET_COUNT_OF_PAGES,
  countOfPages,
});