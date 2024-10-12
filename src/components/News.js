import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export default class News extends Component {


  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };


  constructor(props) {
    super(props);
    this.state = { 
      articles: [],
      loading: true, // Set initial loading state to true
      page: 1,
      totalArticles: 0, // Initialize totalArticles to 0
      headings: []
    };
    document.title=`${this.props.category}-News`;
  }


  async componentDidMount() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(35);

    let parsedData = await data.json();
    this.props.setProgress(50);

    console.log(parsedData);
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      loading: false, // Set loading to false once data is fetched
      totalArticles: parsedData.totalResults, // Correctly capture total results
    });
    this.props.setProgress(100);

    // Invoke the function passed as prop
    this.props.setCategory(this.props.category);

  }
  
  prevHandler = async () => {
    if (this.state.page > 1) {

      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.props.setProgress(15);

      let data = await fetch(url);
      this.props.setProgress(30);

      let parsedData = await data.json();
      this.props.setProgress(50);

      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
      this.props.setProgress(100);

    }
  };
  
  nextHandler = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalArticles / this.props.pageSize)
    ) {    this.props.setProgress(15);

      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(30);

      let parsedData = await data.json();
      this.props.setProgress(50);

      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
      this.props.setProgress(100);

    }
  };
  

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="container d-flex align-items-center justify-content-center my-4">
            <h1 >Loading..</h1>
            <div
              className="spinner-grow ml-1"
              role="status"
              style={{ width: "2rem", height: "2rem" }}
            >
              <span className="visually-hidden">
                Loading...&nbsp; &nbsp;
              </span>
            </div>
            <div
              className="spinner-grow ml-1"
              role="status"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              <span className="visually-hidden">Loading...&nbsp;</span>
            </div>
            <div
              className="spinner-grow ml-1"
              role="status"
              style={{ width: "1rem", height: "1rem" }}
            >
              <span className="visually-hidden">Loading...&nbsp;</span>
            </div>
          </div>
        ) : (
          <div className="container">
            <h2 className="container d-flex align-items-center justify-content-center my-4">
              Today's News Headlines
            </h2>
            <div className="container row d-flex align-items-center justify-content-center">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4 my-3" key={e.url}>
                    <NewsItem
                      title={e.title ? e.title.slice(0, 45) : ""}
                      description={
                        e.description ? e.description.slice(0, 88) : ""
                      }
                      newsUrl={e.url}
                      date={e.publishedAt}
                      author={e.author}
                      imageUrl={!e.urlToImage ? "image.png" : e.urlToImage}
                    />
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between my-3">
              <button
                disabled={this.state.page <= 1}
                onClick={this.prevHandler}
                className="btn btn-dark"
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page >=
                  Math.ceil(this.state.totalArticles / this.props.pageSize)
                }
                onClick={this.nextHandler}
                className="btn btn-dark nextbtn"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}



