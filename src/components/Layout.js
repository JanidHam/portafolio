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

  onScroll () {
    const { scrollY } = window

    if (scrollY > 0) {
      const nav = document.getElementById('nav-bar')

      if (!nav.classList.contains('nav-shadow')) {
        nav.classList.add('nav-shadow')
      }
    } else {
      const nav = document.getElementById('nav-bar')
      nav.classList.remove('nav-shadow')
    }
  }

  render() {
    const { children, title } = this.props

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
          <Header />
        </section>
  
        { children }
  
        <Footer />
  
        <style jsx>
          {`
            #top {
              background-color: #90D7EF;
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
              background: #90D7EF;
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