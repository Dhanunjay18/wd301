import { API_ENDPOINT } from "../../config/constants";
import { CommentAvailableAction, CommentsDispatch, Comment } from "./types";
export let getComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const authToken = localStorage.getItem("authToken") ?? "";

  function comparator(a: any, b: any) {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();

    if (timeA > timeB) {
      return -1;
    } else if (timeA < timeB) {
      return 1;
    } else {
      return 0;
    }
  }
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    let comments = await response.json();
    comments = comments.sort(comparator);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: comments,
    });
  } catch (error) {
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};
export const addComment = async (
  dispatch: CommentsDispatch,
  project_id: string,
  task_id: string,
  comment: Comment
) => {
  const authToken = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableAction.CREATE_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }
    const payload = await response.json();
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};
