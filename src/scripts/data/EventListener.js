import {
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  getLoggedInUser,
  logoutUser,
  loginUser,
  registerUser,
  getUserPosts,
} from "../data/DataManager.js";
import {
  showPostList,
  showPostEntry,
  showLoginRegister,
  checkForUser,
  startGiffyGram,
} from "../main.js";
import { PostList } from "../feed/PostList.js";
import { PostEdit } from "../feed/PostEdit.js";
import { LoginForm } from "../auth/LoginForm.js";
import { RegisterForm } from "../auth/RegisterForm.js";

export const EventListeners = () => {
  // -------------------Functions----------------------

  const showEdit = (postObj) => {
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEdit(postObj);
  };

  // ===========================EVENT LISTENERS================================
  const applicationElement = document.querySelector(".giffygram");

  applicationElement.addEventListener("click", (event) => {
    if (event.target.id.startsWith("edit")) {
      console.log("post clicked", event.target.id.split("--"));
      console.log("the id is", event.target.id.split("__")[1]);
    }
  });

  applicationElement.addEventListener("click", (event) => {
    // event.preventDefault();
    if (
      event.target.id === "newPost__submit" &&
      document.querySelector("input[name='postTitle']").value.length > 0 &&
      document.querySelector("input[name='postURL']").value.length > 0 &&
      document.querySelector("textarea[name='postDescription']").value.length >
        0
    ) {
      //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value;
      const url = document.querySelector("input[name='postURL']").value;
      const description = document.querySelector(
        "textarea[name='postDescription']"
      ).value;
      const userId = getLoggedInUser().id;
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
        title: title,
        imageURL: url,
        description: description,
        userId: userId,
        timestamp: Date.now(),
      };

      // be sure to import from the DataManager
      createPost(postObject);
      showPostList();
      entryElement.style.display = "none";
    } else if (event.target.id === "newPost_submit") {
      showPostEntry();
    }
  });

  applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "newPost__cancel") {
      //clear the input fields
      entryElement.style.display = "none";
    }

    applicationElement.addEventListener("change", (event) => {
      if (event.target.id === "yearSelection") {
        const yearAsNumber = parseInt(event.target.value);
        console.log(`User wants to see posts since ${yearAsNumber}`);
        //invoke a filter function passing the year as an argument
        showFilteredPosts(yearAsNumber);
      }
    });
  });

  applicationElement.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.id.startsWith("delete")) {
      const postId = event.target.id.split("__")[1];
      deletePost(postId).then((response) => {
        showPostList();
      });
    }
  });

  applicationElement.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.id.startsWith("edit")) {
      const postId = event.target.id.split("__")[1];
      getSinglePost(postId).then((response) => {
        showEdit(response);
        entryElement.style.display = "flex";
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });

  applicationElement.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.id.startsWith("updatePost")) {
      const postId = event.target.id.split("__")[1];
      //collect all the details into an object
      const title = document.querySelector("input[name='postTitle']").value;
      const url = document.querySelector("input[name='postURL']").value;
      const description = document.querySelector(
        "textarea[name='postDescription']"
      ).value;
      const timestamp = document.querySelector("input[name='postTime']").value;

      const postObject = {
        id: parseInt(postId),
        title: title,
        imageURL: url,
        description: description,
        userId: getLoggedInUser().id,
        timestamp: parseInt(timestamp),
      };

      updatePost(postObject).then((response) => {
        showPostList();
        showPostEntry();
      });
    }
  });

  const entryElement = document.querySelector(".entryForm");
  applicationElement.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.id === "login__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
      };
      loginUser(userObject).then((dbUserObj) => {
        if (dbUserObj) {
          sessionStorage.setItem("user", JSON.stringify(dbUserObj));
          startGiffyGram();
          entryElement.style.display = "none";
        } else {
          //got a false value - no user
          entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
        }
      });
    }
  });

  applicationElement.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.id === "register__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='registerName']").value,
        email: document.querySelector("input[name='registerEmail']").value,
      };
      registerUser(userObject).then((dbUserObj) => {
        sessionStorage.setItem("user", JSON.stringify(dbUserObj));
        startGiffyGram();
      });
    }
  });

  applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "logout") {
      logoutUser();
      console.log(getLoggedInUser());
      sessionStorage.clear();
      checkForUser();
      entryElement.style.display = "flex";
    }
  });

  const checkbox = document.getElementById("userPost");
  checkbox.addEventListener("change", (event) => {
    const postElement = document.querySelector(".postList");
    if (event.target.checked) {
      console.log("click");
      getUserPosts().then((response) => {
        postElement.innerHTML = PostList(response);
      });
    } else {
      showPostList();
    }
  });

  applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "entry_button") {
      entryElement.style.display = "flex";
      showPostEntry();
    }
  });

  applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "homeIcon") {
      console.log("You clicked on da peanut butter");
    }
  });

  applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "directMessageIcon") {
      console.log("You clicked on da pen");
    }
  });
};
