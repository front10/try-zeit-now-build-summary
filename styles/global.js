// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  .title {
    font-weight: normal;
  }
  .layout {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        rgba(227, 227, 227, 0.7) 0.01em,
        transparent 0.1em
      ),
      linear-gradient(90deg, rgba(236, 236, 236, 0.7) 0.01em, transparent 0.1em);
    background-size: 2em 2em;
  }
  .tiny-container {
    width: 600px;
  }
  .logo {
    vertical-align: -5px;
    border-radius: 4px;
    margin-right: 0.5ch;
  }
  a {
    color: #067df7;
    text-decoration: none;
  }
  .fr-bg-black {
    background-color: #000 !important;
  }
  a.fr-bg-black:focus,
  a.fr-bg-black:hover,
  button.fr-bg-black:focus,
  button.fr-bg-black:hover {
    background-color: #202020 !important;
  }
`;
