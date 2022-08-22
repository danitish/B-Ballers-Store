import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../store/actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productTopRated
  );

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" fade className="bg-dark mt-2 mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/teams/${product.team}/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="d-block"
            />
            <Carousel.Caption className="carousel-caption d-none d-sm-block">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
