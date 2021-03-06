import { getLoggedInUser } from "../data/DataManager.js";

export const Post = (postObject) => {
  const dateObj = new Date(postObject.timestamp);
  const formattedDate = dateObj.toDateString();
  if (getLoggedInUser().id === postObject.userId) {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div class="description">${postObject.description}</div>
        <p>${formattedDate}</p>
        <p>Posted by: ${postObject.user.name}</p>
        <button class="like_button" id="like__${postObject.id}">Like</button>
        <button class="postedit_btn" id="edit__${postObject.id}">Edit</button>
        <button class="postdelete_btn" id="delete__${postObject.id}">Delete</button>
      </section>
    `;
  } else {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div class="description">${postObject.description}</div>
        <p>${formattedDate}</p>
        <p>Posted by: ${postObject.user.name}</p>
        <button class="like_button" id="like__${postObject.id}">Like</button>
      </section>
    `;
  }
};
