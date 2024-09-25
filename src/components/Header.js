import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import logo from "../assets/images/logo192.png"

import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


const Header = (props) => {
    const navigate = useNavigate();

    const { logout, user } = useContext(UserContext);
    // const [hideHeader, setHideHeader] = useState(false)

    // useEffect(() => {
    //     if (window.location.pathname === '/login') {
    //         setHideHeader(true)
    //     }
    // }, [])

    const handleLogout = () => {
        logout()
        navigate("/")
        toast.success("Log out success")
    }

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
                        {((user && user.auth) || (window.location.pathname === '/')) &&
                            <>
                                <Nav className="me-auto">
                                    <NavLink to='/' className='nav-link'>Home</NavLink>
                                    <NavLink to='/users' className='nav-link'>Manage Users</NavLink>
                                </Nav>
                                <Nav>
                                    {user && user.email && <span className='nav-link'>Welcom {user.email}</span>}
                                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                                        {user && user.auth === true
                                            ? < NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                                            : <NavLink to='/login' className='dropdown-item'>Login</NavLink>
                                        }
                                    </NavDropdown>
                                </Nav>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header