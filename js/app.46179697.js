(function(e){function t(t){for(var i,o,l=t[0],d=t[1],a=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,l=1;l<n.length;l++){var d=n[l];0!==r[d]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},c=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/csie-project-2021/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var s=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f33":function(e,t,n){},4940:function(e,t,n){},5571:function(e,t,n){"use strict";n("62a5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function r(e,t,n,r,c,o){var l=Object(i["M"])("navigation-bar"),d=Object(i["M"])("field-filter"),a=Object(i["M"])("field-cards");return Object(i["D"])(),Object(i["i"])(i["b"],null,[Object(i["m"])(l),Object(i["m"])(d),(Object(i["D"])(!0),Object(i["i"])(i["b"],null,Object(i["K"])(e.allFields,(function(e,t){return Object(i["D"])(),Object(i["i"])(a,{key:"field-".concat(t),fieldId:t},null,8,["fieldId"])})),128))],64)}var c=n("5530"),o=Object(i["fb"])("data-v-4e12edb0");Object(i["G"])("data-v-4e12edb0");var l={class:"field hidden-xs-only"};Object(i["E"])();var d=o((function(e,t,n,r,c,d){var a=Object(i["M"])("el-button");return Object(i["D"])(),Object(i["i"])("section",l,[(Object(i["D"])(!0),Object(i["i"])(i["b"],null,Object(i["K"])(e.allFields,(function(t,n){return Object(i["D"])(),Object(i["i"])(a,{key:"field-".concat(n),type:e.currentField===n?"info":"default",onClick:function(e){return d.setFieldId(n)},round:""},{default:o((function(){return[Object(i["l"])(Object(i["Q"])(t),1)]})),_:2},1032,["type","onClick"])})),128))])})),a=n("5502"),s={name:"field-filter",computed:Object(c["a"])({},Object(a["b"])("field",["allFields","currentField"])),methods:Object(c["a"])(Object(c["a"])({},Object(a["c"])("field",["setCurrentField"])),{},{setFieldId:function(e){return this.setCurrentField(e)}})};n("5571");s.render=d,s.__scopeId="data-v-4e12edb0";var u=s,b=Object(i["fb"])("data-v-7384dc07");Object(i["G"])("data-v-7384dc07");var f={class:"subtitle"},p={class:"subtitle"},j={class:"info"},g={class:"info"},w=Object(i["l"])("簡介"),h=Object(i["l"])("簡報"),v=Object(i["l"])("影片");Object(i["E"])();var O=b((function(e,t,n,r,c,o){var l=Object(i["M"])("el-tag"),d=Object(i["M"])("el-link"),a=Object(i["M"])("el-card"),s=Object(i["M"])("el-col"),u=Object(i["M"])("el-row");return Object(i["D"])(),Object(i["i"])("section",{class:n.fieldId===e.currentField()?"":"hidden-sm-and-up"},[Object(i["m"])("h1",{class:"title",id:"title-".concat(n.fieldId)},Object(i["Q"])(e.fieldById(n.fieldId)),9,["id"]),Object(i["m"])(u,{class:"cards-row",type:"flex",justify:"space-around"},{default:b((function(){return[(Object(i["D"])(!0),Object(i["i"])(i["b"],null,Object(i["K"])(e.studentByFieldId(n.fieldId),(function(t,r){return Object(i["D"])(),Object(i["i"])(s,{class:"cards-col",span:5,key:"student-".concat(r),lg:{span:5},sm:{span:11},xs:{span:24}},{default:b((function(){return[Object(i["m"])(a,{"body-style":{padding:"0px"}},{default:b((function(){return[Object(i["m"])("h2",f,Object(i["Q"])(t.group),1),Object(i["m"])("h2",p,Object(i["Q"])(t.title),1),Object(i["m"])("p",j,Object(i["Q"])("領域：".concat(e.fieldById(n.fieldId))),1),Object(i["m"])("p",g,Object(i["Q"])("指導教授 : ".concat(t.teacher)),1),(Object(i["D"])(!0),Object(i["i"])(i["b"],null,Object(i["K"])(t.names,(function(e){return Object(i["D"])(),Object(i["i"])(l,{class:"el-icon-user-solid name",key:"name-".concat(e),type:"info",icon:"el-icon-search"},{default:b((function(){return[Object(i["l"])(Object(i["Q"])(e),1)]})),_:2},1024)})),128)),Object(i["m"])("section",{class:"links",style:{backgroundColor:[e.colorByFieldId(n.fieldId)]}},[Object(i["m"])(d,{class:"link",href:t.intro,target:"_blank"},{default:b((function(){return[w]})),_:2},1032,["href"]),Object(i["m"])(d,{class:"link",href:t.ppt,target:"_blank"},{default:b((function(){return[h]})),_:2},1032,["href"]),Object(i["m"])(d,{class:"link",href:t.video,target:"_blank"},{default:b((function(){return[v]})),_:2},1032,["href"])],4)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})],2)})),m=(n("a9e3"),{name:"field-cards",props:{fieldId:Number},data:function(){return{currentDate:new Date}},methods:Object(c["a"])({},Object(a["b"])("field",["currentField"])),computed:Object(c["a"])(Object(c["a"])({},Object(a["b"])("students",["studentByFieldId"])),Object(a["b"])("field",["fieldById","colorByFieldId"]))});n("968f");m.render=O,m.__scopeId="data-v-7384dc07";var y=m,M=Object(i["fb"])("data-v-9393822a");Object(i["G"])("data-v-9393822a");var A=Object(i["m"])("h1",{class:"title"},"NCKU-CSIE 專題展",-1),J=Object(i["m"])("i",{class:"el-icon-more"},null,-1);Object(i["E"])();var _=M((function(e,t,n,r,c,o){var l=Object(i["M"])("el-menu-item"),d=Object(i["M"])("el-submenu"),a=Object(i["M"])("el-menu");return Object(i["D"])(),Object(i["i"])(a,{class:"navigation-bar","default-active":c.activeIndex,mode:"horizontal"},{default:M((function(){return[A,Object(i["m"])(d,{index:"1"},{title:M((function(){return[J]})),default:M((function(){return[(Object(i["D"])(!0),Object(i["i"])(i["b"],null,Object(i["K"])(e.allFields,(function(e,t){return Object(i["D"])(),Object(i["i"])(l,{key:"field-".concat(t),index:"1-NaN",onClick:function(e){return o.setFieldId(t)},round:""},{default:M((function(){return[Object(i["l"])(Object(i["Q"])(e),1)]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),_:1},8,["default-active"])})),X={name:"nagigation-bar",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:Object(c["a"])(Object(c["a"])({},Object(a["c"])("field",["setCurrentField"])),{},{setFieldId:function(e){return location.href="#title-".concat(e),this.setCurrentField(e)}}),computed:Object(c["a"])({},Object(a["b"])("field",["allFields"]))};n("7ddc");X.render=_,X.__scopeId="data-v-9393822a";var Z=X,F={name:"App",components:{FieldFilter:u,FieldCards:y,NavigationBar:Z},computed:Object(c["a"])({},Object(a["b"])("field",["allFields"]))};n("f4e4");F.render=r;var k=F,Q={currentField:0,isShowField:!1,fields:["1. 數位生活科技與軟體技術","2. 架構與嵌入式系統","3. 計算、通訊與網路","4. 資料與知識工程","5. AI與人機互動","6. 生醫工程","7. 製造工程"],color:["#98ddca","#d5ecc2","#ffd3b4","#ffaaa7","#fdffbc","#ffeebb","#d4e2d4"]},S={allFields:function(e){return e.fields},fieldById:function(e){return function(t){return e.fields[t]}},currentField:function(e){return e.currentField},colorByFieldId:function(e){return function(t){return e.color[t]}}},I={setCurrentField:function(e,t){e.currentField=t}},D={namespaced:!0,state:Q,getters:S,mutations:I},L={0:[{group:"第一組",names:["吳政峰","廖家緯","吳政峰","廖家緯","吳政峰"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"},{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],1:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],2:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],3:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],4:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],5:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}],6:[{group:"第一組",names:["吳政峰","廖家緯"],title:"使用者故事開發框架",teacher:"莊坤達",field:0,ppt:"https://drive.google.com/file/d/1Dg4ipUAnR2XbAXy4ys8w8wEj8M6Q41wJ/view?usp=sharing",video:"https://www.youtube.com/watch?v=PLgrZzXBKAo",intro:"https://drive.google.com/file/d/1k5d_Q8wm8MLSnbnsZbZRl7SYjrJNYaJt/view?usp=sharing"}]},R={allStudent:function(e){return e},studentByFieldId:function(e){return function(t){return e[t]}}},Y={namespaced:!0,state:L,getters:R},B=Object(a["a"])({state:{},mutations:{},actions:{},modules:{field:D,students:Y}}),P=n("3fd4");n("7dd6"),n("a990"),n("7616");Object(i["h"])(k).use(P["a"]).use(B).mount("#app")},"62a5":function(e,t,n){},"7ddc":function(e,t,n){"use strict";n("a806")},"968f":function(e,t,n){"use strict";n("4940")},a806:function(e,t,n){},f4e4:function(e,t,n){"use strict";n("0f33")}});
//# sourceMappingURL=app.46179697.js.map