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
import FlightDetailsInfo from './FlightDetailsInfo';
import axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from 'react-bootstrap/Form';
// import { FormSem } from 'semantic-ui-react';

class FlightInfo extends Component {

    state = {
        open: false,
        name: "",
        phone: "",
        email: "",
    }

    handleDialogClose = () => {
        this.setState({open: false})
    }

    handleCreateBooking = () => {
        console.log(this.state.phone , this.state.email , this.state.name )
        if(this.state.phone == "" || this.state.email == "" || this.state.name == "" ) {
            ToastsStore.warning("Please enter all fields !!");
            return;
        }
        axios.post("/booking/create", {
            flight_ids: this.props.flightIds,
            date: this.props.date,
            phone_no: this.state.phone,
            email_id: this.state.email,
            name: this.state.name,
            no_of_people: this.props.noOfPeople,
            source: this.props.source,
            destination: this.props.destination,
            price: this.props.finalPrice
        }).then(res => {
            if(res != undefined) {
                if(res.data.success == true) {
                    ToastsStore.success("Flight Booked Successfully");
                } else {
                    ToastsStore.error("Something went wrong while booking your flight !!");
                }
            } else {
                ToastsStore.error("Something went wrong while booking your flight !!");
            }
        }).catch(err => {
            ToastsStore.error("Something went wrong while booking your flight !!");
        })
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    onPhoneChange = (e) => {
        this.setState({phone: e.target.value});
    }

  render() {
    return (
      <div className="App" style={{marginBottom: 5}}>
        <ToastsContainer store={ToastsStore} />
        <Card>
            <Row>
                <Col><br />
                    {this.props.startTime} <br /> {this.props.source}<br />
                </Col>
                <Col><br />
                    {this.props.duration}<br />
                    {
                        this.props.flightDetails.length > 1 ? "1 stop" : null
                    }
                </Col>
                <Col><br />
                    {this.props.endTime}<br /> {this.props.destination}<br />
                </Col>
                <Col><br />
                    Rs.{this.props.finalPrice}<br />
                </Col>
                <Col>
                    <br /><Button onClick={() => {console.log('bh');this.setState({open: true})}} >Book Now</Button><br /><br />
                </Col>
                <Dialog
                    open={this.state.open}
                    onClose={this.state.handleDialogClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create Booking</DialogTitle> <hr />
                    <DialogContent>
                        <Row>
                            <Form.Group as={Col} style={{marginRight: 20, marginLeft: 20}}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={this.state.name} onChange={e => this.onNameChange(e)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} style={{marginRight: 20, marginLeft: 20}}>
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control value={this.state.email} onChange={e => this.onEmailChange(e)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} style={{marginRight: 20, marginLeft: 20}}>
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control value={this.state.phone} onChange={e => this.onPhoneChange(e)}>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose}>
                            Cancel
                        </Button>
                        <Button onClick={this.handleCreateBooking}>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </Row>
            <Row>
                <ExpansionPanel style={{marginLeft: 15, width: '97.4%'}}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{marginLeft: 900}}>
                        <h6>Flight Details</h6>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Card style={{borderColor: 'white'}}>
                        {
                            Array.from(this.props.flightDetails).map((value) => {
                            return (
                                <Card style={{padding: 15}}><Row><FlightDetailsInfo 
                                startTime = {value.start_time}
                                endTime = {value.end_time}
                                duration = {value.duration}
                                source = {value.source}
                                destination = {value.destination}
                                /></Row></Card>
                            )
                            })
                        }
                        </Card>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Row>
        </Card>
      </div>
    );
  }
}

export default FlightInfo;
