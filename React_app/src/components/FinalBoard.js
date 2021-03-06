import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
import '../styles/final_board_styles.css';
import Pin from './Pin.js';
import Modal from './Modal.js';
import logo from '../images/pin.jpg';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Navbar1 from './Navbar1';
class FinalBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pins: [],
            show_modal: false
        }
    }

    add_pin = pinDetails => {
        this.setState(_state => {
            const new_pins = [
                ..._state.pins
            ]

            new_pins.push(
                <Pin pinDetails={pinDetails} key={_state.pins.length} />
            )

            return {
                pins: new_pins,
                show_modal: false
            }
        });
    }

    render() {
        return (

            <div>
               
                 {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar">
  <Navbar.Brand as={Link} to="/">
  <img src ={logo} classname ='App-logo' alt="logo"></img> 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    </Navbar.Collapse>
    <Nav.Link as={Link} to ="/">Logout</Nav.Link>
    </Navbar> */}
                <div className="navigation_bar">
                     <Navbar1/>
                      <style>{'body { background-color: #EDF3F6; }'}</style>
                    <div onClick={() => this.setState({ show_modal: true })} className="pint_mock_icon_container add_pin">
                        <img src="./images/add.png" alt="add_pin" className="pint_mock_icon" />
                    </div>
                </div>

                <div className="pin_container">
                    {this.state.pins}
                </div>

                <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({ show_modal: false }) : null}
                    className="add_pin_modal_container"
                >
                    {
                        this.state.show_modal ?
                            <Modal add_pin={this.add_pin} /> : null
                    }
                </div>
            </div >
        )
    }
}

export default FinalBoard;