$(function(){
  // get user-generated font style
  var font = $('#fontStyle').val();
  $('#fontStyle').on("change paste keyup", function(){
    font = $(this).val();
  });

  $('#slider').on('change',function(){
    var val = $(this).val();
    // set font size that corelates with line height and width
  });
  // set the user-generated font style and send to the content.js script
  $('#btnChange').click(function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {todo: "changeFont", clickedFont: font});
      });
  });
});
