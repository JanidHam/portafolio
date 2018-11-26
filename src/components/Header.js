import * as React from 'react'
import Nav from './Nav'

export default function Header(props) {
  const { urlActive } = props

  return (
    <React.Fragment>
      <Nav urlActive={urlActive} />
    </React.Fragment>
  )
}
