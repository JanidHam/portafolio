import * as React from 'react'
import Link from 'next/link'

import { Layout } from '../components'

export default function Index() {
  return (
    <React.Fragment>
      <Layout title='Janid Ham'>
        <section id='hi'>
          <div className='container'>
            <div className='flex-column hi-container'>
              <span className='image-hi' />
              <h3>Hi.</h3>
              <p>
                I&#39;m a web designer / developer based in Toronto, Canada.
                I have a passion for web design and love to create for web and mobile devices.
              </p>
            </div>
          </div>
        </section>

        <section id='what-i-do'>
          <div className='container'>
            <div className='flex-column hi-container'>
              <h2>What I can do.</h2>
              <p>
                I&#39;m a web designer / developer based in Toronto, Canada.
                I have a passion for web design and love to create for web and mobile devices.
              </p>
            </div>
          </div>
        </section>

        <section id='i-can-help'>
          <div className='container'>
            <div className='flex-column hi-container'>
              <h2>I can help.</h2>
              <h3>I’m currently available for freelance work.</h3>
              <p>
                If you have a project that you want to get started,
                think you need my help with something or just fancy saying hey, then get in touch.
              </p>
              <p className='btn-hldr'>
                <Link href='mailto:janid.ham20@gmail.com'>
                  <a className='main-btn'>message me</a>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>
        {`
          #hi, #what-i-do, #i-can-help {
            padding-top: 50px;
            background-color: white;
          }

          .hi-container {
            align-items: center;
          }

          span.image-hi {
            background-image: url(/static/image.jpeg);
            height: 150px;
            width: 150px;
            background-size: cover;
            border-radius: 50%;
          }

          .btn-hldr .main-btn {
            font-size: .8em;
            text-align: center;
            display: block;
            position: relative;
            background: #45b29a;
            padding: .75em 2em;
            color: #1b7f69;
            text-decoration: none;
            margin: 1.5em 0 0;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            font-weight: 400;
            border: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </React.Fragment>
  )
}
