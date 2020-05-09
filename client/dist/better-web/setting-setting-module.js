(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./src/app/setting/bank-account/bank-account.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/setting/bank-account/bank-account.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-bankAccount{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .active{\r\n    color: #001527;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .nav-link:nth-child(4) span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n}\r\n.item-content-right h2{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    width: 373px;\r\n    height: 39px;\r\n    margin-bottom: 37px\r\n}\r\n.bank-your-account .bank-account{\r\n    display: flex;\r\n}\r\n.bank-your-account .logo{\r\n    position: relative;\r\n}\r\n.bank-your-account .logo img:first-child{\r\n    width: 46px;\r\n    height: 46px;\r\n    margin-right: 20px;\r\n    position: relative;\r\n\r\n}\r\n.bank-your-account .logo img:nth-child(2){\r\n    border-radius: 50%;    \r\n    position: absolute;\r\n    left: 6px;\r\n    bottom: 6px;\r\n    width: 34px;\r\n    height: 34px;\r\n}\r\n.bank-your-account .logo span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    width: 115px;\r\n    height: 37px;\r\n    color: #001527;\r\n}\r\n.bank-your-account button{\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 44px;\r\n    width: 106px;\r\n    height: 46px;\r\n    background: unset;\r\n    cursor: pointer;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #001527;\r\n    position: absolute;\r\n    right: 182px;\r\n    outline: 0;\r\n}\r\n.bottom-account{\r\n    width: 683px;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    margin: 21px 0;\r\n}\r\n.vince-account{\r\n    display: flex;\r\n    position: relative;\r\n    margin-bottom: 22px;\r\n}\r\n.vince-account .switch{\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 30px;\r\n    margin-right: 18px;\r\n}\r\n.vince-account .switch input{\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.vince-account .switch .slider{\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n}\r\n.vince-account .switch  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    left: 0;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n.vince-account .switch input:checked + .slider {\r\n    background-color: #FF9100;\r\n}\r\n.vince-account .switch input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n.vince-account .switch input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n.vince-account .switch  .round {\r\n    border-radius: 34px;\r\n}\r\n.vince-account .switch .round:before {\r\n    border-radius: 50%;\r\n}\r\n.text-bank{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n}\r\n.text-bank p{\r\n    color: #001527;\r\n    width: 127px;\r\n    height: 20px;\r\n    margin-bottom: 0;\r\n}\r\n.text-bank span{\r\n    color: #757575;\r\n}\r\n.text-bank span:last-child img{\r\n    width: 26px;\r\n    height: 6px;\r\n}\r\n.vince-account a{\r\n    position: absolute;\r\n    right: 0;\r\n}\r\n.vince-account a span{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9iYW5rLWFjY291bnQvYmFuay1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7O0NBRXRCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7Q0FDYjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBRXZCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7SUFDUixZQUFZO0lBQ1osd0JBQXdCO0lBRXhCLGdCQUFnQjtHQUNqQjtBQUNIO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSw0QkFBNEI7Q0FDL0I7QUFFRDtJQUNJLG9DQUFvQztJQUVwQyw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNDO0lBQ0UsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztDQUNaO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9iYW5rLWFjY291bnQvYmFuay1hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1iYW5rQWNjb3VudHtcclxuICAgIHBhZGRpbmctbGVmdDogMTgycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDk5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pdGVtLW1lbnV7XHJcbiAgICB3aWR0aDogMjM3cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQ7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG59XHJcbi5uYXYgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2IC5hY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4ubmF2IC5uYXYtbGluayBzcGFue1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdiAubmF2LWxpbms6bnRoLWNoaWxkKDQpIHNwYW57XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG5cclxuLml0ZW0tY29udGVudC1yaWdodHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTRweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGgye1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAzNzNweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM3cHhcclxufVxyXG4uYmFuay15b3VyLWFjY291bnQgLmJhbmstYWNjb3VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJhbmsteW91ci1hY2NvdW50IC5sb2dve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iYW5rLXlvdXItYWNjb3VudCAubG9nbyBpbWc6Zmlyc3QtY2hpbGR7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuLmJhbmsteW91ci1hY2NvdW50IC5sb2dvIGltZzpudGgtY2hpbGQoMil7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNnB4O1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxufVxyXG4uYmFuay15b3VyLWFjY291bnQgLmxvZ28gc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbn1cclxuLmJhbmsteW91ci1hY2NvdW50IGJ1dHRvbntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcclxuICAgIHdpZHRoOiAxMDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxODJweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLmJvdHRvbS1hY2NvdW50e1xyXG4gICAgd2lkdGg6IDY4M3B4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luOiAyMXB4IDA7XHJcbn1cclxuLnZpbmNlLWFjY291bnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxufVxyXG4udmluY2UtYWNjb3VudCAuc3dpdGNoe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuLnZpbmNlLWFjY291bnQgLnN3aXRjaCBpbnB1dHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG4udmluY2UtYWNjb3VudCAuc3dpdGNoIC5zbGlkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuLnZpbmNlLWFjY291bnQgLnN3aXRjaCAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbi52aW5jZS1hY2NvdW50IC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTEwMDtcclxufVxyXG4gIFxyXG4udmluY2UtYWNjb3VudCAuc3dpdGNoIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuICBcclxuLnZpbmNlLWFjY291bnQgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcbi52aW5jZS1hY2NvdW50IC5zd2l0Y2ggIC5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcbiAgLnZpbmNlLWFjY291bnQgLnN3aXRjaCAucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4udGV4dC1iYW5re1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4udGV4dC1iYW5rIHB7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIHdpZHRoOiAxMjdweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnRleHQtYmFuayBzcGFue1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuLnRleHQtYmFuayBzcGFuOmxhc3QtY2hpbGQgaW1ne1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxufVxyXG4udmluY2UtYWNjb3VudCBhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLnZpbmNlLWFjY291bnQgYSBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/bank-account/bank-account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/setting/bank-account/bank-account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-bankAccount\">\r\n    <div class=\"item-menu\">\r\n        <nav class=\"nav flex-column\">\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n            <a class=\"nav-link\"><span>Bank Account</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n            <a class=\"nav-link \"><span>Report an Issue</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n            <a class=\"nav-link \" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n    </div>\r\n    <div class=\"item-content-right\">\r\n        <h2>Your linked bank accounts</h2>\r\n        <div class=\"bank-your-account\" *ngFor=\"let bank of lstBank\">\r\n            <div class=\"bank-account\">\r\n                <div class=\"logo\">\r\n                    <img src=\"{{bank.blank.logoUrl}}\">\r\n                    <span>{{bank?.blank.name}}</span>\r\n                </div>\r\n                <button (click)=\"unLink(bank?._id)\">Unlink</button>\r\n            </div>\r\n            <div class=\"bottom-account\"></div>\r\n            <div class=\"vince-account\">\r\n                <label class=\"switch \">\r\n                    <input type=\"checkbox\" checked>\r\n                    <span class=\"slider round\"></span>\r\n                </label>\r\n                <div class=\"text-bank\">\r\n                    <p>{{bank?.accounts[0].name}}</p>\r\n                    <span>{{bank?.accounts[0].subtype}} | </span>\r\n                    <span>\r\n                        <img [src]=\"img3bi\">\r\n                        1 2 3\r\n                    </span>\r\n                </div>\r\n                <a href=\"#\"><span>EDIT</span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/bank-account/bank-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/setting/bank-account/bank-account.component.ts ***!
  \****************************************************************/
/*! exports provided: BankAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountComponent", function() { return BankAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_plaid_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/plaid-link.service */ "./src/app/appService/plaid-link.service.ts");




var BankAccountComponent = /** @class */ (function () {
    function BankAccountComponent(router, _plaid) {
        this.router = router;
        this._plaid = _plaid;
        this.img3bi = "assets/images/3bi.png";
        this.lstBank = [];
    }
    BankAccountComponent.prototype.ngOnInit = function () {
        this.getBank();
    };
    BankAccountComponent.prototype.getBank = function () {
        var _this = this;
        this.idBank = localStorage.getItem('_userId');
        this._plaid.getBank(this.idBank).subscribe(function (data) {
            console.log(data);
            _this.lstBank = data.data;
        });
    };
    BankAccountComponent.prototype.unLink = function (event) {
        var _this = this;
        this.idDelete = event;
        this._plaid.unLink(this.idDelete).subscribe(function (data) {
            _this._plaid.getBank(_this.idBank).subscribe(function (data) {
                _this.lstBank = data.data;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    BankAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bank-account',
            template: __webpack_require__(/*! ./bank-account.component.html */ "./src/app/setting/bank-account/bank-account.component.html"),
            styles: [__webpack_require__(/*! ./bank-account.component.css */ "./src/app/setting/bank-account/bank-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_appService_plaid_link_service__WEBPACK_IMPORTED_MODULE_3__["PlaidLinkService"]])
    ], BankAccountComponent);
    return BankAccountComponent;
}());



/***/ }),

/***/ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/setting/contact-us/contact-confirm/contact-confirm.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    width: 1440px;\r\n    text-align: center;\r\n}\r\n.content img{\r\n    width: 56px ;\r\n    height: 56px;\r\n    margin-bottom: 32px;\r\n    margin-top: 221px;\r\n}\r\n.content h2{\r\n    width: 582px;\r\n    height: 77px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    margin-bottom: 62px;\r\n    margin: auto;\r\n}\r\n.content i{\r\n    color: #FF9100;\r\n    width: 14px;\r\n    height: 8px;\r\n    margin-right: 16px;\r\n}\r\n.content a{\r\n    width: 156px;\r\n    height: 27px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #FF9100;\r\n    display: block;\r\n    margin: 62px auto 239px auto;\r\n    white-space: nowrap;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9jb250YWN0LXVzL2NvbnRhY3QtY29uZmlybS9jb250YWN0LWNvbmZpcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9jb250YWN0LXVzL2NvbnRhY3QtY29uZmlybS9jb250YWN0LWNvbmZpcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGVudCBpbWd7XHJcbiAgICB3aWR0aDogNTZweCA7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjIxcHg7XHJcbn1cclxuLmNvbnRlbnQgaDJ7XHJcbiAgICB3aWR0aDogNTgycHg7XHJcbiAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjJweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29udGVudCBpe1xyXG4gICAgY29sb3I6ICNGRjkxMDA7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5jb250ZW50IGF7XHJcbiAgICB3aWR0aDogMTU2cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjRkY5MTAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDYycHggYXV0byAyMzlweCBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/setting/contact-us/contact-confirm/contact-confirm.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content\">\r\n    <img src=\"assets/images/dashboard/check.png\" alt=\"\">\r\n    <h2>Your message has been sent.<br> We will respond as quickly as possible.</h2>\r\n    <a [routerLink]=\"['/dashboard/contact-us']\"><i class=\"fas fa-chevron-left\"></i> Back to settings</a>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/setting/contact-us/contact-confirm/contact-confirm.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContactConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactConfirmComponent", function() { return ContactConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactConfirmComponent = /** @class */ (function () {
    function ContactConfirmComponent(router) {
        this.router = router;
    }
    ContactConfirmComponent.prototype.ngOnInit = function () {
    };
    ContactConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-confirm',
            template: __webpack_require__(/*! ./contact-confirm.component.html */ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.html"),
            styles: [__webpack_require__(/*! ./contact-confirm.component.css */ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactConfirmComponent);
    return ContactConfirmComponent;
}());



/***/ }),

/***/ "./src/app/setting/contact-us/contact-us.component.css":
/*!*************************************************************!*\
  !*** ./src/app/setting/contact-us/contact-us.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-profile{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .active span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n    width: 684px;\r\n}\r\n.item-content-right h2{\r\n    width: 175px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    margin-bottom: 38px;\r\n}\r\n.item-content-right .form-group>.form-control:focus{\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    box-shadow: none;\r\n}\r\n.item-content-right .form-group{\r\n    margin-bottom: 32px;\r\n}\r\n.item-content-right .form-group label{\r\n    font-family: 'SF Pro Text, sans-serif';\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #757575;\r\n    width: 577px;\r\n    height: 17px;\r\n    margin-bottom: 12px;\r\n}\r\n.item-content-right .form-group input{\r\n    width: 680px;\r\n    height: 62px ;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n}\r\n.item-content-right .form-group textarea{\r\n    width: 680px;\r\n    height: 265px;\r\n    resize: none;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n}\r\n.item-content-right button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    width: 240px;\r\n    height: 54px;\r\n    border: none;\r\n    padding: 14px 59px 16px 58px;\r\n    cursor: pointer;\r\n}\r\n.item-content-right button:disabled{\r\n    opacity: 0.5;\r\n}\r\n.item-content-right button span{\r\n    width: 123px;\r\n    height: 24px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wcm9maWxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxODJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBwYWRkaW5nLXRvcDogOTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWVudXtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbn1cclxuLm5hdiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2IC5hY3RpdmUgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU0cHg7XHJcbiAgICB3aWR0aDogNjg0cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBoMntcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLmZvcm0tZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuZm9ybS1ncm91cCBsYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2lkdGg6IDU3N3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5mb3JtLWdyb3VwIGlucHV0e1xyXG4gICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4IDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5mb3JtLWdyb3VwIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNjVweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTRweCA1OXB4IDE2cHggNThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGJ1dHRvbjpkaXNhYmxlZHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGJ1dHRvbiBzcGFue1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/setting/contact-us/contact-us.component.html":
/*!**************************************************************!*\
  !*** ./src/app/setting/contact-us/contact-us.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-profile\">\r\n    <div class=\"item-menu\">\r\n        <nav class=\"nav flex-column\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n            <a class=\"nav-link active\"><span>Contact Us</span></a>\r\n            <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n    </div>\r\n\r\n    <div class=\"item-content-right\">\r\n        <h2>Get in touch</h2>\r\n        <form class=\"ng-valid\" #formContact=\"ngForm\">\r\n            <div class=\"form-group\"   >\r\n                <label>Name</label>\r\n                <input class=\"form-control\" type=\"text\" ngModel name=\"name\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input class=\"form-control\" type=\"text\" ngModel name=\"email\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Phone Number</label>\r\n                <input class=\"form-control\"  type=\"text\" ngModel name=\"phone\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Message</label>\r\n                <textarea class=\"form-control\" type=\"text\" ngModel name=\"message\" ></textarea>\r\n            </div>\r\n            <button (click)=\"Confirm()\" [disabled]=\"formContact.invalid\"><span>Save Changes</span></button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/contact-us/contact-us.component.ts":
/*!************************************************************!*\
  !*** ./src/app/setting/contact-us/contact-us.component.ts ***!
  \************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(router) {
        this.router = router;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.Confirm = function () {
        this.router.navigateByUrl('dashboard/contact-confirm');
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/setting/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/setting/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/setting/default-view/default-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/setting/default-view/default-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* main */\r\n.item-main{\r\n    background: #F8F8F8;\r\n    font-family: Lato;\r\n    width: 1440px;\r\n    display: flex;\r\n    padding-bottom: 86px;\r\n}\r\n.available-income{\r\n    margin-left: 182px;\r\n    padding-top: 86px;\r\n}\r\n.available-income h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 15px;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    width: 123px;\r\n    height: 16px;\r\n}\r\n.chart-income .img-income{\r\n    position: relative;\r\n}\r\n.chart-income .img-income img{\r\n    /* border: 2px solid #FF9100;\r\n    border-radius: 40px; */\r\n    width: 631px;\r\n    height: 156px;\r\n}\r\n.chart-income  .item-detail{\r\n    position: absolute;\r\n}\r\n.chart-income .item-detail img{\r\n    width: 12px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 6px;\r\n}\r\n.chart-income .item-detail span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #001527;\r\n    position: absolute;\r\n    left: 14px;\r\n}\r\n/* keepdoing */\r\n.keep-doing{\r\n    display: flex;\r\n    margin-left: 182px;\r\n    margin-top: 49px;\r\n}\r\n.keep-doing .text-keep{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 23px;\r\n    font-size: 16px;\r\n    color: #001527;\r\n    width: 356px;\r\n    height: 47px;\r\n}\r\n.keep-doing .estimate-refund{\r\n    margin-left: 179px;\r\n    position: relative;\r\n}\r\n.keep-doing .estimate-refund p{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 12px;\r\n    text-align: right;\r\n    color: #757575;\r\n    margin-bottom: 0;\r\n    width: 96px;\r\n    height: 15px;\r\n}\r\n.keep-doing .estimate-refund span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: right;\r\n    color: #001527;\r\n    position: absolute;\r\n    left: 21px;\r\n    width: 75px;\r\n    height: 24px;\r\n}\r\n/* current-pay */\r\n.current-pay{\r\n    margin-top: 49px;\r\n    margin-left: 182px;\r\n    display: flex;\r\n}\r\n.current-pay-left{\r\n    border: 1.5px solid #E0E0E0;\r\n    border-radius: 12px;\r\n    padding: 0 24px;\r\n    width: 343px;\r\n    height: 217px;\r\n}\r\n.current-pay-left h2{\r\n    margin-top: 30px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n    margin-bottom: 11px;\r\n    width: 120px;\r\n    height: 17px;\r\n}\r\n.current-pay-left .current-date{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 12px;\r\n    color: #757575;\r\n    width: 104px;\r\n    height: 15px;\r\n    margin-bottom: 25px;\r\n}\r\n.current-pay-left .income-track{\r\n    margin-top: 20px;\r\n    margin-bottom: 19px;\r\n    position: relative;\r\n    height: 17px;\r\n}\r\n.current-pay-left .income-track span:first-child{\r\n    width: 97px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n    position: absolute;\r\n}\r\n.current-pay-left .income-track span:last-child{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n    margin-left: 138px;\r\n    width: 60px;\r\n    float: right;\r\n}\r\n.current-pay-left .estimate-safehold{\r\n    margin-top: 23px;\r\n    margin-bottom: 21px;\r\n    position: relative;\r\n    height: 17px;\r\n}\r\n.current-pay-left .estimate-safehold span:first-child{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    width: 173px;\r\n    color: #001527;\r\n    position: absolute;\r\n}\r\n.current-pay-left .estimate-safehold span:last-child{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    text-align: right;\r\n    color: #000000;\r\n    float: right;\r\n    width: 52px;\r\n}\r\n.current-pay-right{\r\n    width: 343px;\r\n    margin-left: 38px;\r\n    border: 1.5px solid #E0E0E0;\r\n    border-radius: 12px;\r\n    height: 217px;\r\n}\r\n.current-pay-right .mask{\r\n    position: relative;\r\n}\r\n.current-pay-right .mask img{\r\n    width: 343px;\r\n    height: 145px;\r\n    border-radius: 12px;\r\n}\r\n.current-pay-right .mask .text-mask{\r\n    position: absolute;\r\n    left: 24px;\r\n    bottom: 0;\r\n}\r\n.mask .text-mask a span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n    width: 83px;\r\n    height: 17px;\r\n}\r\n.mask .text-mask img{\r\n    position: absolute;\r\n    left: 107px;\r\n    top: 6px;\r\n    width: 7px;\r\n    height: 12px;\r\n}\r\n.current-pay-right .content{\r\n    margin: 0 24px;\r\n    margin-top: 17px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n    width: 295px;\r\n    height: 34px;\r\n}\r\n.content-right{\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);\r\n    border-radius: 12px;\r\n    width: 316px;\r\n    height: 541px;\r\n    margin-top: 87px;\r\n    margin-left: 39px;\r\n    padding-left: 25px;\r\n    padding-right: 26px;\r\n}\r\n.safehold-active{\r\n    margin-top: 26.2px;\r\n}\r\n.safehold-active span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n    width: 108px;\r\n    height: 17px;\r\n}\r\n.safehold-active img{\r\n    float: right;\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.item-main ul {\r\n    padding: 0;\r\n    margin-top: 19.2px;\r\n    margin-bottom: 0;\r\n}\r\n.item-main ul li{\r\n    list-style: none;\r\n    position: relative;\r\n    height: 48px;\r\n    line-height: 48px;\r\n    border-bottom: 1px solid #F2F2F2;\r\n}\r\n.item-main ul li span:first-child{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n}\r\n.item-main ul li span:last-child{\r\n    position: absolute;\r\n    right: 0;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    color: #001527;\r\n}\r\n.item-main ul li:last-child{\r\n    border-bottom: 0;\r\n}\r\n.see-more a span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #BDBDBD\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9kZWZhdWx0LXZpZXcvZGVmYXVsdC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QscUJBQXFCO0NBQ3hCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJOzJCQUN1QjtJQUN2QixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0NBQ1o7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDtBQUVELGVBQWU7QUFDZjtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFFRCxpQkFBaUI7QUFDakI7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsNkNBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUNBQWlDO0NBQ3BDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9kZWZhdWx0LXZpZXcvZGVmYXVsdC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qIG1haW4gKi9cclxuLml0ZW0tbWFpbntcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDg2cHg7XHJcbn1cclxuXHJcbi5hdmFpbGFibGUtaW5jb21le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDg2cHg7XHJcbn1cclxuLmF2YWlsYWJsZS1pbmNvbWUgaDJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLmNoYXJ0LWluY29tZSAuaW1nLWluY29tZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2hhcnQtaW5jb21lIC5pbWctaW5jb21lIGltZ3tcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4OyAqL1xyXG4gICAgd2lkdGg6IDYzMXB4O1xyXG4gICAgaGVpZ2h0OiAxNTZweDtcclxufVxyXG4uY2hhcnQtaW5jb21lICAuaXRlbS1kZXRhaWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNoYXJ0LWluY29tZSAuaXRlbS1kZXRhaWwgaW1ne1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxufVxyXG4uY2hhcnQtaW5jb21lIC5pdGVtLWRldGFpbCBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNHB4O1xyXG59XHJcblxyXG4vKiBrZWVwZG9pbmcgKi9cclxuLmtlZXAtZG9pbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDlweDtcclxufVxyXG4ua2VlcC1kb2luZyAudGV4dC1rZWVwe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICB3aWR0aDogMzU2cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmtlZXAtZG9pbmcgLmVzdGltYXRlLXJlZnVuZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNzlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ua2VlcC1kb2luZyAuZXN0aW1hdGUtcmVmdW5kIHB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcbi5rZWVwLWRvaW5nIC5lc3RpbWF0ZS1yZWZ1bmQgc3BhbntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi8qIGN1cnJlbnQtcGF5ICovXHJcbi5jdXJyZW50LXBheXtcclxuICAgIG1hcmdpbi10b3A6IDQ5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTgycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jdXJyZW50LXBheS1sZWZ0e1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIHdpZHRoOiAzNDNweDtcclxuICAgIGhlaWdodDogMjE3cHg7XHJcbn1cclxuLmN1cnJlbnQtcGF5LWxlZnQgaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG59XHJcbi5jdXJyZW50LXBheS1sZWZ0IC5jdXJyZW50LWRhdGV7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4uY3VycmVudC1wYXktbGVmdCAuaW5jb21lLXRyYWNre1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbn1cclxuLmN1cnJlbnQtcGF5LWxlZnQgLmluY29tZS10cmFjayBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgd2lkdGg6IDk3cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jdXJyZW50LXBheS1sZWZ0IC5pbmNvbWUtdHJhY2sgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tbGVmdDogMTM4cHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uY3VycmVudC1wYXktbGVmdCAuZXN0aW1hdGUtc2FmZWhvbGR7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTdweDtcclxufVxyXG4uY3VycmVudC1wYXktbGVmdCAuZXN0aW1hdGUtc2FmZWhvbGQgc3BhbjpmaXJzdC1jaGlsZHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDE3M3B4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmN1cnJlbnQtcGF5LWxlZnQgLmVzdGltYXRlLXNhZmVob2xkIHNwYW46bGFzdC1jaGlsZHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNTJweDtcclxufVxyXG4uY3VycmVudC1wYXktcmlnaHR7XHJcbiAgICB3aWR0aDogMzQzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzhweDtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDIxN3B4O1xyXG59XHJcbi5jdXJyZW50LXBheS1yaWdodCAubWFza3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY3VycmVudC1wYXktcmlnaHQgLm1hc2sgaW1ne1xyXG4gICAgd2lkdGg6IDM0M3B4O1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmN1cnJlbnQtcGF5LXJpZ2h0IC5tYXNrIC50ZXh0LW1hc2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcbi5tYXNrIC50ZXh0LW1hc2sgYSBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIGhlaWdodDogMTdweDtcclxufVxyXG4ubWFzayAudGV4dC1tYXNrIGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwN3B4O1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcbi5jdXJyZW50LXBheS1yaWdodCAuY29udGVudHtcclxuICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICB3aWR0aDogMjk1cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiAzMTZweDtcclxuICAgIGhlaWdodDogNTQxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4N3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM5cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xyXG59XHJcbi5zYWZlaG9sZC1hY3RpdmV7XHJcbiAgICBtYXJnaW4tdG9wOiAyNi4ycHg7XHJcbn1cclxuLnNhZmVob2xkLWFjdGl2ZSBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICB3aWR0aDogMTA4cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbn1cclxuLnNhZmVob2xkLWFjdGl2ZSBpbWd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG4uaXRlbS1tYWluIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxOS4ycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5pdGVtLW1haW4gdWwgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YyRjJGMjtcclxufVxyXG4uaXRlbS1tYWluIHVsIGxpIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbn1cclxuLml0ZW0tbWFpbiB1bCBsaSBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4uaXRlbS1tYWluIHVsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG59XHJcbi5zZWUtbW9yZSBhIHNwYW57XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0JEQkRCRFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/setting/default-view/default-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/setting/default-view/default-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n    <div class=\"item-main\">\r\n        <div class=\"content-left\">\r\n            <div class=\"available-income\">\r\n                <h2>Availbale Income</h2>\r\n                <div class=\"chart-income\" style=\"display: flex\">\r\n                    <div class=\"img-income\">\r\n                        <img [src]=\"imgChart\">\r\n                    </div>\r\n                    <div class=\"item-detail\">\r\n                        <img [src]=\"imgDola\">\r\n                        <span>5,623.89</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"keep-doing\">\r\n                <div class=\"text-keep\">\r\n                    {{contentKeep}}\r\n                </div>\r\n                <div class=\"estimate-refund\">\r\n                    <p>Estimate Refund</p>\r\n                    <span>$936.00</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"current-pay\">\r\n                <div class=\"current-pay-left\">\r\n                    <h2>Current Pay Period</h2>\r\n                    <div class=\"current-date\">\r\n                        10/1/18 - 10/15/18\r\n                    </div>\r\n                    <div style=\"background: #EBEBEB; height: 1px;\"></div>\r\n                    <div class=\"income-track\">\r\n                        <span>Income Track</span>\r\n                        <span>$1285.62</span>\r\n                    </div>\r\n                    <div style=\"background: #EBEBEB; height: 1px;\"></div>\r\n                    <div class=\"estimate-safehold\">\r\n                        <span>Estimate Safehold Transfer</span>\r\n                        <span>$239.41</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"current-pay-right\">\r\n                    <div class=\"mask\">\r\n                        <img [src]=\"imgMask\" class=\"img-fluid\">\r\n                        <div class=\"text-mask\">\r\n                            <a href=\"#\"><span>Refer to earn</span></a>\r\n                            <img [src]=\"imgLink\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"content\">{{textRight}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-right\">\r\n            <div class=\"safehold-active\">\r\n                <span>Safehold Activity</span>\r\n                <img [src]=\"imgMore\">\r\n            </div>\r\n            <ul>\r\n                <li>\r\n                    <span>Oct15,2018</span>\r\n                    <span>+$128.33</span>\r\n                </li>\r\n                <li>\r\n                    <span>Oct7,2018</span>\r\n                    <span style=\"color: #F65555;\">-$28.31</span>\r\n                </li>\r\n                <li>\r\n                    <span>Oct1,2018</span>\r\n                    <span>+$43.00</span>\r\n                </li>\r\n                <li>\r\n                    <span>Step23,2018</span>\r\n                    <span>+$61.50</span>\r\n                </li>\r\n                <li>\r\n                    <span>Step17,2018</span>\r\n                    <span>+$110.03</span>\r\n                </li>\r\n                <li>\r\n                    <span>Step9,2018</span>\r\n                    <span style=\"color: #F65555;\">-$12.49</span>\r\n                </li>\r\n                <li>\r\n                    <span>Step3,2018</span>\r\n                    <span>+$18.90</span>\r\n                </li>\r\n                <li>\r\n                    <span>Aug26,2018</span>\r\n                    <span>+$12.00</span>\r\n                </li>\r\n                <li>\r\n                    <span>Aug20,2018</span>\r\n                    <span>+$97.60</span>\r\n                </li>\r\n            </ul>\r\n\r\n            <div class=\"see-more text-center\">\r\n                <a href=\"#\"><span>See more</span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/setting/default-view/default-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/setting/default-view/default-view.component.ts ***!
  \****************************************************************/
/*! exports provided: DefaultViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultViewComponent", function() { return DefaultViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DefaultViewComponent = /** @class */ (function () {
    function DefaultViewComponent(router) {
        this.router = router;
        //main
        this.imgDola = "assets/images/dola.png";
        this.imgChart = "assets/images/chartIncome.png";
        this.contentKeep = "Keep doing what you're doing! You are on track to receive a refund when you file your tax return.";
        //current-pay
        this.imgMask = "assets/images/maskGroup2.png";
        this.imgLink = "assets/images/link.png";
        this.textRight = "Reccomend the Better app to any friend and each of you wil receive $5 to your accounts.";
        //content-right
        this.imgMore = "assets/images/iconMore.png";
    }
    DefaultViewComponent.prototype.ngOnInit = function () {
    };
    DefaultViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-view',
            template: __webpack_require__(/*! ./default-view.component.html */ "./src/app/setting/default-view/default-view.component.html"),
            styles: [__webpack_require__(/*! ./default-view.component.css */ "./src/app/setting/default-view/default-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DefaultViewComponent);
    return DefaultViewComponent;
}());



/***/ }),

/***/ "./src/app/setting/delete-account/confim-delete/confim-delete.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/setting/delete-account/confim-delete/confim-delete.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-confirm-delete{\r\n    width: 1440px;\r\n    background: #F8F8F8;\r\n    font-family: Lato;\r\n    padding-top: 104px;\r\n}\r\n.content-confirm-delete h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    width: 418px;\r\n    height: 39px;\r\n    color: #001527;\r\n    margin: auto;\r\n    margin-bottom: 13px;\r\n}\r\n.content-confirm-delete p{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    width: 680px;\r\n    height: 74px;\r\n    margin: auto;\r\n    color: #001527;\r\n    margin-bottom: 5px;\r\n}\r\n.content-confirm-delete form{\r\n    padding-bottom: 132px;\r\n}\r\n.content-confirm-delete form .form-group textarea{\r\n    width: 680px;\r\n    height: 265px;\r\n    padding-top: 29px;\r\n    padding-left: 32px;\r\n    margin: auto;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #BDBDBD;\r\n    border-radius: 12px;\r\n\r\n}\r\n.form-group>.form-control:focus{\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    box-shadow: none;\r\n}\r\n.content-confirm-delete form .form-group textarea::-webkit-input-placeholder{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #BDBDBD;\r\n}\r\n.content-confirm-delete form .form-group textarea::-ms-input-placeholder{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #BDBDBD;\r\n}\r\n.content-confirm-delete form .form-group textarea::placeholder{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #BDBDBD;\r\n}\r\nform .btn-feedback button{\r\n    width: 240px;\r\n    height: 54px;\r\n    cursor: pointer;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    border-radius: 44px;\r\n    border: none;\r\n    font-size: 20px;\r\n    outline: 0;\r\n}\r\nform .btn-feedback button:first-child{\r\n    background: #FF9100;\r\n    color: #FFF;\r\n    margin-right: 49px;\r\n}\r\nform .btn-feedback button:last-child{\r\n    background: unset;\r\n    color: #757575;\r\n    border: 3px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9kZWxldGUtYWNjb3VudC9jb25maW0tZGVsZXRlL2NvbmZpbS1kZWxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9COztDQUV2QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFQRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQVBEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztDQUNkO0FBQ0E7SUFDRyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9kZWxldGUtYWNjb3VudC9jb25maW0tZGVsZXRlL2NvbmZpbS1kZWxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbmZpcm0tZGVsZXRle1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMDRweDtcclxufVxyXG4uY29udGVudC1jb25maXJtLWRlbGV0ZSBoMntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHdpZHRoOiA0MThweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG4uY29udGVudC1jb25maXJtLWRlbGV0ZSBwe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmNvbnRlbnQtY29uZmlybS1kZWxldGUgZm9ybXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMzJweDtcclxufVxyXG4uY29udGVudC1jb25maXJtLWRlbGV0ZSBmb3JtIC5mb3JtLWdyb3VwIHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDY4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAyOXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG59XHJcbi5mb3JtLWdyb3VwPi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5jb250ZW50LWNvbmZpcm0tZGVsZXRlIGZvcm0gLmZvcm0tZ3JvdXAgdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxufVxyXG5mb3JtIC5idG4tZmVlZGJhY2sgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4gZm9ybSAuYnRuLWZlZWRiYWNrIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbi1yaWdodDogNDlweDtcclxufVxyXG5mb3JtIC5idG4tZmVlZGJhY2sgYnV0dG9uOmxhc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/setting/delete-account/confim-delete/confim-delete.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/setting/delete-account/confim-delete/confim-delete.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-confirm-delete text-center\">\r\n  <h2>We're sorry to see you go.</h2>\r\n  <p>{{content}}</p>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <textarea class=\"form-control\" placeholder=\"{{placeHolder}}\"></textarea>\r\n    </div>\r\n    <div class=\"btn-feedback\">\r\n      <button type=\"button\" [routerLink]=\"['/dashboard/confirm-feedback']\">Submit</button>\r\n      <button type=\"button\" [routerLink]=\"['/signup/signin']\">Skip feedback</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/delete-account/confim-delete/confim-delete.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/setting/delete-account/confim-delete/confim-delete.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfimDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfimDeleteComponent", function() { return ConfimDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfimDeleteComponent = /** @class */ (function () {
    function ConfimDeleteComponent() {
        this.content = "We're always looking to improve. Please help us out by tellings us your reason for leaving.";
        this.placeHolder = "Room for improvement? Simply don't require our services anymore? Let us know.";
    }
    ConfimDeleteComponent.prototype.ngOnInit = function () {
    };
    ConfimDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confim-delete',
            template: __webpack_require__(/*! ./confim-delete.component.html */ "./src/app/setting/delete-account/confim-delete/confim-delete.component.html"),
            styles: [__webpack_require__(/*! ./confim-delete.component.css */ "./src/app/setting/delete-account/confim-delete/confim-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfimDeleteComponent);
    return ConfimDeleteComponent;
}());



/***/ }),

/***/ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-feedback{\r\n    width: 1440px;\r\n    background: #F8F8F8;\r\n    padding-top: 268px;\r\n    padding-bottom: 282px;\r\n}\r\n.img-check img{\r\n    width: 56px;\r\n    height: 56px;\r\n    margin: auto;\r\n}\r\n.text-content{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    width: 582px;\r\n    height: 77px;\r\n    margin: auto;\r\n    margin-top: 32px;\r\n}\r\n.text-content p{\r\n    margin-bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9kZWxldGUtYWNjb3VudC9jb25maW0tZGVsZXRlL2NvbmZpcm0tZmVlZGJhY2svY29uZmlybS1mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL2RlbGV0ZS1hY2NvdW50L2NvbmZpbS1kZWxldGUvY29uZmlybS1mZWVkYmFjay9jb25maXJtLWZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS1mZWVkYmFja3tcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgcGFkZGluZy10b3A6IDI2OHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI4MnB4O1xyXG59XHJcbi5pbWctY2hlY2sgaW1ne1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRleHQtY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgd2lkdGg6IDU4MnB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4udGV4dC1jb250ZW50IHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"confirm-feedback text-center\">\r\n  <div class=\"img-check\">\r\n    <img [src]=\"imgCheck\">\r\n  </div>\r\n  <div class=\"text-content text-center\">\r\n    <p>Thank you!</p>\r\n    <span>We appreciate your feedback.</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ConfirmFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmFeedbackComponent", function() { return ConfirmFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmFeedbackComponent = /** @class */ (function () {
    function ConfirmFeedbackComponent() {
        this.imgCheck = "assets/images/setup-guide/check.png";
    }
    ConfirmFeedbackComponent.prototype.ngOnInit = function () {
    };
    ConfirmFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-feedback',
            template: __webpack_require__(/*! ./confirm-feedback.component.html */ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.html"),
            styles: [__webpack_require__(/*! ./confirm-feedback.component.css */ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmFeedbackComponent);
    return ConfirmFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-activate-confirm{\r\n    width: 1440px;\r\n    background: #F8F8F8;\r\n}\r\n.img-check img{\r\n    width: 56px;\r\n    height: 56px;\r\n    margin-top: 221px;\r\n    margin-bottom: 32px;\r\n}\r\n.content-activate-confirm p{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000;\r\n    width: 582px;\r\n    height: 77px;\r\n    margin: auto;\r\n    margin-bottom: 62px\r\n}\r\n.backSetting{\r\n    padding-bottom: 239px;\r\n    position: relative;\r\n}\r\n.content-activate-confirm .backSetting a img{\r\n    width: 8px;\r\n    height: 14px;\r\n    position: absolute;\r\n    top: 7px;\r\n}\r\n.content-activate-confirm .backSetting a:last-child{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    width: 156px;\r\n    height: 27px;\r\n    color: #FF9100;\r\n    margin-left: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9kZWxldGUtYWNjb3VudC9kZWFjdGl2YXRlLWNvbmZpcm0vZGVhY3RpdmF0ZS1jb25maXJtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztDQUNaO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvZGVsZXRlLWFjY291bnQvZGVhY3RpdmF0ZS1jb25maXJtL2RlYWN0aXZhdGUtY29uZmlybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYWN0aXZhdGUtY29uZmlybXtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcbi5pbWctY2hlY2sgaW1ne1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMjFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLmNvbnRlbnQtYWN0aXZhdGUtY29uZmlybSBwe1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiA1ODJweDtcclxuICAgIGhlaWdodDogNzdweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDYycHhcclxufVxyXG4uYmFja1NldHRpbmd7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjM5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRlbnQtYWN0aXZhdGUtY29uZmlybSAuYmFja1NldHRpbmcgYSBpbWd7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbn1cclxuLmNvbnRlbnQtYWN0aXZhdGUtY29uZmlybSAuYmFja1NldHRpbmcgYTpsYXN0LWNoaWxke1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB3aWR0aDogMTU2cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBjb2xvcjogI0ZGOTEwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-activate-confirm text-center\">\r\n  <div class=\"img-check\">\r\n    <img [src]=\"imgCheck\">\r\n  </div>\r\n  <p>{{content}}</p>\r\n  <div class=\"backSetting\">\r\n    <a [routerLink]=\"['/signup/signin']\"><img [src]=\"imgBack\"></a>\r\n    <a [routerLink]=\"['/signup/signin']\">Back to settings</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeactivateConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateConfirmComponent", function() { return DeactivateConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeactivateConfirmComponent = /** @class */ (function () {
    function DeactivateConfirmComponent() {
        this.imgCheck = "assets/images/setup-guide/check.png";
        this.content = "Your account has been deactivated. This can be undone in settings.";
        this.imgBack = "assets/images/backSetting.png";
    }
    DeactivateConfirmComponent.prototype.ngOnInit = function () {
    };
    DeactivateConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deactivate-confirm',
            template: __webpack_require__(/*! ./deactivate-confirm.component.html */ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.html"),
            styles: [__webpack_require__(/*! ./deactivate-confirm.component.css */ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeactivateConfirmComponent);
    return DeactivateConfirmComponent;
}());



/***/ }),

/***/ "./src/app/setting/delete-account/delete-account.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/setting/delete-account/delete-account.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    position: relative;\r\n}\r\n.content-deleteAccount{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .nav-link:last-child span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n}\r\n.item-content-right h2{\r\n    font-family: SF Pro Text, sans-serif, sans-serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #000;\r\n    width: 359px;\r\n    height: 32px;\r\n    margin-bottom: 16px;\r\n}\r\n.item-content-right p{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    width: 468px;\r\n    height: 74px;\r\n    color: #757575;\r\n    margin-bottom: 26px;\r\n}\r\n.item-content-right button{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    width: 254px;\r\n    height: 54px;\r\n    color: #FFF;\r\n    border-radius: 44px;\r\n    border: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.item-content-right .btn-activate{\r\n    background: #FF9100;\r\n    margin-bottom: 83px;\r\n}\r\n.item-content-right .btn-delete{\r\n    background: #F65555;\r\n}\r\n.item-content-right .text-delete{\r\n    width: 198px;\r\n}\r\n.modal-body{\r\n    font-family: Lato;\r\n    width: 727px;\r\n    padding: 0;\r\n    height: 410px\r\n}\r\n.modal-body h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #001527;\r\n    width: 292px;\r\n    height: 39px;\r\n    margin: auto;\r\n    margin-top: 76px;\r\n    margin-bottom: 18px\r\n}\r\n.text-content p{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    width: 580px;\r\n    height: 74px;\r\n    margin: auto;\r\n}\r\n.button-activate{\r\n    display: inline-grid;\r\n}\r\n.button-activate button{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    border-radius: 44px;\r\n    width: 240px;\r\n    height: 54px;\r\n    border: none;\r\n    cursor: pointer;\r\n    position: relative;\r\n    outline: 0;\r\n}\r\n.button-activate button:first-child span{\r\n    position: absolute;\r\n    top: 14px;\r\n    left: -1px;\r\n\r\n}\r\n.button-activate button:last-child span{\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 5px;\r\n\r\n}\r\n.button-activate button:first-child{\r\n    background: #FF9100;\r\n    color: #FFFFFF;\r\n    margin-bottom: 20px;\r\n}\r\n.button-activate button:last-child{\r\n    border: 3px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    color: #757575;\r\n    margin-bottom: 89px;\r\n    background: unset;\r\n}\r\n.button-delete{\r\n    display: inline-grid;\r\n}\r\n.button-delete button{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    border-radius: 44px;\r\n    width: 240px;\r\n    height: 54px;\r\n    border: none;\r\n    cursor: pointer;\r\n    position: relative;\r\n    outline: 0;\r\n}\r\n.button-delete button:first-child span{\r\n    position: absolute;\r\n    top: 14px;\r\n    left: 18px;\r\n}\r\n.button-delete button:first-child{\r\n    background: #F65555;\r\n    color: #FFFFFF;\r\n    margin-bottom: 20px;\r\n}\r\n.button-delete button:last-child{\r\n    border: 3px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    color: #757575;\r\n    margin-bottom: 89px;\r\n    background: unset;\r\n}\r\n.button-delete button:last-child span{\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 5px;\r\n}\r\n.blur-content{\r\n    width: 1440px;\r\n    filter: blur(16px);\r\n    -webkit-filter: blur(16px);\r\n    background: rgba(255, 255, 255, 0.7);\r\n}\r\n.modal-content {\r\n    width: 727px;\r\n\r\n}\r\n.modal-dialog {\r\n    max-width: 727px;\r\n    margin: auto;\r\n    height: 410px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0%;\r\n    -webkit-transform: translate(50%,-50%) !important;\r\n            transform: translate(50%,-50%) !important;\r\n}\r\n@media screen and (min-width: 576px){\r\n    .modal-content {\r\n        width: 727px;\r\n        height: 410px;  \r\n        background: #FFFFFF;\r\n        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);\r\n        border-radius: 12px;\r\n    }\r\n}\r\n:host-context( .content-deleteAccount ) button:focus{\r\n    outline:0;\r\n}\r\n:host(.modal-backdrop.show){\r\n    background: rgba(255, 255, 255, 0.7);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9kZWxldGUtYWNjb3VudC9kZWxldGUtYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0kscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXOztDQUVkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7O0NBRWI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixxQ0FBcUM7Q0FDeEM7QUFDRDtJQUNJLGFBQWE7O0NBRWhCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFNBQVM7SUFDVCxrREFBMEM7WUFBMUMsMENBQTBDO0NBQzdDO0FBQ0Q7SUFDSTtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLDJDQUEyQztRQUMzQyxvQkFBb0I7S0FDdkI7Q0FDSjtBQUVEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7SUFDSSxxQ0FBcUM7Q0FDeEMiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL2RlbGV0ZS1hY2NvdW50L2RlbGV0ZS1hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGVudC1kZWxldGVBY2NvdW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxODJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBwYWRkaW5nLXRvcDogOTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWVudXtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbn1cclxuLm5hdiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2IC5uYXYtbGluazpsYXN0LWNoaWxkIHNwYW57XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgaDJ7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDM1OXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IHB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdpZHRoOiA0NjhweDtcclxuICAgIGhlaWdodDogNzRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1NHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5idG4tYWN0aXZhdGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODNweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5idG4tZGVsZXRle1xyXG4gICAgYmFja2dyb3VuZDogI0Y2NTU1NTtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC50ZXh0LWRlbGV0ZXtcclxuICAgIHdpZHRoOiAxOThweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHdpZHRoOiA3MjdweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDQxMHB4XHJcbn1cclxuLm1vZGFsLWJvZHkgaDJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIHdpZHRoOiAyOTJweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDc2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4XHJcbn1cclxuLnRleHQtY29udGVudCBwe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aWR0aDogNTgwcHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmJ1dHRvbi1hY3RpdmF0ZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcbi5idXR0b24tYWN0aXZhdGUgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uYnV0dG9uLWFjdGl2YXRlIGJ1dHRvbjpmaXJzdC1jaGlsZCBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuXHJcbn1cclxuLmJ1dHRvbi1hY3RpdmF0ZSBidXR0b246bGFzdC1jaGlsZCBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG5cclxufVxyXG4uYnV0dG9uLWFjdGl2YXRlIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tYWN0aXZhdGUgYnV0dG9uOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODlweDtcclxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xyXG59XHJcbi5idXR0b24tZGVsZXRle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuLmJ1dHRvbi1kZWxldGUgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uYnV0dG9uLWRlbGV0ZSBidXR0b246Zmlyc3QtY2hpbGQgc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGxlZnQ6IDE4cHg7XHJcbn1cclxuLmJ1dHRvbi1kZWxldGUgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogI0Y2NTU1NTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnV0dG9uLWRlbGV0ZSBidXR0b246bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4OXB4O1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbn1cclxuLmJ1dHRvbi1kZWxldGUgYnV0dG9uOmxhc3QtY2hpbGQgc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IDVweDtcclxufVxyXG4uYmx1ci1jb250ZW50e1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICAgIGZpbHRlcjogYmx1cigxNnB4KTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDE2cHgpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiA3MjdweDtcclxuXHJcbn1cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDcyN3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsLTUwJSkgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDcyN3B4O1xyXG4gICAgICAgIGhlaWdodDogNDEwcHg7ICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KCAuY29udGVudC1kZWxldGVBY2NvdW50ICkgYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTowO1xyXG59XHJcbjpob3N0KC5tb2RhbC1iYWNrZHJvcC5zaG93KXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/delete-account/delete-account.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/setting/delete-account/delete-account.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-deleteAccount blur-content\" [class.blur-content]=\"showBlur1\" [class.blur-content]=\"showBlur2\">\r\n  <div class=\"item-menu\">\r\n    <nav class=\"nav flex-column\">\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n      <a class=\"nav-link \"><span>Report an Issue</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n      <a class=\"nav-link \"><span>Delete Your Account</span></a>\r\n    </nav>\r\n  </div>\r\n  <div class=\"item-content-right\">\r\n    <h2>Temporarily deactivate your account</h2>\r\n    <p>{{contentDeactivate}}</p>\r\n    <button class=\"btn-activate\" type=\"button\"  (click)=\"BlurContent1()\">\r\n      Deactivate Account\r\n    </button>\r\n    <h2 class=\"text-delete\">Delete your account</h2>\r\n    <p>{{contentDelete}}</p>\r\n    <button class=\"btn-delete\" type=\"button\"  (click)=\"BlurContent2()\">\r\n      Delete Account\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-1\" *ngIf=\"showBlur1\" >\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        <h2>Are you sure?</h2>\r\n        <div class=\"text-content\">\r\n          <p>You are about to temporarily disable your account. Continue?</p>\r\n        </div>\r\n        <div class=\"button-activate\">\r\n          <button type=\"button\" (click)=\"DeActivateAccount()\"><span>Yes, deactivate my account</span></button>\r\n          <button type=\"button\" (click)=\"deCline1()\"><span>No, I've changed my mind</span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-2\" *ngIf=\"showBlur2\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        <h2>Are you sure?</h2>\r\n        <div class=\"text-content\">\r\n          <p>You are about to permanentaly delete your account. Continue?</p>\r\n        </div>\r\n        <div class=\"button-delete\">\r\n          <button type=\"button\" (click)=\"DeleteAccount()\"><span>Yes, delete my account</span></button>\r\n          <button type=\"button\" (click)=\"deCline2()\"><span>No, I've changed my mind</span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/delete-account/delete-account.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/setting/delete-account/delete-account.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleteAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function() { return DeleteAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/user-service.service */ "./src/app/appService/user-service.service.ts");




var DeleteAccountComponent = /** @class */ (function () {
    function DeleteAccountComponent(router, _user) {
        this.router = router;
        this._user = _user;
        this.contentDeactivate = "Deactivating your account turns off all transactions until you decide to reactive.";
        this.contentDelete = "This action is permanent. All of your account history will no longer be accessible.";
        this.showBlur1 = false;
        this.showBlur2 = false;
        this.lock = true;
        this.idDelete = localStorage.getItem('_userId');
    }
    DeleteAccountComponent.prototype.ngOnInit = function () {
    };
    DeleteAccountComponent.prototype.BlurContent1 = function () {
        this.showBlur1 = true;
    };
    DeleteAccountComponent.prototype.BlurContent2 = function () {
        this.showBlur2 = true;
    };
    DeleteAccountComponent.prototype.DeActivateAccount = function () {
        var _this = this;
        this._user.deActiveAccount(this.idDelete, this.lock).subscribe(function (data) {
            localStorage.removeItem('_token');
            localStorage.removeItem('_userId');
            _this.showBlur1 = false;
            _this.router.navigate(['dashboard/activate-confirm']);
        });
    };
    DeleteAccountComponent.prototype.DeleteAccount = function () {
        var _this = this;
        this._user.deleteAccount(this.idDelete).subscribe(function (data) {
            _this.showBlur2 = false;
            localStorage.removeItem('_token');
            localStorage.removeItem('_userId');
            _this.router.navigate(['dashboard/confirm-delete']);
        }, function (err) {
            console.log(err);
        });
    };
    DeleteAccountComponent.prototype.deCline1 = function () {
        this.showBlur1 = false;
    };
    DeleteAccountComponent.prototype.deCline2 = function () {
        this.showBlur2 = false;
    };
    DeleteAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-account',
            template: __webpack_require__(/*! ./delete-account.component.html */ "./src/app/setting/delete-account/delete-account.component.html"),
            styles: [__webpack_require__(/*! ./delete-account.component.css */ "./src/app/setting/delete-account/delete-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], DeleteAccountComponent);
    return DeleteAccountComponent;
}());



/***/ }),

/***/ "./src/app/setting/email/email.component.css":
/*!***************************************************!*\
  !*** ./src/app/setting/email/email.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-email{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .active{\r\n    color: #001527;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .nav-link:nth-child(2) span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n}\r\n.item-content-right h2{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000;\r\n    margin-bottom: 38px;\r\n}\r\n.item-content-right form .form-group{\r\n    margin-bottom: 32px;\r\n}\r\n.item-content-right form label{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #757575;\r\n\r\n}\r\n.item-content-right form input{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    width: 344px;\r\n    height: 62px;\r\n    padding-left: 26px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n}\r\n.form-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\n.item-content-right form button{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    width: 240px;\r\n    height: 54px;\r\n    background: #FF9100;\r\n    outline: 0;\r\n    border-radius: 44px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.item-content-right form button:disabled{\r\n    opacity: 0.5;\r\n}\r\n.item-content-right form .text-error{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: red;\r\n    font-weight: bold;\r\n    margin-bottom: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9lbWFpbC9lbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0NBRWxCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWVtYWlse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxODJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBwYWRkaW5nLXRvcDogOTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWVudXtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbn1cclxuLm5hdiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2IC5uYXYtbGluazpudGgtY2hpbGQoMikgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU0cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgZm9ybSAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gaW5wdXR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbn1cclxuLmZvcm0tZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIGJ1dHRvbjpkaXNhYmxlZHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIC50ZXh0LWVycm9ye1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/setting/email/email.component.html":
/*!****************************************************!*\
  !*** ./src/app/setting/email/email.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-email\">\r\n  <div class=\"item-menu\">\r\n      <nav class=\"nav flex-column\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n          <a class=\"nav-link\"><span>Email</span></a>\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n          <a class=\"nav-link \"><span>Report an Issue</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n          <a class=\"nav-link \" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n  </div>\r\n  <div class=\"item-content-right\">\r\n    <h2>Change your email address</h2>\r\n    <form (submit)=\"ChangeEmail(currentEmail.value, newEmail.value)\" #formEmail=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label>Current Email</label>\r\n        <input type=\"text\" class=\"form-control\" ngModel name=\"current\" required autocomplete=\"off\" #currentEmail>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>New Email</label>\r\n        <input type=\"text\" class=\"form-control\" ngModel autocomplete=\"off\" required name=\"new\" #newEmail>\r\n      </div>\r\n      <div class=\"text-error\" *ngIf=\"showErr\">{{error}}</div>\r\n      <button [disabled]=\"formEmail.invalid\">Save Changes</button>\r\n    </form>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/setting/email/email.component.ts":
/*!**************************************************!*\
  !*** ./src/app/setting/email/email.component.ts ***!
  \**************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/user-service.service */ "./src/app/appService/user-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var EmailComponent = /** @class */ (function () {
    function EmailComponent(router, _changeEmail, _toar) {
        this.router = router;
        this._changeEmail = _changeEmail;
        this._toar = _toar;
        this.error = "";
        this.showErr = false;
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent.prototype.ChangeEmail = function (currentEmail, newEmail) {
        var _this = this;
        var regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        if (!regEmail.test(currentEmail)) {
            this.showErr = true;
            this.error = "Current Email is invalid!";
            return false;
        }
        if (!regEmail.test(newEmail)) {
            this.showErr = true;
            this.error = "New Email is invalid!";
            return false;
        }
        var data = {
            "email": currentEmail,
            "newEmail": newEmail
        };
        this._changeEmail.changEmail(data).subscribe(function (dt) {
            _this.checkSMS(dt);
            _this.router.navigate(['dashboard/profile']);
        }, function (err) {
            _this.checkSMS(err);
        });
    };
    EmailComponent.prototype.checkSMS = function (data) {
        if (data['status'] == 200) {
            this._toar.success('Changed Email Successfully!');
        }
        else {
            this._toar.error('Changed Email Error!');
        }
    };
    EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/setting/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/setting/email/email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/setting/help-support/help-support.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/setting/help-support/help-support.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-profile{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top : 100px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .active span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n    width: 684px;\r\n}\r\n.item-content-right .help-search h3{\r\n    margin-right: 469px;\r\n    width: 398px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n}\r\n.item-content-right .help-search input{\r\n    width: 684px;\r\n    height: 62px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);\r\n    border-radius: 12px;\r\n    margin: 38px 183px 73px 0;\r\n    border: none;\r\n    padding: 19px 382px 19px 67px ;\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #BDBDBD;\r\n}\r\n.item-content-right .help-search i{\r\n    position: absolute;\r\n    top: 200px;\r\n    left: 601px;\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 22px;\r\n}\r\n.item-content-right .item h4{\r\n    width: 91px;\r\n    height: 32px;\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #001527;\r\n    font-weight: bold;\r\n    margin-bottom: 13px;\r\n}\r\n.item-content-right .item p{\r\n    width: 326px;\r\n    height: 32px;\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #757575;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n.item-content-right .category-content-1 , .item-content-right .category-content-2{\r\n    display: flex;\r\n}\r\n.item-content-right .item{\r\n    width: 326px;\r\n    margin-right: 32px;\r\n}\r\n.item-content-right .item p{\r\n    margin-bottom: 13px;\r\n}\r\n.item-content-right .item a{\r\n    width: 65px;\r\n    height: 32px;\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #FF9100;\r\n    font-weight: bold;\r\n}\r\n.item-content-right .category-content-2{\r\n    margin-top: 36px;\r\n}\r\n.item-content-right .how-content{\r\n    border-bottom: 1.5px solid #E0E0E0;\r\n}\r\n.item-content-right .how-content h3{\r\n    width: 566px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    margin: 104px 301px 28px 0;\r\n}\r\n.item-content-right .how-content p{\r\n    width: 684px;\r\n    left: 573px;\r\n    top: 264px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n}\r\n.item-content-right .list-item ol{\r\n    width: 643px;\r\n    height: 222px;\r\n    padding-left: 20px;\r\n}\r\n.item-content-right .list-item ol li{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    padding-left: 10px;\r\n}\r\n.item-content-right .choose-bottom{\r\n    width: 684px;\r\n    display: flex;\r\n    margin-top: 48px; \r\n}\r\n.item-content-right .choose-bottom p{\r\n    width: 228px;\r\n    height: 37px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-right: 18px;\r\n}\r\n.item-content-right .choose-bottom img{\r\n    width: 44px;\r\n    height: 44px;\r\n    margin-right: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9oZWxwLXN1cHBvcnQvaGVscC1zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQ0FBbUM7Q0FDdEM7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL2hlbHAtc3VwcG9ydC9oZWxwLXN1cHBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXByb2ZpbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIHBhZGRpbmctdG9wOiA5NXB4O1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5OXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaXRlbS1tZW51e1xyXG4gICAgd2lkdGg6IDIzN3B4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3AgOiAxMDBweDtcclxufVxyXG4ubmF2IGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hdiAubmF2LWxpbmsgc3BhbntcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYgLmFjdGl2ZSBzcGFue1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTRweDtcclxuICAgIHdpZHRoOiA2ODRweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5oZWxwLXNlYXJjaCBoM3tcclxuICAgIG1hcmdpbi1yaWdodDogNDY5cHg7XHJcbiAgICB3aWR0aDogMzk4cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLmhlbHAtc2VhcmNoIGlucHV0e1xyXG4gICAgd2lkdGg6IDY4NHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAzOHB4IDE4M3B4IDczcHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE5cHggMzgycHggMTlweCA2N3B4IDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLFNhbnMtU2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuaGVscC1zZWFyY2ggaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwcHg7XHJcbiAgICBsZWZ0OiA2MDFweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLml0ZW0gaDR7XHJcbiAgICB3aWR0aDogOTFweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLFNhbnMtU2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLml0ZW0gcHtcclxuICAgIHdpZHRoOiAzMjZweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLFNhbnMtU2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5jYXRlZ29yeS1jb250ZW50LTEgLCAuaXRlbS1jb250ZW50LXJpZ2h0IC5jYXRlZ29yeS1jb250ZW50LTJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLml0ZW17XHJcbiAgICB3aWR0aDogMzI2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuaXRlbSBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5pdGVtIGF7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLFNhbnMtU2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjRkY5MTAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuY2F0ZWdvcnktY29udGVudC0ye1xyXG4gICAgbWFyZ2luLXRvcDogMzZweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5ob3ctY29udGVudHtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuaG93LWNvbnRlbnQgaDN7XHJcbiAgICB3aWR0aDogNTY2cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAxMDRweCAzMDFweCAyOHB4IDA7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuaG93LWNvbnRlbnQgcHtcclxuICAgIHdpZHRoOiA2ODRweDtcclxuICAgIGxlZnQ6IDU3M3B4O1xyXG4gICAgdG9wOiAyNjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAubGlzdC1pdGVtIG9se1xyXG4gICAgd2lkdGg6IDY0M3B4O1xyXG4gICAgaGVpZ2h0OiAyMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5saXN0LWl0ZW0gb2wgbGl7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLmNob29zZS1ib3R0b217XHJcbiAgICB3aWR0aDogNjg0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNDhweDsgXHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuY2hvb3NlLWJvdHRvbSBwe1xyXG4gICAgd2lkdGg6IDIyOHB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5jaG9vc2UtYm90dG9tIGltZ3tcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/help-support/help-support.component.html":
/*!******************************************************************!*\
  !*** ./src/app/setting/help-support/help-support.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-profile\">\r\n    <div class=\"item-menu\">\r\n        <nav class=\"nav flex-column\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n            <a class=\"nav-link active\"><span>Help & Support</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n            <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n    </div>\r\n\r\n    <div class=\"item-content-right\">\r\n            <div class=\"help-search\">\r\n                <h3>What can we help you with?</h3>\r\n                <input type=\"search\" name=\"\" id=\"\" placeholder=\"Search\">\r\n                <i class=\"fas fa-search\"></i>\r\n                <div class=\"category-content-1\">\r\n                    <div class=\"item\">\r\n                        <h4>Category</h4>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <a href=\"\">See all</a>\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <h4>Category</h4>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <a href=\"\">See all</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"category-content-2\">\r\n                    <div class=\"item\">\r\n                        <h4>Category</h4>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <a href=\"\">See all</a>\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <h4>Category</h4>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minus! Officia iusto expedita obcaecati eveniet. Quasi maiores </p>\r\n                        <a href=\"\">See all</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"how-content\">\r\n                <h3>How to adjust your withholding amount</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor, faucibus interdum diam ultricies. Cras sed arcu at ligula lobortis maximus. Praesent eget metus vel massa dapibus euismod.</p>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor.</p>\r\n                <div class=\"list-item\">\r\n                    <ol>\r\n                        <li>Aenean lobortis ut ipsum id pulvinar.</li>\r\n                        <li>Nulla faucibus mauris sit amet enim feugiat congue. Maecenas egestas sit amet arcu sit amet tempus. </li>\r\n                        <li>Morbi ut ligula eu sem aliquet suscipit ac ac magna.</li>\r\n                        <li>Proin vehicula urna eleifend ipsum gravida sagittis. Maecenas vitae fermentum lectus.</li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n            <div class=\"choose-bottom\">\r\n                <p>Was this article helpful?</p>\r\n                <a href=\"\"><img src=\"assets/images/dashboard/green.png\" alt=\"\"></a>\r\n                <a href=\"\"><img src=\"assets/images/dashboard/red.png\" alt=\"\"></a>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/help-support/help-support.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/setting/help-support/help-support.component.ts ***!
  \****************************************************************/
/*! exports provided: HelpSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpSupportComponent", function() { return HelpSupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_appService_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/appService/setting.service */ "./src/app/appService/setting.service.ts");



var HelpSupportComponent = /** @class */ (function () {
    function HelpSupportComponent(_setting) {
        this._setting = _setting;
        this.lstHelp = [];
    }
    HelpSupportComponent.prototype.ngOnInit = function () {
        this.getHelpSupport();
    };
    HelpSupportComponent.prototype.getHelpSupport = function () {
        var _this = this;
        this._setting.helpSupport().subscribe(function (data) {
            console.log(data);
            _this.lstHelp = data.data.data;
        });
    };
    HelpSupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help-support',
            template: __webpack_require__(/*! ./help-support.component.html */ "./src/app/setting/help-support/help-support.component.html"),
            styles: [__webpack_require__(/*! ./help-support.component.css */ "./src/app/setting/help-support/help-support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_appService_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], HelpSupportComponent);
    return HelpSupportComponent;
}());



/***/ }),

/***/ "./src/app/setting/notifications/notifications.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/setting/notifications/notifications.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-notification{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link:nth-child(6) span{\r\n    color: #001527;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n    font-family: Lato;\r\n}\r\n.item-content-right h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    width: 374px;\r\n    height: 39px;\r\n    margin-bottom: 27px;\r\n}\r\n.referral span{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #001527;\r\n}\r\n.referral{\r\n    display: flex;\r\n    position: relative;\r\n    margin-bottom: 22px;\r\n}\r\n.referral .switch{\r\n    position: absolute;\r\n    right: 0;\r\n    width: 50px;\r\n    height: 30px;\r\n}\r\n.referral .switch input{\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.referral .switch .slider{\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n}\r\n.referral .switch  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    left: 0;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n.referral .switch input:checked + .slider {\r\n    background-color: #FF9100;\r\n}\r\n.referral .switch input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n.referral .switch input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n.referral .switch  .round {\r\n    border-radius: 34px;\r\n}\r\n.referral .switch .round:before {\r\n    border-radius: 50%;\r\n}\r\n.bottom-notifications{\r\n    border: 1.5px solid #E0E0E0;\r\n    width: 679px;\r\n    margin-top: 27px;\r\n    margin-bottom: 33px;\r\n}\r\n.referral .text-label{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n.referral .text-label p{\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    margin-bottom: 0;\r\n}\r\n.referral .text-label span{\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFFdkIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWix3QkFBd0I7SUFFeEIsZ0JBQWdCO0dBQ2pCO0FBQ0g7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjtBQUVEO0lBQ0ksb0NBQW9DO0lBRXBDLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW5vdGlmaWNhdGlvbntcclxuICAgIHBhZGRpbmctbGVmdDogMTgycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDk5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pdGVtLW1lbnV7XHJcbiAgICB3aWR0aDogMjM3cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQ7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG59XHJcbi5uYXYgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2IC5uYXYtbGluazpudGgtY2hpbGQoNikgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBoMntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDM3NHB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG4ucmVmZXJyYWwgc3BhbntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5yZWZlcnJhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG59XHJcbi5yZWZlcnJhbCAuc3dpdGNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ucmVmZXJyYWwgLnN3aXRjaCBpbnB1dHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG4ucmVmZXJyYWwgLnN3aXRjaCAuc2xpZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcbi5yZWZlcnJhbCAuc3dpdGNoICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuLnJlZmVycmFsIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTEwMDtcclxufVxyXG4gIFxyXG4ucmVmZXJyYWwgLnN3aXRjaCBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG59XHJcbiAgXHJcbi5yZWZlcnJhbCAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuLnJlZmVycmFsIC5zd2l0Y2ggIC5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcbi5yZWZlcnJhbCAuc3dpdGNoIC5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5ib3R0b20tbm90aWZpY2F0aW9uc3tcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIHdpZHRoOiA2NzlweDtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG59XHJcbi5yZWZlcnJhbCAudGV4dC1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ucmVmZXJyYWwgLnRleHQtbGFiZWwgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5yZWZlcnJhbCAudGV4dC1sYWJlbCBzcGFue1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/notifications/notifications.component.html":
/*!********************************************************************!*\
  !*** ./src/app/setting/notifications/notifications.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-notification\">\r\n  <div class=\"item-menu\">\r\n    <nav class=\"nav flex-column\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n      <a class=\"nav-link\"><span>Notifications</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n      <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n    </nav>\r\n  </div>\r\n  <div class=\"item-content-right\">\r\n    <h2>Manage your notifications</h2>\r\n    <div class=\"item-notifications\">\r\n      <div class=\"referral\">\r\n        <span>Referral payments</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <span>Transfers to safehold account</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <span>Tax payment authorizations</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <span>Monthly/quarterly summary</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <span>Tax tips</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <span>Savings tips</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <span>Accountant changes</span>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n      <div class=\"referral\">\r\n        <div class=\"text-label\">\r\n          <p>General updates</p>\r\n          <span>Such as product features and offers</span>\r\n        </div>\r\n        <label class=\"switch \">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"bottom-notifications\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/notifications/notifications.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/setting/notifications/notifications.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(router) {
        this.router = router;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/setting/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/setting/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/setting/password/password.component.css":
/*!*********************************************************!*\
  !*** ./src/app/setting/password/password.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-password{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .nav-link:nth-child(3) span{\r\n    color: #001527;\r\n    cursor: pointer;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n}\r\n.item-content-right h2{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000;\r\n    margin-bottom: 38px;\r\n}\r\n.item-content-right form .form-group{\r\n    margin-bottom: 32px;\r\n}\r\n.item-content-right form label{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #757575;\r\n\r\n}\r\n.item-content-right form input{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    width: 344px;\r\n    height: 62px;\r\n    padding-left: 26px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n}\r\n.form-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\n.item-content-right form button{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    width: 240px;\r\n    height: 54px;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    border: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.item-content-right form button:disabled{\r\n    opacity: 0.5;\r\n}\r\n.item-content-right form .text-error{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: red;\r\n    font-weight: bold;\r\n    margin-bottom: 32px;\r\n    width: 344px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0NBRWxCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGFzc3dvcmR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIHBhZGRpbmctdG9wOiA5NXB4O1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5OXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaXRlbS1tZW51e1xyXG4gICAgd2lkdGg6IDIzN3B4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxufVxyXG4ubmF2IGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hdiAubmF2LWxpbmsgc3BhbntcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYgLm5hdi1saW5rOm50aC1jaGlsZCgzKSBzcGFue1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTRweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGgye1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIC5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgZm9ybSBpbnB1dHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4uZm9ybS1ncm91cD4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gYnV0dG9uOmRpc2FibGVke1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgZm9ybSAudGV4dC1lcnJvcntcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/password/password.component.html":
/*!**********************************************************!*\
  !*** ./src/app/setting/password/password.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-password\">\r\n  <div class=\"item-menu\">\r\n    <nav class=\"nav flex-column\">\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n      <a class=\"nav-link\"  [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n      <a class=\"nav-link\"><span>Password</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n      <a class=\"nav-link \"  [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n      <a class=\"nav-link \"><span>Report an Issue</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n      <a class=\"nav-link \" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n    </nav>\r\n  </div>\r\n  <div class=\"item-content-right\">\r\n    <h2>Change your password</h2>\r\n    <form (submit)=\"changePassWord(currentPass.value, newPass.value, confirmPass.value)\" #formPass=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label>Current Password</label>\r\n        <input type=\"text\" class=\"form-control\" ngModel name=\"currentpass\" required autocomplete=\"off\" #currentPass >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>New Password</label>\r\n        <input type=\"text\" class=\"form-control\" ngModel name=\"newpass\" required #newPass autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Confirm New Password</label>\r\n        <input type=\"text\" class=\"form-control\" ngModel name=\"confirm\" required #confirmPass autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"text-error\" *ngIf=\"showErr\">{{error}}</div>\r\n      <button [disabled]=\"formPass.invalid\">Save Changes</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/password/password.component.ts":
/*!********************************************************!*\
  !*** ./src/app/setting/password/password.component.ts ***!
  \********************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/user-service.service */ "./src/app/appService/user-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(router, _user, _toar) {
        this.router = router;
        this._user = _user;
        this._toar = _toar;
        this.error = "";
        this.showErr = false;
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent.prototype.changePassWord = function (currentPass, newPass, confirmPass) {
        var _this = this;
        var regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
        if (!regPass.test(currentPass)) {
            this.showErr = true;
            this.error = "Password is invalid!";
            return false;
        }
        if (!regPass.test(newPass)) {
            this.showErr = true;
            this.error = "Password must contain at least 8 characters, one lower case letter, one upper case letter, one number and one of the following symbols: !, @, #, $, %, &, * ";
            return false;
        }
        if (confirmPass != newPass) {
            this.showErr = true;
            this.error = "New Password and Confirm Password incorrect!";
            return false;
        }
        var data = {
            "oldPassword": currentPass,
            "newPassword": newPass,
            "retryPassword": confirmPass
        };
        return this._user.changePassWord(data).subscribe(function (dt) {
            _this.checkSMS(dt);
        }, function (err) {
            _this.checkSMS(err);
        });
    };
    PasswordComponent.prototype.checkSMS = function (dt) {
        if (dt['status'] == 200) {
            this._toar.success("Changed Password Successfully!");
            this.router.navigate(['dashboard/profile']);
        }
        else {
            this._toar.error("Changed Password error!");
        }
    };
    PasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/setting/password/password.component.html"),
            styles: [__webpack_require__(/*! ./password.component.css */ "./src/app/setting/password/password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/setting/payments/payments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/setting/payments/payments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-profile{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .active span{\r\n    color: #001527;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n    width: 684px;\r\n}\r\n.item-content-right h2{\r\n    width: 367px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    margin-bottom: 38px;\r\n}\r\n.item-content-right .title{\r\n    display: flex;\r\n}\r\n.item-content-right .title p{\r\n    margin-left: 103px;\r\n    width: 185px;\r\n    height: 37px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n.item-content-right .title i{\r\n    width: 14px;\r\n    height: 8px;\r\n    padding-left: 11px;\r\n    cursor: pointer;\r\n}\r\n.item-content-right .current-pay-hidden{\r\n    width: 248px;\r\n    height: 287px;  \r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.12);\r\n    border-radius: 12px;\r\n    position: absolute;\r\n    left: 1040px;\r\n    top: 150px;\r\n    z-index: 99;\r\n\r\n}\r\n.item-content-right .current-pay-hidden h5{\r\n    width: 185px;\r\n    height: 37px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    padding: 27px 28px 0px 35px;\r\n    white-space: nowrap;\r\n    margin-bottom: 35px;\r\n}\r\n.item-content-right .current-pay-hidden ul li{\r\n    margin-bottom: 14px;\r\n    width: 106px;\r\n    height: 37px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n}\r\n.item-content-right .payments-list ul{\r\n    padding: 0;\r\n}\r\n.item-content-right .payments-list ul li{\r\n    border-bottom: 1px solid #E0E0E0;\r\n    padding-bottom: 21px;\r\n    margin-top: 26px;\r\n}\r\n.item-content-right .payments-list ul li span{\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    border-radius: 8px;\r\n}\r\n.item-content-right .payments-list span.date{\r\n    width: 98px;\r\n    height: 20px;\r\n    font-size: 16px;\r\n    color: #757575; \r\n}\r\n.item-content-right .payments-list span.orange{\r\n    font-size: 20px;\r\n    color: #FF9100;\r\n}\r\n.item-content-right .payments-list span.black{\r\n    font-size: 20px;\r\n}\r\n.item-content-right .payments-list span.orange:last-child,\r\n.item-content-right .payments-list span.black:last-child {\r\n    position: absolute;\r\n    left: 81%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3QyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTs7Q0FFZjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksc0NBQXNDO0lBQ3RDLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEOztJQUVJLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3BheW1lbnRzL3BheW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wcm9maWxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxODJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBwYWRkaW5nLXRvcDogOTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWVudXtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbn1cclxuLm5hdiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2IC5hY3RpdmUgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NHB4O1xyXG4gICAgd2lkdGg6IDY4NHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgaDJ7XHJcbiAgICB3aWR0aDogMzY3cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC50aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAudGl0bGUgcHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDNweDtcclxuICAgIHdpZHRoOiAxODVweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAudGl0bGUgaXtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuY3VycmVudC1wYXktaGlkZGVue1xyXG4gICAgd2lkdGg6IDI0OHB4O1xyXG4gICAgaGVpZ2h0OiAyODdweDsgIFxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwNDBweDtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuXHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAuY3VycmVudC1wYXktaGlkZGVuIGg1e1xyXG4gICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIHBhZGRpbmc6IDI3cHggMjhweCAwcHggMzVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLmN1cnJlbnQtcGF5LWhpZGRlbiB1bCBsaXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICB3aWR0aDogMTA2cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5wYXltZW50cy1saXN0IHVse1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5wYXltZW50cy1saXN0IHVsIGxpe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAucGF5bWVudHMtbGlzdCB1bCBsaSBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsU2Fucy1TZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5wYXltZW50cy1saXN0IHNwYW4uZGF0ZXtcclxuICAgIHdpZHRoOiA5OHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7IFxyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLnBheW1lbnRzLWxpc3Qgc3Bhbi5vcmFuZ2V7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI0ZGOTEwMDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5wYXltZW50cy1saXN0IHNwYW4uYmxhY2t7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCAucGF5bWVudHMtbGlzdCBzcGFuLm9yYW5nZTpsYXN0LWNoaWxkLFxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IC5wYXltZW50cy1saXN0IHNwYW4uYmxhY2s6bGFzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4MSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/setting/payments/payments.component.html":
/*!**********************************************************!*\
  !*** ./src/app/setting/payments/payments.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-profile\">\r\n    <div class=\"item-menu\">\r\n        <nav class=\"nav flex-column\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n            <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n            <a class=\"nav-link active\"><span>Reports of Payments</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n            <a class=\"nav-link \"[routerLink]=\"['/dashboard/terms-conditions']\" ><span>Terms & Conditions</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n    </div>\r\n    <div class=\"item-content-right\">\r\n        <div class=\"title\">\r\n            <h2>Reports of Paymets Made</h2>\r\n            <p>Current Pay Period <i (click)=\"Display()\" [ngClass] = \"status ? 'fas fa-chevron-down' : 'fas fa-chevron-up'\"></i></p>\r\n            <div class=\"current-pay-hidden\" [hidden]=\"forgot\">\r\n                <h5>Current Pay Period</h5>\r\n                <ul>\r\n                    <li>Last 7 days</li>\r\n                    <li>Last month</li>\r\n                    <li>Last 6 months</li>\r\n                    <li>Last year</li>    \r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"payments-list\">\r\n            <ul>\r\n                <li>\r\n                    <span class=\"date\">Oct 15, 2018</span>\r\n                    <br>\r\n                    <span class=\"orange\">Transfer</span>\r\n                    <span class=\"orange\">+ $128.33 </span>\r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Oct 7, 2018</span>\r\n                    <br>\r\n                    <span class=\"black\">Withdrawl</span>\r\n                    <span class=\"black\">- $28.31 </span>                    \r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Oct 1, 2018</span>\r\n                    <br>\r\n                    <span class=\"orange\">Transfer</span>\r\n                    <span class=\"orange\">+ $43.00 </span>\r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Sep 23, 2018</span>\r\n                    <br>\r\n                    <span class=\"orange\">Transfer</span>\r\n                    <span class=\"orange\">+ $78.60</span>\r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Sep 17, 2018</span>\r\n                    <br>\r\n                    <span class=\"orange\">Transfer</span>\r\n                    <span class=\"orange\">+ $41.50</span>\r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Sep 9, 2018</span>\r\n                    <br>\r\n                    <span class=\"black\">Withdrawl</span>\r\n                    <span class=\"black\">- $12.60</span>\r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Sep 3, 2018</span>\r\n                    <br>\r\n                    <span class=\"orange\">Transfer</span>\r\n                    <span class=\"orange\">+ $138.17</span>\r\n                </li>\r\n                <li>\r\n                    <span class=\"date\">Aug 26, 2018</span>\r\n                    <br>\r\n                    <span class=\"orange\">Transfer</span>\r\n                    <span class=\"orange\">+ $53.10</span>\r\n                </li>\r\n            </ul>\r\n            \r\n        </div>\r\n        "

/***/ }),

/***/ "./src/app/setting/payments/payments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/setting/payments/payments.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent() {
        this.forgot = true;
        this.status = true;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
    };
    PaymentsComponent.prototype.Display = function () {
        this.forgot = !this.forgot;
        this.status = !this.status;
    };
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/setting/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.css */ "./src/app/setting/payments/payments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/setting/privacy-policy/privacy-policy.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/setting/privacy-policy/privacy-policy.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-profile{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .active span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n    width: 684px;\r\n}\r\n.item-content-right h2{\r\n    width: 202px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    margin-bottom: 28px;\r\n}\r\n.item-content-right p{\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #001527;\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    margin-bottom: 30px;\r\n}\r\n.item-content-right p.title{\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcHJvZmlsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTgycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDk5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pdGVtLW1lbnV7XHJcbiAgICB3aWR0aDogMjM3cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQ7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG59XHJcbi5uYXYgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2IC5uYXYtbGluayBzcGFue1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdiAuYWN0aXZlIHNwYW57XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NHB4O1xyXG4gICAgd2lkdGg6IDY4NHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgaDJ7XHJcbiAgICB3aWR0aDogMjAycHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IHB7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsU2Fucy1TZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBwLnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/setting/privacy-policy/privacy-policy.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/setting/privacy-policy/privacy-policy.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-profile\">\r\n    <div class=\"item-menu\">\r\n        <nav class=\"nav flex-column\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n            <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n            <a class=\"nav-link active\"><span>Privacy Policy</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n    </div>\r\n    <div class=\"item-content-right\">\r\n        <h2>Privacy Policy</h2>\r\n        <div class=\"text-top\">\r\n            <p class=\"title\">Cras sed arcu at ligula lobortis maximus</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor, faucibus interdum diam ultricies. Cras sed arcu at ligula lobortis maximus. Praesent eget metus vel massa dapibus euismod.</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor. </p>\r\n        </div>\r\n        <div class=\"text-bottom\">\r\n            <p class=\"title\">Cras sed arcu at ligula lobortis maximus</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor, faucibus interdum diam ultricies. Cras sed arcu at ligula lobortis maximus. Praesent eget metus vel massa dapibus euismod.</p>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/setting/privacy-policy/privacy-policy.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/setting/privacy-policy/privacy-policy.component.ts ***!
  \********************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/setting/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/setting/privacy-policy/privacy-policy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/setting/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/setting/profile/profile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-profile{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .nav-link:first-child span{\r\n    color: #001527;\r\n    cursor: pointer;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n}\r\n.item-content-right h2{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000;\r\n    margin-bottom: 38px;\r\n}\r\n.item-content-right form .form-group{\r\n    margin-bottom: 32px;\r\n}\r\n.item-content-right form label{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #757575;\r\n\r\n}\r\n.item-content-right form input{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    width: 344px;\r\n    height: 62px;\r\n    padding-left: 26px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n}\r\n.item-content-right form select{\r\n    width: 344px;\r\n    height: 62px;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n}\r\n.form-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\n.item-content-right form button{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    width: 240px;\r\n    height: 54px;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    border: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.item-content-right form button:disabled{\r\n    opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlOztDQUVsQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcHJvZmlsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTgycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDk5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pdGVtLW1lbnV7XHJcbiAgICB3aWR0aDogMjM3cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQ7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG59XHJcbi5uYXYgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2IC5uYXYtbGluayBzcGFue1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdiAubmF2LWxpbms6Zmlyc3QtY2hpbGQgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU0cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgZm9ybSAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gaW5wdXR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBmb3JtIHNlbGVjdHtcclxuICAgIHdpZHRoOiAzNDRweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4uZm9ybS1ncm91cD4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IGZvcm0gYnV0dG9uOmRpc2FibGVke1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/setting/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-profile\">\r\n  <div class=\"item-menu\">\r\n    <nav class=\"nav flex-column\">\r\n      <a class=\"nav-link active\"><span>Profile</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n      <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n    </nav>\r\n  </div>\r\n  <div class=\"item-content-right\">\r\n    <h2>Personal Information</h2>\r\n    <form #formProfile=\"ngForm\" (submit)=\"updateProfile(firstName.value,Middle.value,lastName.value,job.value,zipCode.value)\">\r\n      <div class=\"name-profile\">\r\n        <div class=\"form-group\">\r\n          <label>First Name:</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" ngModel name=\"firstName\" #firstName required autocomplete=\"off\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Middle</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Middle\" ngModel name=\"Middle\" #Middle required autocomplete=\"off\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Last Name: </label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" ngModel name=\"lastName\" #lastName required autocomplete=\"off\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Job Title</label>\r\n        <select class=\"form-control\" #job required>\r\n          <option *ngFor=\"let item of lstJob\">{{item.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Location (Zip Code)</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Zip code\" ngModel name=\"zipcode\" #zipCode required autocomplete=\"off\">\r\n      </div>\r\n      <button [disabled]=\"formProfile.invalid\">Save Changes</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/setting/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/user-service.service */ "./src/app/appService/user-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, _user, _toar) {
        this.router = router;
        this._user = _user;
        this._toar = _toar;
        this.lstJob = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getJob();
    };
    ProfileComponent.prototype.updateProfile = function (firstName, Middle, lastName, job, zipCode) {
        var _this = this;
        var regZip = new RegExp("/^(?!0{5})(?!0{4})\d{5}$/");
        if (!regZip.test(zipCode)) {
            this._toar.error('error!');
            return false;
        }
        this.idUser = localStorage.getItem('_userId');
        var data = {
            "firstName": firstName,
            "lastName": lastName,
            "middleInitial": Middle,
            "job": job,
            "zipCode": zipCode
        };
        this._user.updateProfile(this.idUser, data).subscribe(function (data) {
            _this.checkSMS(data);
        }, function (err) {
            _this.checkSMS(err);
        });
    };
    ProfileComponent.prototype.getJob = function () {
        var _this = this;
        return this._user.getJob().subscribe(function (dt) {
            console.log(dt);
            _this.lstJob = dt.data.data;
        });
    };
    ProfileComponent.prototype.checkSMS = function (dt) {
        if (dt['status'] == 200) {
            this._toar.success('Updated User Successfully!');
            this.router.navigate(['dashboard']);
        }
        else {
            this._toar.info('Updated User Error!');
        }
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/setting/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/setting/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_appService_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _default_view_default_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-view/default-view.component */ "./src/app/setting/default-view/default-view.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/setting/profile/profile.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email/email.component */ "./src/app/setting/email/email.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password/password.component */ "./src/app/setting/password/password.component.ts");
/* harmony import */ var _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-account/bank-account.component */ "./src/app/setting/bank-account/bank-account.component.ts");
/* harmony import */ var _help_support_help_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help-support/help-support.component */ "./src/app/setting/help-support/help-support.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/setting/contact-us/contact-us.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/setting/payments/payments.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/setting/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/setting/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _contact_us_contact_confirm_contact_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-us/contact-confirm/contact-confirm.component */ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.ts");
/* harmony import */ var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete-account/delete-account.component */ "./src/app/setting/delete-account/delete-account.component.ts");
/* harmony import */ var _tax_infomation_tax_infomation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tax-infomation/tax-infomation.component */ "./src/app/setting/tax-infomation/tax-infomation.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/setting/notifications/notifications.component.ts");
/* harmony import */ var _delete_account_deactivate_confirm_deactivate_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./delete-account/deactivate-confirm/deactivate-confirm.component */ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.ts");
/* harmony import */ var _delete_account_confim_delete_confim_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./delete-account/confim-delete/confim-delete.component */ "./src/app/setting/delete-account/confim-delete/confim-delete.component.ts");
/* harmony import */ var _delete_account_confim_delete_confirm_feedback_confirm_feedback_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./delete-account/confim-delete/confirm-feedback/confirm-feedback.component */ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.ts");




















var routes = [
    {
        path: '',
        data: {
            title: 'dashboard'
        },
        children: [
            {
                path: '',
                component: _default_view_default_view_component__WEBPACK_IMPORTED_MODULE_3__["DefaultViewComponent"]
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            },
            {
                path: 'email',
                component: _email_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"]
            },
            {
                path: 'password',
                component: _password_password_component__WEBPACK_IMPORTED_MODULE_6__["PasswordComponent"]
            },
            {
                path: 'bank-account',
                component: _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_7__["BankAccountComponent"]
            },
            {
                path: 'tax-information',
                component: _tax_infomation_tax_infomation_component__WEBPACK_IMPORTED_MODULE_15__["TaxInfomationComponent"]
            },
            {
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"]
            },
            {
                path: 'help-support',
                component: _help_support_help_support_component__WEBPACK_IMPORTED_MODULE_8__["HelpSupportComponent"]
            },
            {
                path: 'contact-us',
                component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]
            },
            {
                path: 'contact-confirm',
                component: _contact_us_contact_confirm_contact_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ContactConfirmComponent"]
            },
            {
                path: 'payments-report',
                component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__["PaymentsComponent"]
            },
            {
                path: 'privacy-policy',
                component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPolicyComponent"]
            },
            {
                path: 'terms-conditions',
                component: _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_12__["TermsConditionsComponent"]
            },
            {
                path: 'delete-account',
                component: _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_14__["DeleteAccountComponent"]
            },
            {
                path: 'activate-confirm',
                component: _delete_account_deactivate_confirm_deactivate_confirm_component__WEBPACK_IMPORTED_MODULE_17__["DeactivateConfirmComponent"]
            },
            {
                path: 'confirm-delete',
                component: _delete_account_confim_delete_confim_delete_component__WEBPACK_IMPORTED_MODULE_18__["ConfimDeleteComponent"]
            },
            {
                path: 'confirm-feedback',
                component: _delete_account_confim_delete_confirm_feedback_confirm_feedback_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmFeedbackComponent"]
            }
        ]
    }
];
var SettingRoutingModule = /** @class */ (function () {
    function SettingRoutingModule() {
    }
    SettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingRoutingModule);
    return SettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/setting/setting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_view_default_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-view/default-view.component */ "./src/app/setting/default-view/default-view.component.ts");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/setting/setting-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/setting/profile/profile.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email/email.component */ "./src/app/setting/email/email.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./password/password.component */ "./src/app/setting/password/password.component.ts");
/* harmony import */ var _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bank-account/bank-account.component */ "./src/app/setting/bank-account/bank-account.component.ts");
/* harmony import */ var _tax_infomation_tax_infomation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tax-infomation/tax-infomation.component */ "./src/app/setting/tax-infomation/tax-infomation.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/setting/notifications/notifications.component.ts");
/* harmony import */ var _help_support_help_support_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./help-support/help-support.component */ "./src/app/setting/help-support/help-support.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/setting/contact-us/contact-us.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/setting/payments/payments.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/setting/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/setting/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./delete-account/delete-account.component */ "./src/app/setting/delete-account/delete-account.component.ts");
/* harmony import */ var _contact_us_contact_confirm_contact_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-us/contact-confirm/contact-confirm.component */ "./src/app/setting/contact-us/contact-confirm/contact-confirm.component.ts");
/* harmony import */ var _delete_account_deactivate_confirm_deactivate_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./delete-account/deactivate-confirm/deactivate-confirm.component */ "./src/app/setting/delete-account/deactivate-confirm/deactivate-confirm.component.ts");
/* harmony import */ var _delete_account_confim_delete_confim_delete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./delete-account/confim-delete/confim-delete.component */ "./src/app/setting/delete-account/confim-delete/confim-delete.component.ts");
/* harmony import */ var _delete_account_confim_delete_confirm_feedback_confirm_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./delete-account/confim-delete/confirm-feedback/confirm-feedback.component */ "./src/app/setting/delete-account/confim-delete/confirm-feedback/confirm-feedback.component.ts");






















