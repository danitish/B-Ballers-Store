import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/teams/${product.team}/${product._id}`}>
        <Card.Img className="product-image" src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/teams/${product.team}/${product._id}`}>
          <Card.Title as="div" style={{ height: 45 }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
