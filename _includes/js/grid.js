<script>
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
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
</script>