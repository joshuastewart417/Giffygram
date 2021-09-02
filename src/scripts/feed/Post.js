export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div class="description">${postObject.description}</div>
        <p>${postObject.timeStamp}</p>
      </section>
    `;
};
