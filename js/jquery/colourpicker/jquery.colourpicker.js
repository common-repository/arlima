/**
 * @author Unknown....
 */jQuery.fn.colourPicker=function(e){var t=jQuery.extend({id:"jquery-colour-picker",ico:"ico.gif",title:"Pick a colour",inputBG:!0,speed:200,openTxt:"Open colour picker"},e),r=function(e){var t=e.substr(0,2),r=e.substr(2,2),i=e.substr(4,2);return.5>.212671*t+.71516*r+.072169*i?"ffffff":"000000"},i=jQuery("#"+t.id);return i.length||(i=jQuery('<div id="'+t.id+'"></div>').appendTo(document.body).hide(),jQuery(document.body).click(function(e){jQuery(e.target).is("#"+t.id)||jQuery(e.target).parents("#"+t.id).length||i.hide(t.speed)})),this.each(function(){var e=jQuery(this),n=jQuery('<div style="height:16px;width:16px;border:1px solid #ddd;cursor:pointer;display:inline-block;background:#000;vertical-align:middle"></div>').insertAfter(e),o=jQuery('<input type="hidden" name="'+e.attr("name")+'" value="'+e.val()+'" />').insertAfter(e),u="";jQuery("option",e).each(function(){var e=jQuery(this),t=e.val(),i=e.text();u+='<li><a href="#" title="'+i+'" rel="'+t+'" style="background: #'+t+"; colour: "+r(t)+';">'+i+"</a></li>"}),e.remove(),t.inputBG&&(o.change(function(){o.css({background:"#"+o.val(),color:"#"+r(o.val())})}),o.change()),n.click(function(){var e=n.offset(),c=t.title?"<h2>"+t.title+"</h2>":"";return i.html(c+"<ul>"+u+"</ul>").css({position:"absolute",left:e.left+"px",top:e.top+"px"}).show(t.speed),jQuery("a",i).click(function(){var e=jQuery(this).attr("rel");return o.val(e),t.inputBG&&o.css({background:"#"+e,color:"#"+r(e)}),n.css({background:"#"+e,color:"#"+r(e)}),o.change(),i.hide(t.speed),!1}),!1})})};