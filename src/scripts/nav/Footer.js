export const Footer = () => {
  // HTML to be returned to GiffyGram component
  return `
        <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
                <span id="postCount">0</span>
            </div>
            <div class="userpost_toggle">
                <input name = "checkbox" type="checkbox" id="userPost" value="HTML">
            </div>
        </footer>
    `;
};
