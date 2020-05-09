(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-account-create-account-module"],{

/***/ "./src/app/create-account/account/account.component.css":
/*!**************************************************************!*\
  !*** ./src/app/create-account/account/account.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* main */\r\n.main-content{\r\n    padding-top: 133px;\r\n    padding-bottom: 165px;\r\n    font-family: Lato;\r\n    background: #F8F8F8;\r\n    width: 1440px;\r\n}\r\n.app-body .card-group{\r\n    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);\r\n    height: 450px;\r\n    border-radius: 12px;\r\n}\r\n.img-login{\r\n    position: relative;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n}\r\n.img-login .text-content{\r\n    position: absolute;\r\n    top: 60px;\r\n    left: 86px;\r\n}\r\n.img-login .text-content h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #FFF;\r\n}\r\n.img-login .text-content span{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #FFF;\r\n}\r\n.content-signin-left .content{\r\n    border: none;\r\n    height: 450px;\r\n    border-top-left-radius: 12px;\r\n    border-bottom-left-radius: 12px;\r\n    z-index: 0;\r\n}\r\n.content-signin-right .content{\r\n    border: none;\r\n    height: 450px;\r\n    border-top-right-radius: 12px;\r\n    border-bottom-right-radius: 12px;\r\n}\r\nh1{\r\n    margin-top: 23px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    margin-bottom: 27px;\r\n}\r\n.input-group{\r\n    width: 344px;\r\n    margin-bottom: 16px;\r\n}\r\n.input-group input[type=\"text\"], .input-group input[type=\"password\"]{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    height: 62px;\r\n    background: unset !important;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n    padding-left: 26px;\r\n    z-index: 0;\r\n}\r\n.input-group input[type=\"password\"]{\r\n    position: relative;  \r\n}\r\n.input-group .img-Eye img{\r\n    position: absolute;\r\n    top: 19px;\r\n    right: 24px;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n}\r\n.text-err{\r\n    color: red;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\ninput::-webkit-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::-ms-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n.input-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\nform button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    width: 344px;\r\n    height: 62px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    border: none;\r\n    margin-bottom: 23px;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\nform .text-bot{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #757575;\r\n}\r\nform .text-bot span a{\r\n    color: #757575;\r\n    text-decoration: underline;\r\n}\r\n.error-text{\r\n    width: 344px;\r\n    height: 62px;\r\n    background: #F65555;\r\n    opacity: 0.2;\r\n    position: absolute;\r\n    left: 548px;\r\n    top: 706px;\r\n}\r\n.error-text span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #F65555;\r\n}\r\nform button:active{\r\n    border: none;\r\n}\r\n.error-loading{\r\n    background: #F65555;\r\n    opacity: 0.2;\r\n    width: 344px;\r\n    height: 62px;\r\n    position: absolute;\r\n    left: 548px;\r\n    top: 705px;\r\n}\r\n.error-loading .text-err{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    -webkit-transform: translate(0,32%);\r\n            transform: translate(0,32%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsaUNBQWlDO0NBQ3BDO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFORDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBTkQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0NBQTRCO1lBQTVCLDRCQUE0QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1hY2NvdW50L2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiBtYWluICovXHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTY1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbi5hcHAtYm9keSAuY2FyZC1ncm91cHtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmltZy1sb2dpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmltZy1sb2dpbiAudGV4dC1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgbGVmdDogODZweDtcclxufVxyXG4uaW1nLWxvZ2luIC50ZXh0LWNvbnRlbnQgaDJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4uaW1nLWxvZ2luIC50ZXh0LWNvbnRlbnQgc3BhbntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5jb250ZW50LXNpZ25pbi1sZWZ0IC5jb250ZW50e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4uY29udGVudC1zaWduaW4tcmlnaHQgLmNvbnRlbnR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG59XHJcbi5pbnB1dC1ncm91cHtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxufVxyXG4uaW5wdXQtZ3JvdXAgLmltZy1FeWUgaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOXB4O1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0LWVycntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGOTEwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmZvcm0gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbmZvcm0gLnRleHQtYm90e1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG5mb3JtIC50ZXh0LWJvdCBzcGFuIGF7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5lcnJvci10ZXh0e1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y2NTU1NTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDU0OHB4O1xyXG4gICAgdG9wOiA3MDZweDtcclxufVxyXG4uZXJyb3ItdGV4dCBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI0Y2NTU1NTtcclxufVxyXG5mb3JtIGJ1dHRvbjphY3RpdmV7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci1sb2FkaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI0Y2NTU1NTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDU0OHB4O1xyXG4gICAgdG9wOiA3MDVweDtcclxufVxyXG4uZXJyb3ItbG9hZGluZyAudGV4dC1lcnJ7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDMyJSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-account/account/account.component.html":
/*!***************************************************************!*\
  !*** ./src/app/create-account/account/account.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"app-body\">\r\n    <main class=\"main d-flex align-items-center\">\r\n      <div class=\"content-main\" style=\"margin: auto\">\r\n        <div style=\"width: 904px !important;\">\r\n          <div class=\"card-group\">\r\n            <div class=\"content-signin-left\" style=\"width:50%\">\r\n              <div class=\"img-login\" [@divState]=\"state\" (click)=\"click()\" *ngIf=\"animation\">\r\n                <img [src]=\"imgSingup\" class=\"img-fluid\" [@stateImg]=\"stateImg\">\r\n                <div class=\"text-content text-center\">\r\n                  <h2>Welcome to Better</h2>\r\n                  <span>Taxes made simple</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"card p-4 content\" *ngIf=\"showloading\" [@divState1]=\"state1\" >\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Sign in</h1>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" autocomplete=\"off\" required #email>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <input [type]=\"!showPass ? 'password' : 'text'\" class=\"form-control\" [(ngModel)]=\"txtpassLogin\" name=\"passLogin\"\r\n                        placeholder=\"Password\" autocomplete=\"off\" id=\"password\" required (keyup.enter)=\"login(email.value,password.value)\" #password>\r\n                      <div class=\"img-Eye\" (click)=\"TogglePassword()\" *ngIf=\"txtpassLogin.length == 0 ? showEye : !showEye\">\r\n                        <a><img [src]=\"imgEye\" *ngIf=\"showPass\"></a>\r\n                        <a><img [src]=\"imgHideEye\" *ngIf=\"!showPass\" style=\"width: 24px; height: 24px;\"></a>\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\" (click)=\"login(email.value,password.value)\">Sign into your account</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a style=\"cursor: pointer\">Sign up.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-signin-right\" style=\"width:50%\">\r\n              <div class=\"card p-4 content\" *ngIf=\"!showloading\">\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Create your account</h1>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" autocomplete=\"off\" required #emailRegister>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <input [type]=\"!showPass ? 'password' : 'text'\" class=\"form-control\" [(ngModel)]=\"txtpassRegister\" name=\"pass\"\r\n                        placeholder=\"Password\" autocomplete=\"off\" required (key.enter)=\"RegisterAccount(emailRegister.value, passwordRegister.value)\" #passwordRegister>\r\n                      <div class=\"img-Eye\" *ngIf=\"txtpassRegister.length == 0 ? showEye : !showEye\" (click)=\"TogglePassword()\" >\r\n                        <a><img [src]=\"imgEye\" *ngIf=\"showPass\"></a>\r\n                        <a><img [src]=\"imgHideEye\" *ngIf=\"!showPass\" style=\"width: 24px; height: 24px;\"></a>\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\" (click)=\"RegisterAccount(emailRegister.value,passwordRegister.value)\">Continue to next step</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a style=\"cursor: pointer;\" [routerLink]=\"['/signup/signin']\">Sign in.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"error-loading\" *ngIf=\"showErr\">\r\n  <div class=\"text-err\">{{error}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-account/account/account.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/create-account/account/account.component.ts ***!
  \*************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/connect-service */ "./src/app/appService/connect-service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, _connect) {
        this.router = router;
        this._connect = _connect;
        this.state = "normal";
        this.state1 = "bottom";
        this.stateImg = "imgLeft";
        this.showloading = false;
        this.animation = true;
        this.txtpassRegister = "";
        this.txtpassLogin = "";
        this.showEye = false;
        this.showPass = false;
        // register
        this.error = "";
        this.showErr = false;
        //content-main
        this.imgEye = "assets/images/Eye.png";
        this.imgHideEye = "assets/images/eyeHide.png";
        this.imgSingup = "assets/images/imageLogin.png";
        this.imgLogin = "assets/images/imageSignup.png";
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.click = function () {
        this.state == "normal" ? this.state = 'highlighted' : this.state = 'normal';
        this.state1 == "bottom" ? this.state1 = 'top' : this.state1 = 'bottom';
        this.stateImg == "imgLeft" ? this.stateImg = 'imgRight' : this.stateImg = 'imgLeft';
        this.showloading = !this.showloading;
    };
    AccountComponent.prototype.mobileNumber = function () {
        this.router.navigateByUrl('signup/mobile');
    };
    AccountComponent.prototype.TogglePassword = function () {
        this.showPass = !this.showPass;
    };
    AccountComponent.prototype.login = function (email, password) {
        this.error = "";
        var regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        if (!regEmail.test(email)) {
            this.showErr = true;
            this.error = "Email invalid!";
            return false;
        }
        if (email == "" || password == "") {
            this.showErr = true;
            this.error = "Email or password can't be blank!";
            return false;
        }
        if (email === undefined || password === undefined) {
            this.showErr = true;
            this.error = "Incorrect log in credentials!";
            return false;
        }
        this._connect.loginBetter(email, password);
    };
    AccountComponent.prototype.RegisterAccount = function (emailRegister, passwordRegister) {
        var regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
        this.error = "";
        if (emailRegister == "" || passwordRegister == "") {
            this.showErr = true;
            this.error = "Email or Password can't be blank!";
        }
        if (!regEmail.test(emailRegister)) {
            this.showErr = true;
            this.error = "Email is invalid!";
            return false;
        }
        if (!regPass.test(passwordRegister)) {
            this.showErr = true;
            this.error = 'Password must contain at least 8 characters, one lower case letter, one upper case letter, one number and one of the following symbols: !, @, #, $, %, &, * ';
            return false;
        }
        this._connect.registerBetter(emailRegister, passwordRegister);
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/create-account/account/account.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('divState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(452px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(500)),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stateImg', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('imgLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'border-top-left-radius': '12px',
                        'border-bottom-left-radius': '12px',
                        'border-top-right-radius': '0',
                        'border-bottom-right-radius': '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('imgRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'border-top-left-radius': '0',
                        'border-bottom-left-radius': '0',
                        'border-top-right-radius': '12px',
                        'border-bottom-right-radius': '12px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(500)),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('divState1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('bottom', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateY(-452px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('bottom <=> top', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300))
                ])
            ],
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/create-account/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_appService_connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectAccountService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/create-account/create-account-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/create-account/create-account-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mobile_number_mobile_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-number/mobile-number.component */ "./src/app/create-account/mobile-number/mobile-number.component.ts");
/* harmony import */ var _verify_code_verify_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-code/verify-code.component */ "./src/app/create-account/verify-code/verify-code.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/create-account/account/account.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/create-account/signin/signin.component.ts");







var routes = [
    {
        path: '',
        data: {
            title: 'signup'
        },
        children: [
            {
                path: '',
                component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"]
            },
            {
                path: 'mobile',
                component: _mobile_number_mobile_number_component__WEBPACK_IMPORTED_MODULE_3__["MobileNumberComponent"]
            },
            {
                path: 'verify-code',
                component: _verify_code_verify_code_component__WEBPACK_IMPORTED_MODULE_4__["VerifyCodeComponent"]
            },
            {
                path: 'signin',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
            }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountModule", function() { return CreateAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-account-routing.module */ "./src/app/create-account/create-account-routing.module.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/create-account/account/account.component.ts");
/* harmony import */ var _mobile_number_mobile_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-number/mobile-number.component */ "./src/app/create-account/mobile-number/mobile-number.component.ts");
/* harmony import */ var _verify_code_verify_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verify-code/verify-code.component */ "./src/app/create-account/verify-code/verify-code.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/create-account/signin/signin.component.ts");









var CreateAccountModule = /** @class */ (function () {
    function CreateAccountModule() {
    }
    CreateAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _create_account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
            ],
            declarations: [
                _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
                _mobile_number_mobile_number_component__WEBPACK_IMPORTED_MODULE_6__["MobileNumberComponent"],
                _verify_code_verify_code_component__WEBPACK_IMPORTED_MODULE_7__["VerifyCodeComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"]
            ]
        })
    ], CreateAccountModule);
    return CreateAccountModule;
}());



