(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7627d76a"],{"28df":function(e,t,a){"use strict";a("659f")},"2ee3":function(e,t,a){var n,o;(function(r,i){if(null===r)throw new Error("Google-maps package can be used only in browser");n=i,o="function"===typeof n?n.call(t,a,t,e):n,void 0===o||(e.exports=o)})("undefined"!==typeof window?window:null,(function(){"use strict";var e="3.31",t=null,a=null,n=!1,o=[],r=[],i=null,c={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};c.VERSION=e,c.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",c._googleMockApiObject={},c.load=function(e){null===a?!0===n?e&&o.push(e):(n=!0,window[c.WINDOW_CALLBACK_NAME]=function(){s(e)},c.createLoader()):e&&e(a)},c.createLoader=function(){t=document.createElement("script"),t.type="text/javascript",t.src=c.createUrl(),document.body.appendChild(t)},c.isLoaded=function(){return null!==a},c.createUrl=function(){var e=c.URL;return e+="?callback="+c.WINDOW_CALLBACK_NAME,c.KEY&&(e+="&key="+c.KEY),c.LIBRARIES.length>0&&(e+="&libraries="+c.LIBRARIES.join(",")),c.CLIENT&&(e+="&client="+c.CLIENT),c.CHANNEL&&(e+="&channel="+c.CHANNEL),c.LANGUAGE&&(e+="&language="+c.LANGUAGE),c.REGION&&(e+="&region="+c.REGION),c.VERSION&&(e+="&v="+c.VERSION),e},c.release=function(s){var l=function(){c.KEY=null,c.LIBRARIES=[],c.CLIENT=null,c.CHANNEL=null,c.LANGUAGE=null,c.REGION=null,c.VERSION=e,a=null,n=!1,o=[],r=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[c.WINDOW_CALLBACK_NAME]&&delete window[c.WINDOW_CALLBACK_NAME],null!==i&&(c.createLoader=i,i=null),null!==t&&(t.parentElement.removeChild(t),t=null),s&&s()};n?c.load((function(){l()})):l()},c.onLoad=function(e){r.push(e)},c.makeMock=function(){i=c.createLoader,c.createLoader=function(){window.google=c._googleMockApiObject,window[c.WINDOW_CALLBACK_NAME]()}};var s=function(e){var t;for(n=!1,null===a&&(a=window.google),t=0;t<r.length;t++)r[t](a);for(e&&e(a),t=0;t<o.length;t++)o[t](a);o=[]};return c}))},"37e6":function(e,t,a){},"659f":function(e,t,a){},"67a3":function(e,t,a){},"89c1":function(e,t,a){"use strict";a("37e6")},"8a07":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row"},[a("products-Table",{staticClass:"flex md12 sm12 xs12"})],1)])},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row pb-3"},[a("va-collapse",{staticClass:"w-100"},[a("span",{staticClass:"px-3",attrs:{slot:"header"},slot:"header"},[e._v(" "+e._s(e.$t("tables.labelChooseCraitaria"))+" ")]),a("div",{attrs:{slot:"body"},slot:"body"},[a("top-Filter",{staticClass:"flex md12",attrs:{filterTitle:e.$t("tables.analytics"),listOfStringsAndNumbers:e.filterFileds}})],1)])],1),a("va-card",{staticClass:"w-100",attrs:{title:e.$t("tables.analytics")}},[a("va-button",{staticClass:"mr-0",attrs:{slot:"actions",icon:"fa fa-plus",title:e.$t("modal.add"),flat:""},on:{click:e.showCreateModal},slot:"actions"}),a("va-data-table",{attrs:{fields:e.fields,data:e.dataTable,loading:e.loading,totalPages:e.totalPages,"no-pagination":e.searchBool,"api-mode":"",hoverable:""},on:{"page-selected":e.readItems},scopedSlots:e._u([{key:"marker",fn:function(t){return[e._v(" "+e._s(t.rowIndex+1+10*(e.pageNumber-1))+" ")]}},{key:"actions",fn:function(t){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"dark",icon:"fa fa-key",title:e.$t("modal.RestPassword")},on:{click:function(a){return e.showRestModal(t.rowData)}}}),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray",icon:"fa fa-edit",title:e.$t("modal.edit")},on:{click:function(a){return e.showEditModal(t.rowData)}}}),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger",icon:"fa fa-trash",title:e.$t("modal.delete")},on:{click:function(a){return e.showDeleteModal(t.rowData)}}})]}}])})],1),a("va-modal",{attrs:{"no-outside-dismiss":"",title:e.$t("generic.deleteItemTitle"),okText:e.$t("modal.delete"),cancelText:e.$t("modal.cancel"),message:e.$t("generic.deleteItemMsg")},on:{ok:function(t){return e.okDeletefun()},cancel:function(t){return e.cancleDeletefun()}},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}}),a("va-modal",{attrs:{"no-outside-dismiss":"",size:"large",title:e.$t(e.modelTitle),"hide-default-actions":""},on:{cancel:function(t){e.editModal?e.cancleEditfun():e.cancleCreatefun()}},model:{value:e.createModal,callback:function(t){e.createModal=t},expression:"createModal"}},[a("form",{on:{submit:function(t){t.preventDefault(),e.editModal?e.okEditfun():e.okCreatefun()}}},[a("div",{staticClass:"row flex-center"},[a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.FromLocation")+" *")+" ")]),a("va-input",{attrs:{error:e.validateLocaion(e.currentobject.FromLocation),"error-messages":e.$t("errorMessage.FromLocation"),placeholder:e.$t("placeholder.FromLocation"),required:""},model:{value:e.currentobject.FromLocation,callback:function(t){e.$set(e.currentobject,"FromLocation",t)},expression:"currentobject.FromLocation"}}),a("span",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.ExamleLocation"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.adminemails"))+" ")]),a("va-input",{attrs:{error:e.validateEmail(e.currentobject.adminEmails),"error-messages":e.$t("errorMessage.email"),placeholder:e.$t("placeholder.emails")},model:{value:e.currentobject.adminEmails,callback:function(t){e.$set(e.currentobject,"adminEmails",t)},expression:"currentobject.adminEmails"}}),a("span",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.adminemailsFormat"))+" ")])],1),a("div",{staticClass:"flex md6 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.AlertAfter"))+" ")]),a("va-input",{attrs:{error:e.currentobject.AlertAfter<3&&e.currentobject.AlertAfter>=1200,"error-messages":e.$t("errorMessage.AlertAfter"),type:"number",min:"3",step:"0.01",placeholder:e.$t("placeholder.AlertAfter"),required:""},model:{value:e.currentobject.AlertAfter,callback:function(t){e.$set(e.currentobject,"AlertAfter",t)},expression:"currentobject.AlertAfter"}})],1)]),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{attrs:{type:"button",color:"gray",flat:""},on:{click:function(t){e.editModal?e.cancleEditfun():e.cancleCreatefun()}}},[e._v(" "+e._s(e.$t("modal.cancel"))+" ")]),a("va-button",{staticClass:"my-0",attrs:{type:"submit",disabled:e.stopBtn}},[e._v(e._s(e.$t(e.modelOktext)))])],1)])])],1)},i=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contanier"},[a("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[a("va-card",{staticClass:"flex md12 sm12 xs12",attrs:{title:e.showLabel?e.$t("tables.labelChooseCraitaria")+" - "+e.filterTitle:""}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.okCreatefun()}}},[a("div",{staticClass:"row flex-center"},[e.showDates?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("forms.dateTimePicker.from"))+" ")]),a("va-date-picker",{attrs:{config:{maxDate:e.searchObject.ToDate}},model:{value:e.searchObject.FromDate,callback:function(t){e.$set(e.searchObject,"FromDate",t)},expression:"searchObject.FromDate"}})],1):e._e(),e.showDates?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("forms.dateTimePicker.to"))+" ")]),a("va-date-picker",{attrs:{config:{minDate:e.searchObject.FromDate}},model:{value:e.searchObject.ToDate,callback:function(t){e.$set(e.searchObject,"ToDate",t)},expression:"searchObject.ToDate"}})],1):e._e(),e._l(e.data,(function(t,n){return a("div",{key:n,staticClass:"flex md4 sm12 xs12 px-1"},[t.showLabel?a("label",{staticClass:"input-label"},[e._v(" "+e._s(t.title)+" ")]):e._e(),t.isString?a("va-input",{attrs:{placeholder:t.title},on:{change:function(t){return e.uuu()}},model:{value:e.searchObject[t.name],callback:function(a){e.$set(e.searchObject,t.name,a)},expression:"searchObject[item.name]"}}):t.isNum?a("va-input",{attrs:{type:"number",min:t.min,max:t.max,step:t.step,placeholder:t.title},on:{change:function(t){return e.uuu()}},model:{value:e.searchObject[t.name],callback:function(a){e.$set(e.searchObject,t.name,a)},expression:"searchObject[item.name]"}}):t.isBoolean?a("va-checkbox",{attrs:{label:t.title},on:{change:function(t){return e.uuu()}},model:{value:e.searchObject[t.name],callback:function(a){e.$set(e.searchObject,t.name,a)},expression:"searchObject[item.name]"}}):t.isDate?a("va-date-picker",{class:t.class,attrs:{config:t.config},on:{change:function(t){return e.uuu()}},model:{value:e.searchObject[t.name],callback:function(a){e.$set(e.searchObject,t.name,a)},expression:"searchObject[item.name]"}}):e._e()],1)})),e.showfkCompanyActivity||e.reqfkCompanyActivity?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.CompanyActivity"))+" ")]),a("va-select-c",{attrs:{searchable:"",textBy:"name",keyBy:"id",options:e.fkCompanyActivity.options},model:{value:e.searchObject.Fk_Company_Activity,callback:function(t){e.$set(e.searchObject,"Fk_Company_Activity",t)},expression:"searchObject.Fk_Company_Activity"}})],1):e._e(),e.showfkCompany?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.Company"))+" ")]),a("va-select-c",{attrs:{searchable:"",textBy:"name",keyBy:"id",options:e.fkCompany.options},model:{value:e.searchObject.FK_Company,callback:function(t){e.$set(e.searchObject,"FK_Company",t)},expression:"searchObject.FK_Company"}})],1):e._e(),e.showfkProductsGroups?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.ProductsGroups"))+" ")]),a("va-select-c",{attrs:{searchable:"",textBy:"name",keyBy:"id",options:e.fkProductsGroups.options},model:{value:e.searchObject.FK_Products_Groups,callback:function(t){e.$set(e.searchObject,"FK_Products_Groups",t)},expression:"searchObject.FK_Products_Groups"}})],1):e._e(),e.showfkDeafultStock?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.StockName"))+" ")]),a("va-select-c",{attrs:{searchable:"",textBy:"name",keyBy:"id",options:e.fkStock.options},model:{value:e.searchObject.FK_Stock,callback:function(t){e.$set(e.searchObject,"FK_Stock",t)},expression:"searchObject.FK_Stock"}})],1):e._e(),e.showfkTaxGroup?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.TaxGroup"))+" ")]),a("va-select-c",{attrs:{searchable:"",textBy:"name",keyBy:"id",options:e.fkTaxGroup.options},model:{value:e.searchObject.FK_TaxGroup,callback:function(t){e.$set(e.searchObject,"FK_TaxGroup",t)},expression:"searchObject.FK_TaxGroup"}})],1):e._e(),e.showfkEmployees||e.reqfkEmployees?a("div",{staticClass:"flex md4 sm12 xs12 px-1"},[a("label",{staticClass:"input-label"},[e._v(" "+e._s(e.$t("placeholder.empName"))+" ")]),a("va-select-c",{attrs:{searchable:"",textBy:"name",keyBy:"id",options:e.fKemp.options},model:{value:e.searchObject.FK_Employees,callback:function(t){e.$set(e.searchObject,"FK_Employees",t)},expression:"searchObject.FK_Employees"}})],1):e._e()],2),a("div",{staticClass:"d-flex justify--center mt-3"},[a("va-button",{staticClass:"my-0",attrs:{type:"submit"}},[e._v(e._s(e.$t("modal.ok"))+" ")])],1)])])],1)])},s=[],l=a("a34a"),u=a.n(l),f=a("c427");function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,a){return t&&m(e.prototype,t),a&&m(e,a),e}var y=function(){function e(){d(this,e)}return p(e,[{key:"getAll",value:function(){return f["a"].get("City")}},{key:"getAllPagnation",value:function(e){return f["a"].get("City",{params:e})}},{key:"get",value:function(e){return f["a"].get("City/getById?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("City/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("City",e)}},{key:"update",value:function(e,t){return f["a"].put("City?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("City?Id=".concat(e))}}]),e}(),h=new y;function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,a){return t&&g(e.prototype,t),a&&g(e,a),e}var k=function(){function e(){v(this,e)}return b(e,[{key:"getAll",value:function(){return f["a"].get("CompanyActivity")}},{key:"getAllPagnation",value:function(e){return f["a"].get("CompanyActivity",{params:e})}},{key:"get",value:function(e){return f["a"].get("CompanyActivity/getById?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("CompanyActivity/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("CompanyActivity",e)}},{key:"update",value:function(e,t){return f["a"].put("CompanyActivity?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("CompanyActivity?Id=".concat(e))}}]),e}(),C=new k,w=a("9c0cf");function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,a){return t&&A(e.prototype,t),a&&A(e,a),e}var T=function(){function e(){_(this,e)}return x(e,[{key:"getAll",value:function(){return f["a"].get("Company")}},{key:"getAllPagnation",value:function(e){return f["a"].get("Company",{params:e})}},{key:"get",value:function(e){return f["a"].get("Company/getById?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("Company/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("Company",e)}},{key:"update",value:function(e,t){return f["a"].put("Company?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("Company?Id=".concat(e))}}]),e}(),E=new T;function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,a){return t&&O(e.prototype,t),a&&O(e,a),e}var $=function(){function e(){j(this,e)}return S(e,[{key:"getAll",value:function(e){return f["a"].get("Products_Groups",{params:e})}},{key:"getAllPagnation",value:function(e){return f["a"].get("Products_GroupsPaging",{params:e})}},{key:"get",value:function(e){return f["a"].get("Products_Groups/getById?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("Products_Groups/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("Products_Groups",e)}},{key:"update",value:function(e,t){return f["a"].put("Products_Groups?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("Products_Groups?Id=".concat(e))}}]),e}(),N=new $;function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t,a){return t&&D(e.prototype,t),a&&D(e,a),e}var L=function(){function e(){B(this,e)}return I(e,[{key:"getAll",value:function(){return f["a"].get("TaxGroup")}},{key:"getAllPagnation",value:function(e){return f["a"].get("TaxGroup",{params:e})}},{key:"get",value:function(e){return f["a"].get("TaxGroup/getById?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("TaxGroup/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("TaxGroup",e)}},{key:"update",value:function(e,t){return f["a"].put("TaxGroup?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("TaxGroup?Id=".concat(e))}}]),e}(),P=new L;function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,a){return t&&F(e.prototype,t),a&&F(e,a),e}var K=function(){function e(){G(this,e)}return M(e,[{key:"getAll",value:function(){return f["a"].get("Stock")}},{key:"getAllPagnation",value:function(e){return f["a"].get("Stock",{params:e})}},{key:"get",value:function(e){return f["a"].get("Stock?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("Stock/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("Stock",e)}},{key:"update",value:function(e,t){return f["a"].put("Stock?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("Stock?Id=".concat(e))}}]),e}(),R=new K;function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Y(e,t,a){return t&&Z(e.prototype,t),a&&Z(e,a),e}var U=function(){function e(){J(this,e)}return Y(e,[{key:"getAll",value:function(e){return f["a"].get("Customers",{params:e})}},{key:"getAllPagnation",value:function(e){return f["a"].get("CustomersPaging",{params:e})}},{key:"getCustomerLoan",value:function(e){return f["a"].get("Customers/GetCustomerBalance",{params:e})}},{key:"get",value:function(e){return f["a"].get("Customers/getById?Id=".concat(e))}},{key:"search",value:function(e){return f["a"].get("Customers/Search",{params:e})}},{key:"create",value:function(e){return f["a"].post("Customers",e)}},{key:"update",value:function(e,t){return f["a"].put("Customers?Id=".concat(e),t)}},{key:"delete",value:function(e){return f["a"].delete("Customers?Id=".concat(e))}}]),e}(),H=new U,q=a("a026"),W=new q["default"];function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t,a){return t&&V(e.prototype,t),a&&V(e,a),e}var X=function(){function e(){z(this,e)}return Q(e,[{key:"riquierdvalidation",value:function(e){return null==e||""===e}},{key:"numircvalidation",value:function(e){return!!isNaN(e)||(isNaN(e),!1)}},{key:"numircriquierdvalidation",value:function(e){return!!isNaN(e)||!(!isNaN(e)&&null!=e&&""!==e)}},{key:"validateEmail",value:function(e){var t=/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!t.test(e)}},{key:"validatePhone",value:function(e){var t=/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3,8}$/im;return!t.test(e)}},{key:"todayDate",value:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return t}},{key:"currentDateTime",value:function(){var e=new Date;return e.toISOString()}},{key:"formatDate",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(e).toLocaleDateString("ar-EG",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(e).toLocaleDateString("ar-EG",n)}},{key:"b64toBlob",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=arguments.length>3?arguments[3]:void 0,o=atob(e),r=[],i=0;i<o.length;i+=a){for(var c=o.slice(i,i+a),s=new Array(c.length),l=0;l<c.length;l++)s[l]=c.charCodeAt(l);var u=new Uint8Array(s);r.push(u)}var f=new Blob(r,{type:t}),d=document.createElement("a");d.href=window.URL.createObjectURL(f),d.download=n,d.click()}},{key:"printHtml",value:function(e,t){var a=window.open("","print","width=600,height=600");t&&(a.document.title=t),a.document.write(e),a.document.close(),a.focus(),a.print()}},{key:"openAndPrintInvoice",value:function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null==n?(a=window.open(e+"Bill/PrintInvoice?inv_id="+t,"print"),a.focus()):(a=window.open(e+"Bill/PrintInvoice?inv_id="+t+"&WidthCm="+n,"print"),a.focus())}},{key:"openAndPrintHtml",value:function(e,t,a,n){var o=this;f["a"].get(f["a"].defaults.baseURL+e,{params:t}).then((function(e){o.printHtml(e.data,a+o.currentDateTime().toString())})).catch((function(e){401===e.response.status&&n.showToast(n.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(e),n.loading=!1,n.showToast(n.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))}},{key:"downloadtableascsv",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=document.querySelectorAll("table#"+e+" tr"),n=[],o=0;o<a.length;o++){for(var r=[],i=a[o].querySelectorAll("td, th"),c=0;c<i.length;c++){var s=i[c].innerText.replace(/(\r\n|\n|\r)/gm,"").replace(/(\s\s)/gm," ");s=s.replace(/"/g,'""'),r.push('"'+s+'"')}n.push(r.join(t))}var l=n.join("\n"),u="export_"+e+"_"+(new Date).toLocaleDateString()+".csv",f=document.createElement("a");f.style.display="none",f.setAttribute("target","_blank"),f.setAttribute("href","data:text/csv;charset=utf-8,"+encodeURIComponent(l)),f.setAttribute("download",u),document.body.appendChild(f),f.click(),document.body.removeChild(f)}},{key:"base64ToArrayBuffer",value:function(e,t){for(var a=window.atob(e),n=a.length,o=new Uint8Array(n),r=0;r<n;r++){var i=a.charCodeAt(r);o[r]=i}var c=new Blob([o],{type:t}),s=URL.createObjectURL(c),l=window.open(s,"_blank ");l.focus(),l.print(),setTimeout((function(){l.focus(),l.print()}),2e3)}}]),e}(),ee=new X;function te(e,t,a,n,o,r,i){try{var c=e[r](i),s=c.value}catch(l){return void a(l)}c.done?t(s):Promise.resolve(s).then(n,o)}function ae(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function i(e){te(r,n,o,i,c,"next",e)}function c(e){te(r,n,o,i,c,"throw",e)}i(void 0)}))}}var ne={name:"TopFilter",props:{filterTitle:{type:String,default:""},showLabel:{type:Boolean,default:!0},showDates:{type:Boolean,default:!1},showfkTaxGroup:{type:Boolean,default:!1},showfkEmployees:{type:Boolean,default:!1},reqfkEmployees:{type:Boolean,default:!1},showfkProductsGroups:{type:Boolean,default:!1},showfkCompanyActivity:{type:Boolean,default:!1},showfkCompany:{type:Boolean,default:!1},reqfkCompanyActivity:{type:Boolean,default:!1},showfkDeafultStock:{type:Boolean,default:!1},listOfStringsAndNumbers:{type:Array,default:function(){return[]}}},data:function(){return{fkStock:{options:[]},fkCompanyActivity:{options:[]},fkCompany:{options:[]},fkProductsGroups:{options:[]},fkTaxGroup:{options:[]},fKCustomer:{valueName:"",valuePhone:"",options:[]},fKemp:{valueName:"",valuePhone:"",options:[]},searchObject:{FK_TaxGroup:"",FK_Stock:"",FK_Products_Groups:"",Fk_Company_Activity:"",FK_Company:"",FK_Employees:""},data:[]}},created:function(){var e=this;this.listOfStringsAndNumbers.forEach((function(t){t.defaultValue?e.searchObject[t.name]=t.defaultValue:t.isString||t.isNum||t.isBoolean?e.searchObject[t.name]=null:t.isDate&&(t.curentTime?e.searchObject[t.name]=ee.currentDateTime():e.searchObject[t.name]=null)})),this.data=Object.assign({},this.listOfStringsAndNumbers),(this.showfkCompanyActivity||this.reqfkCompanyActivity)&&this.getComActivity(),this.showfkCompany&&this.getCompany(),this.showfkDeafultStock&&this.getStock(),this.showfkProductsGroups&&this.getProductsGroups(),this.showfkTaxGroup&&this.getTaxGroup(),(this.showfkEmployees||this.reqfkEmployees)&&this.getEmployee()},methods:{uuu:function(){this.$forceUpdate()},getCustomer:function(){var e=this,t={Customer_type:this.$store.state.consts.fK_Customer_Type_customer};H.getAll(t).then((function(t){e.fKCustomer.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getEmployee:function(){var e=this;w["a"].getAll().then((function(t){e.fKemp.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getComActivity:function(){var e=this;C.getAll().then((function(t){e.fkCompanyActivity.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getCompany:function(){var e=this;E.getAll().then((function(t){e.fkCompany.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getStock:function(){var e=this;R.getAll().then((function(t){e.fkStock.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getProductsGroups:function(){var e=this;N.getAll().then((function(t){e.fkProductsGroups.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getTaxGroup:function(){var e=this;P.getAll().then((function(t){e.fkTaxGroup.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},getcity:function(){var e=this;h.getAll().then((function(t){e.fKCity.options=t.data})).catch((function(t){401===t.response.status&&e.showToast(e.$t("generic.errorYouDonotHaveAccess"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}),console.error(t),e.showToast(e.$t("generic.error"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"})}))},okCreatefun:function(){var e=this;return ae(u.a.mark((function t(){var a;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.reqfkEmployees&&!e.reqfkCompanyActivity){t.next=7;break}if(!e.reqfkEmployees||""!==e.searchObject.FK_Employees&&null!==e.searchObject.FK_Employees&&void 0!==e.searchObject.FK_Employees){t.next=5;break}return t.abrupt("return",e.showToast(e.$t("generic.errorChooseEmployee"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}));case 5:if(!e.reqfkCompanyActivity||""!==e.searchObject.Fk_Company_Activity&&null!==e.searchObject.Fk_Company_Activity&&void 0!==e.searchObject.Fk_Company_Activity){t.next=7;break}return t.abrupt("return",e.showToast(e.$t("generic.errorChooseCompanyActivity"),{icon:"fa-exclamation",position:"bottom-center",duration:2500,type:"error"}));case 7:a=Object.assign({},e.searchObject),e.$root.$children[0].$children[0].$children[0].$children[0].minimaizeSidebarState(!0),W.$emit("SearchStart",a);case 10:case"end":return t.stop()}}),t)})))()}}},oe=ne,re=(a("89c1"),a("2877")),ie=Object(re["a"])(oe,c,s,!1,null,null,null),ce=ie.exports,se=a("2591"),le=a("2ee3"),ue={data:function(){return{perPage:20,totalPages:1,modelTitle:"",stopBtn:!1,SpecificEntityFilds:[],deleteModal:!1,editModal:!1,createModal:!1,modelOktext:"",opjectBeforeEdit:{},currentobject:{},db:se["a"].firestore(),dataTable:[{id:1,time:"2023-02-04T04:18:05Z",trafficJam:"مزدحم",Number:25,city:"Mertani",city1:"Tabivere",route:"Mertani اليTabivere",avrgTraffic:"25 دقيقة"},{id:2,time:"2023-02-01T08:58:13Z",trafficJam:"شديد الزحام",Number:17,city:"Zamoskvorech’ye",city1:"Yidu",route:"Zamoskvorech’ye اليYidu",avrgTraffic:"17 دقيقة"},{id:3,time:"2023-02-04T04:03:45Z",trafficJam:"جيد",Number:31,city:"Tambakmerak",city1:"Dongxin",route:"Tambakmerak اليDongxin",avrgTraffic:"31 دقيقة"},{id:4,time:"2023-01-31T01:09:46Z",trafficJam:"جيد",Number:58,city:"Palebunan",city1:"Mitsukaidō",route:"Palebunan اليMitsukaidō",avrgTraffic:"58 دقيقة"},{id:5,time:"2023-01-31T15:51:52Z",trafficJam:"جيد",Number:16,city:"Chaoyang",city1:"Anyar",route:"Chaoyang اليAnyar",avrgTraffic:"16 دقيقة"},{id:6,time:"2023-02-09T11:41:56Z",trafficJam:"شديد الزحام",Number:48,city:"Liběšice",city1:"Brody",route:"Liběšice اليBrody",avrgTraffic:"48 دقيقة"},{id:7,time:"2023-02-07T19:42:32Z",trafficJam:"مزدحم",Number:26,city:"Bunut",city1:"Stalowa Wola",route:"Bunut اليStalowa Wola",avrgTraffic:"26 دقيقة"},{id:8,time:"2023-02-01T02:06:39Z",trafficJam:"جيد",Number:58,city:"Sunnyvale",city1:"Chavão",route:"Sunnyvale اليChavão",avrgTraffic:"58 دقيقة"},{id:9,time:"2023-02-02T05:51:10Z",trafficJam:"جيد",Number:15,city:"Mpumalanga",city1:"Amolatar",route:"Mpumalanga اليAmolatar",avrgTraffic:"15 دقيقة"},{id:10,time:"2023-01-31T21:00:18Z",trafficJam:"شديد الزحام",Number:30,city:"Bagamoyo",city1:"Sepahua",route:"Bagamoyo اليSepahua",avrgTraffic:"30 دقيقة"},{id:11,time:"2023-02-07T15:11:16Z",trafficJam:"شديد الزحام",Number:55,city:"Suraż",city1:"San Jose",route:"Suraż اليSan Jose",avrgTraffic:"55 دقيقة"},{id:12,time:"2023-02-07T05:05:19Z",trafficJam:"جيد",Number:17,city:"Shiree",city1:"Yuanqiao",route:"Shiree اليYuanqiao",avrgTraffic:"17 دقيقة"},{id:13,time:"2023-02-02T13:08:52Z",trafficJam:"مزدحم",Number:23,city:"Kulase",city1:"Cartagena",route:"Kulase اليCartagena",avrgTraffic:"23 دقيقة"},{id:14,time:"2023-02-01T03:27:15Z",trafficJam:"شديد الزحام",Number:48,city:"Shangjie",city1:"Sveg",route:"Shangjie اليSveg",avrgTraffic:"48 دقيقة"},{id:15,time:"2023-02-09T17:55:30Z",trafficJam:"جيد",Number:48,city:"Gowurdak",city1:"Palmasola",route:"Gowurdak اليPalmasola",avrgTraffic:"48 دقيقة"},{id:16,time:"2023-02-01T20:56:22Z",trafficJam:"شديد الزحام",Number:33,city:"Huazhuang",city1:"Rasskazovo",route:"Huazhuang اليRasskazovo",avrgTraffic:"33 دقيقة"},{id:17,time:"2023-02-07T08:37:03Z",trafficJam:"جيد",Number:18,city:"Chenfangji",city1:"Yetang",route:"Chenfangji اليYetang",avrgTraffic:"18 دقيقة"},{id:18,time:"2023-02-07T06:21:23Z",trafficJam:"مزدحم",Number:35,city:"Skaudvilė",city1:"Wuyun",route:"Skaudvilė اليWuyun",avrgTraffic:"35 دقيقة"},{id:19,time:"2023-02-08T19:56:11Z",trafficJam:"شديد الزحام",Number:55,city:"Qelëz",city1:"Nakano",route:"Qelëz اليNakano",avrgTraffic:"55 دقيقة"},{id:20,time:"2023-02-08T08:12:04Z",trafficJam:"مزدحم",Number:20,city:"Niono",city1:"Jetis",route:"Niono اليJetis",avrgTraffic:"20 دقيقة"}],pageNumber:1,loading:!1,searchBool:!1}},components:{topFilter:ce},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center",title:"#"},{name:"time",title:this.$t("tables.headings.time"),sortField:"time",sortCallBack:"sortCallBack|time"},{name:"route",title:this.$t("tables.headings.route"),sortField:"name",sortCallBack:"sortCallBack|route"},{name:"trafficJam",title:this.$t("tables.headings.trafficJam"),sortField:"name",sortCallBack:"sortCallBack|trafficJam"},{name:"avrgTraffic",title:this.$t("tables.headings.avrgTraffic"),sortField:"name",sortCallBack:"sortCallBack|avrgTraffic"}]},filterFileds:function(){return[{isNum:!1,isString:!1,isBoolean:!1,isDate:!0,showLabel:!0,name:"time",class:"",config:{enableTime:!0,defaultDate:new Date},title:this.$t("placeholder.time")},{isNum:!1,isString:!0,showLabel:!0,isBoolean:!1,isDate:!1,name:"route",title:this.$t("placeholder.route")},{isNum:!0,isString:!1,isBoolean:!1,isDate:!1,showLabel:!0,name:"avrgTraffic",title:this.$t("placeholder.avrgTraffic"),step:1e-5,min:0,max:100}]}},created:function(){var e=this;document.title=this.$t("generic.azhaErp")+"-"+this.$t("tables.analytics"),this.readItems(this.pageNumber),W.$on("SearchStart",(function(t){e.loading||e.readItems(1,null,t)}))},methods:{validateEmail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(null===e||void 0===e||""===e)return!1;var t=e.split(",");if(t.length>=1){var a=!1;return t.forEach((function(e){a=ee.validateEmail(e)})),a}return!0},validateLocaion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(null===e||void 0===e||""===e)return!1;var t=e.split(",");return 2!==t.length||!(this.isLatitude(t[0])&&this.isLongitude(t[1]))},isLatitude:function(e){return isFinite(e)&&Math.abs(e)<=90},isLongitude:function(e){return isFinite(e)&&Math.abs(e)<=180},formatDate:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var a={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(e).toLocaleDateString("ar-EG",a)}var n={year:"numeric",month:"numeric",day:"numeric"};return new Date(e).toLocaleDateString("ar-EG",n)},sortCallBack:function(e){this.readItems(1,e[0].toString().charAt(0).toUpperCase()+e[0].toString().slice(1))},readItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=se["a"].firestore();t.collection("routes").get().then((function(e){console.log(e),e.forEach((function(e){console.log(e.data())}))})),console.log(e)},create:function(){var e=this;le["KEY"]=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_GOOGLE_MAPS_API_KEY,le["VERSION"]="3.35",le["load"]((function(t){var a={origins:[e.getLocationFromString(e.currentobject.FromLocation,t)],destinations:[e.getLocationFromString("24.835745918122562, 46.72987580001744",t)],travelMode:t.maps.TravelMode.DRIVING,unitSystem:t.maps.UnitSystem.METRIC,durationInTraffic:!0,language:"ar",drivingOptions:{departureTime:new Date(Date.now()),trafficModel:"optimistic"},avoidHighways:!1,avoidTolls:!1,avoidFerries:!1},n=new t.maps.DistanceMatrixService;n.getDistanceMatrix(a).then((function(e){console.log("ssss",e)}))}))},edit:function(){},remove:function(e){},getLocationFromString:function(e,t){var a=e.split(","),n=parseFloat(a[0]),o=parseFloat(a[1]);return new t.maps.LatLng(n,o)},showDeleteModal:function(e){this.deleteModal=!0,this.currentobject=e},okDeletefun:function(){this.remove(this.currentobject.id)},cancleDeletefun:function(){this.currentobject={nationality:"",birth_Date:"",work_Date:""},this.loading=!1,this.stopBtn=!1},showEditModal:function(e){this.editModal=!0,this.modelTitle="generic.editItemTitle",this.modelOktext="modal.edit",this.createModal=!0,this.opjectBeforeEdit=Object.assign({},e),this.currentobject=e,this.loading=!0},okEditfun:function(){this.stopBtn=!0,this.edit(this.currentobject)},cancleEditfun:function(){Object.assign(this.currentobject,this.opjectBeforeEdit),this.createModal=!1,this.loading=!1,this.currentobject={},this.editModal=!1,this.stopBtn=!1},showCreateModal:function(){this.modelTitle="generic.creatItemTitle",this.modelOktext="modal.create",this.createModal=!0,this.loading=!0},okCreatefun:function(){this.stopBtn=!0,this.create()},cancleCreatefun:function(){this.createModal=!1,this.loading=!1,this.currentobject={},this.stopBtn=!1}}},fe=ue,de=(a("8f78"),Object(re["a"])(fe,r,i,!1,null,null,null)),me=de.exports,pe={name:"products",components:{productsTable:me},data:function(){return{}}},ye=pe,he=(a("28df"),Object(re["a"])(ye,n,o,!1,null,null,null));t["default"]=he.exports},"8f78":function(e,t,a){"use strict";a("67a3")},"9c0cf":function(e,t,a){"use strict";var n=a("c427");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}var c=function(){function e(){o(this,e)}return i(e,[{key:"getAll",value:function(){return n["a"].get("Employees")}},{key:"getAllPagnation",value:function(e){return n["a"].get("Employees",{params:e})}},{key:"getEmployeeBalance",value:function(e){return n["a"].get("Employees/GetEmployeeBalance",{params:e})}},{key:"get",value:function(e){return n["a"].get("Employees/getById?Id=".concat(e))}},{key:"restPassword",value:function(e){return n["a"].put("Employees/ResetPassword?Employee_id=".concat(e))}},{key:"changePassword",value:function(e){return n["a"].put("Employees/ChangePassword?Employee_id=".concat(e.Employee_id,"&oldPassword=").concat(e.oldPassword,"&newPassword=").concat(e.newPassword))}},{key:"search",value:function(e){return n["a"].get("Employees/Search",{params:e})}},{key:"create",value:function(e){return n["a"].post("Employees",e)}},{key:"update",value:function(e,t){return n["a"].put("Employees?Id=".concat(e),t)}},{key:"delete",value:function(e){return n["a"].delete("Employees?Id=".concat(e))}}]),e}();t["a"]=new c}}]);
//# sourceMappingURL=chunk-7627d76a.25ec31d4.js.map