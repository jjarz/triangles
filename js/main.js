$(document).ready(function() {
  var duration = 100;
  var easing = 'linear';
  
  /* CSS and classes for the top triangle*/
  var topOpening = {
    'border-top-width': 0
  }
  var topOpening2 = {
    'border-bottom-width': 50,
    'top': 30  
  }
  var topClosing = {
    'border-bottom-width': 0,
    'top': 80  
  }
  var topClosing2 = {
    'border-top-width': 50,
    'top': 80
  }
  
  /* CSS and classes for the left triangle */
  var leftOpening = {
    'border-left-width': 0
  }
  var leftOpening2 = {
    'border-right-width': 50,
    'left': 30  
  }
  var leftClosing = {
    'border-right-width': 0,
    'left': 80  
  }
  var leftClosing2 = {
    'border-left-width': 50,
    'left': 80
  }
  
  /* CSS and classes for the bottom triangle */
  var bottomOpening = {
    'border-bottom-width': 0,
    'top': 180
  }
  var bottomOpening2 = {
    'border-top-width': 50
  }
  var bottomClosing = {
    'border-top-width': 0
  }
  var bottomClosing2 = {
    'border-bottom-width': 50,
    'top': 130
  }

/* CSS and classes for the right triangle */
   var rightOpening = {
    'border-right-width': 0,
    'left': 180  
  }
  var rightOpening2 = {
    'border-left-width': 50,
  }
  var rightClosing = {
    'border-left-width': 0
  }
  var rightClosing2 = {
    'border-right-width': 50,
    'left': 130
  }
  
  /*
    animateTriangle animates the opening and closing of the triangle
    @param openingCSS - CSS to animate to open the triangle
    @param opening2CSS - CSS to animate while opening, after the triangle flips while crossing the edge of the square
    @param closingCSS - CSS to animate while closing
    @param closing2CSS - CSS to animate while closing once the triangle flips while crossing the edge of the square
    @param openingClass - the class to add to the open triangle
    @param closingClass - the class to add to the closed triangle
  */
  var animateTriangle = function(openingCSS, opening2CSS, closingCSS, closing2CSS, openingClass, closingClass) {
    return function() {
      var $el = $(this);
      if ($el.hasClass('closed')) {
          $el
          .animate(openingCSS, duration, easing, () => {
            this.className = openingClass;
            $el.animate(opening2CSS, duration)
          })
  
      } else {
        $el
        .animate(closingCSS, duration, easing, () => {
          this.className = `${closingClass} closed`;
          $el.animate(closing2CSS, duration)
        })
      }
    }
  }

  var getOpenClass = (side) => {
    return `triangle js-triangle-${side} triangle-${side}-open`;
  }

  var getClosedClass = (side) => {
    return `triangle js-triangle-${side} triangle-${side}`;
  }

  $('.js-triangle-top').click(
    animateTriangle(
      topOpening, 
      topOpening2, 
      topClosing, 
      topClosing2, 
      getOpenClass('top'), 
      getClosedClass('top')
    )
  ).end();
  
  $('.js-triangle-left').click(
    animateTriangle(
      leftOpening, 
      leftOpening2, 
      leftClosing, 
      leftClosing2, 
      getOpenClass('left'), 
      getClosedClass('left')
    )
  ).end();
  
  $('.js-triangle-bottom').click(
    animateTriangle(
      bottomOpening, 
      bottomOpening2, 
      bottomClosing, 
      bottomClosing2, 
      getOpenClass('bottom'), 
      getClosedClass('bottom')
    )
  ).end();

  $('.js-triangle-right').click(
    animateTriangle(
      rightOpening, 
      rightOpening2, 
      rightClosing, 
      rightClosing2, 
      getOpenClass('right'), 
      getClosedClass('right')
    )
  ).end();
})
