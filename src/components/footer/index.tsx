import React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a className="footer__link" href="https://github.com/samshum90">
          <svg className="footer__link-svg" viewBox="0 0 496 512">
            <path
              d="M165.9,397.4c0,2-2.3,3.6-5.2,3.6c-3.3,0.3-5.6-1.3-5.6-3.6c0-2,2.3-3.6,5.2-3.6
	C163.3,393.5,165.9,395.1,165.9,397.4z M134.8,392.9c-0.7,2,1.3,4.3,4.3,4.9c2.6,1,5.6,0,6.2-2s-1.3-4.3-4.3-5.2
	C138.4,389.9,135.5,390.9,134.8,392.9L134.8,392.9z M179,391.2c-2.9,0.7-4.9,2.6-4.6,4.9c0.3,2,2.9,3.3,5.9,2.6
	c2.9-0.7,4.9-2.6,4.6-4.6C184.6,392.2,181.9,390.9,179,391.2z M244.8,8C106.1,8,0,113.3,0,252c0,110.9,69.8,205.8,169.5,239.2
	c12.8,2.3,17.3-5.6,17.3-12.1c0-6.2-0.3-40.4-0.3-61.4c0,0-70,15-84.7-29.8c0,0-11.4-29.1-27.8-36.6c0,0-22.9-15.7,1.6-15.4
	c0,0,24.9,2,38.6,25.8c21.9,38.6,58.6,27.5,72.9,20.9c2.3-16,8.8-27.1,16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5
	c0-27.5,7.6-41.3,23.6-58.9c-2.6-6.5-11.1-33.3,2.6-67.9c20.9-6.5,69,27,69,27c20-5.6,41.5-8.5,62.8-8.5s42.8,2.9,62.8,8.5
	c0,0,48.1-33.6,69-27c13.7,34.7,5.2,61.4,2.6,67.9c16,17.7,25.8,31.5,25.8,58.9c0,96.5-58.9,104.2-114.8,110.5
	c9.2,7.9,17,22.9,17,46.4c0,33.7-0.3,75.4-0.3,83.6c0,6.5,4.6,14.4,17.3,12.1C428.2,457.8,496,362.9,496,252
	C496,113.3,383.5,8,244.8,8z M97.2,352.9c-1.3,1-1,3.3,0.7,5.2c1.6,1.6,3.9,2.3,5.2,1c1.3-1,1-3.3-0.7-5.2
	C100.8,352.3,98.5,351.6,97.2,352.9z M86.4,344.8c-0.7,1.3,0.3,2.9,2.3,3.9c1.6,1,3.6,0.7,4.3-0.7c0.7-1.3-0.3-2.9-2.3-3.9
	C88.7,343.5,87.1,343.8,86.4,344.8z M118.8,380.4c-1.6,1.3-1,4.3,1.3,6.2c2.3,2.3,5.2,2.6,6.5,1c1.3-1.3,0.7-4.3-1.3-6.2
	C123.1,379.1,120.1,378.8,118.8,380.4z M107.4,365.7c-1.6,1-1.6,3.6,0,5.9s4.3,3.3,5.6,2.3c1.6-1.3,1.6-3.9,0-6.2
	C111.6,365.4,109,364.4,107.4,365.7L107.4,365.7z"
            />
          </svg>
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/samuel-shum/"
        >
          <svg
            viewBox="0 0 448 447.98"
            className="footer__link-svg"
            id="linkedin"
          >
            <path
              d="M100.28,448H7.4V148.9h92.88ZM53.79,108.1C24.09,108.1,0,83.5,0,53.8a53.79,53.79,0,0,1,107.58,0C107.58,83.5,83.48,108.1,53.79,108.1ZM447.9,448H355.22V302.4c0-34.7-.7-79.2-48.29-79.2-48.29,0-55.69,37.7-55.69,76.7V448H158.46V148.9h89.08v40.8h1.3c12.4-23.5,42.69-48.3,87.88-48.3,94,0,111.28,61.9,111.28,142.3V448Z"
              transform="translate(0 -0.02)"
            />
          </svg>
        </a>
      </div>
      <div className="footer__rights">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
