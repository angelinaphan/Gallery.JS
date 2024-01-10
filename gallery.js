// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	if(mCurrentIndex >= mImages.length)
	{
		mCurrentIndex = 0;
	}

	if(mCurrentIndex < 0) {
		mCurrentIndex = mImages.length-1;
	}

	document.getElementById('photo').src = mImages[mCurrentIndex].img;
	var loc = document.getElementsByClassName('location');
	
	console.log('swap photo');
}

// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();

// Array holding GalleryImage objects (see below).
var mImages = 
[
	{
		"imgPath": "img/places/australia.jpg",
		"imgLocation": "Australia",
		"description": "Loch Ard Gorge",
		"date": "01/01/2016"
	},
	{
		"imgPath": "img/places/austria.jpg",
		"imgLocation": "Austria",
		"description": "Austrian chapel",
		"date": "01/02/2016"
	},
	{
		"imgPath": "img/places/france.jpg",
		"imgLocation": "Paris",
		"description": "Eiffel Tower",
		"date": "01/03/2016"
	},
	{
		"imgPath": "img/places/greece.jpg",
		"imgLocation": "Greece",
		"description": "Greek coastline",
		"date": "01/04/2016"
	},
	{
		"imgPath": "img/places/hungary.jpg",
		"imgLocation": "Hungary",
		"description": "Budapest skyline",
		"date": "01/05/2016"
	},
	{
		"imgPath": "img/places/india.jpg",
		"imgLocation": "India",
		"description": "Taj Mahal",
		"date": "01/06/2016"
	},
	{
		"imgPath": "img/places/italy.jpg",
		"imgLocation": "Italy",
		"description": "Venice",
		"date": "01/07/2016"
	},
	{
		"imgPath": "img/places/japan.jpg",
		"imgLocation": "Japan",
		"description": "Hirosaki Castle",
		"date": "01/08/2016"
	},
	{
		"imgPath": "img/places/korea.jpg",
		"imgLocation": "South Korea",
		"description": "Seoul",
		"date": "01/09/2016"
	},
	{
		"imgPath": "img/places/norway.jpg",
		"imgLocation": "Norway",
		"description": "Countryside mountains",
		"date": "01/10/2016"
	},
	{
		"imgPath": "img/places/switzerland.jpg",
		"imgLocation": "Switzerland",
		"description": "Lake castle",
		"date": "01/11/2016"
	},
	{
		"imgPath": "img/places/thailand.jpg",
		"imgLocation": "Thailand",
		"description": "Beachline",
		"date": "01/12/2016"
	},
	{
		"imgPath": "img/places/turkey.jpg",
		"imgLocation": "Turkey",
		"description": "Istanbul",
		"date": "01/13/2016"
	}
];

console.log(mImages);

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'images.json';

function fetchJSON()
{
mRequest.onreadystatechange = function() {
	console.log("on ready state change");
	if (mRequest.readyState === 4 && mRequest.status === 200) {
	mJson = JSON.parse(mRequest.responseText);
	iterateJSON(mJson);
}
};

mRequest.open('GET', 'mUrl', true);
mRequest.send();
};

//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {
	
	// This initially hides the photos' metadata information
	$('.details').eq(0).hide();
	
});

window.addEventListener('load', function() {
	
	console.log('window loaded');

}, false);

function GalleryImage() {
	var location;
	var description;
	var date;
	var img;
};