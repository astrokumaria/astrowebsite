(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb9992da"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,l,"next",t)}function l(t){r(a,i,o,s,l,"throw",t)}s(void 0)}))}}},"37de":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("core-toolbarinstitution"),n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("material-card",{attrs:{color:"green",title:"Current Profile"}},[n("v-form",[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{type:"string",label:"University Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"University Id",disabled:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-flex",{attrs:{xs12:"",md8:""}},[n("v-text-field",{attrs:{label:"Address"},model:{value:t.location.address,callback:function(e){t.$set(t.location,"address",e)},expression:"location.address"}})],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"City"},model:{value:t.location.city,callback:function(e){t.$set(t.location,"city",e)},expression:"location.city"}})],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"Country"},model:{value:t.location.country,callback:function(e){t.$set(t.location,"country",e)},expression:"location.country"}})],1),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"Phone Number"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{color:"success",href:"/institutionloggedin/"},on:{click:t.updateInstitution}},[t._v(" Update Profile ")])],1),n("v-divider"),n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-text-field",{attrs:{label:"Alumni Name"},model:{value:t.alumniName,callback:function(e){t.alumniName=e},expression:"alumniName"}}),n("v-btn",{staticClass:"mx-0 font-weight-light d-inline",attrs:{color:"blue"},on:{click:t.addAlumni}},[t._v(" Add Alumni ")]),t.isAlumniAddedShown?n("p",{staticClass:"d-inline"},[t._v(" Alumni Added ")]):t._e()],1),n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-text-field",{attrs:{label:"Link url"},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}}),n("v-btn",{staticClass:"mx-0 font-weight-light d-inline",attrs:{color:"blue"},on:{click:t.addLink}},[t._v(" Add Link ")]),t.isUrlLinkAddedShown?n("p",{staticClass:"d-inline"},[t._v(" Link Added ")]):t._e()],1),n("v-flex",[n("v-text-field",{attrs:{label:"Facebook url"},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}}),n("v-btn",{staticClass:"mx-0 font-weight-light d-inline",attrs:{color:"blue"},on:{click:t.addFacebookLink}},[t._v(" Add Link ")]),t.isFacebookLinkAddedShown?n("p",{staticClass:"d-inline"},[t._v(" Facebook Link Added ")]):t._e()],1)],1)],1)],1)],1),n("v-flex",{attrs:{xs12:"",md4:""}})],1)],1)],1)},i=[],o=(n("b0c0"),n("9911"),n("96cf"),n("1da1")),a=n("bc3a"),s={name:"InstitutionLoggedIn",data:function(){return{id:"",name:"",phoneNumber:"1112222",email:"",password:"",location:{city:"",country:"",address:""},alumniName:"",link:"",facebook:"",isAlumniAddedShown:!1,isUrlLinkAddedShown:!1,isFacebookLinkAddedShown:!1}},mounted:function(){var t=this,e={headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}};a.get("http://localhost:8080/institutions",e).then((function(e){console.log(e);var n=e.data;t.name=n.name,t.id=n.id,t.email=n.email,t.phoneNumber=n.phoneNumber,t.password=n.password,t.location.city=n.location.city,t.location.country=n.location.country,t.location.address=n.location.address})).catch((function(t){console.log(t)}))},methods:{addLink:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}},t.next=3,a.put("http://localhost:8080/institutions/addLink",this.link,e).then((function(t){console.log(t),n.isUrlLinkAddedShown=!0,n.link="",setTimeout((function(){n.isUrlLinkAddedShown=!1}),2e3)}),(function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addFacebookLink:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}},t.next=3,a.put("http://localhost:8080/institutions/addFacebookLink",this.facebook,e).then((function(t){console.log(t),n.isFacebookLinkAddedShown=!0,n.facebook="",setTimeout((function(){n.isFacebookLinkAddedShown=!1}),2e3)}),(function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addAlumni:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}},t.next=3,a.put("http://localhost:8080/institutions/addAlumni",this.alumniName,e).then((function(t){console.log(t),n.isAlumniAddedShown=!0,n.alumniName="",setTimeout((function(){n.isAlumniAddedShown=!1}),2e3)}),(function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateInstitution:function(){var t={headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}},e={name:this.name,phoneNumber:this.phoneNumber,email:this.email,password:this.password,location:{city:this.location.city,country:this.location.country,address:this.location.address,institutionId:"102"}};a.put("http://localhost:8080/institutions",e,t).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},l=s,c=n("2877"),u=n("6544"),d=n.n(u),h=n("8336"),f=n("a523"),p=n("ce7e"),v=n("0e8f"),m=n("4bd4"),y=n("a722"),g=n("8654"),w=Object(c["a"])(l,r,i,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:h["a"],VContainer:f["a"],VDivider:p["a"],VFlex:v["a"],VForm:m["a"],VLayout:y["a"],VTextField:g["a"]})},"4bd4":function(t,e,n){"use strict";var r=n("58df"),i=n("7e2b"),o=n("3206");e["a"]=Object(r["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))}):n.valid=e(t),n},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const n=this.watchers.find(t=>t._uid===e._uid);n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"857a":function(t,e,n){var r=n("1d80"),i=/"/g;t.exports=function(t,e,n,o){var a=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+a+"</"+e+">"}},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=x;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",v={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(C([])));g&&g!==r&&i.call(g,a)&&(m=g);var w=_.prototype=k.prototype=Object.create(m);L.prototype=w.constructor=_,_.constructor=L,_[l]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},A(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var i=new E(x(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(B),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),B(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;B(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=N(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function L(){}function _(){}function A(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,o,a){var s=b(t[n],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(c).then((function(t){l.value=t,o(l)}),a)}a(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function N(t,e,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return F()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=b(t,e,n);if("normal"===l.type){if(r=n.done?p:h,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},9911:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-eb9992da.c40c4ec5.js.map