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

class FlightInfo extends Component {
  render() {
    return (
      <div className="App">
        <Card>
            <Row>
                <Col>
                    {this.props.startTime} <br /> Delhi
                </Col>
                <Col>
                    {this.props.duration}
                </Col>
                <Col>
                    {this.props.endTime}<br /> Goa
                </Col>
                <Col>
                    {this.props.finalPrice}
                </Col>
                <Col>
                    <br /><Button>Book Now</Button><br />
                </Col>
            </Row>
            <Row>
                {/* <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>
                        <h3>Flight Details</h3>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ marginTop: "-35px", marginBottom: "-30px", marginLeft: "-30px", marginRight: "-30px" }}>
                        hi
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}
            </Row>
        </Card>
      </div>
    );
  }
}

export default FlightInfo;
