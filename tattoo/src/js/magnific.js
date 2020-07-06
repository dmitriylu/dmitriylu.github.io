$('.work__popup').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true,
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
    // other options
  });


$('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled:true,
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',     
    // other options
  });