import React from "react";
import { Card } from "react-bootstrap";
import './Store.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Context";
import HeaderNavbar from "./Navbar";
import Footer from "./Footer";

function Store() {
  const{products}=useContext(myContext)
  const Navigate = useNavigate();

  return (
    <div>
      <div>
        <HeaderNavbar />
      </div>
      <div className="container gap-5">
        <div className=" row ">
          {products.map((e) => {
            return (
              <div
                onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                className="col-lg-4 col-6 mt-3"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect">
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Title>{e.type}</Card.Title>
                    <Card.Text>₹{e.price}</Card.Text>
                  </Card.Body>
                </Card>{" "}
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Store;