import { Post } from "./Post.js";

export const PostList = (allPosts) => {
  let postHTML = `<h3 class="center">Giffy Feed</h3>`;
  //Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
  for (const postObject of allPosts) {
    //what is a postObject?
    postHTML += Post(postObject);
  }
  return postHTML;
};
