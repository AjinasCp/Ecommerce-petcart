import React, { useContext } from "react";
import { myContext } from "../User/Context"
import { useParams } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import './Updateproduct.css'

function Updateproduct() {
  const { products, setProducts } = useContext(myContext);
  const { id } = useParams();

  const editProduct = products.find((product) => product.id === parseInt(id));
  

  const submit = (e) => {
    e.preventDefault();
    const newTitle = e.target.title.value || editProduct.title;
    const newType = e.target.type.value || editProduct.type;
    const newPrice = e.target.price.value || editProduct.price;
    const newImage = e.target.image.value || editProduct.image;

    const updatedProduct = {
      ...editProduct,
      title: newTitle,
      type: newType,
      price: newPrice,
      image: newImage,
    };

    const updatedProducts = products.map((product) =>
      product.id === parseInt(id) ? updatedProduct : product
    );

    setProducts(updatedProducts);
    
  };

  if (!editProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="container-update">
        <Card>
          <div className="d-flex flex-column flex-lg-row w-100 align-items-center">
            <Card.Img className="w-50" variant="top" src={editProduct.image} />
            <Card.Body>
              <Card.Title>
                <h2>{editProduct.title}</h2>
                <h5>{editProduct.type}</h5>
              </Card.Title>
              <Card.Text>
                <h3>₹{editProduct.price}</h3>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>

      <form onSubmit={submit}  className="container mt-5  p-5">
        <Form.Group controlId="formTitle">
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={editProduct.title}
          />
        </Form.Group>

        <Form.Group controlId="formType">
          <Form.Control
            type="text"
            name="type"
            placeholder="Type"
            defaultValue={editProduct.type}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            defaultValue={editProduct.price}
          />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Control
            type="text"
            name="image"
            placeholder="Image URL"
            defaultValue={editProduct.image}
          />
        </Form.Group>

        <Button variant="primary" type="submit"  className="mt-3 ">
          Update Product
        </Button>
      </form>
    </div>
  );
}

export default Updateproduct;