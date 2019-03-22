chrome.runtime.sendMessage({todo: "showPageAction"});

// change font based on message from popup
chrome.runtime.onMessage.addListener(function(request, send, sendResponse){
  if (request.todo == "changeFont"){
    let addFont = request.clickedFont;
    $('p').css('font-family', addFont);

    // clear br tags before adding them
    //$('br').remove();
    // add br tags before each p tag
    $('br').insertAfter($('p'));
    //for (i = 0; )

    var a = chrome.extension.getURL("content.css");
    $('<link rel="stylesheet" type="text/css" href="' + a + '" >').appendTo("body");

  }
});
