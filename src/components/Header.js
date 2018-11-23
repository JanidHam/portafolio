import * as React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <React.Fragment>
      <Nav />

      <div className='flex-column'>
        <h2 style={{ textAlign: 'center', width: '100%' }}>
          I&#39;m Janid.
        </h2>
        <p style={{ textAlign: 'center', width: '100%' }}>a full stack developer.</p>
      </div>
      <div className='wrap'>
        <img src='/static/oie_transparent.png' alt='React native rocks!' />
      </div>

      <style jsx>
        {`
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
