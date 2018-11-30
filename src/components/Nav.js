import * as React from 'react'
import Link from 'next/link'

export default function Header(props) {
  const { urlActive } = props

  return (
    <React.Fragment>
      <header id='nav-bar'>
        <div className='container'>
          <div className='flex'>
            <div className='header-logo'>
              <h1 className='image-text'>
                <Link href='/'>
                  <a>
                    <span className='mask' />
                    <span className='behind' />
                    Janid Ham
                  </a>
                </Link>
              </h1>
            </div>
            <div className='flex nav-container'>
              <nav className='flex'>
                <ul className='nav-list transition'>
                  <li>
                    <Link href='/'>
                      <a className={ urlActive === 'about' ? 'active' : '' }>
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/work'>
                      <a className={ urlActive === 'work' ? 'active' : '' }>
                        Work
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog'>
                      <a>
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <style jsx>
        {`
          #nav-bar {
            color: #fff;
            background: #EAF7FC;
            box-shadow: none;
            transition: all .8s;
            padding: 1em 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
          }

          #nav-bar.nav-shadow {
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);
            background: white;
          }

          .flex {
            flex: 1;
          }

          .container {
            margin-right: auto;
            margin-left: auto;
            padding-left: 15px;
            padding-right: 15px;
          }

          .header-logo {
            flex: .4;
          }

          .nav-container {
            flex: .6;
            align-items: center;
          }

          nav {
            justify-content: flex-end;
          }

          .nav-list {
            padding-left: 0;
          }

          .nav-list li {
            display: block;
            float: left;
          }

          .nav-list li:first-child a {
            margin-left: 0;
          }

          .nav-list li a.active {
            color: #4F7683;
          }

          .nav-list li a {
            display: inline-block;
            text-decoration: none;
            color: rgba(79, 118, 131, 0.5098039215686274);
            font-weight: 400;
            margin: 0 0 0 1em;
            font-size: 130%;
          }

          .image-text {
            -webkit-animation: fadeIn .3s ease-in-out;
            -moz-transition: fadeIn .3s ease-in-out;
            -o-transition: fadeIn .3s ease-in-out;
            transition: fadeIn .3s ease-in-out;
            border-radius: 60px;
            overflow: hidden;
            width: 72px;
            height: 72px;
            position: relative;
            margin: 0;
            padding: 0;
            background-position: 0 0;
            background-repeat: no-repeat;
            display: block;
            overflow-x: hidden;
            overflow-y: hidden;
            text-indent: -9999px;
          }

          .image-text a {
            display: block;
            height: 100%;
            width: 100%;
          }

          .image-text span {
            display: block;
          }

          .image-text .mask {
            background-image: url(/static/image.jpeg);
            position: absolute;
            height: 72px;
            width: 72px;
            z-index: 1000;
            background-size: cover;
          }

          .image-text .behind {
            background: #f6f9f8;
            position: absolute;
            height: 72px;
            width: 72px;
            z-index: 800;
          }

          @media (min-width: 992px) {
            .nav-list li a {
                font-size: 150%;
                margin: 0 0 0 2em;
            }
          }
      `}
      </style>
    </React.Fragment>
  )
}
