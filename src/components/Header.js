import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import logo from "../assets/images/logo192.png"

import { useLocation, NavLink } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()
    return (
        <>
            <Navbar bg="light" expand='lg'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className='d-inline-block aligh-top'
                            alt='react-bootstrap-app'
                        />
                        <span>React-Router-Axios App</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" activeKey={location.pathname}>
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                            <NavLink to='/users' className='nav-link'>Manage Users</NavLink>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header