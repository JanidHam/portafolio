import * as React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll)
  }

  // eslint-disable-next-line class-methods-use-this
  onScroll() {
    const { scrollY } = window
    const nav = document.getElementById('nav-bar')

    if (scrollY > 0) {
      if (!nav.classList.contains('nav-shadow')) {
        nav.classList.add('nav-shadow')
      }
    } else {
      nav.classList.remove('nav-shadow')
    }
  }

  render() {
    const { children, title, urlActive } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>{ title }</title>
          <meta name='viewport' content='width=device-width' />
          <link rel='icon' type='image/png' href='/static/image.jpeg' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,700' rel='stylesheet' />
        </Head>

        <section id='top'>
          <Header urlActive={urlActive} />
        </section>

        { children }

        <Footer />

        <style jsx>
          {`
            #top {
              background-color: #EAF7FC;
              padding-top: 130px;
              overflow: hidden;
            }
          `}
        </style>

        <style jsx global>
          {`
            body {
              margin: 0;
              font-family: 'Montserrat', sans-serif;
              background: #EAF7FC;
              font-size: 14px;
              line-heihgt: 1.42;
              color: #4F7683;
            }

            a {
              color: #4F7683;
              text-decoration: none;
            }

            p {
              font-size: 1.5em;
            }

            h2 {
              text-align: center;
              font-size: 3.8em;
              font-weight: 400;
            }

            h3 {
              font-size: 2em;
              font-weight: 400;
              text-align: center;
            }

            .flex {
              display: flex;
            }

            .flex-column {
              display: flex;
              flex-direction: column;
            }

            .transition {
              -webkit-transition: all .5s ease-in-out;
              transition: all .5s ease-in-out;
            }

            img.img-circule {
              border-radius: 50%;
            }

            @media (min-width: 992px) {
              .container {
                max-width: 70%;
              }
            }
        `}
        </style>
      </React.Fragment>
    )
  }
}
