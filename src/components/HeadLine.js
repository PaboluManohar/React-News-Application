// import React, { Component } from "react";

// export default class HeadLine extends Component {
//   render() {
//     return (
//       <div
//         className="container-fluid d-flex justify-content-center align-items-center"
//         style={{
//           width: "100%",
//           height: "50px", // Increased height
//           backgroundColor: "skyblue",
//           lineHeight: "50px", // Adjusted to match the height
//         }}
//       >
//         <marquee
//           style={{
//             width: "100%",
//             fontSize: "35px", // Increased font size
//             fontWeight: "bold", // Optional, makes text bold for better visibility
//           }}
//           scrollamount="5" // Increased speed of scrolling
//           direction="center"
//         >
//           {this.props.headings}
//         </marquee>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class HeadLine extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.headings}</h4>
      </div>
    );
  }
}
