import React, { Component } from "react";
import Category from "./common/Category";
import Search from "./common/Search";
import { Tooltip } from "react-tippy";

class Blogs extends Component {
  state = {
    blogs: [],
    category: [],
  };

  render() {
    const {
      blogs,
      category,
      currentCategory,
      onCategory,
      onChange,
    } = this.props;
    return (
      <div className="bg-about py-lg-0 py-4">
        <div className="p-lg-5 p-3">
          <div className="container my-5 col-lg-8 col">
            <Search onChange={onChange} />
          </div>
          <div className="row">
            <div className="col-lg-1 col-14 m-lg-0 m-auto">
              <nav className="nav nav-pills justify-content-center p-2 my-3">
                {category.map((info) => (
                  <Tooltip
                    key={info._id}
                    theme="light"
                    arrow="true"
                    title={info.name}
                    position="right"
                  >
                    <Category
                      name={info.name}
                      onCategory={onCategory}
                      categoryId={info._id}
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
                  className="shadow bg-light p-lg-4 p-2 mx-lg-5 mb-5 rounded"
                >
                  {/* <div className="w-100 text-right">
                    <a onClick={()=>onDelete(blog._id)} style={{ cursor: "pointer" }} className="p-2">
                      <span className="material-icons-outlined text-secondary">
                        delete
                      </span>
                    </a>
                  </div> */}
                  <div className="h3 text-center">{blog.title}</div>
                  <div className="h5 text-justify p-lg-3">{blog.posts}</div>
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
