import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="menu-parent">
                    <div>
                        <Navbar.Brand href="/">Watch2gether</Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto mr-3">
                                <Nav.Link href="#">Room List</Nav.Link>
                                <Nav.Link href="#">FAQ</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#" as="button" className="btn btn-secondary d-flex">
                                    <i className="material-icons pr-1">login</i>
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
