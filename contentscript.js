console.log('contentscript loaded');

var pushmessage = function (message) {
    $chat.append(row(message));
};

var row = function(message) {
    return $('<div class="">' + message + '</div>');
};

var buildChat = function () {
    var $chat = $('<div id="chat-chat" class=""></div>');
    pushmessage(1);
    pushmessage(2);
    pushmessage(3);
    pushmessage(4);
    pushmessage(5);
    pushmessage(6);
    pushmessage(7);
    pushmessage(8);
    pushmessage(9);
    pushmessage(10);
    pushmessage(11);
    pushmessage(12);
    pushmessage(13);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);
    pushmessage(14);

    return $chat;
};

var buildFooter = function () {
    var $footer = $('<div id="chat-footer" class=""></div>');
    var $messageInput = $('<input id="chat-message" type="text">');
    var $sendMessage = $('<button id="chat-send-message">send</button>');

    $footer.append($messageInput);
    $footer.append($sendMessage);

    $sendMessage.click(function () {
        $chat.append('<div>' + $('#chat-message').val() + '</div>');
    });

    return $footer;
};

$(document).ready(function() {
    var $maindiv = $('<div id="chat-chrome-main" title="abc"/>');
    $maindiv.append(buildChat());

    $maindiv.dialog({
        height: 300,
        width: 350,
        modal: false,
        closeOnEscape: false,
        position: {
            at: 'right top',
            of: window
        }
    });

//    $footerWrapper = $('<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"></div>');
    var $footerWrapper = $('<div></div>');
    $footerWrapper.append(buildFooter());
    $maindiv.parent().append($footerWrapper);
});