import { teamProducts } from "../store/actions/productActions";
import { useParams } from "react-router-dom";
import { teams } from "../utils/teams";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import Product from "../components/Product";
import { Image, Row, Col, Form } from "react-bootstrap";
import { productSortKeys, sortingProducts } from "../utils/pSortKeysAndFn";

const TeamScreen = () => {
  const { team } = useParams();
  const dispatch = useDispatch();
  const [sortedArray, setSortedArray] = useState([]);

  const filteredTeam = teams.find((eachTeam) => eachTeam.id === team);

  const { loading, error, products } = useSelector(
    (state) => state.productByTeam
  );

  useEffect(() => {
    dispatch(teamProducts(team));
  }, [dispatch, team]);

  return (
    <>
      <Meta title={`B-Ballers - ${filteredTeam.name}`} />
      <h1>Welcome to the {filteredTeam.name} shop</h1>
      <Image src={filteredTeam.banner} alt={filteredTeam.name} fluid />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="mt-5 mb-1">
            <Col>Sort By:</Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Control
                as="select"
                onChange={(e) => {
                  sortingProducts(e.target.value, products, setSortedArray);
                }}
              >
                {productSortKeys.map((key) => (
                  <option key={key.value} value={key.value}>
                    {key.content}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          {!sortedArray.length ? (
            <Row className="mt-3">
              {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="mt-3">
              {sortedArray.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default TeamScreen;
