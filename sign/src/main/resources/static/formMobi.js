/**
 * Created by tanytree on 2016/9/3.
 * 注意：这里包含组件的渲染，组件的交互控制，以及组件的验证
 */
 
$(function(){
    if(custom_base_wap=='null'){
        return false;

    }else{
        var formStyle=JSON.parse(custom_base_wap);
        var styleList='body{background:#'+formStyle.bodybgcolor+'}.BigTit1{background:#'+formStyle.title1.bgcolor+';display:'+formStyle.title1.isshow+'} .BigTit1 h2{color:#'+formStyle.title1.color+';font-size:'+formStyle.title1.fontsize+'px;text-align:'+formStyle.title1.align+'}.BigTit2{background:#'+formStyle.title2.bgcolor+';display:'+formStyle.title2.isshow+'}.BigTit2 h2{color:#'+formStyle.title2.color+';font-size:'+formStyle.title2.fontsize+'px;text-align:'+formStyle.title2.align+'}.baseInfo{background:#'+formStyle.baseinfo.bgcolor+'}.baseInfo .item-title span,.baseInfo .item-title span a{font-size:'+formStyle.baseinfo.fontsize+'px;color:#'+formStyle.baseinfo.color+'}.haederText h2,.sectionMod h3{font-size:'+formStyle.hdtit.fontsize+'px;color:#'+formStyle.hdtit.color+'}.checkBoxAndRadio .modCell ul li span{font-size:'+formStyle.optionvalue.fontsize+'px;color:#'+formStyle.optionvalue.color+'}.haederText p,.sectionMod  p,.imgMod  p{font-size:'+formStyle.hddesc.fontsize+'px;color:#'+formStyle.hddesc.color+'}.activeFormMod{background:#'+formStyle.conbg+'}.footBtn button{font-size:'+formStyle.footbtn.fontsize+'px;color:#'+formStyle.footbtn.color+';background:#'+formStyle.footbtn.bgcolor+'}';
        __addCss('form_style_scheme', styleList);
    }
});


function __addCss(name, content) {
    var styleElem = document.getElementsByTagName('style');
    for (var i = 0,
             len = styleElem.length; i < len; i++) {
        if (styleElem[i]) {
            if (name === styleElem[i].id) {
                styleElem[i].parentNode.removeChild(styleElem[i]);
            }
        }
    }
    $('<style id="' + name + '">' + content + '</style>').appendTo('head');
}

