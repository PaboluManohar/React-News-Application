import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "20rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="News"
            style={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Details
            </a>
          </div>
          <div className="card-footer text-muted">
    <strong>publishedBy-{author === null? "Anonymous": author}</strong>
  </div>
        </div>
      </div>
    );
  }
}
