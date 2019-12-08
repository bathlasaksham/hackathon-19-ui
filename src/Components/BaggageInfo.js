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
import ProgressBar from 'react-bootstrap/ProgressBar'

class BaggageInfo extends Component {
  render() {
    return (
      <div className="App" style={{marginBottom: 5}}>
      <ProgressBar animated now={this.props.progress} />
        <Card>
            <Row>
                <Col><br />
                Booking Id<br />
                    <Button>{this.props.bookingId}</Button> 
                </Col>
                <Col><br />
                Flight<br />
                    <Button>{this.props.flightName}</Button> 
                </Col>
                <Col><br />
                Weight<br />
                    <Button>{this.props.weight}</Button> 
                </Col>
                <Col><br />
                Number of Baggages<br />
                    <Button>{this.props.noOfItems}</Button> 
                </Col>
                <Col><br />
                Last Updated At<br />
                    <Button>{this.props.updatedAt}</Button> 
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

export default BaggageInfo;