// $(function(){
//     var _container=$(".mainFrom");
//     // 生成每个组件的 HTML 代码
//     var createHTML = {
//         id_checkbox: function(o){
//             var options = '',
//                 count = 0,
//                 layout = '',
//                 serial = o.eid.replace(/[^\d]/g,''),
//                 instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header>':''),
//                 titleField = '<section class="activeFormMod checkBoxAndRadio checkboxMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i><i class="redTip">［请<b>至少</b>选择<s>2</s>项］</i></h2> ',
//                 mainField = '',
//                 layoutMap = {
//                     'column-1': 1,
//                     'column-2': 2,
//                     'column-3': 3,
//                     'column-4': 4
//                 },
//                 layoutVal = false;
//             if(layoutMap[o.layout] !== 1){
//                 layoutVal = layoutMap[o.layout];
//             }
//             $.each(o.value, function(n,v){
//                 options += '<li class="optionsLine"><label><input type="checkbox" name="checkbox_'+o.eid+'[]"  value="'+v.name+'"><span class="optionValue">'+v.name+'</span></label></li>';
//                 count++;
//             });
//             if(o.layout){
//                 layout = 'column-'+ o.layout;
//             }
//             mainField = '<div class="modCell tl"><ul class=" clearfix '+layout+'">'+options+'</ul></div> </div></section>';
//             return titleField+instructField+mainField;
//         },
//         id_dropdown: function (o) {
//             var options = '',
//                 count = 0,
//                 instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header>':''),
//                 titleField = '<section class="activeFormMod selectMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2> ',
//                 mainField;
// 				$.each(o.value, function(n,v){
// 					if(v.selected){
// 						options += '<option selected="selected"  value="'+v.name+'">'+v.name+'</option>';
// 					}else{
// 						options += '<option value="'+v.name+'">'+v.name+'</option>';
// 					}
// 					count++;
// 				});
//             mainField = '<div class="modCell" ><select name="dropdown_'+o.eid+'">'+options+'</select> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_multiple: function (o) {
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2> ',
//                 mainField = '<div class="modCell"> <textarea  name="multiple_'+o.eid+'"></textarea> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_radio: function(o){
//             var options = '',
//                 count = 0,
//                 serial = o.eid.replace(/[^\d]/g,''),
//                 layout = '',
//                 instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod checkBoxAndRadio radioMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '',
//                 layoutMap = {
//                     'column-1': 1,
//                     'column-2': 2,
//                     'column-3': 3,
//                     'column-4': 4
//                 },
//                 layoutVal = false;
//
//             if(layoutMap[o.layout] !== 1){
//                 layoutVal = layoutMap[o.layout];
//             }
//             $.each(o.value, function(n,v){
//                 options += '<li class="optionsLine"><label><input type="radio" name="radio_'+o.eid+'" value="'+v.name+'"><span class="optionValue">'+v.name+'</span></label></li>';
//                 count++;
//             });
//             if(o.layout){
//                 layout = 'column-'+ o.layout;
//             }
//             mainField = '<div class="modCell tl "><ul class="clearfix '+layout+'">'+options+'</ul> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_singleline: function (o) {
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="text" name="singleline_'+o.eid+'"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_code: function (o) {
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod codeMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span></h2> ',
//                 mainField = '<div class="modCell"> <input type="text" name="code_'+o.eid+'"  class="minInput"><span class="code"><img src="index.php?g=Home&m=Index&a=verifyCustom&s="+Math.random()></span><a href="javascript:;" class="btn"></a> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_section: function(o) {
//             var instructField = ((o.instruct)?'<p style="'+ (o.alignstyle||'') +'">'+(o.instruct)+'</p> </div> </div> </section>':''),
//                 titleField = '<section class="activeFormMod sectionMod"> <div class="formWrap"> <div class="modCell"> <h3  style="'+ (o.titlealignstyle||'') + '">'+o.title+'</h3> ';
//             return titleField+instructField;
//         },
//         id_picture: function(o) {
//             var instructField = ((o.instruct)?' <p style="'+ (o.alignstyle||'') +'">'+(o.instruct)+'</p> </div> </div> </section>':''),
//                 mainField = '<section class="activeFormMod imgMod" data-link="'+ o.imglink+'"> <div class="formWrap"> <div class="modCell"> <div class="i-pic"> <img src="'+decodeURIComponent(o.img)+'" style="'+((o.pictureshow==='normal' || !o.pictureshow)?'width:100%':'max-width:100%')+'"></div>';
//             return mainField+instructField;
//         },
//
//         id_fileupload: function(o) {
//             var instructField = ((o.instruct)?'<p class="instruct">'+(o.instruct)+'</p></div> ':''),
//                 titleField = '<section class="activeFormMod fileUploadMod"> <div class="formWrap"> <div class="haederText"><h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2> ',
//                 mainField = '<div class="modCell"><div class="item uploadNum" >您可以上传<span class="leftNum orange">'+o.imgnum+'</span>张图片，已上传<span class="loadedNum orange">0</span>张，每张图片大小不要超过5M，图片载入时请别提交表单</div><ul class="clearfix imgList"> <li class="hold"> <img src="{pigcms:$staticPath}/tpl/static/custom/formImg/placeholder/midImg.png"> </li> <li  class="hold"> <img src="{pigcms:$staticPath}/tpl/static/custom/formImg/placeholder/midImg.png"> </li> <li class="hold"> <img src="{pigcms:$staticPath}/tpl/static/custom/formImg/placeholder/midImg.png"></li> <li class="hold"> <img src="{pigcms:$staticPath}/tpl/static/custom/formImg/placeholder/midImg.png"></li> </ul> <ul class="btn clearfix"> <li class="pr add camera-area"> <input type="file" accept="image" name="file" class="pa"> <a href="javascript:;"></a> </li> <li class="reduce"> <a href="javascript:;"></a> </li> <li class="cancel"> <a href="javascript:;">取消</a> </li> </ul> </div> </div></section>';
//             return titleField+instructField+mainField;
//         },
//         id_picturecheckbox: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod checkBoxAndRadio checkboxWithImgMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i><i class="redTip">［请<b>至少</b>选择<s>2</s>项］</i></h2>  ',
//                 mainField,
//                 serial = o.eid.replace(/[^\d]/g,''),
//                 tmpHTML = '';
//             if(o.value){
//                 $.each(o.value, function(n, v) {
//                     var _img = '';
//                     if(v.img){
//                         _img = '<img class="picc_img" src="'+decodeURIComponent(v.img)+'">';
//                     }
//                     tmpHTML += '<li class="optionsLine" listfield="'+n+'"><label><div class="piccheckbox_img i-pic">'+_img+'</div><input type="checkbox" name="picturecheckbox_'+o.eid+'[]" value="'+decodeURIComponent(v.img)+'" '+((v.selected)?'checked="checked"':'')+'><span class="optionValue">'+v.name+'</span></label></li>';
//                 });
//             }
//             mainField = '<div class="modCell tc"><ul class="clearfix">'+tmpHTML+'</ul> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_pictureradio: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header>':''),
//                 titleField = '<section class="activeFormMod checkBoxAndRadio radioWithImgMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2> ',
//                 mainField,
//                 serial = o.eid.replace(/[^\d]/g,''),
//                 tmpHTML = '';
//             if(o.value){
//                 $.each(o.value, function(n, v) {
//                     var _img = '';
//                     if(v.img){
//                         _img = '<img class="picc_img" src="'+decodeURIComponent(v.img)+'">';
//                     }
//                     tmpHTML += '<li class="pictureradio-item" listfield="'+n+'"><label><div class="picradio_img i-pic">'+_img+'</div><input type="radio" name="pictureradio_'+o.eid+'" value="'+decodeURIComponent(v.img)+'"><span class="optionValue">'+v.name+'</span></label></li>';
//                 });
//             }
//
//             mainField = '<div class="modCell tc"><ul class="pictureRadioList clearfix">'+tmpHTML+'</ul></div></div> </div> </div>';
//             return titleField+instructField+mainField;
//         },
//         id_city: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod cityMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="text" readonly  name="city_'+o.eid+'" class="cityPicker"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//
//         },
//         id_date: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="text" name="date_'+o.eid+'" readonly  class="datePicker-'+o.datetype+'"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_email: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="text"  name="email_'+o.eid+'"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_id: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="text" name="id_'+o.eid+'" class="JS-ID"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_number: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="tel" name="number_'+o.eid+'"  class="JS-number"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         },
//         id_phone: function(o){
//             var instructField = ((o.instruct)?'<p>'+(o.instruct)+'</p> </header> ':''),
//                 titleField = '<section class="activeFormMod textMod"> <div class="formWrap"> <header class="haederText"> <h2><span>'+o.title+'</span><i class="com_required">'+((o.required)==1?'*':'')+'</i></h2>',
//                 mainField = '<div class="modCell"> <input type="tel" name="phone_'+o.eid+'"  class="JS-phone"> </div> </div> </section>';
//             return titleField+instructField+mainField;
//         }
//     };
//
//     // 生成一个对象的HTML / 可以获取对象的ID *
//     var _createComponent = function (o){
//         var componentHTML = '<li class="locked" id="'+o.eid+'" name="'+o.name+'">'+createHTML[o.name](o)+'</li>';
//         return componentHTML;
//     };
//     // 通过JSON串来构建表单
//     var _createFormViaJSON = function (opt){
//         // 传入一个json对象
//         var com = null;
//         if(opt){
//             $(".addModBtn").remove();
//             $.each(opt, function(n,v){
//                 com = $(_createComponent(v));
//                 com.appendTo(_container.find("ul.formUl"));
//                 if(v.layout){
//                     com.data('layoutType', v.layout);
//                 }
//                 if(v.name === 'id_checkbox' || v.name === 'id_picturecheckbox'){
//                     if(v.stype!='9'){
//                         com.data('__MGComponentSelect',{
//                             enable: true,
//                             number: v.snumber,
//                             type: v.stype
//                         });
//                         com.find(".redTip").show().find("s").text(v.snumber);
//                         var typeNum='';
//                         if(v.stype==1){
//                             typeNum='至少';
//                         }else if(v.stype==2){
//                             typeNum='最多';
//                         }else if(v.stype==3){
//                             typeNum='恰好';
//                         }else{
//                             typeNum='';
//                         }
//                         com.find(".redTip").find("b").text(typeNum);
//                     }
//                 }
//
//                 if(v.filetype){
//                     com.data('typedata', v.filetype);
//                 }
//                 if(v.name==='id_fileupload'){
//                     com.data('imgnum', v.imgnum);
//                 }
//             });
//         }
//     };
//     // todo 'custom_elements'json变量在页面上打印的，当前文件没有这个变量
//     if(custom_elements_wap=='null'){
//         return false;
//
//     }else{
//         //console.log(JSON.parse(custom_elements_wap));
//         _createFormViaJSON(JSON.parse(custom_elements_wap));
//
//     }
// });


function _dlMarkEval(s){
    // 字符串转换成 html 的字符串
    var LINK_REG = /\[(.+?)]\(([^\(\)]*?)\)/g,
        LINK_TEST_REG = /^(file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp):\/\//;
    return s.replace(LINK_REG,function($0,$1,$2){

        var linkList = $.trim($2).split(' ');
        uriTest = (!LINK_TEST_REG.test(linkList[0])),
            newURI = '',
            tmpTitle = '';

        if(uriTest){
            return $0;
        } else {
            newURI = linkList[0].split("://");
            newURI = newURI[0]+'://'+encodeURIComponent(newURI[1]);
            if(linkList[1]){
                tmpTitle = 'title='+JSON.stringify(linkList[1]);
            }
        }
        return '<a link-save="'+newURI+'" target="_blank">'+$1+'</a>';
    });
}
function _dlMarkParse(s){
    // html 字符串 转换为 mark 形式
    var TAG_A_REG = /<a[^>]*link-save="([^"]*)"[^>]*>([^<>]*)<img[^>]*src="images\/icon\/externalLink.png"[^>]*><\/a>/gi;
    return s.replace(TAG_A_REG,function($,$1,$2){
        return '['+$2+']('+decodeURIComponent($1)+')';
    });
}
$(document).ready(function(){
    document.body.addEventListener('touchstart', function () { });
    window.onload=function(){
        window.setTimeout(function(){
            $(".lodingCover").remove();
        },600)
    };
    if($('.swiper-container-banner').find('.swiper-slide').length>1){
        var swiper = new Swiper('.swiper-container-banner', {
            loop:true,
            autoplay: 5000,//可选选项，自动滑动
            // 如果需要分页器
            pagination: '.swiper-pagination-banner'
        });
    }



    //年月日拾取
    $(".datePicker-d").calendar({
        //value: ['2015-12-05'],
        dateFormat:'yyyy-mm-dd'
    });
    $(".datePicker-m").calendar({
        //value: ['2015-12'],
        dateFormat:'yyyy-mm'
    });
    //省市区拾取
    $(".cityPicker").cityPicker({
        toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker">确定</button><h1 class="title">请选择省市区</h1></header>'
    });

    $("[name='id_fileupload']").each(function(){
        var el=$(this);
        el.find(".reduce a").on("click",function(){
        el.find(".fileUploadMod .imgList").find("li").find("i").show();
        $(this).parent().hide();
        el.find(".cancel").show();
    });
    el.find(".cancel a").on("click",function(){
        el.find(".fileUploadMod .imgList").find("li").find("i").hide();
        $(this).parent().hide();
        el.find(".reduce").show();
    });


    })

    //$(".fileUploadMod .imgList").on('click','li i.delete',function(){
        //$(this).parent().remove();
    //});

    $(".JS-number").on('input propertychange',function(){
        this.value = this.value.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, "$1");
    });

    $(".codeMod .btn").on('click',function(){
       $(this).prev().find('img').attr('src',"index.php?g=Home&m=Index&a=verifyCustom&s="+Math.random());
    });
	
	
	$(".fileUploadMod ul li.add").click(function(){
		//alert($(this).parents('.locked').data('imgNum'));
	});
	
	
	$(".imgMod").on("click",function(){
		var url=decodeURIComponent($(this).attr('data-link'));
		if(url!=''){
		window.open(url);
		}
	});
	
	var activeFormPut=$(".activeFormMod input[type=text],.activeFormMod input[type=number],.activeFormMod textarea,.activeFormMod select");

	activeFormPut.focus(function(){
		$(this).addClass('focus').removeClass('error');
	});
	activeFormPut.blur(function(){
		$(this).removeClass('focus');
	});
	activeFormPut.click(function(){
		$(this).removeClass('error');
	});

       $(".checkBoxAndRadio .modCell ul li input[type=checkbox]").on("change",function(){

		var sType=$(this).parents(".locked").attr("name");
		var sId=$(this).parents(".locked").attr("id");
		if($('#'+sId).data('__MGComponentSelect')){
		var dataStype=$('#'+sId).data('__MGComponentSelect').type;
		var dataSnumber=$('#'+sId).data('__MGComponentSelect').number;

		if(sType=='id_checkbox' || sType=='id_picturecheckbox'){
			if($(this).prop("checked")==true){
				$(this).parents(".optionsLine").addClass('on');
			}else{
				$(this).parents(".optionsLine").removeClass('on');
			}
			var onLen=$('#'+sId).find('li.on').length;
			if(dataStype==2 || dataStype==3){
				if(onLen==dataSnumber){
					$('#'+sId).find("li").find("input[type=checkbox]").prop("disabled",true);
					$('#'+sId).find("li.on").find("input[type=checkbox]").prop("disabled",false);
				}else if(onLen<dataSnumber){
					$('#'+sId).find("li").find("input[type=checkbox]").prop("disabled",false);
				}
			}
		}

		}
	});
});
//表单验证
function checkForm(){
        var  tipMsg='';
		$(".locked").each(function(){
			var componentName=$(this).attr('name');
			switch(componentName)
			{
				case "id_singleline":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find("input[type=text]").val().replace(/[\r\n]/igm,'<br/>');
                        if(sVal==''){
							$(this).find("input[type=text]").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
					}
					break;
				case "id_multiple":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find("textarea").val().replace(/[\r\n]/igm,'<br/>');
							if(sVal==''){
							$(this).find("textarea").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
					}
					break;
				case "id_number":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find("input").val().replace(/[\r\n]/igm,'<br/>');
							if(sVal==''){
							$(this).find("input").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
					}
					break;
				case "id_phone":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find("input").val().replace(/[\r\n]/igm,'<br/>');
							if(sVal==''){
							$(this).find("input").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
						if(!sVal.match(/^([0-9]){6,}$/)){
							$(this).find("input").addClass('error');
							tipMsg+=thisComTitle+'格式不正确，请核对后，重新填写'+'\n';
							}
					}
					break;
				case "id_code":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
						var sVal=$(this).find("input[type=text]").val().replace(/[\r\n]/igm,'<br/>');
							if(sVal==''){
							$(this).find("input[type=text]").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
					break;
				case "id_city":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find("input[type=text]").val().replace(/[\r\n]/igm,'<br/>');
							if(sVal==''){
							$(this).find("input[type=text]").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
					}
					break;
				case "id_date":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find("input[type=text]").val().replace(/[\r\n]/igm,'<br/>');
							if(sVal==''){
							$(this).find("input[type=text]").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
					}
					break;
				case "id_fileupload":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
						var sVal=$(this).find(".loadedNum").text().replace(/[\r\n]/igm,'<br/>');
							if(sVal==0){
								tipMsg+=thisComTitle+'组件为必填项，请酌情上传图片'+'\n';
							}
					}
					break;
				case "id_email":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					var sVal=$(this).find("input[type=text]").val().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
							if(sVal==''){
							$(this).find("input[type=text]").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
							}
							if(!sVal.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
							$(this).find("input[type=text]").addClass('error');
							tipMsg+=thisComTitle+'格式不正确，请核对后，重新填写'+'\n';
							}

					}
					break;
				case "id_id":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					var sVal=$(this).find("input[type=text]").val().replace(/[\r\n]/igm,'<br/>');
					//console.log($(this).find(".com_required").text()!='');
					if($(this).find(".com_required").text()!=''){
						 
							if(sVal==''){
							$(this).find("input[type=text]").addClass('error');
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
						}
						if(!sVal.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)){
							  $(this).find("input[type=text]").addClass('error');
								tipMsg+=thisComTitle+'格式不正确，请核对后，重新填写'+'\n';
						}
					}
					break;
				case "id_radio":
					var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
					if($(this).find(".com_required").text()!=''){
							var sVal=false;						
							var checkLi=$(this).find(".modCell ul li");
							checkLi.each(function(){
								if($(this).find("input[type=radio]").prop("checked")==true){
									sVal=true;
									return false;
								}
							});
							if(sVal==false){
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
							}
					}
					break;
                case "id_pictureradio":
                    var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
                    if($(this).find(".com_required").text()!=''){
                            var sVal=false;                     
                            var checkLi=$(this).find(".modCell ul li");
                            checkLi.each(function(){
                                if($(this).find("input[type=radio]").prop("checked")==true){
                                    sVal=true;
                                    return false;
                                }
                            });
                            if(sVal==false){
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
                            }
                    }
                    break;
                case "id_pictureradio":
                    var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
                    if($(this).find(".com_required").text()!=''){
                            var sVal=false;                     
                            var checkLi=$(this).find(".modCell ul li");
                            checkLi.each(function(){
                                if($(this).find("input[type=radio]").prop("checked")==true){
                                    sVal=true;
                                    return false;
                                }
                            });
                            if(sVal==false){
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
                            }
                    }
                    break;
                case "id_checkbox":
                case "id_picturecheckbox":
                    var thisComTitle=$(this).find(".haederText h2 span").text().replace(/[\r\n]/igm,'<br/>');
                    if($(this).find(".com_required").text()!=''){
                            var sVal=false;                     
                            var checkLi=$(this).find(".modCell ul li");
                            checkLi.each(function(){
                                if($(this).find("input[type=checkbox]").prop("checked")==true){
                                    sVal=true;
                                    return false;
                                }
                            });
                            if(sVal==false){
                            tipMsg+=thisComTitle+'组件为必填项，不能为空'+'\n';
                            }
                    }
                    if($(this).data('__MGComponentSelect')){
                        var dataStype=$(this).data('__MGComponentSelect').type;
                        var dataSnumber=$(this).data('__MGComponentSelect').number;
                            var onLen=$(this).find('li.on').length;
                            if(dataStype==3){
                                if(onLen<dataSnumber){
                                    tipMsg+=thisComTitle+'组件为必须选择'+dataSnumber+'项，请重新填写'+'\n';
                                }
                            }
							if(dataStype==1){
                                if(onLen<dataSnumber){
                                    tipMsg+=thisComTitle+'组件为至少选择'+dataSnumber+'项，请重新填写'+'\n';
                                }
                            }
                        }
                    break;
		}
		})
        if(!tipMsg==''){
            $.alert(tipMsg);
            return false;
        }else{
            return true;
        }
}




