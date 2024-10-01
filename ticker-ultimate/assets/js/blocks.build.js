!function(e){function t(n){if(l[n])return l[n].exports;var r=l[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(1)},function(e,t,l){"use strict";var n=l(2),r=(l.n(n),l(3)),a=(l.n(r),l(4)),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("wptu/ticker",{title:__("Ticker","ticker-ultimate"),description:__("Add and display horizontal or vertical ticker on your website that work with WordPress posts and Custom Post Type with the help of shortcode.","ticker-ultimate"),icon:"feedback",category:"essp_guten_block",keywords:[__("essential"),__("wptu ticker","ticker-ultimate"),__("ticker-ultimate")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"ticker-ultimate"}},edit:a.a,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),o=wp.element,c=o.Component,u=o.Fragment,m=wp.components,p=m.PanelBody,s=m.Disabled,k=m.TextControl,d=m.RangeControl,w=m.SelectControl,f=m.ColorPalette,h=m.BaseControl,__=wp.i18n.__,g=(wp.data.select,wp.blockEditor),b=g.InspectorControls,E=g.BlockControls,y=g.BlockAlignmentToolbar,v=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={isLoading:!1},e}return a(t,e),i(t,[{key:"ObjToString",value:function(e){var t=wp.blocks.getBlockAttributes("wptu/ticker"),l=["content_tail"],n="";for(var r in e)e.hasOwnProperty(r)&&"undefined"!==typeof e[r]&&e[r]!==t[r]&&(""!=jQuery.trim(e[r])||jQuery.inArray(r,l)>=0)&&(n+=r+'="'+e[r]+'" ');return n}},{key:"GetBooleanDropdown",value:function(){return[{value:"true",label:__("True","ticker-ultimate")},{value:"false",label:__("False","ticker-ultimate")}]}},{key:"GetEffects",value:function(){return[{value:"fade",label:__("Fade","ticker-ultimate")},{value:"typography",label:__("Type","ticker-ultimate")},{value:"slide-up",label:__("Slide Up","ticker-ultimate")}]}},{key:"GetLinkTarget",value:function(){return[{value:"self",label:__("Same Window","ticker-ultimate")},{value:"blank",label:__("New Window","ticker-ultimate")}]}},{key:"GetFontStyle",value:function(){return[{value:"normal",label:__("Normal","ticker-ultimate")}]}},{key:"GetPostOrderby",value:function(){return[{value:"date",label:__("Post Date","ticker-ultimate")}]}},{key:"GetPostOrder",value:function(){return[{value:"desc",label:__("Descending","ticker-ultimate")}]}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.attributes}},{key:"render",value:function(){var e=this.props,t=e.attributes,l=e.setAttributes,n=t.align,r=(t.className,t.ticker_title),a=t.effect,i=t.autoplay,o=t.timer,c=t.link,m=t.link_target,g=t.title_color,v=t.background_color,_=t.color,P=(t.fontstyle,t.border),C=t.post_type,B=t.post_cat,G=t.limit,O=t.category,T=t.posts,N=(this.state.isLoading,wp.element.createElement(b,null,wp.element.createElement(p,{title:__("General Parameters","ticker-ultimate")},wp.element.createElement(k,{label:__("Ticker Title","ticker-ultimate"),value:r,onChange:function(e){return l({ticker_title:e})}}),wp.element.createElement(w,{label:__("Ticker Effect","ticker-ultimate"),value:a,options:this.GetEffects(),onChange:function(e){return l({effect:e})},help:__("Select ticker effect.","ticker-ultimate")}),wp.element.createElement(w,{label:__("Autoplay","ticker-ultimate"),value:i,options:this.GetBooleanDropdown(),onChange:function(e){return l({autoplay:e})}}),"true"==i&&wp.element.createElement(d,{label:__("Ticker Speed","ticker-ultimate"),value:o,onChange:function(e){return l({timer:e})},min:100,max:5e4,help:__("Control speed of ticker slide.","ticker-ultimate")}),wp.element.createElement(w,{label:__("Link","ticker-ultimate"),value:c,options:this.GetBooleanDropdown(),onChange:function(e){return l({link:e})}}),"true"==c&&wp.element.createElement(w,{label:__("Link Target","ticker-ultimate"),value:m,options:this.GetLinkTarget(),onChange:function(e){return l({link_target:e})}}),wp.element.createElement(s,null,wp.element.createElement(w,{label:__("Arrow Button","ticker-ultimate"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enable/disable arrow button in slider. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(s,null,wp.element.createElement(w,{label:__("Pause Button","ticker-ultimate"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enable/disable pause button in slider. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))}))),wp.element.createElement(p,{title:__("Design Parameters","ticker-ultimate"),initialOpen:!1},wp.element.createElement(h,{label:__("Ticker Title Color","ticker-ultimate")},wp.element.createElement(f,{value:g,onChange:function(e){return l({title_color:e})}})),wp.element.createElement(h,{label:__("Ticker Background Color","ticker-ultimate")},wp.element.createElement(f,{value:v,onChange:function(e){return l({background_color:e})}})),wp.element.createElement(h,{label:__("Font Color","ticker-ultimate")},wp.element.createElement(f,{value:_,onChange:function(e){return l({color:e})}})),wp.element.createElement(s,null,wp.element.createElement(w,{label:__("Font Style","ticker-ultimate"),options:this.GetFontStyle(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Set font style. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(w,{label:__("Border","ticker-ultimate"),value:P,options:this.GetBooleanDropdown(),onChange:function(e){return l({border:e})}})),wp.element.createElement(p,{title:__("Query Parameters","ticker-ultimate"),initialOpen:!1},wp.element.createElement(k,{label:__("Post Type","ticker-ultimate"),value:C,onChange:function(e){return l({post_type:e})},help:wp.element.createElement("span",{title:__("Note: Be sure you have added valid post type name otherwise no result will be displayed.","ticker-ultimate")},__("Enter registered post type name.","ticker-ultimate")," [?]")}),wp.element.createElement(k,{label:__("Taxonomy","ticker-ultimate"),value:B,onChange:function(e){return l({post_cat:e})},help:wp.element.createElement("span",{title:__("Note: Be sure you have added valid taxonomy name otherwise no result will be displayed.","ticker-ultimate")},__("Enter registered taxonomy name.","ticker-ultimate")," [?]")}),wp.element.createElement(d,{label:__("Limit","ticker-ultimate"),value:G,onChange:function(e){return l({limit:e})},min:-1,help:__("Enter number of post to be displayed. Enter -1 to display all.","ticker-ultimate")}),wp.element.createElement(s,null,wp.element.createElement(w,{label:__("Order By","ticker-ultimate"),options:this.GetPostOrderby(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Select order type. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(s,null,wp.element.createElement(w,{label:__("Order","ticker-ultimate"),options:this.GetPostOrder(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Select sorting order. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(k,{label:__("Display Post of Specific Category","ticker-ultimate"),value:O,onChange:function(e){return l({category:e})},help:wp.element.createElement("span",{title:__("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","ticker-ultimate")},__("Enter category id to display category wise.","ticker-ultimate")," [?]")}),wp.element.createElement(s,null,wp.element.createElement(k,{label:__("Exclude Category","ticker-ultimate"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Exclude post category. Works only if `Category` field is empty. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(k,{label:__("Display Specific Posts","ticker-ultimate"),value:T,onChange:function(e){return l({posts:e})},help:wp.element.createElement("span",{title:__("You can pass multiple ids with comma seperated. You can find id at relevant post listing page.","ticker-ultimate")},__("Enter id of the post which you want to display.","ticker-ultimate")," [?]")}),wp.element.createElement(s,null,wp.element.createElement(k,{label:__("Exclude Specific Posts","ticker-ultimate"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter id of the post which you do not want to display. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(s,null,wp.element.createElement(k,{label:__("Include Author","ticker-ultimate"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter author id to display posts of particular author. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(s,null,wp.element.createElement(k,{label:__("Exclude Author","ticker-ultimate"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter author id to hide post of particular author. Works only if `Include Author` field is empty. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})),wp.element.createElement(s,null,wp.element.createElement(d,{label:__("Query Offset","ticker-ultimate"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Exclude number of posts from starting. Upgrade to","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_link,target:"_blank"},__("Premium version ","ticker-ultimate")),__("to get this option.","ticker-ultimate"))})))));return wp.element.createElement(u,null,N,wp.element.createElement(E,null,wp.element.createElement(y,{value:n,onChange:function(e){return l({align:e})},controls:["wide","full"]})),wp.element.createElement("div",{className:this.props.className},this.renderOutput()))}},{key:"renderOutput",value:function(){var e=this.props.attributes,t=this.ObjToString(e);t=t.trim();var l=t?"[wp_ticker "+t+"]":"[wp_ticker]";return wp.element.createElement("div",{className:"wpos-pro-guten-shrt"},wp.element.createElement("div",{className:"wpos-pro-guten-shrt-title"},wp.element.createElement("span",null,__("Ticker","ticker-ultimate"))),l,wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},wp.element.createElement("span",null),__("Do you want to check demo of this plugin.","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.free_demo_link,target:"_blank"},__("Click here","ticker-ultimate"))),wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},__("Do you also want to check premium version demo of this plugin.","ticker-ultimate")," ",wp.element.createElement("a",{href:WptuG_Block.pro_demo_link,target:"_blank"},__("Click here","ticker-ultimate"))))}}]),t}(c);t.a=v}]);