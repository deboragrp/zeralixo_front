import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="success"
      className="text-default"
      role="status"
      style={{ width: "10rem", height: "10rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
