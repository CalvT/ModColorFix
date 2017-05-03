// ==UserScript==
// @name        ModColorFix
// @author      CalvT
// @version     1.0
// @downloadURL   https://raw.githubusercontent.com/CalvT/ModColorFix/master/modcolorfix.user.js
// @match       *://chat.stackexchange.com/rooms/*
// @match       *://chat.stackoverflow.com/rooms/*
// @match       *://chat.meta.stackexchange.com/*
// @grant       none
// ==/UserScript==
$("head").last().after("<style>.username.moderator { color: green!important; }</style>");
