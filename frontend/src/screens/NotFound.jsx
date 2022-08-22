import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../style/notFound.css";
import Meta from "../components/Meta";

const NotFound = () => {
  return (
    <div className="notfound d-flex align-items-center flex-column mt-5">
      <Meta title="404 Not Found" />
      <Image
        alt="404 Image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeVdWSWDeazrC4-nzPkH5tqo5sn4S5PJuHA&usqp=CAU"
      />
      <h1>404</h1>
      <span>Page Not Found</span>
      <p>
        The Page you are looking for doesn't exist or an other error occured.
      </p>
      <Link to="/">
        <p className="goBack">Go back</p>
      </Link>
    </div>
  );
};

export default NotFound;
