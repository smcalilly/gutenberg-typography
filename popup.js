$(function(){
  var font = $('#fontStyle').val();
  $('#fontStyle').on("change paste keyup", function(){
    font = $(this).val();
  });
  $('#btnChange').click(function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {todo: "changeFont", clickedFont: font});
      });
  });
});

/*$(function){
  var width = $().val();
}
*/
