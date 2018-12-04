import * as React from 'react'

import { Layout } from '../components'

export default function Index() {
  return (
    <React.Fragment>
      <Layout title='Janid Ham | Works' urlActive='work'>
        <section id='main-section'>
          <div className='flex-column'>
            <h2 style={{ textAlign: 'center', width: '100%', marginBottom: '0.1em' }}>
              Amarentas
            </h2>
          </div>
          <div className='wrap'>
            <img src='/static/amarentas-preview.png' alt='Amarentas' />
            <p>
              You can go to and take a tour in the next &nbsp;
              <span>
                <a href='https://amarentas.com/inicio'>link</a>
              </span>
            </p>
          </div>
        </section>

        <style jsx>
          {`
            #main-section {
              padding: 0 0 35px 0;
            }

            .wrap {
              text-align: center;
            }

            .wrap a {
              text-decoration: underline;
            }

            .wrap img {
              width: 50%;
              display: block;
              margin: 0 auto;
              padding: 4em 0;
            }

            footer {
              box-shadow: 0 -5px 10px -3px rgba(0, 0, 0, 0.08) !important;
              background: white !important;
            }

            #nav-bar.nav-shadow {
              background: #EAF7FC !important;
            }

        `}
        </style>
      </Layout>
    </React.Fragment>
  )
}
