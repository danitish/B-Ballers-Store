import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
    setKeyword("");
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col
          xs={9}
          sm={8}
          md={6}
          lg={6}
          xl={10}
          className="pr-0 ml-md-3 p-md-0"
        >
          <Form.Control
            type="text"
            name="q"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
          ></Form.Control>
        </Col>
        <Col xs={2} sm={2} md={3} lg={2} xl={1} className="p-0 px-md-1 mx-md-0">
          <Button type="submit" variant="outline-success" className="p-2 ">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
