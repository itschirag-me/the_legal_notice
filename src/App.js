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

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class App extends Component {
  state = {
    blogs: [],
    category: [],
    toggle: false,
    currentRoute: {},
    currentCategory: { _id: "" },
  };

  async componentDidMount() {
    const { data: blog } = await Axios.get("/posts/v1");
    const { data: category } = await Axios.get("/category/v1");
    const blogs = blog["data"];
    this.setState({
      blogs,
      category: [{ _id: "", name: "All", icons: "clear_all" }, ...category],
    });
  }

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

  handlerLink = (link) => {
    this.setState({ currentRoute: link });
  };

  handlerCategory = (categoryId) => {
    const { currentCategory } = this.state;
    currentCategory._id = categoryId;
    this.setState({ currentCategory });
  };

  handlerSearch = ({ currentTarget: input }) => {
    let blogs = [...this.state.blogs];
    blogs = blogs.filter((event) => {
      return event.title.toLowerCase().includes(input.value.toLowerCase());
    });
    this.setState({ blogs });
  };

  render() {
    const {
      toggle,
      blogs,
      category,
      currentRoute,
      currentCategory,
    } = this.state;
    const links = [
      { id: 0, links: "/", name: "Home" },
      { id: 1, links: "/blogs", name: "Blog" },
      { id: 2, links: "/about", name: "About" },
      { id: 3, links: "/client-councelling", name: "Client Councelling" },
    ];

    const filtered = blogs.filter(
      (blog) => blog.category._id === currentCategory._id
    );
    const allBlogs = currentCategory && currentCategory._id ? filtered : blogs;

    return (
      <div className="text-secondary ov-x">
        <div className="d-flex">
          <div className="bg-light">
            <Sidebar
              onLinkToggle={this.handlerBodyToggle}
              currentRoute={currentRoute}
              toggle={toggle}
            />
          </div>
          <div className="w-100">
            <Navbar
              onLinkToggle={this.handlerBodyToggle}
              onToggle={this.handlerToggle}
              currentRoute={currentRoute}
            />
            <div
              className={toggle ? "opacity" : ""}
              onClick={this.handlerBodyToggle}
            >
              <Switch>
                <Route path="/legal-updates" component={LegalUpdates} />
                <Route path="/legal-maxims" component={LegalMaxims} />
                <Route path="/legal-aid" component={LegalAdvice} />
                <Route path="/legal-drafting" component={LegalDrafting} />
                <Route path="/about" component={About} />
                <Route
                  path="/client-councelling"
                  component={ClientCounceling}
                />
                <Route
                  path="/blogs"
                  render={(props) => (
                    <Blogs
                      onDelete={this.handlerDelete}
                      onChange={this.handlerSearch}
                      blogs={allBlogs}
                      category={category}
                      currentCategory={currentCategory}
                      onCategory={this.handlerCategory}
                    />
                  )}
                />
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
