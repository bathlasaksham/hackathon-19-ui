import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class FlightDetailsInfo extends Component {
  render() {
    return (
      <div className="App" style={{marginBottom: 5}}>
        <Card style={{width: '1000px'}}>
            <Row>
                <Col><br />
                    {this.props.startTime} <br /> {this.props.source}<br />
                </Col>
                <Col><br />
                    {this.props.duration}<br />
                </Col>
                <Col><br />
                    {this.props.endTime}<br /> {this.props.destination}<br />
                </Col>
            </Row>
        </Card>
      </div>
    );
  }
}

export default FlightDetailsInfo;
