(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-550daa14"],{"0766":function(t,s,a){"use strict";a("7884")},1638:function(t,s,a){},"407d":function(t,s,a){
/*!
 * vue-countdown v1.1.5
 * https://fengyuanchen.github.io/vue-countdown
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-02-25T01:19:32.769Z
 */
(function(s,a){t.exports=a()})(0,(function(){"use strict";var t=1e3,s=60*t,a=60*s,e=24*a,i="visibilitychange",n={name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/e)},hours:function(){return Math.floor(this.totalMilliseconds%e/a)},minutes:function(){return Math.floor(this.totalMilliseconds%a/s)},seconds:function(){return Math.floor(this.totalMilliseconds%s/t)},milliseconds:function(){return Math.floor(this.totalMilliseconds%t)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/a)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/s)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/t)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var s=Math.min(this.totalMilliseconds,this.interval);if(s>0)if(window.requestAnimationFrame){var a,e,i=function i(n){a||(a=n),e||(e=n);var o=n-a;o>=s||o+(n-e)/2>=s?t.progress():t.requestId=requestAnimationFrame(i),e=n};this.requestId=requestAnimationFrame(i)}else this.timeoutId=setTimeout((function(){t.progress()}),s);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},mounted:function(){document.addEventListener(i,this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener(i,this.handleVisibilityChange),this.pause()}};return n}))},5874:function(t,s,a){"use strict";a("95f8")},"72ea":function(t,s,a){},7884:function(t,s,a){},"84fa":function(t,s,a){"use strict";a("1638")},"95f8":function(t,s,a){},a69d:function(t,s,a){"use strict";a.r(s);var e,i,n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard"},[a("dashboard-charts"),a("div",{staticClass:"row row-equal"},[a("div",{staticClass:"flex md6 xs12"},[a("va-card",{staticClass:"chart-widget",attrs:{title:t.$t("charts.verticalBarChart")}},[a("va-chart",{attrs:{data:t.verticalBarChartData,type:"vertical-bar"}})],1)],1),a("div",{staticClass:"flex md6 xs12"},[a("dashboard-info-block")],1)])],1)},o=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row row-equal"},[a("div",{staticClass:"flex xs12 xl6"},[a("va-card",{attrs:{title:t.$t("dashboard.charts.trendyTrends")}},[a("va-chart",{ref:"lineChart",staticClass:"chart",attrs:{data:t.lineChartData,type:"line"}})],1)],1),a("div",{staticClass:"flex xs12 md6 xl3"},[a("va-card",{attrs:{title:t.$t("dashboard.charts.loadingSpeed")}},[a("va-chart",{staticClass:"chart chart--donut",attrs:{data:t.donutChartData,type:"donut"}})],1)],1),a("div",{staticClass:"flex xs12 md6 xl3"},[a("dashboard-contributors-chart")],1)])},c=[],l=function(t){return e?e.datasets[0].backgroundColor=[t.danger,t.info,t.primary]:e={labels:["حي السليمانية","حي المربع","حي الصحافة"],datasets:[{label:"عدد الركاب",backgroundColor:[t.danger,t.info,t.primary],data:[2478,5267,734]}]},e},h=a("9d2c"),u=function(){return Math.floor(100*Math.random())},d=function(){var t=!!Math.floor(2*Math.random());return t?["الزحام","الركاب"]:["الركاب","الزحام"]},m=function(t){return Array.from(Array(t),u)},f=function(){var t=7;return Math.max(t,(new Date).getMonth())},p=0,b=function(t,s){var a=f(),e=["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"],n=d();return i?(i.datasets[0].backgroundColor=Object(h["e"])(t.primary,.6).css,i.datasets[1].backgroundColor=Object(h["e"])(t.info,.6).css,s&&p!==s&&(i.labels.shift(),i.datasets.forEach((function(t){t.data.shift()})),p=s)):i={labels:e.splice(p,a),datasets:[{label:n[0],backgroundColor:Object(h["e"])(t.primary,.6).css,borderColor:"transparent",data:m(a-p)},{label:n[1],backgroundColor:Object(h["e"])(t.info,.6).css,borderColor:"transparent",data:m(a)}]},i},v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("va-card",{staticClass:"d-flex dashboard-contributors-list",attrs:{title:t.$t("dashboard.charts.topContributors")}},[a("va-inner-loading",{attrs:{loading:t.loading}},t._l(t.visibleList,(function(s,e){return a("div",{key:e,staticClass:"mb-3"},[a("va-progress-bar",{attrs:{value:t.getPercent(s.val),color:t.getRandomColor()}},[t._v(" "+t._s(s.val)+" "+t._s(t.$t("dashboard.charts.commits"))+" ")]),a("p",{staticClass:"mt-2"},[t._v(t._s(s.name))])],1)})),0)],1)},C=[],g={name:"DashboardContributorsList",data:function(){return{contributors:[],loading:!1,progressMax:350,visibleList:[{name:"حي الملز",val:340},{name:"حي المروج",val:280},{name:"حي العليا",val:240},{name:"حي الورود",val:190},{name:"حي النسيم الغربي",val:180}]}},methods:{getPercent:function(t){return t/this.progressMax*100},showNext:function(){this.visibleList=this.contributors.splice(0,this.step)},getRandomColor:function(){var t=Object.keys(this.$themes);return this.$themes[t[t.length*Math.random()<<0]]}}},y=g,x=(a("0766"),a("2877")),M=Object(x["a"])(y,v,C,!1,null,"56ef6c81",null),w=M.exports,$={name:"dashboard-charts",components:{DashboardContributorsChart:w},data:function(){return{lineChartData:b(this.$themes),donutChartData:l(this.$themes),lineChartFirstMonthIndex:0}},watch:{"$themes.primary":function(){this.lineChartData=b(this.$themes),this.donutChartData=l(this.$themes)},"$themes.info":function(){this.lineChartData=b(this.$themes),this.donutChartData=l(this.$themes)},"$themes.danger":function(){this.donutChartData=l(this.$themes)}},methods:{deleteSection:function(){this.lineChartFirstMonthIndex+=1,this.lineChartData=b(this.$themes,this.lineChartFirstMonthIndex),this.$refs.lineChart.$refs.chart.refresh()},printChart:function(){var t=s("JVBERi0xLjYKJdP0zOEKMSAwIG9iago8PAovQ3JlYXRpb25EYXRl");function s(t){for(var s=window.atob(t),a=s.length,e=new Uint8Array(a),i=0;i<a;i++){var n=s.charCodeAt(i);e[i]=n}return e}var a=new Blob([t],{type:"application/pdf"}),e=URL.createObjectURL(a),i=window.open(e,"Print","height=600,width=800");setTimeout((function(){i.document.close(),i.focus(),i.print(),i.close()}),1e3)}},computed:{donutChartDataURL:function(){return document.querySelector(".chart--donut canvas").toDataURL("image/png")}}},D=$,_=(a("ac76"),Object(x["a"])(D,r,c,!1,null,"19998576",null)),S=_.exports,k=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row row-equal"},[a("div",{staticClass:"flex w-100"},[a("div",{staticClass:"row"},t._l(t.infoTiles,(function(s,e){return a("div",{key:e,staticClass:"flex xs12 sm4"},[a("va-card",{staticClass:"mb-4",attrs:{color:s.color}},[a("p",{staticClass:"display-2 mb-0 text-center",staticStyle:{color:"white"}},[t._v(t._s(s.value))]),a("p",{staticClass:"text-center"},[t._v(t._s(t.$t("dashboard.info."+s.text)))])])],1)})),0),a("div",{staticClass:"row"},[a("div",{staticClass:"flex xs12 md6"},[a("va-card",[a("p",{staticClass:"display-2 mb-1 text--center",style:{color:this.$themes.primary}},[t._v("291 "+t._s(t.$t("dashboard.info.minutes")))]),a("p",{staticClass:"no-wrap text--center"},[t._v(t._s(t.$t("dashboard.info.completedPullRequests")))])])],1),a("div",{staticClass:"flex xs12 md6"},[a("va-card",[a("p",{staticClass:"display-2 mb-1 text--center",style:{color:this.$themes.primary}},[a("countdown",{attrs:{time:288e5},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.seconds)+" : "+t._s(s.minutes)+" : "+t._s(s.hours)+" ")]}}])})],1),a("p",{staticClass:"no-wrap text--center"},[t._v(t._s(t.$t("dashboard.info.completedPullRequests2")))])])],1)])])])},I=[],j=a("407d"),O=a.n(j),A={name:"DashboardInfoBlock",components:{countdown:O.a},data:function(){return{infoTiles:[{color:"success",value:"803",text:"commits",icon:""},{color:"danger",value:"53",text:"components",icon:""},{color:"info",value:"750",text:"teamMembers",icon:""}],modal:!1,currImage:0,images:["https://i.imgur.com/qSykGko.jpg","https://i.imgur.com/jYwT08D.png","https://i.imgur.com/9930myH.jpg","https://i.imgur.com/2JxhWD6.jpg","https://i.imgur.com/MpiOWbM.jpg"]}},methods:{showModal:function(){this.modal=!0},showPrevImage:function(){this.currImage=this.currImage?this.currImage-1:this.images.length-1},showNextImage:function(){this.currImage=this.currImage===this.images.length-1?0:this.currImage+1}}},E=A,B=(a("84fa"),Object(x["a"])(E,k,I,!1,null,null,null)),F=B.exports,q=function(t){return{labels:["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"],datasets:[{label:"الركاب",backgroundColor:t.primary,borderColor:"transparent",data:[50,20,12,39,10,40,39]},{label:"المتوقع",backgroundColor:t.info,borderColor:"transparent",data:[50,10,22,39,15,20,85]}]}},R=function(t){return{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Vuestic Satisfaction Score",backgroundColor:t.warning,borderColor:"transparent",data:[80,90,50,70,60,90,50,90,80,40,72,93]},{label:"Bulma Satisfaction Score",backgroundColor:t.danger,borderColor:"transparent",data:[20,30,20,40,50,40,15,60,30,20,42,53]}]}},L=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a(t.chartComponent,{ref:"chart",tag:"component",staticClass:"va-chart",attrs:{options:t.options,"chart-data":t.data}})},P=[],T=a("1fca"),J={legend:{position:"bottom",labels:{fontColor:"#34495e",fontFamily:"sans-serif",fontSize:14,padding:20,usePointStyle:!0}},tooltips:{bodyFontSize:14,bodyFontFamily:"sans-serif"},responsive:!0,maintainAspectRatio:!1},z={pie:"pie-chart",donut:"donut-chart",bubble:"bubble-chart",line:"line-chart","horizontal-bar":"horizontal-bar-chart","vertical-bar":"vertical-bar-chart"},H={mixins:[T["g"].reactiveProp],props:["data","chartOptions"],mounted:function(){this.refresh()},watch:{"$themes.primary":function(){this.options.animation=!1,this.refresh()},"$themes.info":function(){this.options.animation=!1,this.refresh()},"$themes.danger":function(){this.options.animation=!1,this.refresh()}},methods:{refresh:function(){this.renderChart(this.chartData,this.options)}},computed:{options:function(){return Object.assign({},J,this.chartOptions)}}},V={extends:T["f"],mixins:[H]},N={extends:T["b"],mixins:[H]},U={extends:T["c"],mixins:[H]},Y={extends:T["d"],mixins:[H]},G={extends:T["a"],mixins:[H]},K={extends:T["e"],mixins:[H]},W={name:"va-chart",props:{data:{},options:{},type:{validator:function(t){return t in z}}},components:{PieChart:V,LineChart:K,VerticalBarChart:G,HorizontalBarChart:Y,DonutChart:U,BubbleChart:N},computed:{chartComponent:function(){return z[this.type]}}},X=W,Q=(a("5874"),Object(x["a"])(X,L,P,!1,null,null,null)),Z=Q.exports,tt={name:"dashboard",components:{DashboardCharts:S,DashboardInfoBlock:F,VaChart:Z},data:function(){return{verticalBarChartData:q(this.$themes),horizontalBarChartData:R(this.$themes)}},created:function(){document.title=this.$t("generic.RCRCBus")+"-"+this.$t("menu.dashboard")},methods:{addAddressToMap:function(t){var s=t.city,a=t.country;this.$refs.dashboardMap.addAddress({city:s.text,country:a})}}},st=tt,at=(a("c5cb"),Object(x["a"])(st,n,o,!1,null,null,null));s["default"]=at.exports},ac76:function(t,s,a){"use strict";a("72ea")},c5cb:function(t,s,a){"use strict";a("fdad")},fdad:function(t,s,a){}}]);
//# sourceMappingURL=chunk-550daa14.9fa50a2e.js.map