    (function() {
        var msgArray = ["\t\t\t\t<div class=\"msg chat right \" msgid=\"1010\" msgtype=\"1\">\n\t\t\t\t\t<div class=\"avatar-box\">\n\t\t\t\t\t\t<img src=\"%E9%9C%B2%E1%A5%AB%E1%A9%A3_files/Portrait/.jpg\" class=\"avatar\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nt-box\"><span class=\"dspname right\" wxId=\"+\">\u5f20\u6bdb\u5cf0</span> 2022-02-05 00:04:12</div>\n\t\t\t\t\t<div class=\"content-box\">\n\t\t\t\t\t\t<div class=\"triangle\"></div>\n\t\t\t\t\t\t<span class=\"dont-break-out msg-text\"><pre>\u6211\u5148\u6253\u4e2a\u7535\u8bdd</pre></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n"];
        for (var idx = 0; idx < msgArray.length; idx++)
        {
          window.moreWechatMsgs.push(msgArray[idx]);
        }

        msgArray = null;
        loadMsgsForNextPage();
    })();


