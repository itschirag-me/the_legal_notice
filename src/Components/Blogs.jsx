import React, { Component } from "react";
import Category from "./common/Category";
import Search from "./common/Search";
import { Tooltip } from "react-tippy";
import Axios from "axios";

class Blogs extends Component {
  state = {
    blogs: [],
    category: [],
    currentCategory: null,
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: blog } = await Axios.get("/posts/v1");
    const { data: category } = await Axios.get("/category/v1");
    const blogs = blog["data"];
    this.setState({
      blogs,
      category: [...category],
    });
  }

  handlerCategory = (category) => {
    this.setState({ currentCategory: category, searchQuery: "" });
  };

  handlerSearch = (query) => {
    this.setState({ searchQuery: query, currentCategory: null });
  };

  getPageData = () => {
    const {
      blogs: allBlogs,
      category,
      currentCategory,
      searchQuery,
    } = this.state;

    let filtered = allBlogs;
    if (currentCategory && currentCategory._id) {
      filtered = allBlogs.filter(
        (blog) => blog.category._id === currentCategory._id
      );
    } else if (searchQuery) {
      filtered = allBlogs.filter((blog) => {
        return blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    return { blogs: filtered, currentCategory, category };
  };

  render() {
    const { blogs, currentCategory, category } = this.getPageData();

    return (
      <div className="bg-blogs py-lg-0 py-4">
        <div className="p-lg-5 p-3">
          <div className="container my-5 col-lg-8 col">
            <Search onSearch={this.handlerSearch} />
          </div>
          <div className="row">
            <div className="col-lg-1 col-14 m-lg-0 m-auto">
              <nav className="nav nav-pills justify-content-center p-1 my-3">
                {category.map((info) => (
                  <Tooltip
                    key={info._id}
                    theme="light"
                    arrow="true"
                    title={info.name}
                    position="top"
                  >
                    <Category
                      onCategory={this.handlerCategory}
                      name={info.name}
                      category={info}
                      icon={info.icons}
                      currentCategory={currentCategory}
                    />
                  </Tooltip>
                ))}
              </nav>
            </div>
            <div className="col">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="shadow bg-light p-lg-4 p-3 mx-lg-5 mb-5 rounded"
                >
                  {/* <div className="w-100 text-right">
                    <a onClick={()=>onDelete(blog._id)} style={{ cursor: "pointer" }} className="p-2">
                      <span className="material-icons-outlined text-secondary">
                        delete
                      </span>
                    </a>
                  </div> */}
                  <div className="h3 text-center">{blog.title}</div>
                  <div className="h5 text-justify p-3">{blog.posts}</div>
                  <div className="text-right">
                    <i>
                      {blog.category.name} by <b>{blog.name}</b>
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
