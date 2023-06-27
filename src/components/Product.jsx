import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const card = products.map((product) => {
    return (
      <div className="col-md-3">
        <Card
          key={product.id}
          className="h-100"
          style={{ marginBottom: "10px" }}
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{card}</div>
    </div>
  );
};

export default Product;
