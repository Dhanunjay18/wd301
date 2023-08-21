export enum CommentAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
} 
export type CommentActions =
  | { type: CommentAvailableAction.FETCH_COMMENTS_REQUEST }
  | { type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: CommentAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableAction.CREATE_COMMENT_REQUEST }
  | { type: CommentAvailableAction.CREATE_COMMENT_SUCCESS; payload: Comment }
  | { type: CommentAvailableAction.CREATE_COMMENT_FAILURE; payload: string };
export interface Comment {
  description: string;
}
export interface CommentState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
export type CommentsDispatch = React.Dispatch<CommentActions>;