var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingRoutingModule"]
            ],
            declarations: [
                _default_view_default_view_component__WEBPACK_IMPORTED_MODULE_4__["DefaultViewComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponent"],
                _password_password_component__WEBPACK_IMPORTED_MODULE_8__["PasswordComponent"],
                _bank_account_bank_account_component__WEBPACK_IMPORTED_MODULE_9__["BankAccountComponent"],
                _tax_infomation_tax_infomation_component__WEBPACK_IMPORTED_MODULE_10__["TaxInfomationComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
                _help_support_help_support_component__WEBPACK_IMPORTED_MODULE_12__["HelpSupportComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_14__["PaymentsComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_15__["PrivacyPolicyComponent"],
                _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_16__["TermsConditionsComponent"],
                _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_17__["DeleteAccountComponent"],
                _contact_us_contact_confirm_contact_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ContactConfirmComponent"],
                _delete_account_deactivate_confirm_deactivate_confirm_component__WEBPACK_IMPORTED_MODULE_19__["DeactivateConfirmComponent"],
                _delete_account_confim_delete_confim_delete_component__WEBPACK_IMPORTED_MODULE_20__["ConfimDeleteComponent"],
                _delete_account_confim_delete_confirm_feedback_confirm_feedback_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmFeedbackComponent"]
            ]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ }),

