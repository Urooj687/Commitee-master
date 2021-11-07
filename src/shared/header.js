import React, { Component } from 'react'
import './header.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class header extends Component {

    render() {
        return (
            <div className="header_comp">
                <Navbar expand="md sm lg" style={{width:"100%"}} className="d-flex align-items-center justify-content-center">
                    
                        <Nav className="parent_div">
                            <Nav.Link>

                                <h5 className="mb-0">Committee Register</h5>
                            </Nav.Link>
                            <Nav.Link>
                                <div className="prefix_icon">
                                    <FontAwesomeIcon className="prefix-icon" icon={faSearch} />
                                </div>
                            </Nav.Link>

                        </Nav>
                </Navbar>



            </div>
        )
    }

}
export default header;