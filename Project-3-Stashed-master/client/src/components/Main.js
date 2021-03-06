import React, { Component } from "react";
import { Parallax } from "react-materialize";
import background1 from "../Images/background1.jpg";
import background2 from "../Images/background2.jpg";
import background3 from "../Images/background3.jpg";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import Map from "./GoogleMapComponent/Map";
import NewAppointment from "./newAppointment";
import CustContact from "./CustContact";
import "./Main.css";

class Main extends Component {
  render() {
    console.log(this.props.isCust);
    return (
      <div className="mainContain">

        <div id="index-banner" className="parallax-container">
          <h1 className="header center grey-text text-lighten-3">
            The West Point Barracks Barber
          </h1>
          <div className="row center index-banner">
            <h4 className="header col s12 grey-text text-lighten-3 light">
              A Cut Above The Rest.
            </h4>
          </div>
        </div>
        <Parallax imageSrc={background1} />

        <div className="parallax-container valign-wrapper appoint white">
          <div className="container fluid">
            <div className="row fluid">
              {this.props.token && this.props.isCust === "true" ? (
                <div>
                  <div
                    className="col l4 m12 s12 center makeAppoint"
                    style={{ height: "200px" }}
                  >
                    <NewAppointment customerId={this.props.id} />
                  </div>
                  <div className="col l4 m6 s12 center">
                    <Map />
                  </div>
                  <div className="col l4 m6 s12 center">
                    <h5 className="header center black-text text-lighten-3">
                      West Point Barracks Barber
                    </h5>

                    <p>606 Thayer Rd. West Point, New York 10997</p>
                    <p> (352) 631-4073</p>
                    <p>
                      Hours:
                      <p>
                        <strong>Sunday-Monday</strong>
                        {"  "}Closed
                      </p>
                      <p>
                        <strong>Tuesday-Friday</strong>
                        {"  "}10AM-6PM
                      </p>
                      <p>
                        <strong>Saturday</strong>
                        {"  "}9AM-4PM
                      </p>
                    </p>
                  </div>
                </div>
              ) : (
                  <div>
                    <div
                      className="col m6 s12 center"
                      style={{ marginTop: "10px" }}
                    >
                      <Map />
                    </div>
                    <div
                      className="col m6 s12 center"
                      style={{ marginTop: "20px" }}
                    >
                      <h5 className="header center black-text text-lighten-3">
                      West Point Barracks Barber
                    </h5>
                      <p>606 Thayer Rd. West Point, New York 10997</p>
                      <p>Phone: (352) 631-4073</p>
                      <p>
                        <p>
                          <strong>Sunday-Monday</strong>
                          {"  "}Closed
                      </p>
                        <p>
                          <strong>Tuesday-Friday</strong>
                          {"  "}10AM-6PM
                      </p>
                        <p>
                          <strong>Saturday</strong>
                          {"  "}9AM-4PM
                      </p>
                      </p>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>  <h4 className="center grey-text text-lighten-3 special">
          Specializing In Classic Cuts.
        </h4>

        <Parallax imageSrc={background2} />


        <div className="parallax-container valign-wrapper appoint white">
          <CustContact />
        </div>
        <Parallax imageSrc={background3} />
      </div>
    );
  }
}

export default Main;