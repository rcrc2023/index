(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a043130"],{"28df":function(t,e,a){"use strict";a("659f")},"2ee3":function(t,e,a){var n,o;(function(i,r){if(null===i)throw new Error("Google-maps package can be used only in browser");n=r,o="function"===typeof n?n.call(e,a,e,t):n,void 0===o||(t.exports=o)})("undefined"!==typeof window?window:null,(function(){"use strict";var t="3.31",e=null,a=null,n=!1,o=[],i=[],r=null,l={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};l.VERSION=t,l.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",l._googleMockApiObject={},l.load=function(t){null===a?!0===n?t&&o.push(t):(n=!0,window[l.WINDOW_CALLBACK_NAME]=function(){c(t)},l.createLoader()):t&&t(a)},l.createLoader=function(){e=document.createElement("script"),e.type="text/javascript",e.src=l.createUrl(),document.body.appendChild(e)},l.isLoaded=function(){return null!==a},l.createUrl=function(){var t=l.URL;return t+="?callback="+l.WINDOW_CALLBACK_NAME,l.KEY&&(t+="&key="+l.KEY),l.LIBRARIES.length>0&&(t+="&libraries="+l.LIBRARIES.join(",")),l.CLIENT&&(t+="&client="+l.CLIENT),l.CHANNEL&&(t+="&channel="+l.CHANNEL),l.LANGUAGE&&(t+="&language="+l.LANGUAGE),l.REGION&&(t+="&region="+l.REGION),l.VERSION&&(t+="&v="+l.VERSION),t},l.release=function(c){var s=function(){l.KEY=null,l.LIBRARIES=[],l.CLIENT=null,l.CHANNEL=null,l.LANGUAGE=null,l.REGION=null,l.VERSION=t,a=null,n=!1,o=[],i=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[l.WINDOW_CALLBACK_NAME]&&delete window[l.WINDOW_CALLBACK_NAME],null!==r&&(l.createLoader=r,r=null),null!==e&&(e.parentElement.removeChild(e),e=null),c&&c()};n?l.load((function(){s()})):s()},l.onLoad=function(t){i.push(t)},l.makeMock=function(){r=l.createLoader,l.createLoader=function(){window.google=l._googleMockApiObject,window[l.WINDOW_CALLBACK_NAME]()}};var c=function(t){var e;for(n=!1,null===a&&(a=window.google),e=0;e<i.length;e++)i[e](a);for(t&&t(a),e=0;e<o.length;e++)o[e](a);o=[]};return l}))},"659f":function(t,e,a){},"67a3":function(t,e,a){},"8a07":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("products-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contanier"},[a("va-card",{staticClass:"w-100",attrs:{title:t.$t("tables.routes")}},[a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-plus",title:t.$t("modal.add"),flat:""},on:{click:t.showCreateModal},slot:"actions"}),a("va-data-table",{attrs:{fields:t.fields,data:t.dataTable,loading:t.loading,totalPages:t.totalPages,"no-pagination":t.searchBool,"api-mode":"",hoverable:""},on:{"page-selected":t.readItems},scopedSlots:t._u([{key:"marker",fn:function(e){return[t._v(" "+t._s(e.rowIndex+1+10*(t.pageNumber-1))+" ")]}},{key:"DeafultTime",fn:function(e){return[t._v(" "+t._s((e.rowData.DeafultTime/60).toFixed(2)+t.$t("minuits"))+" ")]}},{key:"distance",fn:function(e){return[t._v(" "+t._s((e.rowData.distance/1e3).toFixed(2)+t.$t("KM"))+" ")]}},{key:"AlertAfter",fn:function(e){return[t._v(" "+t._s(e.rowData.AlertAfter+t.$t("minuits"))+" ")]}},{key:"iSPrimary",fn:function(e){return[t._v(" "+t._s(e.rowData.iSPrimary?"✔":"✘")+" ")]}},{key:"actions",fn:function(e){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray",icon:"fa fa-edit",title:t.$t("modal.edit")},on:{click:function(a){return t.showEditModal(e.rowData)}}}),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger",icon:"fa fa-trash",title:t.$t("modal.delete")},on:{click:function(a){return t.showDeleteModal(e.rowData)}}})]}}])})],1),a("va-modal",{attrs:{"no-outside-dismiss":"",title:t.$t("generic.deleteItemTitle"),okText:t.$t("modal.delete"),cancelText:t.$t("modal.cancel"),message:t.$t("generic.deleteItemMsg")},on:{ok:function(e){return t.okDeletefun()},cancel:function(e){return t.cancleDeletefun()}},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",size:t.editModal?"normal":"large",title:t.$t(t.modelTitle),fullscreen:t.editModal,"hide-default-actions":""},on:{cancel:function(e){t.editModal?t.cancleEditfun():t.cancleCreatefun()}},model:{value:t.createModal,callback:function(e){t.createModal=e},expression:"createModal"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.editModal?t.okEditfun():t.okCreatefun()}}},[t.editModal?a("div",{staticClass:"row"},[a("div",{ref:"googleMapWaypoints",staticClass:"google-map fill-height",attrs:{id:"map"}}),a("div",{attrs:{id:"sidebar"}},[a("p",[t._v("Total Distance: "),a("span",{attrs:{id:"total"}})]),a("div",{attrs:{id:"panel"}})])]):a("div",{staticClass:"row flex-center"},[a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.RouteName")+" *")+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.RouteName"),required:""},model:{value:t.currentobject.RouteName,callback:function(e){t.$set(t.currentobject,"RouteName",e)},expression:"currentobject.RouteName"}}),a("span",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.RouteNameFormat"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.AlertAfter"))+" ")]),a("va-input",{attrs:{placeholder:t.$t("placeholder.AlertAfter"),required:""},model:{value:t.currentobject.AlertAfter,callback:function(e){t.$set(t.currentobject,"AlertAfter",e)},expression:"currentobject.AlertAfter"}}),a("span",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.AlertAfterFormat"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.FromLocation")+" *")+" ")]),a("va-input",{attrs:{error:t.validateLocaion(t.currentobject.FromLocation),"error-messages":t.$t("errorMessage.FromLocation"),placeholder:t.$t("placeholder.FromLocation"),required:""},model:{value:t.currentobject.FromLocation,callback:function(e){t.$set(t.currentobject,"FromLocation",e)},expression:"currentobject.FromLocation"}}),a("span",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.ExamleLocation"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.toLocation")+" *")+" ")]),a("va-input",{attrs:{error:t.validateLocaion(t.currentobject.toLocation),"error-messages":t.$t("errorMessage.FromLocation"),placeholder:t.$t("placeholder.toLocation"),required:""},model:{value:t.currentobject.toLocation,callback:function(e){t.$set(t.currentobject,"toLocation",e)},expression:"currentobject.toLocation"}}),a("span",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.ExamleLocation"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.adminemails"))+" ")]),a("va-input",{attrs:{error:t.validateEmail(t.currentobject.adEmails),"error-messages":t.$t("errorMessage.email"),placeholder:t.$t("placeholder.emails"),required:""},model:{value:t.currentobject.adEmails,callback:function(e){t.$set(t.currentobject,"adEmails",e)},expression:"currentobject.adEmails"}}),a("span",{staticClass:"input-label"},[t._v(" "+t._s(t.$t("placeholder.adminemailsFormat"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1 text-start"},[a("va-checkbox",{attrs:{label:t.$t("placeholder.iSPrimary")},model:{value:t.currentobject.iSPrimary,callback:function(e){t.$set(t.currentobject,"iSPrimary",e)},expression:"currentobject.iSPrimary"}})],1)]),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{type:"button",color:"gray",flat:""},on:{click:function(e){t.editModal?t.cancleEditfun():t.cancleCreatefun()}}},[t._v(" "+t._s(t.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:t.stopBtn}},[t._v(t._s(t.$t(t.modelOktext)))])],1)])])],1)},r=[],l=a("a026"),c=new l["default"],s=a("c427");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e,a){return e&&d(t.prototype,e),a&&d(t,a),t}var f=function(){function t(){u(this,t)}return m(t,[{key:"riquierdvalidation",value:function(t){return null==t||""===t}},{key:"numircvalidation",value:function(t){return!!isNaN(t)||(isNaN(t),!1)}},{key:"numircriquierdvalidation",value:function(t){return!!isNaN(t)||!(!isNaN(t)&&null!=t&&""!==t)}},{key:"validateEmail",value:function(t){var e=/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!e.test(t)}},{key:"validatePhone",value:function(t){var e=/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3,8}$/im;return!e.test(t)}},{key:"todayDate",value:function(){var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return e}},{key:"currentDateTime",value:function(){var t=new Date;return t.toISOString()}},{key:"formatDate",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(t).toLocaleDateString("ar-EG",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(t).toLocaleDateString("ar-EG",n)}},{key:"b64toBlob",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=arguments.length>3?arguments[3]:void 0,o=atob(t),i=[],r=0;r<o.length;r+=a){for(var l=o.slice(r,r+a),c=new Array(l.length),s=0;s<l.length;s++)c[s]=l.charCodeAt(s);var u=new Uint8Array(c);i.push(u)}var d=new Blob(i,{type:e}),m=document.createElement("a");m.href=window.URL.createObjectURL(d),m.download=n,m.click()}},{key:"printHtml",value:function(t,e){var a=window.open("","print","width=600,height=600");e&&(a.document.title=e),a.document.write(t),a.document.close(),a.focus(),a.print()}},{key:"openAndPrintInvoice",value:function(t,e){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null==n?(a=window.open(t+"Bill/PrintInvoice?inv_id="+e,"print"),a.focus()):(a=window.open(t+"Bill/PrintInvoice?inv_id="+e+"&WidthCm="+n,"print"),a.focus())}},{key:"openAndPrintHtml",value:function(t,e,a,n){var o=this;s["a"].get(s["a"].defaults.baseURL+t,{params:e}).then((function(t){o.printHtml(t.data,a+o.currentDateTime().toString())})).catch((function(t){401===t.response.status&&n.showToast(n.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),n.loading=!1,n.showToast(n.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))}},{key:"downloadtableascsv",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=document.querySelectorAll("table#"+t+" tr"),n=[],o=0;o<a.length;o++){for(var i=[],r=a[o].querySelectorAll("td, th"),l=0;l<r.length;l++){var c=r[l].innerText.replace(/(\r\n|\n|\r)/gm,"").replace(/(\s\s)/gm," ");c=c.replace(/"/g,'""'),i.push('"'+c+'"')}n.push(i.join(e))}var s=n.join("\n"),u="export_"+t+"_"+(new Date).toLocaleDateString()+".csv",d=document.createElement("a");d.style.display="none",d.setAttribute("target","_blank"),d.setAttribute("href","data:text/csv;charset=utf-8,"+encodeURIComponent(s)),d.setAttribute("download",u),document.body.appendChild(d),d.click(),document.body.removeChild(d)}},{key:"base64ToArrayBuffer",value:function(t,e){for(var a=window.atob(t),n=a.length,o=new Uint8Array(n),i=0;i<n;i++){var r=a.charCodeAt(i);o[i]=r}var l=new Blob([o],{type:e}),c=URL.createObjectURL(l),s=window.open(c,"_blank ");s.focus(),s.print(),setTimeout((function(){s.focus(),s.print()}),2e3)}}]),t}(),p=new f,h=a("2591"),v=a("2ee3"),g={data:function(){return{perPage:20,totalPages:1,modelTitle:"",stopBtn:!1,SpecificEntityFilds:[],deleteModal:!1,editModal:!1,createModal:!1,modelOktext:"",opjectBeforeEdit:{},currentobject:{},db:h["a"].firestore(),dataTable:[],pageNumber:1,loading:!0,searchBool:!1}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"RouteName",title:this.$t("tables.headings.RouteName"),sortField:"time",width:"250px",sortCallBack:"sortCallBack|RouteName"},{name:"__slot:DeafultTime",title:this.$t("tables.headings.DeafultTime"),sortField:"name",sortCallBack:"sortCallBack|DeafultTime"},{name:"__slot:distance",title:this.$t("tables.headings.distance"),sortField:"name",sortCallBack:"sortCallBack|distance"},{name:"adEmails",title:this.$t("tables.headings.adminEmails"),sortField:"name",width:"250px",dataClass:"overflow",sortCallBack:"sortCallBack|adminEmails"},{name:"__slot:AlertAfter",title:this.$t("tables.headings.AlertAfter"),sortField:"name",sortCallBack:"sortCallBack|AlertAfter"},{name:"__slot:iSPrimary",title:this.$t("tables.headings.isprimary")},{name:"__slot:actions",dataClass:"text-right"}]},filterFileds:function(){return[{isNum:!1,isString:!1,isBoolean:!1,isDate:!0,showLabel:!0,name:"time",class:"",config:{enableTime:!0,defaultDate:new Date},title:this.$t("placeholder.time")},{isNum:!1,isString:!0,showLabel:!0,isBoolean:!1,isDate:!1,name:"route",title:this.$t("placeholder.route")},{isNum:!0,isString:!1,isBoolean:!1,isDate:!1,showLabel:!0,name:"avrgTraffic",title:this.$t("placeholder.avrgTraffic"),step:1e-5,min:0,max:100}]}},created:function(){var t=this;document.title=this.$t("generic.Leap")+"-"+this.$t("tables.analytics"),this.readItems(this.pageNumber),c.$on("SearchStart",(function(e){t.loading||t.readItems(1,null,e)}))},methods:{validateEmail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(null===t||void 0===t||""===t)return!1;var e=t.split(",");if(e.length>=1){var a=!1;return e.forEach((function(t){a=p.validateEmail(t)})),a}return!0},validateLocaion:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(null===t||void 0===t||""===t)return!1;var e=t.split(",");return 2!==e.length||!(this.isLatitude(e[0])&&this.isLongitude(e[1]))},isLatitude:function(t){return isFinite(t)&&Math.abs(t)<=90},isLongitude:function(t){return isFinite(t)&&Math.abs(t)<=180},formatDate:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(t).toLocaleDateString("ar-EG",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(t).toLocaleDateString("ar-EG",n)},sortCallBack:function(t){this.readItems(1,t[0].toString().charAt(0).toUpperCase()+t[0].toString().slice(1))},readItems:function(){var t=this;this.loading=!0;var e=h["a"].firestore();e.collection("routes").orderBy("createAt","asc").get().then((function(e){t.dataTable=[],e.forEach((function(e,a){var n=e.data();n.id=e.id,t.dataTable.push(n)})),t.loading=!1}))},create:function(){var t=this;this.stopBtn=!0,this.loading=!0,v["KEY"]="AIzaSyC6Wt_40qWZ7up5hvZi9GwzxYWmwjnXggs",v["VERSION"]="3.35",v["load"]((function(e){var a={origins:[t.getLocationFromString(t.currentobject.FromLocation,e)],destinations:[t.getLocationFromString(t.currentobject.toLocation,e)],travelMode:e.maps.TravelMode.DRIVING,unitSystem:e.maps.UnitSystem.METRIC,durationInTraffic:!0,language:"ar",drivingOptions:{departureTime:new Date(Date.now()),trafficModel:"optimistic"},avoidHighways:!1,avoidTolls:!1,avoidFerries:!1},n=new e.maps.DistanceMatrixService;n.getDistanceMatrix(a).then((function(e){t.currentobject.originAddresses=e.originAddresses[0],t.currentobject.DeafultTime=e.rows[0].elements[0].duration.value,t.currentobject.distance=e.rows[0].elements[0].distance.value,t.currentobject.createAt=new Date(Date.now()),t.currentobject.UpdateAt=new Date(Date.now()),t.currentobject.adminEmails=t.currentobject.adEmails.split(","),t.currentobject.AlertAfterArr=t.currentobject.AlertAfter.split(","),t.currentobject.createBy=t.$store.state.user.email,t.currentobject.waypoints=[],t.currentobject.UpdateBy=t.$store.state.user.email,t.db.collection("routes").add(t.currentobject).then((function(e){t.readItems(),t.cancleCreatefun()}))}))}))},edit:function(){var t=this;this.stopBtn=!0,this.loading=!0,this.db.collection("routes").doc(this.currentobject.id).set(this.currentobject).then((function(e){t.readItems(),t.createModal=!1,t.loading=!1,t.currentobject={},t.editModal=!1,t.stopBtn=!1}))},remove:function(t){var e=this;this.loading=!0,this.db.collection("routes").doc(t).delete().then((function(t){e.readItems(),e.cancleDeletefun()}))},getLocationFromString:function(t,e){var a=t.split(","),n=parseFloat(a[0]),o=parseFloat(a[1]);return new e.maps.LatLng(n,o)},showDeleteModal:function(t){this.deleteModal=!0,this.currentobject=t},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.currentobject={},this.loading=!1,this.stopBtn=!1},showEditModal:function(t){var e=this;this.editModal=!0,this.modelTitle="generic.editItemTitle",this.modelOktext="modal.edit",this.createModal=!0,this.opjectBeforeEdit=Object.assign({},t),this.currentobject=t,this.loading=!0,setTimeout((function(){v["KEY"]="AIzaSyC6Wt_40qWZ7up5hvZi9GwzxYWmwjnXggs",v["VERSION"]="3.35",v["load"]((function(t){var a=new t.maps.Map(e.$refs.googleMapWaypoints,{center:new t.maps.LatLng(24.774265,46.738586),zoom:11,mapTypeId:t.maps.MapTypeId.ROADMAP}),n=new t.maps.DirectionsService,o=new t.maps.DirectionsRenderer({draggable:!0,map:a,panel:document.getElementById("panel")});o.addListener("directions_changed",(function(){var t=o.getDirections();t&&e.computeTotalDistance(t)}));var i=e.currentobject.FromLocation.split(","),r=new t.maps.LatLng(Number(i[0]),Number(i[1])),l=e.currentobject.toLocation.split(","),c=new t.maps.LatLng(Number(l[0]),Number(l[1])),s=[];e.currentobject.waypoints.forEach((function(e){e.place_id?s.push({location:{placeId:e.place_id}}):s.push({location:new t.maps.LatLng(e.latitude,e.longitude)})})),e.displayRoute(r,c,n,o,s)}))}),1e3)},displayRoute:function(t,e,a,n,o){a.route({origin:t,destination:e,waypoints:o,travelMode:"DRIVING",durationInTraffic:!0,language:"ar",drivingOptions:{departureTime:new Date(Date.now()),trafficModel:"optimistic"}}).then((function(t){n.setDirections(t)})).catch((function(t){alert("Could not display directions due to: "+t)}))},computeTotalDistance:function(t){var e=this;this.currentobject.waypoints=[],t.request.waypoints.forEach((function(t){console.log("point",t),e.currentobject.waypoints.push({latitude:t.location.lat(),longitude:t.location.lng()})}));var a=0,n=0,o=t.routes[0];if(o){for(var i=0;i<o.legs.length;i++)a+=o.legs[i].distance.value,n+=o.legs[i].duration.value;this.currentobject.distance=a,this.currentobject.DeafultTime=n,a/=1e3,document.getElementById("total").innerHTML=a+" km"}},okEditfun:function(){this.stopBtn=!0,this.edit(this.currentobject)},cancleEditfun:function(){Object.assign(this.currentobject,this.opjectBeforeEdit),this.createModal=!1,this.loading=!1,this.currentobject={},this.editModal=!1,this.stopBtn=!1},showCreateModal:function(){this.modelTitle="generic.creatItemTitle",this.modelOktext="modal.create",this.createModal=!0,this.loading=!0},okCreatefun:function(){this.stopBtn=!0,this.create()},cancleCreatefun:function(){this.createModal=!1,this.loading=!1,this.currentobject={},this.stopBtn=!1}}},b=g,w=(a("8f78"),a("2877")),y=Object(w["a"])(b,i,r,!1,null,null,null),L=y.exports,A={name:"products",components:{productsTable:L},data:function(){return{}}},C=A,_=(a("28df"),Object(w["a"])(C,n,o,!1,null,null,null));e["default"]=_.exports},"8f78":function(t,e,a){"use strict";a("67a3")}}]);
//# sourceMappingURL=chunk-5a043130.4491bf34.js.map