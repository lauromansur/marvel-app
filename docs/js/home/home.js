"use strict";angular.module("marvelApp.homez",[]).controller("HomeCtrl",[function(){var t=this;t.init=function(){t.defaults()},t.defaults=function(){t.options=[{id:1,title:"Discover",state:"discover"},{id:1,title:"Browse",state:"browse",disabled:!0},{id:1,title:"About",state:"about"}]},t.init()}]);