(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03eb":function(t,e,n){},"260f":function(t,e,n){},"4a85":function(t,e,n){"use strict";var o=n("4cf8"),r=n.n(o);r.a},"4cf8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full flex flex-col overflow-hidden"},[n("div",{staticClass:"relative"},[n("Header")],1),n("div",{staticClass:"overflow-auto flex flex-col flex-grow justify-between"},[n("router-view",{staticClass:"flex-grow"}),n("Footer")],1),n("Modal"),n("Menu")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-start md:justify-center shadow"},[n("Logo"),n("NavBar"),n("div",{staticClass:"hidden md:block m-auto"},[n("SocialMedia")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-center justify-center mx-12 lg:mx-24"},[o("div",{staticClass:"w-8 h-8 ml-4 cursor-pointer",attrs:{id:"instagram"},on:{click:t.onClick}},[o("img",{attrs:{src:n("6531"),alt:""}})]),o("div",{staticClass:"w-8 h-8 ml-4 cursor-pointer",attrs:{id:"facebook"},on:{click:t.onClick}},[o("img",{attrs:{src:n("65aa"),alt:""}})])])},c=[],u={name:"SocialMedia",methods:{onClick:function(t){"facebook"===t.target.parentElement.id?window.open("https://www.facebook.com/anatopalaphotography/"):"instagram"===t.target.parentElement.id&&window.open("https://instagram.com/anatopalaphotography")}}},f=u,p=n("2877"),m=Object(p["a"])(f,l,c,!1,null,null,null),d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden md:flex flex-grow justify-evenly items-center font-lato text-xl xl:text-2xl text-gray-900 mx-10 3xl:mx-48"},t._l(t.elements,(function(e){return n("div",{key:e,staticClass:"py-2 px-6 uppercase cursor-pointer hover:border-gray-900 border-2 border-transparent",attrs:{id:e.toLowerCase().replace(/\s/g,"")},on:{click:function(){return t.onClick(e)}}},[t._v(" "+t._s(e)+" ")])})),0)},g=[],v=(n("ac1f"),n("5319"),n("2f62")),x=n("9029"),b=(n("fb6a"),{state:{albumSelectedId:-1,config:[]},mutations:{setConfig:function(t,e){t.config=e}},actions:{setConfig:function(t,e){var n=t.commit,o=e.config;n("setConfig",o)}},getters:{getConfig:function(t){return t.config.slice(1)},getFrontPageSlide:function(t){return t.config.length>0?t.config[0]:{}}}});o["a"].use(v["a"]);var A=new v["a"].Store({modules:{albumModule:b},state:{root:{isMobile:x["isMobile"],isPortraitMode:!0,isSideMenuShown:!1}},getters:{isMobile:function(t){return t.root.isMobile}},mutations:{updateScreenSize:function(t,e){t.root.isSideMenuShown=e<=480},orientationChange:function(t,e){t.root.isPortraitMode=e.isPortraitMode}}}),y=["Home","About","Gallery","Contact"],C=w((function(){E(),A.commit("updateScreenSize",window.innerWidth)}),400);function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=null,r=!0;return function(){var a=r&&n;function s(){t.call(this,arguments),o=null}a&&(r=!1,s()),o||(o=setTimeout(s,e))}}function j(){var t=window,e=t.orientation;90===Math.abs(e)?A.commit("orientationChange",{isPortraitMode:!1}):A.commit("orientationChange",{isPortraitMode:!0})}function k(){C(),j()}function E(){var t=document.getElementById("body"),e=16/9,n=window.innerWidth,o=window.innerHeight,r=n/o;r>e?n=o*e:o=n/e,t.style.fontSize=n/1300+"em"}var S={name:"NavBar",data:function(){return{elements:y}},methods:{onClick:function(t){this.$router.push({path:"/".concat(t.toLowerCase().replace(/\s/g,""))})}}},_=S,O=Object(p["a"])(_,h,g,!1,null,null,null),I=O.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col justify-center text-gray-900 mx-10 lg:mx-24 my-6 relative font-lato text-center cursor-pointer",on:{click:function(){return t.$router.push("/")}}},[t._m(0),t._m(1)])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-4xl leading-none tracking-2px"},[n("span",{staticClass:"whitespace-no-wrap"},[t._v(" Ana Topala ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-lg uppercase mt-65 tracking-px"},[n("span",[t._v(" photography ")])])}],H={},U=Object(p["a"])(H,M,R,!1,null,null,null),B=U.exports,T={name:"Header",props:{elements:Array},data:function(){return{opened:!1}},components:{Logo:B,NavBar:I,SocialMedia:d},methods:{setMenuState:function(t){this.opened=t}},computed:{isSideMenuShown:function(){var t=this.$store.state.root,e=t.isMobile,n=t.isPortraitMode;return e&&n}}},F=T,L=Object(p["a"])(F,s,i,!1,null,null,null),P=L.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cool-light-box",{attrs:{index:t.index,items:t.items},on:{close:function(e){t.index=null}}})},Y=[],K=(n("99af"),n("d81d"),n("5547")),D=(n("2223"),"https://ddiucb90kd0k9.cloudfront.net"),Q={components:{CoolLightBox:K["a"]},data:function(){return{index:null,items:[]}},methods:{modalOpenEventHandler:function(t){var e=t.index,n=t.data;this.isOpen=!this.isOpen;var o=n.folder,r=n.photos;this.items=r.map((function(t){return"".concat(D,"/assets/albums/").concat(o,"/").concat(t,".jpg")})),this.index=e}},mounted:function(){this.$eventBus.$on("open-modal",this.modalOpenEventHandler)}},N=Q,J=Object(p["a"])(N,V,Y,!1,null,null,null),q=J.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed w-full"},[n("v-button",{attrs:{clicked:t.opened},on:{click:t.onClickHandler}}),n("transition",{attrs:{name:"move"}},[t.opened?n("v-drawer",{on:{"item-clicked":t.onClickHandler}}):t._e()],1)],1)},W=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative pr-16 pt-6 float-right w-0 h-0 z-50 md:hidden bg-transparent"},[n("div",{staticClass:"flex flex-wrap justify-between items-center w-10 h-10 py-c2 cursor-pointer",on:{click:t.onClickEventHandler}},[n("v-custom-line",[n("v-line",{staticClass:"transition-transform transition-250 origin-right",class:{" rotate-reverse-45 ":t.clicked}})],1),n("v-custom-line",{staticClass:"flex justify-end"},[n("v-line",{staticClass:"transition-opacity transition-100 ",class:{"opacity-0":t.clicked}})],1),n("v-custom-line",[n("v-line",{staticClass:"transition-transform transition-250 origin-right",class:{"rotate-45":t.clicked}})],1)],1)])},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative w-10/12 h-1 bg-black"})},z=[],tt={},et=Object(p["a"])(tt,Z,z,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative w-full"},[t._t("default")],2)},rt=[],at={},st=Object(p["a"])(at,ot,rt,!1,null,null,null),it=st.exports,lt={name:"v-button",components:{VLine:nt,VCustomLine:it},props:{clicked:{type:Boolean,default:!1}},methods:{onClickEventHandler:function(){this.$emit("click")}}},ct=lt,ut=Object(p["a"])(ct,G,X,!1,null,null,null),ft=ut.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed top-0 md:hidden flex z-40 flex-col h-screen w-full bg-white text-gray-900 overflow-hidden"},[n("div",{staticClass:"flex items-center justify-center relative h-24 py-3 px-2 flex-grow-0"},[n("SocialMedia")],1),n("div",{staticClass:"flex flex-grow flex-shrink flex-col overflow-y-auto"},t._l(t.elements,(function(e){return n("div",{key:e,staticClass:"text-center text-3xl my-10",on:{click:function(){return t.onClickHandler(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])},mt=[],dt={name:"RightMenu",components:{SocialMedia:d},data:function(){return{elements:y}},methods:{onClickHandler:function(t){this.opened=!this.opened,this.$emit("item-clicked"),this.$router.push("/".concat(t.toLowerCase().replace(/\s/g,"")))}}},ht=dt,gt=Object(p["a"])(ht,pt,mt,!1,null,null,null),vt=gt.exports,xt={components:{VButton:ft,VDrawer:vt},data:function(){return{opened:!1}},methods:{onClickHandler:function(){this.opened=!this.opened}}},bt=xt,At=(n("4a85"),Object(p["a"])(bt,$,W,!1,null,null,null)),yt=At.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-lato text-gray-900 bg-gray-25 w-full py-10 shadow"},[n("div",{staticClass:"flex flex-wrap justify-center py-2 text-xl lg:text-2xl"},[n("Field",{attrs:{"anchor-tag":"tel",url:"assets/icons/5.png",text:"+1 (872) 218-8048"}}),n("Field",{attrs:{"anchor-tag":"mailto",url:"assets/icons/4.svg",text:"anatopalaphotography@gmail.com"}})],1),n("div",{staticClass:"uppercase text-xs lg:text-base py-2 flex justify-center"},[n("span",{staticClass:"text-center"},[t._v("© Ana Topala - US PORTRAIT AND WEDDING PHOTOGRAPHY "+t._s((new Date).getFullYear())+" ")])])])},wt=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap justify-between items-center px-1"},[n("div",{staticClass:"px-1  lg:px-2"},[n("img",{staticClass:"w-auto lg:w-6",attrs:{src:t.url,alt:"icon"}})]),n("a",{staticClass:"px-1 underline",attrs:{href:t.anchorTag+": "+t.text}},[n("span",[t._v(t._s(t.text))])])])},kt=[],Et={name:"Field",props:{url:String,text:String,anchorTag:String}},St=Et,_t=Object(p["a"])(St,jt,kt,!1,null,null,null),Ot=_t.exports,It={name:"Footer",components:{Field:Ot}},Mt=It,Rt=Object(p["a"])(Mt,Ct,wt,!1,null,null,null),Ht=Rt.exports,Ut={components:{Footer:Ht,Modal:q,Header:P,Menu:yt}},Bt=Ut,Tt=Object(p["a"])(Bt,r,a,!1,null,null,null),Ft=Tt.exports,Lt=n("8c4f"),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-wrap justify-center md:justify-start"},t._l(t.config,(function(e){return n("AlbumPreview",{key:e.id,attrs:{"v-if":t.config.length>0,id:e.id,"img-url":t.imageURL+"/assets/albums/"+e.folder+"/preview.jpg",name:e.name,photos:e.photos}})})),1)])},Vt=[],Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col relative w-11/12 md:w-1/2 cursor-pointer relative before:aspect-ratio-4/3 before:block before:empty-content",on:{click:t.onClick}},[n("div",{staticClass:"flex flex-col absolute p-2 top-0 left-0 right-0 bottom-0 font-lato text-gray-900 text-xl md:p-10"},[n("img",{staticClass:"flex-grow-0 hover:shadow-2xl",attrs:{src:t.imgUrl||""}}),n("div",{staticClass:"flex flex-grow justify-center items-center"},[t._v(" "+t._s(t.name)+" ")])])])},Kt=[],Dt=(n("a9e3"),n("5530")),Qt={name:"AlbumPreview",props:{id:Number,imgUrl:String,name:String,photos:Array},methods:Object(Dt["a"])({},Object(v["b"])(["selectAlbum"]),{onClick:function(){this.$router.push({path:"/gallery/".concat(this.id)})}})},Nt=Qt,Jt=Object(p["a"])(Nt,Yt,Kt,!1,null,null,null),qt=Jt.exports,$t={name:"Albums",components:{AlbumPreview:qt},data:function(){return{temp:""}},computed:{imageURL:function(){return D},config:function(){return this.$store.getters.getConfig}}},Wt=$t,Gt=Object(p["a"])(Wt,Pt,Vt,!1,null,null,null),Xt=Gt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-4"},[Object.keys(t.mainConfig).length>0?n("div",{staticClass:"relative before:block before:absolute before:aspect-ratio-16/9 before:empty-content before:absolute w-full my-0 mx-auto"},[n("Hooper",{staticClass:"w-full h-full",attrs:{settings:Object.assign({},t.hooperSettings)}},t._l(t.photos,(function(e){return n("Slide",{key:e},[n("VImage",{attrs:{src:t.imageURL+"/assets/albums/"+t.folder+"/"+e}})],1)})),1)],1):t._e(),n("div",{staticClass:"font-normal font-lato py-6 px-12 text-gray-900 text-lg md:text-xl lg:px-32 lg:text-2xl text-center uppercase"},[t._v(" A precious Moment, a lovely image, can be captured and kept forever. ")])])},zt=[],te=n("7e04"),ee=(n("955f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{ref:"img",attrs:{src:t.src+"ph.jpg",alt:""}})}),ne=[],oe={props:{src:String},mounted:function(){var t=new Image,e=this;t.onload=function(){e.$refs.img.src=this.src},t.src="".concat(this.src,".jpg")}},re=oe,ae=Object(p["a"])(re,ee,ne,!1,null,null,null),se=ae.exports,ie={name:"Main",components:{VImage:se,Hooper:te["a"],Slide:te["b"]},data:function(){return{hooperSettings:{autoPlay:!0,itemsToShow:1,infiniteScroll:!0,wheelControl:!1,playSpeed:2500}}},computed:Object(Dt["a"])({},Object(v["c"])({mainConfig:"getFrontPageSlide"}),{imageURL:function(){return D},photos:function(){return this.mainConfig.photos},folder:function(){return this.mainConfig.folder}})},le=ie,ce=Object(p["a"])(le,Zt,zt,!1,null,null,null),ue=ce.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Error Page")])},pe=[],me={name:"Error"},de=me,he=(n("aea9"),Object(p["a"])(de,fe,pe,!1,null,"42892774",null)),ge=he.exports,ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.config.length>0?n("div",{},t._l(t.data.photos,(function(e,o){return n("v-image-wrapper",{key:e,staticClass:"mx-auto md:inline-block",attrs:{src:t.imageURL+"/assets/albums/"+t.data.folder+"/"+e},nativeOn:{click:function(e){return function(){return t.onClickHandler(o)}()}}})})),1):t._e()},xe=[],be=(n("7db0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-11/12 md:w-6/12 lg:w-1/3 xl:w-1/4 p-2 cursor-pointer hover:bg-gray-400 hover:opacity-75 before:absolute before:block before:empty-content before:aspect-ratio-16/9 before:w-0 before:h-0"},[n("VImage",{attrs:{src:t.src}})],1)}),Ae=[],ye={name:"VImageWrapper",components:{VImage:se},props:{src:String}},Ce=ye,we=Object(p["a"])(Ce,be,Ae,!1,null,null,null),je=we.exports,ke={name:"Album",components:{VImageWrapper:je},props:{id:String},computed:Object(Dt["a"])({},Object(v["c"])({config:"getConfig"}),{imageURL:function(){return D},data:function(){var t=this;return this.config.find((function(e){return e.id==t.id}))}}),methods:{onClickHandler:function(t){var e=this.data;this.$eventBus.$emit("open-modal",{index:t,data:e})}}},Ee=ke,Se=Object(p["a"])(Ee,ve,xe,!1,null,null,null),_e=Se.exports,Oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("v-contact-form",{staticClass:"md: mx-auto"})],1)},Ie=[],Me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"px-8 pb-16 mt-56 w-full md:w-1/3"},[n("v-custom-label",{scopedSlots:t._u([{key:"input",fn:function(){return[n("v-custom-input",{class:t.errors.name,attrs:{type:"text",placeholder:"Name"},model:{value:t.formInput.name,callback:function(e){t.$set(t.formInput,"name",e)},expression:"formInput.name"}})]},proxy:!0}])}),n("v-custom-label",{scopedSlots:t._u([{key:"input",fn:function(){return[n("v-custom-input",{class:t.errors.subject,attrs:{type:"text",placeholder:"Subject"},model:{value:t.formInput.subject,callback:function(e){t.$set(t.formInput,"subject",e)},expression:"formInput.subject"}})]},proxy:!0}])}),n("v-custom-label",{scopedSlots:t._u([{key:"input",fn:function(){return[n("v-custom-input",{class:t.errors.email,attrs:{type:"email",placeholder:"Enter your email"},model:{value:t.formInput.email,callback:function(e){t.$set(t.formInput,"email",e)},expression:"formInput.email"}})]},proxy:!0}])}),n("v-custom-label",{scopedSlots:t._u([{key:"input",fn:function(){return[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formInput.text,expression:"formInput.text"}],staticClass:"form-textarea mt-1 block w-full",class:t.errors.text,attrs:{rows:"3",placeholder:"Write your message here"},domProps:{value:t.formInput.text},on:{input:function(e){e.target.composing||t.$set(t.formInput,"text",e.target.value)}}})]},proxy:!0}])}),n("v-request",{attrs:{method:t.resource},scopedSlots:t._u([{key:"request",fn:function(e){var o=e.isLoading,r=(e.error,e.request);return[n("button",{staticClass:"w-full flex justify-center items-center bg-blue-700 rounded-sm p-3 mt-4 text-white text-lg",on:{click:function(e){return t.onSubmit(e,r)}}},[o?n("spinner",{staticClass:"flex items-center justify-between"}):t._e(),o?n("div",{staticClass:"ml-1 text-sm"},[t._v("Sending...")]):n("div",[t._v("Send")])],1)]}}])})],1)},Re=[],He=(n("13d5"),n("4fad"),n("b64b"),n("ade3")),Ue=n("3835"),Be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"block mb-6"},[n("span",{staticClass:"text-gray-700 text-base font-lato"},[t._t("label")],2),t._t("input")],2)},Te=[],Fe={},Le=Object(p["a"])(Fe,Be,Te,!1,null,null,null),Pe=Le.exports,Ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{staticClass:"form-input mt-1 block w-full border-2 border-transparent",attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},Ye=[],Ke={props:{type:String,placeholder:String,value:{type:String,default:""}}},De=Ke,Qe=Object(p["a"])(De,Ve,Ye,!1,null,null,null),Ne=Qe.exports,Je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("request",null,null,{isLoading:t.isLoading,error:t.error,request:t.request})],2)},qe=[],$e={props:{method:{type:Function||Promise,required:!0}},data:function(){return{isLoading:!1,error:null}},methods:{request:function(t){var e=this;return this.isLoading=!0,this.method(t).then((function(t){var n=t.status;200===n&&(e.isLoading=!1)})).catch((function(t){e.error=t}))}}},We=$e,Ge=Object(p["a"])(We,Je,qe,!1,null,null,null),Xe=Ge.exports,Ze=n("bc3a"),ze=n.n(Ze);function tn(){function t(t,e){return ze.a.post(t,e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})}return{post:t}}var en=tn();function nn(t){return en.post("https://emailer-n.herokuapp.com/email",t)}var on=n("5b7e"),rn=n.n(on),an={components:{VCustomLabel:Pe,VCustomInput:Ne,VRequest:Xe,Spinner:rn.a},data:function(){return{formInput:{name:"",subject:"",email:"",text:""},errors:{}}},methods:{resource:function(t){return nn(t)},onSubmit:function(t,e){t.preventDefault(),this.errors=Object.entries(this.formInput).reduce((function(t,e){var n=Object(Ue["a"])(e,2),o=n[0],r=n[1];return r?t:Object(Dt["a"])({},t,Object(He["a"])({},o,"border-2 border-red-600"))}),{}),0===Object.keys(this.errors).length&&(e.call(this,this.formInput),this.errors={})}}},sn=an,ln=Object(p["a"])(sn,Me,Re,!1,null,null,null),cn=ln.exports,un={components:{VContactForm:cn}},fn=un,pn=(n("95c7"),Object(p["a"])(fn,Oe,Ie,!1,null,"19b62f36",null)),mn=pn.exports,dn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mx-8 md:mx-32 mt-16 mb-16 font-lato text-xl md:text-2xl tracking-wider"},[n("VImage",{staticClass:"img",attrs:{src:t.imageURL}}),t._v(" I’m Ana… your photographer. I’m so excited that you are here! Today’s moments become tomorrow’s memories, and I’m blessed to be able to capture the love, laughter, and accomplishments that makes you who you are. I believe that we are all created for a purpose and I have found my passion in capturing the joy and happiness of everything from a joyous wedding celebration to the moments in everyday life. For me photography is a way of feeling, of touching, of loving and I can let you see the world through the eyes of my lens and keep those memories that you can cherish for years to come.I’m here for you from the moment of your request until the delivery of the stunning memories we created together. Can’t wait to get to know you and hear your story! ")],1)},hn=[],gn={name:"About",components:{VImage:se},computed:{imageURL:function(){return"".concat(D,"/assets/albums/about/about")}}},vn=gn,xn=(n("6ccf"),Object(p["a"])(vn,dn,hn,!1,null,"003f6ee5",null)),bn=xn.exports;o["a"].use(Lt["a"]);var An=new Lt["a"]({mode:"history",routes:[{path:"/",component:ue},{path:"/home",component:ue},{path:"/about",component:bn},{path:"/contact",component:mn},{path:"/gallery",component:Xt},{path:"/gallery/:id",component:_e,props:!0},{path:"*",name:"*",component:ge}]});n("6d93"),n("f0bb");o["a"].config.productionTip=!1,o["a"].prototype.$eventBus=new o["a"],k(),fetch("/assets/configs/config.json").then((function(t){t.json().then((function(t){A.dispatch("setConfig",{config:t})}))})),window.addEventListener("resize",C),window.addEventListener("orientationchange",j),new o["a"]({render:function(t){return t(Ft)},router:An,store:A}).$mount("#app")},6531:function(t,e){t.exports="data:image/png;base64,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"},"65aa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACvUlEQVRoge2aSWsUQRTHf9FgR9RgNGYEDwZccLmIenPJRRJy86jmC3gRJR9DBBVF8Cp+BBciXoIKIXjOMjMEdPSgKMQVNCHj4U1B0UzPdNWrXiL5wYOa6elX9Z+qelX9qmGDctET0NcAMAKcAY4BB4AhYFvr+i/gE7AEzAGvgWlgOWAbvImACWAKWAWajrYKPAeutHzlzlZgEviYorFp7QNwA+jLS8Q4UA8oIG41YCxLARFwN0MBcXuE9HxQKsDbHEUYm0UCRhCGke7OW4SxaqsNKvYACwWKMFYH9vqK6KOY4dRpmHmF6AfKin8Dt5FFsgJsBgaB48BlJHBUHX3ecxUxrhSxhKzsaXD1PZpWRAQsKkSsACfSVubhv0bKRXNSIaKJxH8XfOq43s1phH7bcTEHIQ26TPwJpYgmsD/B91XgHTL0tHU0kYCRyFSACpK2Fd8CCTD2LEnEAH5b8bglEVJEE+nZfuN8k1XRCBLr1wu9wHnzwRZyNv+2qGkr5KjCYY9laX5jbJ+iToAjpmALOaR06sMp5f2HTcEWslvp1AetkF2mYAvZrnTqw2nl/W2jVhGcDOWo1yr/xOoqR+z1I2nCd1pjfPluCnaPfMmgoqz5agq2kHoBDdFSMwVbyFwBDdEybwq2kDcFNETLq3Zf7mR9bRr/khB+l4GXXf+D8vCChKgF7o+pRfK408UIyYqXfWg1gC2283iP/AFudVJaEm4ic6QjEbo0aRKheqOKQ8ZxrKRC1oALaUUY7pdQyB1XESDdNxuoASFshtgEd2GQ8hwrVHxFGIZxz5qHtEWSk37ODFHMMJtBDpuCYg5D13IS8ZCMz95HyXaoLeARYn2JkNR+I6CA98A1CnoDIkKy4k/xy7KvAE+ASyhCK4R9qaYfyR+fQ7KWB5GJuqN1/QfwGQml88hD0XTr+w3+O/4B4u+GjGpuE4AAAAAASUVORK5CYII="},"6ccf":function(t,e,n){"use strict";var o=n("260f"),r=n.n(o);r.a},"95c7":function(t,e,n){"use strict";var o=n("c4d4"),r=n.n(o);r.a},aea9:function(t,e,n){"use strict";var o=n("03eb"),r=n.n(o);r.a},c4d4:function(t,e,n){},f0bb:function(t,e,n){}});
//# sourceMappingURL=app.321a8ba2.js.map