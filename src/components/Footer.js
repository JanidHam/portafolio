import * as React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className='container'>
          <div className='flex social-container'>
            <Link href='https://www.linkedin.com/in/janidham'>
              <a target='_blank' rel='noopener noreferrer'>
                <img src='/static/icon/linkedin.svg' alt='GitHub' />
              </a>
            </Link>
            <Link href='https://github.com/JanidHam'>
              <a target='_blank' rel='noopener noreferrer'>
                <img src='/static/icon/github.svg' alt='LinkedIn' />
              </a>
            </Link>
            <Link href='https://twitter.com/janidham'>
              <a target='_blank' rel='noopener noreferrer'>
                <img src='/static/icon/twitter.svg' alt='Twitter' />
              </a>
            </Link>
            <Link href='https://www.instagram.com/janidham'>
              <a target='_blank' rel='noopener noreferrer'>
                <img src='/static/icon/instagram.svg' alt='Instagram' />
              </a>
            </Link>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            color: #fff;
            background: rgb(114, 216, 234);
            box-shadow: none;
            transition: all .8s;
            padding: 2em 0;
            width: 100%;
            z-index 1000;
          }

          .social-container {
            flex: 1;
            justify-content: center;
          }

          .social-container a:first-child {
            margin-left: 0;
          }

          .social-container a {
            margin-left: 1em;
          }
        `}
      </style>
    </React.Fragment>
  )
}