/***/ }),

/***/ "./src/app/create-account/mobile-number/mobile-number.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/create-account/mobile-number/mobile-number.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* main */\r\n.main-content{\r\n    padding-top: 133px;\r\n    padding-bottom: 165px;\r\n    font-family: Lato;\r\n    background: #F8F8F8;\r\n    width: 1440px;\r\n}\r\n.app-body .card-group{\r\n    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);\r\n    height: 450px;\r\n    border-radius: 12px;\r\n}\r\n.img-login{\r\n    position: relative;\r\n}\r\n.img-login .text-content{\r\n    position: absolute;\r\n    top: 60px;\r\n    left: 86px;\r\n}\r\n.img-login .text-content h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #FFF;\r\n}\r\n.img-login .text-content span{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #FFF;\r\n    width: 177px;\r\n    height: 77px;\r\n}\r\nh1{\r\n    margin-top: 23px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    margin-bottom: 27px;\r\n    width: 200px;\r\n    height: 27px;\r\n}\r\n.input-group{\r\n    width: 344px;\r\n    margin-bottom: 16px;\r\n}\r\n.input-group input[type=\"text\"]{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    height: 62px;\r\n    background: unset !important;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n    padding-left: 26px;\r\n}\r\ninput::-webkit-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::-ms-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n.input-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\nform button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    width: 344px;\r\n    height: 62px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    border: none;\r\n    margin-bottom: 23px;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\nform .text-bot{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    width: 187px !important;\r\n    height: 20px !important;\r\n    margin: auto;\r\n}\r\nform .text-bot span a{\r\n    color: #757575;\r\n    text-decoration: underline;\r\n}\r\n.content-right .mobile-number{\r\n    border: none;\r\n    height: 450px;\r\n    border-top-right-radius: 12px;\r\n    border-bottom-right-radius: 12px;\r\n}\r\n.mobile-number form h1{\r\n    margin-bottom: 26px;\r\n}\r\n.mobile-number form p{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    width: 344px;\r\n    height: 53px;\r\n    margin-bottom: 26px\r\n}\r\n.error-loading{\r\n    background: #F65555;\r\n    opacity: 0.2;\r\n    width: 344px;\r\n    height: 62px;\r\n    position: absolute;\r\n    left: 548px;\r\n    top: 705px;\r\n}\r\n.error-loading .text-err{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    -webkit-transform: translate(0,32%);\r\n            transform: translate(0,32%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvbW9iaWxlLW51bWJlci9tb2JpbGUtbnVtYmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFORDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBTkQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixpQ0FBaUM7Q0FDcEM7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWFjY291bnQvbW9iaWxlLW51bWJlci9tb2JpbGUtbnVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qIG1haW4gKi9cclxuLm1haW4tY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiAxMzNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuLmFwcC1ib2R5IC5jYXJkLWdyb3Vwe1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uaW1nLWxvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbWctbG9naW4gLnRleHQtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDg2cHg7XHJcbn1cclxuLmltZy1sb2dpbiAudGV4dC1jb250ZW50IGgye1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmltZy1sb2dpbiAudGV4dC1jb250ZW50IHNwYW57XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHdpZHRoOiAxNzdweDtcclxuICAgIGhlaWdodDogNzdweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXB7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJhY2tncm91bmQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG59XHJcbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5mb3JtIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5mb3JtIC50ZXh0LWJvdHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aWR0aDogMTg3cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbmZvcm0gLnRleHQtYm90IHNwYW4gYXtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHQgLm1vYmlsZS1udW1iZXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxufVxyXG4ubW9iaWxlLW51bWJlciBmb3JtIGgxe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxufVxyXG4ubW9iaWxlLW51bWJlciBmb3JtIHB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweFxyXG59XHJcblxyXG4uZXJyb3ItbG9hZGluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGNjU1NTU7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1NDhweDtcclxuICAgIHRvcDogNzA1cHg7XHJcbn1cclxuLmVycm9yLWxvYWRpbmcgLnRleHQtZXJye1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwzMiUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/create-account/mobile-number/mobile-number.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/create-account/mobile-number/mobile-number.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"app-body\">\r\n    <main class=\"main d-flex align-items-center\">\r\n      <div class=\"content-main\" style=\"margin: auto\">\r\n        <div style=\"width: 904px !important;\">\r\n          <div class=\"card-group\">\r\n            <div class=\"content-signin\" style=\"width:50%\">\r\n              <div class=\"img-login\" *ngIf=\"!showloading\">\r\n                <img [src]=\"imgLogin\" class=\"img-fluid\">\r\n                <div class=\"text-content text-center\">\r\n                  <h2>Welcome to Better</h2>\r\n                  <span>Taxes made simple</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"card p-4 content\" *ngIf=\"showloading\" style=\"border: none;\">\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Sign in</h1>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" autocomplete=\"off\" required>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"textpass\" name=\"pass\"\r\n                        placeholder=\"Password\" autocomplete=\"off\" required>\r\n                      <div class=\"img-Eye\" *ngIf=\"textpass.length == 0 ? showEye : !showEye\">\r\n                        <img [src]=\"imgEye\">\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\">Sign into your account</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a href=\"#\">Sign in.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-right\" style=\"width:50%\">\r\n              <div class=\"card p-4 mobile-number\" style=\"border: none\">\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Create your account</h1>\r\n                    <p>{{content}}</p>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" [value]=\"phoneNumber\" placeholder=\"Mobile number\"\r\n                        autocomplete=\"off\" id=\"phoneNull\" (key.enter)=\"mobileNumber.value\" #mobileNumber>\r\n                    </div>\r\n                    <button type=\"button\" (click)=\"ConfirmCode(mobileNumber.value)\">Send confimation code</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a style=\"cursor: pointer;\">Sign in.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"error-loading\" *ngIf=\"showErr\">\r\n  <div class=\"text-err\">{{error}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-account/mobile-number/mobile-number.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/create-account/mobile-number/mobile-number.component.ts ***!
  \*************************************************************************/
