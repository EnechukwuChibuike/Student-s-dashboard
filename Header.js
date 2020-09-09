// import React, { Component } from "react";
// import "./Header.css";
// import Logo from "./Logo.png";
// import User from "./user.png";
// import Profile from "./user.svg";

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
   _inherits(Header, _React$Component);

   function Header(props) {
      _classCallCheck(this, Header);

      var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

      _this.state = { onClick: false };
      _this.handleClick = _this.handleClick.bind(_this);

      _this.state = { openMenu: false };
      _this.handleOpenMenu = _this.handleOpenMenu.bind(_this);
      return _this;
   }

   _createClass(Header, [{
      key: "handleClick",
      value: function handleClick() {
         this.setState(function (prevState) {
            return {
               onClick: !prevState.onClick
            };
         });
      }
   }, {
      key: "handleOpenMenu",
      value: function handleOpenMenu() {
         this.setState(function (prevState) {
            return {
               openMenu: !prevState.openMenu
            };
         });
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            { className: "header_div" },
            React.createElement(
               "div",
               { className: "logo_div" },
               React.createElement(
                  "div",
                  { className: "menu_icon_div", onClick: this.handleOpenMenu },
                  React.createElement(
                     "div",
                     { className: "menu_icon" },
                     " "
                  ),
                  React.createElement(
                     "div",
                     { className: "menu_icon" },
                     " "
                  ),
                  React.createElement(
                     "div",
                     { className: "menu_icon" },
                     " "
                  ),
                  this.state.openMenu ? React.createElement(
                     "div",
                     { className: "openMenu" },
                     React.createElement(
                        "div",
                        { className: "menu_user" },
                        React.createElement("img", {
                           src: "/User.svg",
                           style: { height: "50px", marginLeft: "20px" },
                           alt: "user"
                        }),
                        React.createElement(
                           "p",
                           { style: { color: "black", marginLeft: "20px" } },
                           "DeSaint"
                        )
                     ),
                     React.createElement(
                        "div",
                        { className: "mobile_ul_div" },
                        React.createElement(
                           "ul",
                           { className: "mobile_ul" },
                           React.createElement(
                              "a",
                              { href: "Home" },
                              React.createElement(
                                 "li",
                                 { style: { color: "black" } },
                                 "HOME"
                              )
                           ),
                           React.createElement(
                              "a",
                              { href: "Home" },
                              React.createElement(
                                 "li",
                                 { style: { color: "black" } },
                                 "DASHBOARD"
                              )
                           ),
                           React.createElement(
                              "a",
                              { href: "Home" },
                              React.createElement(
                                 "li",
                                 { style: { color: "black" } },
                                 "PROFILE"
                              )
                           )
                        )
                     )
                  ) : null
               ),
               React.createElement("img", { className: "logo", src: "/Logo.png", alt: "Logo" })
            ),
            React.createElement(
               "div",
               { className: "ul_div" },
               React.createElement(
                  "ul",
                  {
                     className: "ul",
                     style: {
                        display: "inline-flex"
                     }
                  },
                  React.createElement(
                     "a",
                     { className: "header_a", href: "Home" },
                     React.createElement(
                        "li",
                        { className: "header_li" },
                        " HOME "
                     )
                  ),
                  React.createElement(
                     "a",
                     { className: "header_a2", href: "Home" },
                     React.createElement(
                        "li",
                        { className: "header_li" },
                        " DASHBOARD "
                     )
                  ),
                  React.createElement(
                     "a",
                     { className: "header_a", href: "Home" },
                     React.createElement(
                        "li",
                        { className: "header_li" },
                        " PROFILE "
                     )
                  )
               ),
               React.createElement(
                  "div",
                  { className: "pgh_div" },
                  React.createElement("img", { src: "/User.png", className: "User", alt: "user" }),
                  React.createElement(
                     "p",
                     { className: "header_p" },
                     "DeSaint"
                  ),
                  React.createElement("div", { className: "arrow_div", onClick: this.handleClick }),
                  this.state.onClick ? React.createElement(
                     "div",
                     { className: "onclick" },
                     React.createElement(
                        "p",
                        null,
                        "Change Password"
                     ),
                     React.createElement(
                        "p",
                        null,
                        "LogOut"
                     )
                  ) : null
               )
            ),
            React.createElement("div", null)
         );
      }
   }]);

   return Header;
}(React.Component);

var domContainer = document.querySelector("#header");
ReactDOM.render(React.createElement(Header, null), domContainer);