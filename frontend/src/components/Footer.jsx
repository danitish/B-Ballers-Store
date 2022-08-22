import { Container, Row, Col } from "react-bootstrap";
import "../style/footer.css";

export const Footer = () => {
  return (
    <footer className="bg-dark shadow text-light">
      <Container fluid>
        <Row className="d-none d-md-flex">
          <Col md={3} className="text-center py-3">
            <p className="mb-2">Daniel Tishenko</p>
            <a
              href="https://www.linkedin.com/in/daniel-tishenko-7051481b7/"
              target="_blank"
              className="mr-3"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href="https://github.com/danitish" target="_blank">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </Col>
          <Col className="text-center py-3">
            <span>Copyright &copy; {new Date().getFullYear()}</span>
            <p className="mb-0">B-Ballers Jersey Store</p>
          </Col>
          <Col md={3} className="text-center py-3">
            <p className="mb-2">Israel Chaimowitz</p>
            <a
              href="https://www.linkedin.com/in/sruly-chaimowitz/"
              target="_blank"
              className="mr-3"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href="https://github.com/srulychaimo" target="_blank">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </Col>
        </Row>
        <Row className="d-md-none justify-content-center">
          <Col className="text-center py-3">
            Created with &#10084; by{" "}
            <a
              href="https://www.linkedin.com/in/daniel-tishenko-7051481b7"
              target="_blank"
            >
              Daniel Tishenko
            </a>{" "}
            &#38;{" "}
            <a
              href="https://www.linkedin.com/in/sruly-chaimowitz"
              target="_blank"
            >
              Israel Chaimowitz
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