/*! exports provided: MobileNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNumberComponent", function() { return MobileNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/connect-service */ "./src/app/appService/connect-service.ts");




var MobileNumberComponent = /** @class */ (function () {
    function MobileNumberComponent(router, _connect) {
        this.router = router;
        this._connect = _connect;
        this.showloading = false;
        this.textpass = "";
        this.showEye = false;
        this.phoneNumber = "+84";
        this.error = "";
        this.showErr = false;
        this.imgEye = "assets/images/Eye.png";
        this.imgLogin = "assets/images/imageLogin.png";
        this.content = "Verifying your account keeps you safe online.";
    }
    MobileNumberComponent.prototype.ngOnInit = function () {
    };
    MobileNumberComponent.prototype.ConfirmCode = function (phoneNumber) {
        this.error = "";
        var regPhone = new RegExp("^((\\+\\d{1,4}[ -]*)?|(0[ -]*))*\\d{3}[ -]*\\d{3}[ -]*\\d{4}$");
        if (phoneNumber == "") {
            this.showErr = true;
            this.error = "Phone Number can't be blank!";
            document.getElementById("phoneNull").focus();
            return false;
        }
        if (!regPhone.test(phoneNumber)) {
            this.showErr = true;
            this.error = "Phone Number invalid!";
            return false;
        }
        this._connect.PhoneNumber(phoneNumber);
    };
    MobileNumberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-number',
            template: __webpack_require__(/*! ./mobile-number.component.html */ "./src/app/create-account/mobile-number/mobile-number.component.html"),
            styles: [__webpack_require__(/*! ./mobile-number.component.css */ "./src/app/create-account/mobile-number/mobile-number.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_appService_connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectAccountService"]])
    ], MobileNumberComponent);
    return MobileNumberComponent;
}());



