import React, { useState } from "react";
import Contente from './Contente'
import {Col, Row, Form, Button } from "react-bootstrap";

// TITLE TOP
const TITLE = () => {
  return (
    <Row>
      <Col>
        <h2 className="font-weight-bold text-center mt-4"> <span style={{color:"#FF0000"}}>YOUTUBE</span> SERACH APP </h2>
      </Col>
    </Row>
  )
}


const SarchContent = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchValu, SetSearchValu ] = useState("")

  const hanleSubmit = (e) => {
    e.preventDefault();
    SetSearchValu(inputValue)
  };
  return (
    <>
      <TITLE />
      <Row>
        <Col lg={12}>
          <Form onSubmit={hanleSubmit}>
                 <Form.Group controlId="formBasicEmail" className="d-flex mx-5 mt-2">
                     <Form.Control type="text" placeholder="Search video here ...." value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                     <Button as="input" type="submit" value="Submit"  />
                 </Form.Group>
            </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Contente SearchValu={searchValu} />
      </Row>
    </>
  );
};

export default SarchContent;