$(function(){
	
	

$("[name='id_fileupload']").each(function(index) {
    //var img_arr = new Array();
	var img_arrStr=new Array();
    var el = $(this);
	var eidCom=el.attr('id');

	
	
	

	el.find('.camera-area input').localResizeIMG({
		width: 1000,
		quality: 1,
		success: function (result) {
			var elThis = $(this);
			
			var len = el.find('.imgList').find('li.newAdd').size();
			if (len == el.find(".uploadNum .leftNum").text()) {
				$.toast("你上传的数量已经达到最大值",1000);
				window.setTimeout(function(){
				$(".loader").hide();
				},2000);
				return false
			}
			$(".loader").show();
			var submitData={
				filename:result.base64
			};
			
			$.ajax({
				 type: "POST",
				 url: uploadurl,
				 data: submitData,
				 dataType: "json",
				 success: function(data){
					 //console.log(data)
					 if(data.error!=0){
						$.toast("上传失败",1000);
						return false;
					 }else{
						var imgPath = data.data.url.replace(/[\\]/g, '/');
						img_arrStr[len]=imgPath;
						var img = '<li class="newAdd"> <img src="' + imgPath + '"> <i class="delete" sid="' + len + '"></i> <input type="hidden" name="fileupload_' + eidCom + '[]" value="' + imgPath + '" /></li>';
						el.find('.imgList').append(img);
						var num = el.find(".uploadNum .loadedNum ").text();
						num++;
						el.find(".uploadNum .loadedNum ").text(num);
						el.find('.fileUploadMod .imgList').find(".hold").remove();
						el.find(".fileUploadMod .btn li.reduce").show();
						el.find(".fileUploadMod .btn li.cancel").hide();
						el.find(".fileUploadMod .imgList li i").hide();
						//el.find('.thisComFileSrc').val(img_arrStr.join("|"))
						$(".loader").hide();
					 }
					  }
			 });				
		}
	});	
	
    el.find('.fileUploadMod .imgList').on('click', 'li i.delete', function() {
        var sid = $(this).attr('sid');
        //img_arr.splice(sid, 1);
        img_arrStr.splice(sid, 1);
        $(this).parent().remove();
        var num = el.find(".uploadNum .loadedNum ").text();
        num--;
        el.find(".uploadNum .loadedNum ").text(num);
        el.find(".fileUploadMod .btn li.reduce").show();
        el.find(".fileUploadMod .btn li.cancel").hide();
		el.find(".fileUploadMod .imgList li i").hide();
		//el.find('.thisComFileSrc').val(img_arrStr.join("|"));
        //el.find('.imgList').html('');
        //for (var i = 0; i < img_arr.length; i++) {
            //var img = '<li class="newAdd"> <img src="' + img_arr[i] + '"> <i class="delete" sid="' + i + '"></i> <input type="hidden" name="fileupload_' + eidCom + '[]" value="' + img_arr[i] + '" /></li>';
            //el.find('.imgList').append(img)
        //}
    })
});


});

