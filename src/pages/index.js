import * as React from 'react'
import Link from 'next/link'

import { Layout } from '../components'

export default function Index() {
  return (
    <React.Fragment>
      <Layout title='Janid Ham'>
        <section id='main-section'>
          <div className='flex-column'>
            <h2 style={{ textAlign: 'center', width: '100%' }}>
              I&#39;m Janid.
            </h2>
            <p style={{ textAlign: 'center', width: '100%' }}>a full stack developer.</p>
          </div>
          <div className='wrap'>
            <img src='/static/oie_transparent.png' alt='React native rocks!' />
          </div>
        </section>

        <section id='hi'>
          <div className='container'>
            <div className='flex-column hi-container'>
              <span className='image-hi' />
              <h2>Hi.</h2>
              <p>
                I&#39;m a web designer / developer based in Mexico city.
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
                I&#39;m a web designer / developer based in Mexico city.
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

          #i-can-help {
            padding-bottom: 4em;
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
            background: #4F7683;
            padding: .75em 2em;
            color: #90D7EF;
            text-decoration: none;
            margin: 1.5em 0 0;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            font-weight: 400;
            border: 0;
            text-transform: uppercase;
          }

          .wrap {
            margin: 0 auto;
            max-width: 800px;
            overflow: hidden;
          }

          .wrap img {
            width: 100%;
          }
        `}
      </style>
    </React.Fragment>
  )
}
