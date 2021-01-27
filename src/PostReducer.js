import { actions } from "./actions";

function PostReducer(state, action) {
  switch (action.type) {
    case actions.ADD_POST: {
      const newPost = action.payload.postCreated;
      return { posts: [newPost, ...state.posts] };
    }
    case actions.DELETE_POST: {
      const deletedPostId = action.payload.id;
      const updatedPostslist = state.posts.filter(
        (post) => post.id !== deletedPostId
      );
      return { posts: updatedPostslist };
    }
    default:
      return state;
  }
}

export default PostReducer;
