/**
 * Created by qiuch on 2017/8/12.
 */
var custom_elements_wap = '[{"id":"14","token":"jpuwcw1500010569","set_id":"26","name":"id_singleline","eid":"com1","title":"\u5b66\u751f\u59d3\u540d","required":"1","instruct":"","evalue":"","numtype":"","datetype":"d","layout":"0","imgnum":"0","numbertype":"","img":"","imglink":"","alignstyle":"","pictureshow":"","subtitle":"","snumber":"9","stype":"9","titlealignstyle":"","sort":"0"},{"id":"15","token":"jpuwcw1500010569","set_id":"26","name":"id_radio","eid":"com3","title":"\u5b66\u751f\u6027\u522b","required":"1","instruct":"","numtype":"","datetype":"d","layout":"2","imgnum":"0","numbertype":"","img":"","imglink":"","alignstyle":"","pictureshow":"","subtitle":"","snumber":"9","stype":"9","titlealignstyle":"","sort":"1","value":[{"name":"\u7537","selected":false,"lid":"0"},{"name":"\u5973","selected":false,"lid":"1"}]},{"id":"16","token":"jpuwcw1500010569","set_id":"26","name":"id_singleline","eid":"com5","title":"\u5b66\u751f\u5e74\u9f84","required":"1","instruct":"","evalue":"","numtype":"","datetype":"d","layout":"0","imgnum":"0","numbertype":"","img":"","imglink":"","alignstyle":"","pictureshow":"","subtitle":"","snumber":"9","stype":"9","titlealignstyle":"","sort":"2"},{"id":"17","token":"jpuwcw1500010569","set_id":"26","name":"id_singleline","eid":"com6","title":"\u8054\u7cfb\u7535\u8bdd","required":"1","instruct":"","evalue":"","numtype":"","datetype":"d","layout":"0","imgnum":"0","numbertype":"","img":"","imglink":"","alignstyle":"","pictureshow":"","subtitle":"","snumber":"9","stype":"9","titlealignstyle":"","sort":"3"},{"id":"18","token":"jpuwcw1500010569","set_id":"26","name":"id_singleline","eid":"com7","title":"\u5728\u8bfb\u5b66\u6821","required":"1","instruct":"","evalue":"","numtype":"","datetype":"d","layout":"0","imgnum":"0","numbertype":"","img":"","imglink":"","alignstyle":"","pictureshow":"","subtitle":"","snumber":"9","stype":"9","titlealignstyle":"","sort":"4"},{"id":"19","token":"jpuwcw1500010569","set_id":"26","name":"id_checkbox","eid":"com9","title":"\u4ece\u4ec0\u4e48\u5730\u65b9\u77e5\u9053\u6211\u4eec","required":"0","instruct":"","numtype":"","datetype":"d","layout":"1","imgnum":"0","numbertype":"","img":"","imglink":"","alignstyle":"","pictureshow":"","subtitle":"","snumber":"9","stype":"9","titlealignstyle":"","sort":"5","value":[{"name":"\u670b\u53cb\u63a8\u8350","selected":false,"lid":"0"},{"name":"\u5fae\u4fe1\u516c\u4f17\u53f7","selected":false,"lid":"1"},{"name":"\u5ba3\u4f20\u8d44\u6599","selected":false,"lid":"2"},{"name":"\u5176\u4ed6\u5730\u65b9","selected":false,"lid":"3"}]}]';
var custom_base_wap = '{"bodybgcolor":"fff","title1":{"bgcolor":"f0b216","isshow":"block","color":"ffffff","fontsize":16,"align":"left"},"title2":{"bgcolor":"f0b216","isshow":"block","color":"fff","fontsize":"16","align":"left"},"baseinfo":{"bgcolor":"ffffff","color":"6d7275","fontsize":12},"hdtit":{"color":"6d7275","fontsize":12},"hddesc":{"color":"6d7275","fontsize":12},"optionvalue":{"color":"6d7275","fontsize":"12"},"conbg":"fff","footbtn":{"color":"fff","fontsize":"16","bgcolor":"f0b216"}}';
var token = 'jpuwcw1500010569';
var uploadurl = 'index.php?g=Wap&m=Custom&a=uploadurl&token=jpuwcw1500010569';

window.shareData = {
    "moduleName": "Custom",
    "moduleID": "26",
    "imgUrl": "http://hl0572.yunzhiteng.com/uploads/j/jpuwcw1500010569/8/c/d/c/596864caceb08.jpg",
    "sendFriendLink": "http://hl0572.yunzhiteng.com/index.php?g=Wap&m=Custom&a=index&token=jpuwcw1500010569&id=26",
    "tTitle": "湖州大树教育课程在线申请",
    "tContent": "欢迎电话和来店咨询哦",
    "fTitle": "湖州大树教育课程在线申请"
};

$(function () {
    $("#savebutton").click(function () {
        //console.log(checkForm());
        if (checkForm()) {
            $(".loader").find('p').text('表单提交中');
            $(".loader").show();
            $("#custom_f").submit();
        }
    })
})

var SHARE_MARK = '';//分享标识
var SELF_MARK = '';//用户标识
var shareAppMessageOpts, shareQQOpts, shareQZoneOpts, shareTimelineOpts, shareWeiboOpts;
wx.config({
    debug: false,
    appId: 'wx8b6120a1c261111a',
    timestamp: 1502551373,
    nonceStr: '215081',
    signature: '49af6cf5fc8071f134be0c1d4a8c9a4e0c1a14d1',
    jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'openLocation',
        'getLocation',
        'addCard',
        'chooseCard',
        'openCard',
        'hideMenuItems',
        'previewImage',
        "startRecord",
        "stopRecord",
        "onVoiceRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "onVoicePlayEnd",
        "uploadVoice",
        "downloadVoice",
        "closeWindow",
        "getNetworkType",
        "chooseImage",
        "uploadImage"
    ]
});

