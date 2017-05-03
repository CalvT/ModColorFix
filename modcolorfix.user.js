// ==UserScript==
// @name        Feedback Instantly, Rapidly, Effortlessly
// @namespace   https://github.com/Charcoal-SE/
// @author      Cerbrus
// @version     1.0.1
// @updateURL   https://raw.githubusercontent.com/Charcoal-SE/Userscripts/master/fire/fire.meta.js
// @match       *://chat.stackexchange.com/rooms/*
// @match       *://chat.stackoverflow.com/rooms/*
// @match       *://chat.meta.stackexchange.com/*
// @grant       none
// ==/UserScript==
$("head").last().after("<style>.username.moderator { color: green!important; }</style>");
