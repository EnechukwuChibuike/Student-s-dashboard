// import React, { useState } from "react";
// import "./Body.css";
// import User from "./user.svg";

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Body() {
   var overAllProgress = 70;
   var CourseCompletion = 47;

   var _React$useState = React.useState(false),
       _React$useState2 = _slicedToArray(_React$useState, 2),
       inHover = _React$useState2[0],
       setHover = _React$useState2[1];

   var _React$useState3 = React.useState(false),
       _React$useState4 = _slicedToArray(_React$useState3, 2),
       inHover2 = _React$useState4[0],
       setHover2 = _React$useState4[1];

   var _React$useState5 = React.useState(false),
       _React$useState6 = _slicedToArray(_React$useState5, 2),
       inHover3 = _React$useState6[0],
       setHover3 = _React$useState6[1];

   var _React$useState7 = React.useState(false),
       _React$useState8 = _slicedToArray(_React$useState7, 2),
       inHover4 = _React$useState8[0],
       setHover4 = _React$useState8[1];

   return React.createElement(
      "div",
      null,
      React.createElement(
         "div",
         { className: "body_div" },
         React.createElement(
            "div",
            { className: "sub_div" },
            React.createElement(
               "h2",
               { className: "Hi" },
               "Hi DeSaint, your analytics are set."
            ),
            React.createElement(
               "div",
               { className: "analytics_div" },
               React.createElement(
                  "p",
                  { className: "analytics_p" },
                  "Over-all Progress",
                  React.createElement(
                     "p",
                     { className: "analytics_p2" },
                     "" + overAllProgress,
                     "%"
                  )
               ),
               React.createElement(
                  "div",
                  { className: "progress_container1" },
                  React.createElement("div", {
                     className: overAllProgress > 0 && overAllProgress <= 30 ? "progressIndicator_red" : overAllProgress > 30 && overAllProgress <= 69 ? "progressIndicator_yellow" : overAllProgress > 69 && overAllProgress <= 100 ? "progressIndicator_green" : null,
                     style: {
                        width: overAllProgress + "%",
                        height: "10px",
                        borderRadius: "10px"
                     }
                  })
               )
            ),
            React.createElement(
               "div",
               { className: "course_div" },
               React.createElement(
                  "p",
                  { className: "analytics_p" },
                  "Course Completion",
                  React.createElement(
                     "p",
                     { className: "analytics_p2" },
                     "" + CourseCompletion,
                     "%"
                  )
               ),
               React.createElement(
                  "div",
                  { className: "progress_container2" },
                  React.createElement("div", {
                     className: CourseCompletion > 0 && CourseCompletion <= 30 ? "progressIndicator_red" : CourseCompletion > 30 && CourseCompletion <= 60 ? "progressIndicator_yellow" : CourseCompletion > 60 && CourseCompletion <= 100 ? "progressIndicator_green" : null,
                     style: {
                        width: CourseCompletion + "%",
                        height: "10px",
                        borderRadius: "10px"
                     }
                  })
               )
            )
         ),
         React.createElement(
            "div",
            { className: "body_table" },
            React.createElement(
               "div",
               { className: "table_sub" },
               React.createElement(
                  "p",
                  { className: "body_" },
                  "NAME"
               ),
               React.createElement(
                  "p",
                  { className: "body_" },
                  "COURSE"
               )
            ),
            React.createElement(
               "div",
               {
                  className: "table_sub",
                  onMouseEnter: function onMouseEnter() {
                     return setHover(true);
                  },
                  onMouseLeave: function onMouseLeave() {
                     return setHover(false);
                  }
               },
               inHover && React.createElement(
                  "div",
                  { className: "hover_main" },
                  React.createElement("div", { className: "border" }),
                  React.createElement(
                     "div",
                     { className: "hover_sub" },
                     React.createElement("img", { className: "hover_img", src: "/User.svg", alt: "User" }),
                     React.createElement(
                        "p",
                        { style: { marginRight: "60px" } },
                        "Peter McMan"
                     ),
                     React.createElement(
                        "p",
                        { style: { marginRight: "60px" } },
                        "HTML & CSS"
                     )
                  )
               ),
               React.createElement(
                  "p",
                  null,
                  "Peter McMan"
               ),
               React.createElement(
                  "p",
                  null,
                  "HTML & CSS"
               )
            ),
            React.createElement(
               "div",
               {
                  className: "table_sub",
                  onMouseEnter: function onMouseEnter() {
                     return setHover2(true);
                  },
                  onMouseLeave: function onMouseLeave() {
                     return setHover2(false);
                  }
               },
               inHover2 && React.createElement(
                  "div",
                  { className: "hover_main" },
                  React.createElement("div", { className: "border" }),
                  React.createElement(
                     "div",
                     { className: "hover_sub" },
                     React.createElement("img", { className: "hover_img", src: "/User.svg", alt: "User" }),
                     React.createElement(
                        "p",
                        { style: { marginRight: "60px" } },
                        "Jane Doe"
                     ),
                     React.createElement(
                        "p",
                        { style: { marginRight: "60px" } },
                        "Photoshop"
                     )
                  )
               ),
               React.createElement(
                  "p",
                  null,
                  "Jane Doe"
               ),
               React.createElement(
                  "p",
                  null,
                  "Photoshop"
               )
            ),
            React.createElement(
               "div",
               {
                  className: "table_sub",
                  onMouseEnter: function onMouseEnter() {
                     return setHover3(true);
                  },
                  onMouseLeave: function onMouseLeave() {
                     return setHover3(false);
                  }
               },
               inHover3 && React.createElement(
                  "div",
                  { className: "hover_main" },
                  React.createElement("div", { className: "border" }),
                  React.createElement(
                     "div",
                     { className: "hover_sub" },
                     React.createElement("img", { className: "hover_img", src: "/User.svg", alt: "User" }),
                     React.createElement(
                        "p",
                        { style: { marginRight: "60px" } },
                        "Derrick Lin"
                     ),
                     React.createElement(
                        "p",
                        { style: { marginRight: "60px" } },
                        "JavaScript"
                     )
                  )
               ),
               React.createElement(
                  "p",
                  null,
                  "Derrick Lin"
               ),
               React.createElement(
                  "p",
                  null,
                  "JavaScript"
               )
            ),
            React.createElement(
               "div",
               {
                  className: "table_sub",
                  onMouseEnter: function onMouseEnter() {
                     return setHover4(true);
                  },
                  onMouseLeave: function onMouseLeave() {
                     return setHover4(false);
                  }
               },
               inHover4 && React.createElement(
                  "div",
                  { className: "hover_main" },
                  React.createElement("div", { className: "border" }),
                  React.createElement(
                     "div",
                     { className: "hover_sub" },
                     React.createElement("img", { className: "hover_img", src: "/User.svg", alt: "User" }),
                     React.createElement(
                        "p",
                        { style: { marginRight: "40px" } },
                        "Joseph Peterson"
                     ),
                     React.createElement(
                        "p",
                        { style: { marginRight: "40px" } },
                        "FreeLancing"
                     )
                  )
               ),
               React.createElement(
                  "p",
                  null,
                  "Joseph Peterson"
               ),
               React.createElement(
                  "p",
                  null,
                  "FreeLancing"
               )
            )
         )
      )
   );
}

var domContainer = document.querySelector("#body");
ReactDOM.render(React.createElement(Body, null), domContainer);