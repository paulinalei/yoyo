<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<script>
$(document).ready(function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // set to the element
      columnWidth: '.grid-sizer'
    }
  });
// layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
// filter buttons
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

// change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked').addClass('is-not-checked');
      $( this ).removeClass('is-not-checked').addClass('is-checked');
    });
  });
});
</script>