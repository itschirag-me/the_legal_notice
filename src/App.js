import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Components/partials/Sidebar";
import Navbar from "./Components/partials/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/partials/Footer";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Axios from "axios";
import ClientCounceling from "./Components/ClientCounceling";
import LegalAdvice from "./Components/LegalAdvice";
import LegalDrafting from "./Components/LegalDrafting";
import LegalMaxims from "./Components/LegalMaxims";
import LegalUpdates from "./Components/LegalUpdates";
import ContactUs from './Components/ContactUs';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class App extends Component {
  state = {
    blogs: [],
    category: [],
    toggle: false,
  };

  handlerToggle = () => {
    let { toggle } = this.state;
    toggle = !toggle;
    this.setState({ toggle });
  };

  handlerBodyToggle = () => {
    let { toggle } = this.state;
    toggle = false;
    this.setState({ toggle });
  };

  render() {
    const { toggle } = this.state;

    return (
      <div className="text-secondary ov-x">
        <div className="d-flex">
          <div className="bg-light">
            <Sidebar onLinkToggle={this.handlerBodyToggle} toggle={toggle} />
          </div>
          <div className="w-100">
            <Navbar
              onLinkToggle={this.handlerBodyToggle}
              onToggle={this.handlerToggle}
            />
            <div
              className={toggle ? "opacity" : ""}
              onClick={this.handlerBodyToggle}
            >
              <Switch>
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/legal-updates" component={LegalUpdates} />
                <Route path="/legal-maxims" component={LegalMaxims} />
                <Route path="/legal-adivce" component={LegalAdvice} />
                <Route path="/legal-drafting" component={LegalDrafting} />
                <Route path="/about" component={About} />
                <Route
                  path="/client-councelling"
                  component={ClientCounceling}
                />
                <Route path="/blogs" component={Blogs} />
                <Route path="/" exact component={Body} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
