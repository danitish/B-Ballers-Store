import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { teams } from "../utils/teams";
import "../style/header.css";

export const Header = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);

  const displayedTeams = teams.filter(
    (team) => team.id !== "hardwood-classics"
  );

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="xl" collapseOnSelect>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>B-Ballers Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/teams/hardwood-classics">
                <Nav.Link>Hardwood-Classics</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Teams">
                {displayedTeams.map((team) => (
                  <LinkContainer key={team.id} to={`/teams/${team.id}`}>
                    <NavDropdown.Item>
                      <span>{team.name}</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>
            </Nav>
            <SearchBox />
            <Nav className="ml-auto">
              <Row>
                <Col className="ml-1">
                  <LinkContainer to="/cart">
                    <Nav.Link>
                      <div className="cart-section">
                        {cartItems.length > 0 && (
                          <span className="cart-num-items">
                            {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                          </span>
                        )}
                        <i className="fas fa-shopping-cart"></i> Cart
                      </div>
                    </Nav.Link>
                  </LinkContainer>
                </Col>
              </Row>
              {userInfo ? (
                <NavDropdown title={userInfo.name}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <i className="fas fa-user"></i>
                      <span className="mx-2">Profile</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/logout">
                    <NavDropdown.Item>
                      <i className="fa fa-sign-out"></i>
                      <span className="mx-2">Logout</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/signin">
                    <Nav.Link>Sign In</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin Dash">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>
                      <span className="mx-2">Users</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>
                      <span className="mx-2">Products</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>
                      <span className="mx-2">Orders</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
