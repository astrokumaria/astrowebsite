(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f6a9"],{b412:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("core-toolbarinstitution"),a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",[a("material-card",{staticClass:"v-card-profile"},[a("v-avatar",{staticClass:"profile",attrs:{slot:"offset",color:"grey",size:"164",tile:""},slot:"offset"},[a("img",{attrs:{src:t.imageSrc.url,height:"200",name:"image"}})]),a("v-card-text",{staticClass:"text-xs-center"},[a("h6",{staticClass:"category text-gray font-weight-thin mb-3"},[t._v(" Program Name ")]),a("h4",{staticClass:"card-title font-weight-light"},[t._v(" "+t._s(t.name)+" ")]),a("ul",{staticStyle:{"list-style-type":"none"},attrs:{id:"infoList"}},[a("li",[t._v(" PROGRAM ID: "+t._s(t.id)+" ")]),a("li",[t._v(" TYPE: "+t._s(t.password)+" ")]),a("li",[t._v(" FEES: $"+t._s(t.location.city)+" ")]),a("li",[t._v(" METHOD OF DELIVERY: "+t._s(t.location.country)+" ")]),a("li",[t._v(" INSTITUTION ID: "+t._s(t.email)+" ")])])])],1),a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{dense:"true",headers:t.headers,items:t.items,search:t.search}})],1)],1)],1)],1)],1)},i=[],s=(a("4160"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),o={name:"InstitutionLoggedIn",data:function(){return{imageSrc:{url:"require(@/assets/defaultProfile.png)"},id:"",name:"",phoneNumber:"",email:"",password:"",location:{city:"",country:"",address:""},search:"",headers:[{text:"Course Code",align:"start",filterable:!1,value:"name"},{text:"Course ID",value:"calories"},{text:"Highschool",value:"iron"},{text:"End Date",value:"carbs"},{text:"Start Date",value:"protein"}],items:[{}]}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 1==t.$store.state.redirected&&(console.log("hey that worked"),r=t.$store.state.carriedObject,t.name=r.name,t.id=r.calories,t.email=r.fat,t.password=r.carbs,t.location.city=r.protein,t.location.country=r.iron,t.$store.dispatch("wasCarried")),t.$store.commit("wasCarried"),console.log("IMPORTANT program id: "+t.id),i=a("bc3a"),s={headers:{Authorization:"Bearer "+t.$store.state.token}},e.next=8,i.get("http://localhost:8080/institutions/allCoursesOfProgram/"+t.id,s).then((function(e){var a=t.items;function r(t){var e={name:t.name,calories:t.id,fat:t.courseType,carbs:t.startDate,protein:t.endDate,iron:t.highSchool};a.push(e)}console.log("DATA: "+e.data[0].endDate),e.data.forEach(r)})).catch((function(t){console.log(t)}));case 8:i.get("http://localhost:8080/institutions/loadimage/111",s).then((function(e){t.imageSrc.url="data:image/png;base64,"+e.data}));case 9:case"end":return e.stop()}}),e)})))()}},n=o,l=a("2877"),c=a("6544"),d=a.n(c),u=a("8212"),h=a("b0af"),f=a("99d9"),m=a("a523"),g=a("8fea"),v=a("0e8f"),p=a("a722"),b=a("8654"),x=Object(l["a"])(n,r,i,!1,null,null,null);e["default"]=x.exports;d()(x,{VAvatar:u["a"],VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:m["a"],VDataTable:g["a"],VFlex:v["a"],VLayout:p["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d20f6a9.d65ae5e6.js.map