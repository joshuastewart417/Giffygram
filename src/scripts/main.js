// Can you explain what is being imported here?
import { getPosts, getUsers } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/Navbar.js";
import { footerHTML } from "./nav/Footer.js";

const showPostList = () => {
  //Get a reference to the location on the DOM where the list will display
  const postElement = document.querySelector(".postList");
  getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  });
};

const showNavBar = () => {
  //Get a reference to the location on the DOM where the nav will display
  const navElement = document.querySelector("nav");
  navElement.innerHTML = NavBar();
};

showNavBar();

const showFooter = () => {
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = footerHTML();
};

showFooter();

const startGiffyGram = () => {
  showPostList();
};

startGiffyGram();
