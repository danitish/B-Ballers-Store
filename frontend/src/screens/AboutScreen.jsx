import { Row, Col, Image } from "react-bootstrap";
import Meta from "../components/Meta";
import { teams } from "../utils/teams";
import "../style/about.css";

const AboutScreen = () => {
  const selectedTeams = teams.filter((team) => team.id !== "hardwood-classics");

  return (
    <div className="about">
      <Meta title="B-Ballers - About Us" />
      <h1 className="text-center">Welcome to B-Ballers Jerseys Merch Store</h1>
      <p>Created with &#10084; by Daniel Tishenko and Israel Chaimowitz.</p>
      <p>
        Our goal is to be filling your needs for fair rate/high quality NBA
        apparel.
      </p>
      <p>
        Feel free browsing our products and adding them to your shopping cart -
        to continue with the payment process you must be signed in.
      </p>
      <h3>
        Disclaimer: All payments using PayPal method are <span>fictive</span> no
        actual charge nor delivery will be made!
      </h3>
      <p className="mb-0">
        You will not be able to use your personal PayPal account to pay.
      </p>
      <h3 className="mb-0">Use the following paypal credentials to pay:</h3>
      <p>Email: buyermail@sandbox.com</p>
      <p>Password: @iB_3QOd</p>

      <div className="teams text-center">
        <h3>Our featured teams:</h3>
        <Row className="justify-content-center">
          {selectedTeams.map((team) => (
            <Col className="mx-2" xs={3} md={2} lg={1} key={team.id}>
              <Image
                className="mb-2 mb-lg-0"
                height={100}
                src={team.logo}
              ></Image>
            </Col>
          ))}
        </Row>
      </div>
      <p className="mt-5 pt-5">
        All credit for the products and images goes to{" "}
        <a href="https://store.nba.com/" target="_blank">
          NBA Store
        </a>
        .
      </p>
    </div>
  );
};

export default AboutScreen;