/***/ "./src/app/setting/tax-infomation/tax-infomation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/setting/tax-infomation/tax-infomation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-information{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .nav-link:nth-child(5) span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n}\r\n.item-content-right h2{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    width: 410px;\r\n    height: 39px;\r\n    margin-bottom: 27px;\r\n}\r\n.item-content-right .W-2 .text-content{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #000000;\r\n    width: 628px;\r\n    height: 63px;\r\n    margin-bottom: 19px;\r\n}\r\n.chooseTaxe{\r\n    margin-bottom: 26px;\r\n    display: flex;\r\n}\r\n.chooseTaxe .chooseToggle:first-child{\r\n    margin-right: 33px;\r\n}\r\n.chooseTaxe .chooseToggle{\r\n    display: flex;\r\n}\r\n.chooseToggle .checked{\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    border: 3px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    margin-right: 8px;\r\n    \r\n}\r\n.chooseToggle .check{\r\n    background: #FF9100;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n}\r\n.chooseToggle .item-check{\r\n    position: absolute;\r\n    top: 7.5px;\r\n    left: 7.5px;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n.chooseToggle span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #000000;\r\n    width: 33px;\r\n    height: 27px;\r\n}\r\n.W-2 .average{\r\n    margin-bottom: 75px;\r\n}\r\n.form-group label{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: normal;\r\n    font-size: 14px;\r\n    color: #757575;\r\n    width: 292px;\r\n    height: 17px;\r\n}\r\n.form-group input{\r\n    width: 344px;\r\n    height: 62px;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #757575;\r\n    padding: 0 26px;\r\n}\r\n.form-group>.form-control:focus{\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    box-shadow: none;\r\n}\r\n.marial-status{\r\n    display: flex;\r\n}\r\n.marial-status .item-marial-left{\r\n    margin-right: 100px\r\n}\r\n.marial-status .item-marial-left p{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #000000;\r\n    width: 138px;\r\n    height: 32px;\r\n    margin-bottom: 19px;\r\n}\r\n.marial-status .item-marial-right p{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #000000;\r\n    width: 83px;\r\n    height: 32px;\r\n    margin-bottom: 19px;\r\n}\r\n.item-marial-right .add-sub{\r\n    display: flex;\r\n}\r\n.item-marial-right .add-sub button{\r\n    width: 30px;\r\n    background: #FF9100;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    color: #FFF;\r\n    cursor: pointer;\r\n}\r\n.item-content-right .add-sub .value{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #001527;\r\n}\r\n.item-marial-right .add-sub button:first-child{\r\n    margin-right: 20px;\r\n}\r\n.item-marial-right .add-sub button:last-child{\r\n    margin-left: 21.25px\r\n}\r\n.desired-outCome{\r\n    margin-top: 75px;\r\n}\r\n.desired-outCome h3{\r\n    font-family: SF Pro Text, sans-serif;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #000000;\r\n    margin-bottom: 19px;\r\n    font-weight: normal\r\n}\r\n.desired-outCome .item-desired {\r\n    display: flex;\r\n    margin-bottom: 19px;\r\n}\r\n.desired-outCome .item-desired .img-desired{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    height: 241px;\r\n    position: relative;\r\n    margin-right: 33px;\r\n    width: 206.23px;\r\n    cursor: pointer;\r\n}\r\n.desired-outCome .item-desired .img-desired:hover{\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    box-shadow: none;\r\n}\r\n.desired-outCome .item-desired .img-desired span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527;\r\n}\r\n.desired-outCome .item-desired .img-desired:first-child img{\r\n    position: absolute;\r\n    width: 143.83px;\r\n    height: 126.16px;\r\n    left: 31.17px;\r\n    top: 43.16px;\r\n}\r\n.desired-outCome .item-desired .img-desired:first-child span{\r\n    position: absolute;\r\n    bottom: 20.38px;\r\n    left: 62.35px;\r\n    width: 81.53px;\r\n    height: 38.37px;\r\n}\r\n.desired-outCome .item-desired .img-desired:nth-child(2) img{\r\n    width: 102.45px;\r\n    height: 107.81px;\r\n    position: absolute;\r\n    top: 52.76px;\r\n    left: 51.55px;\r\n}\r\n.desired-outCome .item-desired .img-desired:nth-child(2) span{\r\n    position: absolute;\r\n    width: 118.7px;\r\n    height: 38.37px;\r\n    left: 43.16px;\r\n    bottom: 20.38px;\r\n}\r\n.desired-outCome .item-desired .img-desired:last-child img{\r\n    width: 76.3px;\r\n    height: 81.53px;\r\n    position: absolute;\r\n    top: 64.75px;\r\n    left: 59.95px;\r\n}\r\n.desired-outCome .item-desired .img-desired:last-child span{\r\n    position: absolute;\r\n    bottom: 20.38px;\r\n    width: 50.36px;\r\n    height: 38.37px;\r\n    left: 77.93px;\r\n}\r\n.desired-outCome p{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    width: 492px;\r\n    height: 74px;\r\n    margin-bottom: 57px;\r\n}\r\n.saveChanges .btnSave button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    width: 240px;\r\n    height: 54px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    border: none;\r\n    margin-bottom: 31px;\r\n    cursor: pointer;\r\n}\r\n.saveChanges span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    width: 170px;\r\n    height: 37px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy90YXgtaW5mb21hdGlvbi90YXgtaW5mb21hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCOztDQUVyQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsNENBQTRDO0NBQy9DO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvdGF4LWluZm9tYXRpb24vdGF4LWluZm9tYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWluZm9ybWF0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxODJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBwYWRkaW5nLXRvcDogOTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWVudXtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbn1cclxuLm5hdiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2IC5uYXYtbGluazpudGgtY2hpbGQoNSkgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU0cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogNDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLlctMiAudGV4dC1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiA2MjhweDtcclxuICAgIGhlaWdodDogNjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbn1cclxuLmNob29zZVRheGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hvb3NlVGF4ZSAuY2hvb3NlVG9nZ2xlOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzM3B4O1xyXG59XHJcbi5jaG9vc2VUYXhlIC5jaG9vc2VUb2dnbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jaG9vc2VUb2dnbGUgLmNoZWNrZWR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBcclxufVxyXG4uY2hvb3NlVG9nZ2xlIC5jaGVja3tcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jaG9vc2VUb2dnbGUgLml0ZW0tY2hlY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcuNXB4O1xyXG4gICAgbGVmdDogNy41cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbi5jaG9vc2VUb2dnbGUgc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG59XHJcbi5XLTIgLmF2ZXJhZ2V7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2lkdGg6IDI5MnB4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0e1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgcGFkZGluZzogMCAyNnB4O1xyXG59XHJcbi5mb3JtLWdyb3VwPi5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5tYXJpYWwtc3RhdHVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubWFyaWFsLXN0YXR1cyAuaXRlbS1tYXJpYWwtbGVmdHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHhcclxufVxyXG4ubWFyaWFsLXN0YXR1cyAuaXRlbS1tYXJpYWwtbGVmdCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiAxMzhweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbn1cclxuLm1hcmlhbC1zdGF0dXMgLml0ZW0tbWFyaWFsLXJpZ2h0IHB7XHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIFRleHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd2lkdGg6IDgzcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG59XHJcbi5pdGVtLW1hcmlhbC1yaWdodCAuYWRkLXN1YntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWFyaWFsLXJpZ2h0IC5hZGQtc3ViIGJ1dHRvbntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgLmFkZC1zdWIgLnZhbHVle1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5pdGVtLW1hcmlhbC1yaWdodCAuYWRkLXN1YiBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLml0ZW0tbWFyaWFsLXJpZ2h0IC5hZGQtc3ViIGJ1dHRvbjpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxLjI1cHhcclxufVxyXG4uZGVzaXJlZC1vdXRDb21le1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG4uZGVzaXJlZC1vdXRDb21lIGgze1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbn1cclxuLmRlc2lyZWQtb3V0Q29tZSAuaXRlbS1kZXNpcmVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xyXG59XHJcblxyXG4uZGVzaXJlZC1vdXRDb21lIC5pdGVtLWRlc2lyZWQgLmltZy1kZXNpcmVke1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAyNDFweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMzNweDtcclxuICAgIHdpZHRoOiAyMDYuMjNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVzaXJlZC1vdXRDb21lIC5pdGVtLWRlc2lyZWQgLmltZy1kZXNpcmVkOmhvdmVye1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGOTEwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uZGVzaXJlZC1vdXRDb21lIC5pdGVtLWRlc2lyZWQgLmltZy1kZXNpcmVkIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5kZXNpcmVkLW91dENvbWUgLml0ZW0tZGVzaXJlZCAuaW1nLWRlc2lyZWQ6Zmlyc3QtY2hpbGQgaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE0My44M3B4O1xyXG4gICAgaGVpZ2h0OiAxMjYuMTZweDtcclxuICAgIGxlZnQ6IDMxLjE3cHg7XHJcbiAgICB0b3A6IDQzLjE2cHg7XHJcbn1cclxuLmRlc2lyZWQtb3V0Q29tZSAuaXRlbS1kZXNpcmVkIC5pbWctZGVzaXJlZDpmaXJzdC1jaGlsZCBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMC4zOHB4O1xyXG4gICAgbGVmdDogNjIuMzVweDtcclxuICAgIHdpZHRoOiA4MS41M3B4O1xyXG4gICAgaGVpZ2h0OiAzOC4zN3B4O1xyXG59XHJcbi5kZXNpcmVkLW91dENvbWUgLml0ZW0tZGVzaXJlZCAuaW1nLWRlc2lyZWQ6bnRoLWNoaWxkKDIpIGltZ3tcclxuICAgIHdpZHRoOiAxMDIuNDVweDtcclxuICAgIGhlaWdodDogMTA3LjgxcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyLjc2cHg7XHJcbiAgICBsZWZ0OiA1MS41NXB4O1xyXG59XHJcbi5kZXNpcmVkLW91dENvbWUgLml0ZW0tZGVzaXJlZCAuaW1nLWRlc2lyZWQ6bnRoLWNoaWxkKDIpIHNwYW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTE4LjdweDtcclxuICAgIGhlaWdodDogMzguMzdweDtcclxuICAgIGxlZnQ6IDQzLjE2cHg7XHJcbiAgICBib3R0b206IDIwLjM4cHg7XHJcbn1cclxuLmRlc2lyZWQtb3V0Q29tZSAuaXRlbS1kZXNpcmVkIC5pbWctZGVzaXJlZDpsYXN0LWNoaWxkIGltZ3tcclxuICAgIHdpZHRoOiA3Ni4zcHg7XHJcbiAgICBoZWlnaHQ6IDgxLjUzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY0Ljc1cHg7XHJcbiAgICBsZWZ0OiA1OS45NXB4O1xyXG59XHJcbi5kZXNpcmVkLW91dENvbWUgLml0ZW0tZGVzaXJlZCAuaW1nLWRlc2lyZWQ6bGFzdC1jaGlsZCBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMC4zOHB4O1xyXG4gICAgd2lkdGg6IDUwLjM2cHg7XHJcbiAgICBoZWlnaHQ6IDM4LjM3cHg7XHJcbiAgICBsZWZ0OiA3Ny45M3B4O1xyXG59XHJcbi5kZXNpcmVkLW91dENvbWUgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aWR0aDogNDkycHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1N3B4O1xyXG59XHJcbi5zYXZlQ2hhbmdlcyAuYnRuU2F2ZSBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zYXZlQ2hhbmdlcyBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/tax-infomation/tax-infomation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/setting/tax-infomation/tax-infomation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-information\">\r\n  <div class=\"item-menu\">\r\n    <nav class=\"nav flex-column\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n      <a class=\"nav-link\"><span>Tax Information</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n      <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/terms-conditions']\"><span>Terms & Conditions</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n    </nav>\r\n  </div>\r\n  <div class=\"item-content-right\">\r\n    <h2>Change your tax information</h2>\r\n    <div class=\"W-2\">\r\n      <div class=\"text-content\">Do you have a W-2 employee job where taxes are automatically taken out?</div>\r\n      <div class=\"chooseTaxe\">\r\n        <div class=\"chooseToggle\">\r\n          <div class=\"checked\" *ngIf=\"!checked\" (click)=\"ShowChecked()\"></div>\r\n          <div class=\"check\" *ngIf=\"checked\" (click)=\"ShowChecked()\">\r\n            <div class=\"item-check\"></div>\r\n          </div>\r\n          <span>Yes</span>\r\n        </div>\r\n        <div class=\"chooseToggle\">\r\n          <div class=\"checked\" *ngIf=\"checked\" (click)=\"ShowChecked()\"></div>\r\n          <div class=\"check\" *ngIf=\"!checked\" (click)=\"ShowChecked()\">\r\n            <div class=\"item-check\"></div>\r\n          </div>\r\n          <span>No</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"average\" *ngIf=\"checked\">\r\n        <div class=\"form-group\">\r\n          <label>Average pay per month</label>\r\n          <input type=\"text\" class=\"form-control\" [value]=\"money\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"marial-status\">\r\n        <div class=\"item-marial-left\">\r\n          <p>Marial Status</p>\r\n          <div class=\"chooseTaxe\">\r\n            <div class=\"chooseToggle\">\r\n              <div class=\"checked\" *ngIf=\"!check\" (click)=\"ShowCheck()\"></div>\r\n              <div class=\"check\" *ngIf=\"check\" (click)=\"ShowCheck()\">\r\n                <div class=\"item-check\"></div>\r\n              </div>\r\n              <span>Single</span>\r\n            </div>\r\n            <div class=\"chooseToggle\">\r\n              <div class=\"checked\" *ngIf=\"check\" (click)=\"ShowCheck()\"></div>\r\n              <div class=\"check\" *ngIf=\"!check\" (click)=\"ShowCheck()\">\r\n                <div class=\"item-check\"></div>\r\n              </div>\r\n              <span>Married</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item-marial-right\">\r\n          <p>Children</p>\r\n          <div class=\"add-sub\">\r\n            <button (click)=\"onSub()\">-</button>\r\n            <div class=\"value\">{{value}}</div>\r\n            <button (click)=\"onAdd()\">+</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"desired-outCome\">\r\n        <h3>Desired Outcome</h3>\r\n        <div class=\"item-desired\">\r\n          <div class=\"img-desired\">\r\n            <img [src]=\"imgRefund\">\r\n            <span>Refund</span>\r\n          </div>\r\n          <div class=\"img-desired\">\r\n            <img [src]=\"imgBreakeven\">\r\n            <span>Breakeven</span>\r\n          </div>\r\n          <div class=\"img-desired\">\r\n            <img [src]=\"imgOwe\">\r\n            <span>Owe</span>\r\n          </div>\r\n        </div>\r\n        <p>{{contentDesired}}</p>\r\n      </div>\r\n\r\n      <div class=\"saveChanges text-center\">\r\n        <div class=\"btnSave\">\r\n          <button type=\"submit\">Save Changes</button>\r\n        </div>\r\n        <span>Switch to flat rate</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/tax-infomation/tax-infomation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/setting/tax-infomation/tax-infomation.component.ts ***!
  \********************************************************************/
