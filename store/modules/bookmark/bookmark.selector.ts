import { RootState } from "../../reducer"
import { IBookmark } from "./types/IBookmark"

export const selectBookMark = (state: RootState) => state.bookmark

export const selectBookMarkItemData = (state: RootState): any =>
  selectBookMark(state).bookMark

export const selectBookMarkLoading = (state: RootState): boolean =>
  selectBookMark(state).loading

export const selectBookMarksData = (state: RootState): IBookmark[] =>
  selectBookMark(state).bookMarks
