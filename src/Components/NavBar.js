import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function NavBar() {
  return (
    <div>
        <Link to='/'> <Button>Home</Button></Link>
        <Link to='/about'><Button>About</Button></Link>
        <Link to='/contact'><Button>Contact</Button></Link>
    </div>
  )
}

export default NavBar