/*! exports provided: TaxInfomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInfomationComponent", function() { return TaxInfomationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TaxInfomationComponent = /** @class */ (function () {
    function TaxInfomationComponent(router) {
        this.router = router;
        this.value = 0;
        this.check = false;
        this.checked = true;
        this.money = "$";
        this.imgRefund = "assets/images/refund.png";
        this.imgBreakeven = "assets/images/breakeven.png";
        this.imgOwe = "assets/images/owe.png";
        this.contentDesired = "Better transfers enough money to cover taxes and a little extra to ensure a refund at the end of the year.";
        this.valueChildren = "";
    }
    TaxInfomationComponent.prototype.ngOnInit = function () {
    };
    TaxInfomationComponent.prototype.onAdd = function () {
        this.value++;
    };
    TaxInfomationComponent.prototype.onSub = function () {
        if (this.value > 0) {
            this.value--;
        }
        else {
            return false;
        }
    };
    TaxInfomationComponent.prototype.ShowCheck = function () {
        this.check = !this.check;
    };
    TaxInfomationComponent.prototype.ShowChecked = function () {
        this.checked = !this.checked;
    };
    TaxInfomationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tax-infomation',
            template: __webpack_require__(/*! ./tax-infomation.component.html */ "./src/app/setting/tax-infomation/tax-infomation.component.html"),
            styles: [__webpack_require__(/*! ./tax-infomation.component.css */ "./src/app/setting/tax-infomation/tax-infomation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TaxInfomationComponent);
    return TaxInfomationComponent;
}());



/***/ }),

