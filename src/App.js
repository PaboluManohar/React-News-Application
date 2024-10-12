import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
   // Updated to REACT_APP

  constructor() {
    super();
    this.apiKey = process.env.REACT_APP_NEWS_API_KEY;
    this.state = {
      heading: null,
      category: "general",
      progress: 0,
    };
  }

  setProgress = (a) => {
    this.setState({ progress: a });
  };

  setCategory = (a) => {
    this.setState({ category: a });
  };

  render() {

    return (
      <div>
        <BrowserRouter>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar category={this.state.category} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="general"
                  key="general-again"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setCategory={this.setCategory}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={9}
                  country="us"
                  category="technology"
                  key="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
