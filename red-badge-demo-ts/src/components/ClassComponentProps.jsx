import React, { Component } from 'react';
import { Alert, Container } from "reactstrap";

class ClassComponentProps extends React.Component {
    render (){
  const evenOdd = () =>
    this.props.numbers.map((num, index) => (
      <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
        The number is {num}{" "}
      </Alert>
    ));
  

  return (
    <Container>
      <h3>From the Class Component</h3>
      {evenOdd()}
    </Container>
  );
};

}

export default ClassComponentProps;
