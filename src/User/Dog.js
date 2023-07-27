import React, { useContext } from "react";
import { myContext } from "./Context";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "./Navbar";
import './Dog.css'

function Dog() {
  const { products } = useContext(myContext);
  console.log("product list", products);
  const dogFood= products.filter((e) => e.type === "dog food");
  const Navigate = useNavigate();
  return (
    <>
     <HeaderNavbar/>
      <div>
      </div>
      <div className="container gap-5">
        <div className=" row ">
          {dogFood.map((e) => {
            return (
              <div
                onClick={() => Navigate(`/Viewproduct/${e.id}`)}
                className="col-lg-4 col-6 mt-3"
              >
                <Card className="hovereffect">
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
    </>
  );
}

export default Dog;