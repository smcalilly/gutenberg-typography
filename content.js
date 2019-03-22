chrome.runtime.sendMessage({todo: "showPageAction"});

// boolean flag for line breaks
let brAreAdded = false;

// change font based on message from popup
chrome.runtime.onMessage.addListener(function(request, send, sendResponse){
  if (request.todo == "changeFont"){
    let addFont = request.clickedFont;

    // insert font-family into stylesheet
    $('p').css('font-family', addFont);

    // add br tags before each p tag
    if (brAreAdded == false) {
      $('br').insertAfter($('p'));
      brAreAdded = true;
    }


    //for (i = 0; )

    var a = chrome.extension.getURL("content.css");
    $('<link rel="stylesheet" type="text/css" href="' + a + '" >').appendTo("body");

  }
});

// breaks inserted = false
// check to see t or f


// add parameter breaktof

// "boolean flag"
