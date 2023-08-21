import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { addComment, getComments } from "../../../context/comment/actions";
import { useCommentsDispatch } from "../../../context/comment/context";
import { Comment } from "../../../context/comment/types";
import { CommentListItems } from "./CommentListItems";
export const Comments = () => {
  const CommentsDispatch = useCommentsDispatch();
  const { projectID, taskID } = useParams();
  console.log(projectID, " ", taskID)
  useEffect(() => {
    getComments(CommentsDispatch, projectID!, taskID!);
  }, [CommentsDispatch, projectID, taskID]);
  type Inputs = {
    description: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { description } = data; 
    if (!description.trim()) {
      return;
    }
    const comment: Comment = {
      description: description,
    };
    try {
      addComment(CommentsDispatch, projectID!, taskID!, comment);
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Comment:
          </label>
          <input
            id="commentBox"
            type="text"
            {...register("description", { required: true })}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <button
          id="addCommentBtn"
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Comment
        </button>
      </form>
      <CommentListItems />
    </>
  );
};