/***/ "./src/app/setting/terms-conditions/terms-conditions.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/setting/terms-conditions/terms-conditions.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-profile{\r\n    padding-left: 182px;\r\n    background: #F8F8F8;\r\n    padding-top: 95px;\r\n    width: 1440px;\r\n    position: relative;\r\n    padding-bottom: 99px;\r\n    display: flex;\r\n}\r\n.item-menu{\r\n    width: 237px;\r\n    border-right: 1.5px solid #E0E0E0;\r\n    font-family: SF Pro Text, sans-serif;\r\n    height: 520px;\r\n}\r\n.nav a{\r\n    cursor: pointer;\r\n}\r\n.nav .nav-link span{\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #757575;\r\n    height: 20px !important;\r\n}\r\n.nav .active span{\r\n    color: #001527;\r\n}\r\n.item-content-right{\r\n    margin-left: 154px;\r\n    width: 684px;\r\n}\r\n.item-content-right h2{\r\n    width: 279px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #000000;\r\n    margin-bottom: 28px;\r\n}\r\n.item-content-right p{\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    color: #001527;\r\n    font-family: 'SF Pro Text, sans-serif',Sans-Serif;\r\n    margin-bottom: 30px;\r\n}\r\n.item-content-right p.title{\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wcm9maWxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxODJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBwYWRkaW5nLXRvcDogOTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLml0ZW0tbWVudXtcclxuICAgIHdpZHRoOiAyMzdweDtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgI0UwRTBFMDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbn1cclxuLm5hdiBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYgLm5hdi1saW5rIHNwYW57XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2IC5hY3RpdmUgc3BhbntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU0cHg7XHJcbiAgICB3aWR0aDogNjg0cHg7XHJcbn1cclxuLml0ZW0tY29udGVudC1yaWdodCBoMntcclxuICAgIHdpZHRoOiAyNzlweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQtcmlnaHQgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JyxTYW5zLVNlcmlmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uaXRlbS1jb250ZW50LXJpZ2h0IHAudGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/setting/terms-conditions/terms-conditions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/setting/terms-conditions/terms-conditions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #F2F2F2; height: 2px; width: 1440px;\"></div>\r\n<div class=\"content-profile\">\r\n    <div class=\"item-menu\">\r\n        <nav class=\"nav flex-column\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/profile']\"><span>Profile</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/email']\"><span>Email</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/password']\"><span>Password</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/bank-account']\"><span>Bank Account</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/tax-information']\"><span>Tax Information</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/notifications']\"><span>Notifications</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/help-support']\"><span>Help & Support</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/contact-us']\"><span>Contact Us</span></a>\r\n            <a class=\"nav-link\"><span>Report an Issue</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/payments-report']\"><span>Reports of Payments</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/privacy-policy']\"><span>Privacy Policy</span></a>\r\n            <a class=\"nav-link active\"><span>Terms & Conditions</span></a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard/delete-account']\"><span>Delete Your Account</span></a>\r\n        </nav>\r\n    </div>\r\n    <div class=\"item-content-right\">\r\n        <h2>Terms & Conditions</h2>\r\n        <div class=\"text-top\">\r\n            <p class=\"title\">Cras sed arcu at ligula lobortis maximus</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor, faucibus interdum diam ultricies. Cras sed arcu at ligula lobortis maximus. Praesent eget metus vel massa dapibus euismod.</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor. </p>\r\n        </div>\r\n        <div class=\"text-bottom\">\r\n            <p class=\"title\">Cras sed arcu at ligula lobortis maximus</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet sit amet enim a elementum. Sed porta risus vel velit finibus, quis mattis arcu lobortis. Etiam in imperdiet urna. Nullam in dignissim tellus. Pellentesque placerat sem at mi auctor, faucibus interdum diam ultricies. Cras sed arcu at ligula lobortis maximus. Praesent eget metus vel massa dapibus euismod.</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setting/terms-conditions/terms-conditions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/setting/terms-conditions/terms-conditions.component.ts ***!
  \************************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/setting/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.css */ "./src/app/setting/terms-conditions/terms-conditions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map