/***/ }),

/***/ "./src/app/create-account/signin/signin.component.css":
/*!************************************************************!*\
  !*** ./src/app/create-account/signin/signin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* main */\r\n.main-content{\r\n    padding-top: 133px;\r\n    padding-bottom: 165px;\r\n    font-family: Lato;\r\n    background: #F8F8F8;\r\n    width: 1440px;\r\n}\r\n.app-body .card-group{\r\n    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);\r\n    height: 450px;\r\n    border-radius: 12px;\r\n}\r\n.img-login{\r\n    position: relative;\r\n}\r\n.img-login .text-content{\r\n    position: absolute;\r\n    top: 60px;\r\n    left: 86px;\r\n}\r\n.img-login .text-content h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #FFF;\r\n}\r\n.img-login .text-content span{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #FFF;\r\n}\r\n.content-signin-left .content{\r\n    border: none;\r\n    height: 450px;\r\n    border-top-left-radius: 12px;\r\n    border-bottom-left-radius: 12px;\r\n}\r\n.content-signin-right .content{\r\n    border: none;\r\n    height: 450px;\r\n    border-top-right-radius: 12px;\r\n    border-bottom-right-radius: 12px;\r\n}\r\nh1{\r\n    margin-top: 23px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    margin-bottom: 27px;\r\n}\r\n.input-group{\r\n    width: 344px;\r\n    margin-bottom: 16px;\r\n}\r\n.input-group input[type=\"text\"], .input-group input[type=\"password\"]{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    height: 62px;\r\n    background: unset !important;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n    padding-left: 26px;\r\n    z-index: 0;\r\n}\r\n.input-group input[type=\"password\"]{\r\n    position: relative;\r\n}\r\n.input-group .img-Eye img{\r\n    position: absolute;\r\n    top: 19px;\r\n    right: 24px;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n}\r\ninput::-webkit-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::-ms-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n.input-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\nform button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    width: 344px;\r\n    height: 62px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    border: none;\r\n    margin-bottom: 23px;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\nform .text-bot{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #757575;\r\n}\r\nform .text-bot span a{\r\n    color: #757575;\r\n    text-decoration: underline;\r\n}\r\n.error-loading{\r\n    background: #F65555;\r\n    opacity: 0.2;\r\n    width: 344px;\r\n    height: 62px;\r\n    position: absolute;\r\n    left: 548px;\r\n    top: 705px;\r\n}\r\n.error-loading .text-err{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    -webkit-transform: translate(0,32%);\r\n            transform: translate(0,32%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGlDQUFpQztDQUNwQztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQU5EO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFORDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUE0QjtZQUE1Qiw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qIG1haW4gKi9cclxuLm1haW4tY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiAxMzNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuLmFwcC1ib2R5IC5jYXJkLWdyb3Vwe1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uaW1nLWxvZ2lue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbWctbG9naW4gLnRleHQtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDg2cHg7XHJcbn1cclxuLmltZy1sb2dpbiAudGV4dC1jb250ZW50IGgye1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmltZy1sb2dpbiAudGV4dC1jb250ZW50IHNwYW57XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4uY29udGVudC1zaWduaW4tbGVmdCAuY29udGVudHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxufVxyXG4uY29udGVudC1zaWduaW4tcmlnaHQgLmNvbnRlbnR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG59XHJcbi5pbnB1dC1ncm91cHtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmlucHV0LWdyb3VwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJde1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi5pbnB1dC1ncm91cCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmlucHV0LWdyb3VwIC5pbWctRXllIGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTlweDtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG59XHJcbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5mb3JtIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5mb3JtIC50ZXh0LWJvdHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuZm9ybSAudGV4dC1ib3Qgc3BhbiBhe1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZXJyb3ItbG9hZGluZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGNjU1NTU7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1NDhweDtcclxuICAgIHRvcDogNzA1cHg7XHJcbn1cclxuLmVycm9yLWxvYWRpbmcgLnRleHQtZXJye1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwzMiUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/create-account/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/create-account/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"app-body\">\r\n    <main class=\"main d-flex align-items-center\">\r\n      <div class=\"content-main\" style=\"margin: auto\">\r\n        <div style=\"width: 904px !important;\">\r\n          <div class=\"card-group\">\r\n            <div class=\"content-signin-left\" style=\"width:50%\">\r\n              <div class=\"img-login\" *ngIf=\"showloading\">\r\n                <img [src]=\"imgSingup\" class=\"img-fluid\">\r\n                <div class=\"text-content text-center\">\r\n                  <h2>Welcome to Better</h2>\r\n                  <span>Taxes made simple</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"card p-4 content\">\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Sign in</h1>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" autocomplete=\"off\" required #email>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <input [type]=\"!showPass ? 'password' : 'text'\" class=\"form-control\" [(ngModel)]=\"textpass\" name=\"pass\"\r\n                        placeholder=\"Password\" autocomplete=\"off\" id=\"password\" required (keyup.enter)=\"loginBetter(email.value,password.value)\" #password>\r\n                      <div class=\"img-Eye\" (click)=\"TogglePassword()\" *ngIf=\"textpass.length == 0 ? showEye : !showEye\">\r\n                        <a><img [src]=\"imgEye\" *ngIf=\"showPass\"></a>\r\n                        <a><img [src]=\"imgHideEye\" *ngIf=\"!showPass\" style=\"width: 24px; height: 24px;\"></a>\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\" (click)=\"loginBetter(email.value,password.value)\">Sign into your account</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a style=\"cursor: pointer\" [routerLink]=\"['/signup']\">Sign up.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-signin-right\" style=\"width:50%\">\r\n              <div class=\"img-login\" *ngIf=\"!showloading\">\r\n                <img [src]=\"imgLogin\" class=\"img-fluid\">\r\n                <div class=\"text-content text-center\">\r\n                  <h2>Welcome to Better</h2>\r\n                  <span>Taxes made simple</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"email.errors?.required\" class=\"error\">\r\n  Email is required\r\n</div>\r\n\r\n<div class=\"error-loading\" *ngIf=\"showErr\">\r\n  <div class=\"text-err\">{{error}}</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/create-account/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/create-account/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_appService_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/appService/connect-service */ "./src/app/appService/connect-service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(_connect) {
        this._connect = _connect;
        this.showloading = false;
        this.textpass = "";
        this.showEye = false;
        this.showPass = false;
        this.showErr = false;
        this.error = "";
        //content-main
        this.imgEye = "assets/images/Eye.png";
        this.imgHideEye = "assets/images/eyeHide.png";
        this.imgSingup = "assets/images/imageLogin.png";
        this.imgLogin = "assets/images/imageSignup.png";
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.TogglePassword = function () {
        this.showPass = !this.showPass;
    };
    SigninComponent.prototype.loginBetter = function (email, password) {
        this.error = "";
        var regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
        if (email == "" || password == "") {
            this.showErr = true;
            this.error = "Email and Password can't be blank!";
        }
        if (!regEmail.test(email)) {
            this.showErr = true;
            this.error = "Email is invalid!";
        }
        if (!regPass.test(password)) {
            this.showErr = true;
            this.error = "Password is invalid!";
        }
        this._connect.loginBetter(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/create-account/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/create-account/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_appService_connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectAccountService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/create-account/verify-code/verify-code.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/create-account/verify-code/verify-code.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* main */\r\n.main-content{\r\n    padding-top: 133px;\r\n    padding-bottom: 165px;\r\n    font-family: Lato;\r\n    background: #F8F8F8;\r\n    width: 1440px;\r\n}\r\n.app-body .card-group{\r\n    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);\r\n    height: 450px;\r\n    border-radius: 12px;\r\n}\r\n.img-login{\r\n    position: relative;\r\n}\r\n.img-login .text-content{\r\n    position: absolute;\r\n    top: 60px;\r\n    left: 86px;\r\n}\r\n.img-login .text-content h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #FFF;\r\n}\r\n.img-login .text-content span{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #FFF;\r\n    width: 177px;\r\n    height: 77px;\r\n}\r\nh1{\r\n    margin-top: 23px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    margin-bottom: 27px;\r\n    width: 200px;\r\n    height: 27px;\r\n}\r\n.input-group{\r\n    width: 344px;\r\n    margin-bottom: 16px;\r\n}\r\n.input-group input[type=\"text\"]{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    height: 62px;\r\n    background: unset !important;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;;\r\n    padding-left: 26px;\r\n}\r\ninput::-webkit-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::-ms-input-placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\ninput::placeholder{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n.input-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\nform button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    width: 344px;\r\n    height: 62px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    border: none;\r\n    margin-bottom: 23px;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\nform .text-bot{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    width: 187px !important;\r\n    height: 20px !important;\r\n    margin: auto;\r\n}\r\nform .text-bot span a{\r\n    color: #757575;\r\n    text-decoration: underline;\r\n}\r\n.content-right .mobile-number{\r\n    border: none;\r\n    height: 450px;\r\n    border-top-right-radius: 12px;\r\n    border-bottom-right-radius: 12px;\r\n}\r\n.mobile-number form h1{\r\n    margin-bottom: 26px;\r\n}\r\n.mobile-number form p{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    width: 344px;\r\n    height: 53px;\r\n    margin-bottom: 26px\r\n}\r\n.error-loading{\r\n    background: #F65555;\r\n    opacity: 0.2;\r\n    width: 344px;\r\n    height: 62px;\r\n    position: absolute;\r\n    left: 548px;\r\n    top: 705px;\r\n}\r\n.error-loading .text-err{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    -webkit-transform: translate(0,32%);\r\n            transform: translate(0,32%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnQvdmVyaWZ5LWNvZGUvdmVyaWZ5LWNvZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFVBQVU7QUFDVjtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSw0Q0FBNEM7SUFDNUMsY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQU5EO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFORDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUE0QjtZQUE1Qiw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudC92ZXJpZnktY29kZS92ZXJpZnktY29kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiBtYWluICovXHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTY1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbi5hcHAtYm9keSAuY2FyZC1ncm91cHtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmltZy1sb2dpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW1nLWxvZ2luIC50ZXh0LWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBsZWZ0OiA4NnB4O1xyXG59XHJcbi5pbWctbG9naW4gLnRleHQtY29udGVudCBoMntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5pbWctbG9naW4gLnRleHQtY29udGVudCBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbiAgICBoZWlnaHQ6IDc3cHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjdweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3Vwe1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uaW5wdXQtZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNzs7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGOTEwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmZvcm0gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbmZvcm0gLnRleHQtYm90e1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdpZHRoOiAxODdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuZm9ybSAudGV4dC1ib3Qgc3BhbiBhe1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uY29udGVudC1yaWdodCAubW9iaWxlLW51bWJlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG59XHJcbi5tb2JpbGUtbnVtYmVyIGZvcm0gaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG59XHJcbi5tb2JpbGUtbnVtYmVyIGZvcm0gcHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4XHJcbn1cclxuXHJcbi5lcnJvci1sb2FkaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI0Y2NTU1NTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDU0OHB4O1xyXG4gICAgdG9wOiA3MDVweDtcclxufVxyXG4uZXJyb3ItbG9hZGluZyAudGV4dC1lcnJ7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDMyJSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-account/verify-code/verify-code.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/create-account/verify-code/verify-code.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"app-body\">\r\n    <main class=\"main d-flex align-items-center\">\r\n      <div class=\"content-main\" style=\"margin: auto\">\r\n        <div style=\"width: 904px !important;\">\r\n          <div class=\"card-group\">\r\n            <div class=\"content-signin\" style=\"width:50%\">\r\n              <div class=\"img-login\" *ngIf=\"!showloading\">\r\n                <img [src]=\"imgLogin\" class=\"img-fluid\">\r\n                <div class=\"text-content text-center\">\r\n                  <h2>Welcome to Better</h2>\r\n                  <span>Taxes made simple</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"card p-4 content\" *ngIf=\"showloading\" style=\"border: none;\">\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Sign in</h1>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" autocomplete=\"off\" required>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"textpass\" name=\"pass\"\r\n                        placeholder=\"Password\" autocomplete=\"off\" required>\r\n                      <div class=\"img-Eye\" *ngIf=\"textpass.length == 0 ? showEye : !showEye\">\r\n                        <img [src]=\"imgEye\">\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\">Sign into your account</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a href=\"#\">Sign in.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-right\" style=\"width:50%\">\r\n              <div class=\"card p-4 mobile-number\" style=\"border: none\">\r\n                <div class=\"card-body\" style=\"margin: auto;\">\r\n                  <form>\r\n                    <h1>Create your account</h1>\r\n                    <p>{{content}}</p>\r\n                    <div class=\"input-group\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter confirmation code\" autocomplete=\"off\"\r\n                        required (key.enter)=\"smsCode.value\" #smsCode id=\"cofirmCode\">\r\n                    </div>\r\n                    <button type=\"button\" (click)=\"setupGuide(smsCode.value)\">Sign into your account</button>\r\n                    <div class=\"text-bot\">\r\n                      <span>Already a member? <a style=\"cursor: pointer;\">Sign in.</a></span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"error-loading\" *ngIf=\"showErr\">\r\n  <div class=\"text-err\">{{error}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-account/verify-code/verify-code.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/create-account/verify-code/verify-code.component.ts ***!
  \*********************************************************************/
/*! exports provided: VerifyCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodeComponent", function() { return VerifyCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VerifyCodeComponent = /** @class */ (function () {
    function VerifyCodeComponent(router) {
        this.router = router;
        this.showloading = false;
        this.textpass = "";
        this.showEye = false;
        this.error = "";
        this.showErr = false;
        this.imgEye = "assets/images/Eye.png";
        this.imgLogin = "assets/images/imageLogin.png";
        this.content = "Verifying your account keeps you safe online.";
    }
    VerifyCodeComponent.prototype.ngOnInit = function () {
    };
    VerifyCodeComponent.prototype.setupGuide = function (smsCode) {
        this.error = "";
        if (smsCode == "") {
            this.showErr = true;
            this.error = "SmsCode can't be blank!";
            document.getElementById("cofirmCode").focus();
        }
        else {
            this.router.navigateByUrl('signup/signin');
        }
    };
    VerifyCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-code',
            template: __webpack_require__(/*! ./verify-code.component.html */ "./src/app/create-account/verify-code/verify-code.component.html"),
            styles: [__webpack_require__(/*! ./verify-code.component.css */ "./src/app/create-account/verify-code/verify-code.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerifyCodeComponent);
    return VerifyCodeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=create-account-create-account-module.js.map