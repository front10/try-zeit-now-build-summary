import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>      <img
        className="logo"
        with="32"
        height="32"
        alt=""
        src="/static/front10.png"
      /></a>
        </Link>
      </li>
      <li>
        <span>Fork me, tweak me and <a target="_blank" href="https://github.com/front10/try-zeit-now-build-summary/pulls">Submit a PR</a> to play with <a href="https://zeit.co/blog/build-summary" target="_blank">ZEIT Build Summaries</a>.😀</span>
      </li>
      <li>
        <a target="_blank" href="https://github.com/front10/try-zeit-now-build-summary/pulls">GitHub</a>
        <span>&nbsp;|&nbsp;</span><a target="_blank" href="https://gitlab.com/front10/try-zeit-build-summary/merge_requests">Gitlab</a>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
        margin: 0px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      span {
        font-size: 15px;
      }
    `}</style>
  </nav>
)

export default Nav
