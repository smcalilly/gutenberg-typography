chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, send, sendResponse){
  if (request.todo == "changeFont"){
    var addFont = request.clickedFont;
    $('p').css('font-family', addFont);
  }
});
