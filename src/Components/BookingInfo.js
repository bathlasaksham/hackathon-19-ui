import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class BookingInfo extends Component {
  render() {
    return (
      <div className="App" style={{marginBottom: 5}}>
        <Card>
            <Row>
                <Col><br />
                Date<br />
                    <Button>{this.props.date}</Button> 
                </Col>
                <Col><br />
                Flight Ids<br />
                    <Button>{this.props.flightIds}</Button> 
                </Col>
                <Col><br />
                Source<br />
                    <Button>{this.props.source}</Button> 
                </Col>
                <Col><br />
                Destination<br />
                    <Button>{this.props.destination}</Button> 
                </Col>
                <Col><br />
                Amount<br />
                    <Button>{this.props.amount}</Button> 
                </Col>
                <Col><br />
                Persons<br />
                    <Button>{this.props.persons}</Button> 
                </Col>
                <Col><br />
                Status<br />
                    <Button>{this.props.status}</Button> 
                </Col>
            </Row>
        </Card>
      </div>
    );
  }
}

export default BookingInfo;
