import React, { useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'

const bff_url = 'http://10.0.0.9:3000';
//const bff_url = proc.env.BFF_URL;


function App() {
  const [temp, setTemp] = useState("Loading...");
  const [humidity, setHumidity] = useState("Loading...");
  const [tempUpdated, setTempUpdated] = useState("never");
  const [humidityUpdated, setHumidityUpdated] = useState("never");

  fetch(`${bff_url}/topic/bus-1-temp/current`)
    .then( res => res.json() )
    .then( (result) => {
      setTemp(result.value);
      setTempUpdated(result.lastUpdated);
    },
    (error) => {
      console.log(error);
    });
 
  fetch(`${bff_url}/topic/bus-1-humidity/current`)
    .then( res => res.json() )
    .then( (result) => {
      setHumidity(result.value);
      setHumidityUpdated(result.lastUpdated);
    },
    (error) => {
      console.log(error);
    });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card border='dark' bg='success' text='white'><Card.Body>
              <Card.Header>Bus Temp</Card.Header>
              <Card.Text>{temp}</Card.Text>
              <Card.Text>Last Updated: {tempUpdated}</Card.Text>
            </Card.Body></Card>
            <Card border='dark' bg='success' text='white'><Card.Body>
              <Card.Header>Bus Humidity</Card.Header>
              <Card.Text>{humidity}</Card.Text>
              <Card.Text>Last Updated: {humidityUpdated}</Card.Text>
            </Card.Body></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