wx.ready(function () {
    wx.showOptionMenu();
    // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
    /*document.querySelector('#checkJsApi').onclick = function () {
     wx.checkJsApi({
     jsApiList: [
     'getNetworkType',
     'previewImage'
     ],
     success: function (res) {
     //alert(JSON.stringify(res));
     }
     });
     };*/
    // 2. 分享接口
    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
    shareAppMessageOpts = {
        title: window.shareData.tTitle,
        desc: window.shareData.tContent,
        link: getShareLink(window.shareData.sendFriendLink, 'friend'),
        imgUrl: window.shareData.imgUrl,
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            shareTongji('friend', shareAppMessageOpts.link);
            shareHandle('frined');
        },
        cancel: function () {
            //alert('分享朋友失败');
        }
    };
    wx.onMenuShareAppMessage(shareAppMessageOpts);

    //获取“分享到QQ”按钮点击状态及自定义分享内容接口
    shareQQOpts = {
        title: window.shareData.tTitle,
        desc: window.shareData.tContent,
        link: getShareLink(window.shareData.sendFriendLink, 'qq'),
        imgUrl: window.shareData.imgUrl,
        success: function () {
            shareTongji('qq', shareQQOpts.link);
            shareHandle('qq');
        },
        cancel: function () {
            //alert('分享到QQ失败');
        }
    };
    wx.onMenuShareQQ(shareQQOpts);

    //获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
    shareQZoneOpts = {
        title: window.shareData.tTitle,
        desc: window.shareData.tContent,
        link: getShareLink(window.shareData.sendFriendLink, 'qzone'),
        imgUrl: window.shareData.imgUrl,
        success: function () {
            shareTongji('qzone', shareQZoneOpts.link);
            shareHandle('qzone');
        },
        cancel: function () {
            //alert('分享到QQ空间失败');
        }
    };
    wx.onMenuShareQZone(shareQZoneOpts);


    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    shareTimelineOpts = {
        title: window.shareData.fTitle ? window.shareData.fTitle : window.shareData.tTitle,
        link: getShareLink(window.shareData.sendFriendLink, 'timeline'),
        imgUrl: window.shareData.imgUrl,
        success: function () {
            shareTongji('timeline', shareTimelineOpts.link);
            shareHandle('frineds');
            //alert('分享朋友圈成功');
        },
        cancel: function () {
            //alert('分享朋友圈失败');
        }
    };
    wx.onMenuShareTimeline(shareTimelineOpts);

    // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
    shareWeiboOpts = {
        title: window.shareData.tTitle,
        desc: window.shareData.tContent,
        link: getShareLink(window.shareData.sendFriendLink, 'weibo'),
        imgUrl: window.shareData.imgUrl,
        success: function () {
            shareTongji('weibo', shareWeiboOpts.link);
            shareHandle('weibo');
            //alert('分享微博成功');
        },
        cancel: function () {
            //alert('分享微博失败');
        }
    };
    wx.onMenuShareWeibo(shareWeiboOpts);
    if (window.shareData.timeline_hide == '1') {
        wx.hideMenuItems({
            menuList: [
                'menuItem:share:timeline', //隐藏分享到朋友圈
            ],
        });
    } else if (window.shareData.timeline_hide == '2') {
        wx.hideMenuItems({
            menuList: [
                'menuItem:share:timeline', //隐藏分享到朋友圈
                'menuItem:share:appMessage', //隐藏分享到朋友
            ],
        });
    }
    wx.error(function (res) {
        /*if(res.errMsg == 'config:invalid signature'){
         wx.hideOptionMenu();
         }else if(res.errMsg == 'config:invalid url domain'){
         wx.hideOptionMenu();
         }else{
         wx.hideOptionMenu();
         //alert(res.errMsg);
         }*/
        if (res.errMsg) {
            wx.hideOptionMenu();
        }
    });
});

function shareHandle(to) {
    var submitData = {
        module: window.shareData.moduleName,
        moduleid: window.shareData.moduleID,
        token: 'jpuwcw1500010569',
        wecha_id: '0',
        url: window.shareData.sendFriendLink,
        to: to
    };

    $.post('index.php?g=Wap&m=Share&a=shareData&token=jpuwcw1500010569&wecha_id=0', submitData, function (data) {
    }, 'json');
    if (window.shareData.isShareNum == 1) {
        var ShareNum = {
            token: 'jpuwcw1500010569',
            ShareNumData: window.shareData.ShareNumData
        }
        $.post('index.php?g=Wap&m=Share&a=ShareNum&token=jpuwcw1500010569&wecha_id=0', ShareNum, function (data) {
            if (window.shareData.isShareNumReload == 1) {
                location.reload();
            }
        }, 'json');
    }
    if ('function' == typeof shareCallback) {
        shareCallback(to);
    } else {
        $('.share-callback').css('left', ($(document).width() - 200) / 2).fadeIn(1000);
        $('.share-callback').fadeOut(3000);
    }
}

//获取分享链接
function getShareLink(link, channel) {
    if ('TONGJI_STATUS' != '1') {
        return link;
    }
    return link.indexOf('?') < 0 ? (link + '?sk=' + SHARE_MARK + '&mk=' + SELF_MARK) : (link + '&sk=' + SHARE_MARK + '&mk=' + SELF_MARK);
}
function shareTongji(channel, url) {
}