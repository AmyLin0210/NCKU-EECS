(function(e){function t(t){for(var c,o,l=t[0],d=t[1],a=t[2],s=0,b=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,l=1;l<n.length;l++){var d=n[l];0!==r[d]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},i=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5518:function(e,t,n){"use strict";n("6f30")},5571:function(e,t,n){"use strict";n("62a5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,i,o){var l=Object(c["M"])("navigation-bar"),d=Object(c["M"])("field-filter"),a=Object(c["M"])("field-cards");return Object(c["D"])(),Object(c["i"])(c["b"],null,[Object(c["m"])(l),Object(c["m"])(d),(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(e.allFields,(function(e,t){return Object(c["D"])(),Object(c["i"])(a,{key:"field-".concat(t),fieldId:t},null,8,["fieldId"])})),128))],64)}var i=n("5530"),o=Object(c["fb"])("data-v-4e12edb0");Object(c["G"])("data-v-4e12edb0");var l={class:"field hidden-xs-only"};Object(c["E"])();var d=o((function(e,t,n,r,i,d){var a=Object(c["M"])("el-button");return Object(c["D"])(),Object(c["i"])("section",l,[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(e.allFields,(function(t,n){return Object(c["D"])(),Object(c["i"])(a,{key:"field-".concat(n),type:e.currentField===n?"info":"default",onClick:function(e){return d.setFieldId(n)},round:""},{default:o((function(){return[Object(c["l"])(Object(c["Q"])(t),1)]})),_:2},1032,["type","onClick"])})),128))])})),a=n("5502"),u={name:"field-filter",computed:Object(i["a"])({},Object(a["b"])("field",["allFields","currentField"])),methods:Object(i["a"])(Object(i["a"])({},Object(a["c"])("field",["setCurrentField"])),{},{setFieldId:function(e){return this.setCurrentField(e)}})};n("5571");u.render=d,u.__scopeId="data-v-4e12edb0";var s=u,b=Object(c["fb"])("data-v-da2e9114");Object(c["G"])("data-v-da2e9114");var f={class:"subtitle"},j={class:"subtitle"},O={class:"info"},p={class:"info"},m=Object(c["l"])("企劃書"),h=Object(c["l"])("影片");Object(c["E"])();var v=b((function(e,t,n,r,i,o){var l=Object(c["M"])("el-tag"),d=Object(c["M"])("el-link"),a=Object(c["M"])("el-card"),u=Object(c["M"])("el-col"),s=Object(c["M"])("el-row");return Object(c["D"])(),Object(c["i"])("section",{class:n.fieldId===e.currentField()?"":"hidden-sm-and-up"},[Object(c["m"])("h1",{class:"title",id:"title-".concat(n.fieldId)},Object(c["Q"])(e.fieldById(n.fieldId)),9,["id"]),Object(c["m"])(s,{class:"cards-row",type:"flex",justify:"space-around"},{default:b((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(e.studentByFieldId(n.fieldId),(function(t,r){return Object(c["D"])(),Object(c["i"])(u,{class:"cards-col",span:5,key:"student-".concat(r),lg:{span:5},sm:{span:11},xs:{span:24}},{default:b((function(){return[Object(c["m"])(a,{"body-style":{padding:"0px"}},{default:b((function(){return[Object(c["m"])("h2",f,Object(c["Q"])(t.group),1),Object(c["m"])("h2",j,Object(c["Q"])(t.title),1),Object(c["m"])("p",O,Object(c["Q"])("系所：".concat(e.fieldById(n.fieldId))),1),Object(c["m"])("p",p,Object(c["Q"])("指導教授 : ".concat(t.teacher)),1),(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(t.names,(function(e){return Object(c["D"])(),Object(c["i"])(l,{class:"el-icon-user-solid name",key:"name-".concat(e),type:"info",icon:"el-icon-search"},{default:b((function(){return[Object(c["l"])(Object(c["Q"])(e),1)]})),_:2},1024)})),128)),Object(c["m"])("section",{class:"links",style:{backgroundColor:[e.colorByFieldId(n.fieldId)]}},[Object(c["m"])(d,{class:"link",href:t.intro,target:"_blank"},{default:b((function(){return[m]})),_:2},1032,["href"]),Object(c["m"])(d,{class:"link",href:t.video,target:"_blank"},{default:b((function(){return[h]})),_:2},1032,["href"])],4)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})],2)})),w=(n("a9e3"),{name:"field-cards",props:{fieldId:Number},data:function(){return{currentDate:new Date}},methods:Object(i["a"])({},Object(a["b"])("field",["currentField"])),computed:Object(i["a"])(Object(i["a"])({},Object(a["b"])("students",["studentByFieldId"])),Object(a["b"])("field",["fieldById","colorByFieldId"]))});n("ea68");w.render=v,w.__scopeId="data-v-da2e9114";var g=w,y=Object(c["fb"])("data-v-2d901e32");Object(c["G"])("data-v-2d901e32");var _={class:"navigation-bar"},F=Object(c["m"])("h1",{class:"title"},"NCKU 電資學院研究日",-1),k=Object(c["m"])("span",{class:"el-dropdown-link"},[Object(c["m"])("i",{class:"el-icon-more el-icon--right"})],-1);Object(c["E"])();var Z=y((function(e,t,n,r,i,o){var l=Object(c["M"])("el-dropdown-item"),d=Object(c["M"])("el-dropdown-menu"),a=Object(c["M"])("el-dropdown");return Object(c["D"])(),Object(c["i"])("section",_,[F,Object(c["m"])(a,{class:"dropdown",onCommand:o.handleCommand},{dropdown:y((function(){return[Object(c["m"])(d,{class:"dropdown"},{default:y((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(e.allFields,(function(e,t){return Object(c["D"])(),Object(c["i"])(l,{key:"field-".concat(t),command:t},{default:y((function(){return[Object(c["l"])(Object(c["Q"])(e),1)]})),_:2},1032,["command"])})),128))]})),_:1})]})),default:y((function(){return[k]})),_:1},8,["onCommand"])])})),I={name:"nagigation-bar",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:Object(i["a"])(Object(i["a"])({},Object(a["c"])("field",["setCurrentField"])),{},{handleCommand:function(e){return location.href="#title-".concat(e),this.setCurrentField(e)}}),computed:Object(i["a"])({},Object(a["b"])("field",["allFields"]))};n("6e0f");I.render=Z,I.__scopeId="data-v-2d901e32";var M=I,S={name:"App",components:{FieldFilter:s,FieldCards:g,NavigationBar:M},computed:Object(i["a"])({},Object(a["b"])("field",["allFields"]))};n("5518");S.render=r;var B=S,J={currentField:0,isShowField:!1,fields:["電機系 大學部","資訊系 大學部","電機系 研究所","資訊系 研究所"],color:["#ffaaa7","#fdffbc","#ffeebb","#d4e2d4"]},L={allFields:function(e){return e.fields},fieldById:function(e){return function(t){return e.fields[t]}},currentField:function(e){return e.currentField},colorByFieldId:function(e){return function(t){return e.color[t]}}},Y={setCurrentField:function(e,t){e.currentField=t}},Q={namespaced:!0,state:J,getters:L,mutations:Y},D={0:[{group:"第一組",names:["吳政峰","廖家緯","吳政峰","廖家緯","吳政峰"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],1:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],2:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],3:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}]},P={allStudent:function(e){return e},studentByFieldId:function(e){return function(t){return e[t]}}},K={namespaced:!0,state:D,getters:P},C=Object(a["a"])({state:{},mutations:{},actions:{},modules:{field:Q,students:K}}),x=n("3fd4");n("7dd6"),n("a990"),n("7616");Object(c["h"])(B).use(x["a"]).use(C).mount("#app")},"62a5":function(e,t,n){},"6e0f":function(e,t,n){"use strict";n("7c29")},"6f30":function(e,t,n){},"7c29":function(e,t,n){},9418:function(e,t,n){},ea68:function(e,t,n){"use strict";n("9418")}});
//# sourceMappingURL=app.c645743c.js.map