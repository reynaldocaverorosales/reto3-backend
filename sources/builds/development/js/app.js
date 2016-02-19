(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function inicio (){
	var elemento0 = document.getElementById('boton0');
    var elemento1 = document.getElementById('boton1');
    var elemento2 = document.getElementById('boton2');
    elemento0.addEventListener('click',aparece,false);
    elemento1.addEventListener('click',fadeOut,false);
    elemento2.addEventListener('click',fadeIn,false);
}
var aparece = function (){
    var elem = document.getElementById('box1');
	elem.style.background = "#9DCEFF";
	elem.style.width = "400px";
	elem.style.height = "200px";
};

var fadeOut = function (){
    var elem = document.getElementById('box1');
    elem.style.transition = "opacity 0.5s linear 0s";
    elem.style.opacity = 0;
};

var fadeIn = function (){
    var elem = document.getElementById('box1');
    elem.style.transition = "opacity 0.5s linear 0s";
    elem.style.opacity = 1;
};
window.addEventListener('load',inicio,false);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxyZXluYWxkb1xccmV0bzMtYmFja2VuZC1maW5hbFxcc291cmNlXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9yZXluYWxkby9yZXRvMy1iYWNrZW5kLWZpbmFsL3NvdXJjZS9ub2RlX21vZHVsZXMvc3JjL2pzL2NvbGxlY3Rpb25zL2Zha2VfZDIxNGJkZjQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBpbmljaW8gKCl7XHJcblx0dmFyIGVsZW1lbnRvMCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RvbjAnKTtcclxuICAgIHZhciBlbGVtZW50bzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b24xJyk7XHJcbiAgICB2YXIgZWxlbWVudG8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdG9uMicpO1xyXG4gICAgZWxlbWVudG8wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhcGFyZWNlLGZhbHNlKTtcclxuICAgIGVsZW1lbnRvMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZmFkZU91dCxmYWxzZSk7XHJcbiAgICBlbGVtZW50bzIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZhZGVJbixmYWxzZSk7XHJcbn1cclxudmFyIGFwYXJlY2UgPSBmdW5jdGlvbiAoKXtcclxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDEnKTtcclxuXHRlbGVtLnN0eWxlLmJhY2tncm91bmQgPSBcIiM5RENFRkZcIjtcclxuXHRlbGVtLnN0eWxlLndpZHRoID0gXCI0MDBweFwiO1xyXG5cdGVsZW0uc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xyXG59O1xyXG5cclxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiAoKXtcclxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDEnKTtcclxuICAgIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjVzIGxpbmVhciAwc1wiO1xyXG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoKXtcclxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveDEnKTtcclxuICAgIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjVzIGxpbmVhciAwc1wiO1xyXG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcclxufTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLGluaWNpbyxmYWxzZSk7XHJcbiJdfQ==
