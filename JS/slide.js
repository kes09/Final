"use strict";

var splide = new Splide( '.splide', {
  type      : 'loop',
  direction : 'ttb',
  focus     : 'center',
  height :    "360px",
  autoplay :true,
  interval: 2000,
  arrows:false,
  
} );

splide.mount();