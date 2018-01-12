global.$ = global.jQuery = require('jquery');
require('bootstrap');

/*
 |--------------------------------------------------------------------------
 | Document Ready Function
 |--------------------------------------------------------------------------
 */
$(function() {

    'use strict';

    // Here be dragons.
    // Animation Pagination
    setTimeout(function () {
		$(".content-primary-section").addClass("content-two-section");
	}, 1000);

    setTimeout(function () {
		$(".content-primary-section").addClass("content-three-section");
	}, 2000);

	setTimeout(function () {
		$(".content-primary-section").addClass("content-four-section");
	}, 2000);

	setTimeout(function () {
		$(".content-primary-section").addClass("content-secundary-section");
	}, 300);

	setTimeout(function () {
	    $(".img-logo-animate").addClass("margin-top-animation");
	}, 300);

	setTimeout(function () {
		$(".title-home").addClass("margin-top-animationTwo");
	}, 1000);
});
$(function() {
    var go = true;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 && go) {
            $(".container-nav").addClass('container-nav-top');
            $(".carousel").addClass('carousel-top');
            go = false;
        } else if ($(this).scrollTop() < 10 && !go) {
            $(".container-nav").removeClass('container-nav-top');
            $(".carousel").removeClass('carousel-top');
            go = true;
        }
    });
});
