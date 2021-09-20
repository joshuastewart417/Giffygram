export const Post = (postObject) => {
  const dateObj = new Date(postObject.timestamp);
  const formattedDate = dateObj.toDateString();
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div class="description">${postObject.description}</div>
        <p>${formattedDate}</p>
        <p>Posted by: ${postObject.user.name} ${postObject.user.surname}</p>
        <button id="edit__${postObject.id}">Edit</button>
        <button id="delete__${postObject.id}">Delete</button>
      </section>
    `;
};
