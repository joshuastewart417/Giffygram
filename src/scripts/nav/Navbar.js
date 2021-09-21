export const NavBar = () => {
  return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img id="homeIcon" src="./images/pb.png" alt="Giffygram icon" />
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">
                <input type="text" id="postSearch" placeholder="Search posts..." />
            </div>
            <div class="navigation_item navigation__addnew">
                <button id="entry_button" class="entry">Add New Gif!</button>
            </div>    
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="./images/fountain-pen.svg" alt="Direct message" />
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `;
};
