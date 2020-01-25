/****
 * When the modal is displayed, I want to get my dynamic content.
 *  In this case, the dynamic content is a data-whatever attribute
 *  and the actual text content of the clicked LI element.
 *
 *  I will take that content, and use it to populate my modal
 *  dynamically. In this way, I have a single modal popup with content
 *  from any number of sources. The only requirements are that the
 *  triggering element have a data-whatever attribute and some
 *  sort of text content.
 *  All of this is happening when my modal is triggering its show
 *  event, so it will all happen just before the modal is displayed.
 ****/
 
$('#ShowImage').on('show.bs.modal', function (event) {
  // Element that triggered the modal
  var liEl = $(event.relatedTarget); 
  
   // Extract info from data-* attributes, and from the element itself.
  var imageSrc = liEl.data('imagename');
  var imageTitle = liEl.data('imagetitle');
  
  // If necessary, you could initiate an AJAX request here
  //   (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could
  //   use a data binding library or other methods instead.
  var modal = $(this);
  
  // Update the dynamic portions of the modal dialog.
  modal.find('.modal-title').text('Image of ' + imageTitle);
  // modal.find('.modal-body textarea[name="message-body"]').text(imageSrc);
  modal.find('img').attr('src',imageSrc);
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

