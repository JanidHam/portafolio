import * as React from 'react'
import Link from 'next/link'

import { Layout } from '../components'

export default function Index() {
  return (
    <React.Fragment>
      <Layout title='Janid Ham' urlActive='about'>
        <section id='main-section'>
          <div className='flex-column'>
            <h2 style={{ textAlign: 'center', width: '100%', marginBottom: '0.2em' }}>
              I&#39;m Janid.
            </h2>
            <h3 style={{ textAlign: 'center', width: '100%' }}>A full stack developer.</h3>
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
                Im a fullstack developer and Javascript/Node.js enthusiast based in Mexico city.
              </p>
              <p>
                I have a passion for create web and mobile aplications based on Javascript.
              </p>
            </div>
          </div>
        </section>

        <section id='what-i-do'>
          <div className='container'>
            <div className='flex-column hi-container'>
              <h2>What I can do.</h2>
              <div className='flex flex-column-mobile flex-can-do-container'>
                <div className='can-do-img-container-left flex'>
                  <span className='can-do-img avatar-img' />
                  <span className='can-do-img nodejs-img skill-img can-do-img-min' />
                </div>
                <div className='position-2'>
                  <h3>Develop what you want</h3>
                  <p>
                    I love code with Node.js in the backend,
                    and sometimes work with Python (Django, Flask).
                    For frontend React.js and Vue.js rocks, but also can work with Angular.
                  </p>
                </div>
              </div>

              <div className='flex flex-column-mobile flex-can-do-container'>
                <div className='position-2'>
                  <h3>Natives apps</h3>
                  <p>
                    For native apps I use React Native, is pretty awesome.
                    Also I know Java for build Android apps.
                  </p>
                </div>
                <div className='can-do-img-container-right flex'>
                  <span className='can-do-img react-native-img skill-img can-do-img-min' />
                  <span className='can-do-img avatar-img' />
                </div>
              </div>

              <div className='flex flex-column-mobile flex-can-do-container'>
                <div className='can-do-img-container-left flex'>
                  <span className='can-do-img avatar-img' />
                  <span className='can-do-img db-img skill-img can-do-img-min' />
                </div>
                <div className='position-2'>
                  <h3>SQL/NoSQL</h3>
                  <p>
                    For SQL databases MySQL is my choose.
                    For NoSQL databases I work with MongoDB, RethinkDB and Redis.
                  </p>
                </div>
              </div>
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

          #i-can-help h2 {
            margin-bottom: 0.5em;
          }

          #i-can-help h3 {
            margin-top: 0;
            margin-bottom: 1em;
          }

          .hi-container p {
            margin: 0.1em 0;
          }

          .hi-container {
            align-items: center;
          }

          .flex-can-do-container {
            justify-content: space-between;
            padding-bottom: 1.5em;
            margin-bottom: 1.5em;
            width: 80%;
          }

          .flex-can-do-container div:first-child {
            flex: 0.4;
          }

          .flex-can-do-container div:last-child {
            flex: 0.5;
          }

          .position-2 h3 {
            margin: 0 0 1em 0;
            text-align: left;
          }

          .position-2 p {
            color: rgba(79, 118, 131, 0.8098039215686274);
            line-height: 1.3em;
            font-size: 1.2em;
            text-align: justify;
          }

          .can-do-img-container-left, .can-do-img-container-right {
            align-items: center;
            margin-right: 1.5em;
            justify-content: space-between;
            position: relative;
          }

          .can-do-img-container-left:before {
            content: '';
            position: absolute;
            width: 40%;
            height: 0;
            line-height: 0;
            border-bottom: 2px dotted #ddd;
            display: flex;
            top: 45%;
            margin: 0 auto;
            left: 40%;
          }

          .can-do-img-container-right:before {
            content: '';
            position: absolute;
            width: 40%;
            height: 0;
            line-height: 0;
            border-bottom: 2px dotted #ddd;
            display: flex;
            top: 45%;
            margin: 0 auto;
            right: 40%;
          }

          .can-do-img {
            display: block;
            height: 130px;
            width: 130px;
          }

          .can-do-img-min {
            height: 60px;
            width: 60px;
          }

          .avatar-img {
            background-image: url(/static/image.jpeg);
            background-size: cover;
            border-radius: 50%;
          }

          .skill-img {
            background-size: contain;
            background-repeat: no-repeat;
          }

          .nodejs-img {
            background-image: url(/static/icon/nodejs-logo.svg);
          }

          .db-img {
            background-image: url(/static/icon/db.svg);
          }

          .react-native-img {
            background-image: url(/static/icon/react-native-logo.svg);
            background-size: contain;
            background-repeat: no-repeat;
          }

          .can-do-img img {
            display: block;
            height: 100%;
            max-width: 120px;
            margin: 0 auto;
            width: 100%;
          }

          span.image-hi {
            background-image: url(/static/me.jpg);
            height: 150px;
            width: 150px;
            background-size: cover;
            border-radius: 50%;
          }

          .btn-hldr .main-btn {
            border: 2px solid #4F7683;
            font-size: .8em;
            text-align: center;
            display: block;
            position: relative;
            background: white;
            padding: .75em 2em;
            color: #4F7683;
            text-decoration: none;
            margin: 1.5em 0 0;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            font-weight: 600;
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

          @media (max-width: 992px) {
            .flex-column-mobile {
              flex-direction: column !important;
            }

            .can-do-img-container-left, .can-do-img-container-right {
              order: 1;
            }

            .position-2 {
              order: 2;
            }

            .position-2 h3 {
              margin: 1em 0;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}
