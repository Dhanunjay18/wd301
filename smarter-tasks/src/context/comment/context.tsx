import React, { createContext, useContext, useReducer } from "react";
import { CommentState, CommentsDispatch } from "./types";
import { initialState, reducer } from "./reducer";
const CommentStateContext = createContext<CommentState>(initialState);
const CommentDispatchContext = createContext<CommentsDispatch>(() => {});
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};
export const useCommentsState = () => useContext(CommentStateContext);
export const useCommentsDispatch = () => useContext(CommentDispatchContext);
