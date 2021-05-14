(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/final-project-atlanta-community/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"000d":function(t,e,i){"use strict";i("99e1")},"0eaa":function(t,e,i){},2070:function(t,e,i){"use strict";i("7528")},"23bc":function(t,e,i){},"29f4":function(t,e,i){"use strict";i("aba8")},"2c05":function(t,e,i){"use strict";i("5876")},"3c6b":function(t,e,i){},"44df":function(t,e,i){"use strict";i("5edb")},"4b5e":function(t,e,i){"use strict";i("23bc")},"56d5":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e),i.d(e,"eventBus",(function(){return _e}));var a=i("2b0e"),n=i("00e7"),o=i.n(n),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Intro"),i("CirclePacking",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),i("Spacing"),i("BarChart",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),i("Spacing"),i("SizeChart",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),i("Spacing"),i("ScatterChart",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),i("Thanks")],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"intro"}},[a("div",{attrs:{id:"title"}},[a("h1",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[t._v(" "+t._s(t.title1)+" ")]),a("h2",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[t._v(" "+t._s(t.title2)+" ")])]),a("div",{attrs:{id:"content"}},[a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"text-block"}},[a("p",[t._v(" Our team will explore how different communities in Atlanta perceive language in different ways. To do this, we’ll be using a dataset of 149 local communities with information about their online behavior on Twitter. Information at the twitter account level allowed us to create summary statistics at the community level such as community size, average number of followers, friends and tweets and understand what are the top follows and topic words in each community. Following a specific methodology, deviations from the normal language can be measured and these deviations are called lexical variation. Our main goal is that the user can understand lexical variation in social media across Atlanta’s communities and have a guide for current local trends online. Examples of potential users are journalists, politicians and society as a whole. ")])]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"image-block"}},[a("b-img",{attrs:{id:"logo",center:"",src:i("cf05"),alt:"Center image"}})],1)])])},c=[],h={name:"Intro",data(){return{title1:"Exploring patterns of language variation on social media",title2:"A case study in Atlanta online communities"}}},u=h,d=(i("d8da"),i("2877")),m=Object(d["a"])(u,l,c,!1,null,"a47055ce",null),f=m.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{attrs:{id:"left"}},[i("transition",{attrs:{name:"move"}},[t.showingTwitters?i("Twitters",{attrs:{followingList:t.followingList}}):t._e()],1),i("transition",{attrs:{name:"move"}},[t.showingHint2?i("div",{attrs:{id:"hint-2"}},[i("h4",[t._v(" Check a community to see the top follows 👉 ")])]):t._e()])],1),i("div",{ref:"right",attrs:{id:"right"}},[i("BarGraph",{attrs:{clusters:t.clusters}}),i("div",{attrs:{id:"right-bottom"}},[i("transition",{attrs:{name:"fade"}},[t.showingCheckbox?i("Checkbox",{attrs:{options:t.options,category:t.category}}):i("div",{attrs:{id:"hint-1"}},[i("h4",[t._v(" Click the bar to show communities under the category ☝️ ")])])],1)],1)],1)])},p=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"chart",attrs:{id:"chart"}},[i("TooltipOne",{attrs:{data:t.tipData,visible:t.tipVisible}}),i("div",{ref:"svg-container",attrs:{id:"svg-container"}})],1)},y=[],b=i("5698"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tooltip",attrs:{id:"tooltip-1"}},[i("b-card",{attrs:{title:t.data.category}},[i("b-card-text",[t._v(" "+t._s(t.data.alc)+" ")])],1)],1)},x=[],_={name:"TooltipOne",props:["data","visible"]},k=_,$=(i("c4cc"),Object(d["a"])(k,w,x,!1,null,"790a4940",null)),C=$.exports,T={name:"BarGraph",components:{TooltipOne:C},props:["clusters"],data(){return{tipData:{category:"dddd",alc:"www"},tipVisible:!1,margin:null,width:null,height:null,x:null,y:null,color:null,svg:null}},mounted(){this.margin={top:20,right:20,bottom:70,left:40},this.width=this.$refs.chart.clientWidth-this.margin.left-this.margin.right,this.height=this.$refs.chart.clientHeight-this.margin.top-this.margin.bottom,this.x=b["j"]().padding(.85).rangeRound([0,this.width]),this.y=b["k"]().range([this.height,0]),this.color=b["l"],this.svg=b["m"]("#chart").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.showBarGraph()},methods:{showBarGraph(){b["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/category_avg.csv").then(t=>{t.forEach((function(t){t.alc=+t.avg_lex_change})),console.log("data",t),this.x.domain(t.map((function(t){return t.category}))),this.y.domain([0,.05+b["h"](t,(function(t){return t.alc}))]),this.svg.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+this.height+")").call(b["a"](this.x)).selectAll("text").attr("y",23).attr("x",9).attr("dy","-2em").attr("transform","rotate(90)").style("text-anchor","start"),this.svg.append("g").attr("class","axis axis--y").call(b["b"](this.y)).append("text").attr("y",6).attr("dy","0em").attr("text-anchor","end").text("Average Lexical Change");const e=this.svg.selectAll(".bar").data(t),i=this;e.enter().append("rect").attr("class","bar").attr("x",(function(t){return i.x(t.category)})).attr("y",(function(t){return i.y(t.alc)})).attr("width",20).attr("height",(function(t){return i.height-i.y(t.alc)})).style("fill","#ccc").on("click",(function(t,e){console.log(t);const a=i.clusters.filter(t=>t.category==e.category);i.showCheckbox({category:e.category,options:a}),console.log(a)})).on("mouseover",(function(t,e){console.log("over"),i.tipData.category=e.category,i.tipData.alc=e.alc,b["n"]("#tooltip-1").style("left",t.clientX+"px").style("top",t.clientY-100+"px").transition().duration(500).style("opacity","1")})).on("mouseout",(function(){console.log("out"),b["n"]("#tooltip-1").transition().duration(500).style("opacity","0")}));var a=b["o"](t,(function(t){return t.alc})),n=a/t.length;this.svg.append("path").attr("class","mean").attr("d",b["g"]()([[0,i.y(n)],[i.width,i.y(n)]])).attr("stroke","black"),this.svg.append("text").attr("transform","translate("+(this.width+3)+","+this.y(n)+")").attr("dy","1em").attr("text-anchor","end").style("fill","red").html("Average = $"+n)})},showCheckbox(t){_e.$emit("show-checkbox",t)}}},j=T,S=(i("29f4"),Object(d["a"])(j,v,y,!1,null,"4f2e8d93",null)),O=S.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.followingList.length>0?i("div",{attrs:{id:"following-list"}},[i("h5",[t._v(" Top Follows of Selected Community ")]),i("div",{attrs:{id:"follows"}},t._l(t.followingList,(function(t){return i("TwitterPreview",{key:t,attrs:{following:t}})})),1)]):t._e()},E=[],z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-link",{attrs:{href:"https://twitter.com/"+t.following}},[t._v(" @"+t._s(t.following)+" ")])],1)},N=[],H={name:"TwitterPreview",props:["following"]},D=H,P=Object(d["a"])(D,z,N,!1,null,null,null),B=P.exports,G={name:"Twitters",components:{TwitterPreview:B},props:["followingList"]},F=G,L=(i("4b5e"),Object(d["a"])(F,A,E,!1,null,"558772b0",null)),R=L.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"checkbox"}},[i("h5",[t._v(" Clusters in Category "+t._s(t.category.toUpperCase())+" ")]),i("b-form-group",[i("b-form-radio-group",{attrs:{id:"checkbox-group",options:t.options},on:{change:function(e){return t.selectCommunity(t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},I=[],M={name:"Checkbox",props:["options","category"],data(){return{selected:null}},methods:{selectCommunity:function(){_e.$emit("select-community",this.selected)}}},V=M,J=Object(d["a"])(V,W,I,!1,null,"96bdc64e",null),Y=J.exports,K={name:"BarChart",components:{BarGraph:O,Checkbox:Y,Twitters:R},data(){return{title:"Exploring patterns of language variation on social media",clusters:[],options:[],followingList:[],category:"",showingCheckbox:!1,showingTwitters:!1,showingHint2:!1}},created:function(){_e.$on("show-checkbox",this.showCheckbox),_e.$on("select-community",this.showTwitters)},beforeDestroy:function(){_e.$off("show-checkbox",this.showCheckbox),_e.$off("select-community",this.showTwitters)},mounted(){b["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(t=>{const e=this;t.forEach((function(t){e.clusters.push({text:t.cluster_name,value:t.cluster_name,category:t.category})}))})},methods:{showCheckbox(t){this.options=t.options,this.category=t.category,this.showingCheckbox=!0,this.showingHint2=!0,this.followingList=[]},showTwitters(t){b["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(e=>{const i=e.find(e=>e.cluster_name==t);this.followingList=i.top_follows.split(",")}),console.log(this.followingList),this.showingTwitters=!0,this.showingHint2=!1}}},U=K,X=(i("5e50"),Object(d["a"])(U,g,p,!1,null,"c9676f9e",null)),Z=X.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{attrs:{id:"left"}},[i("Ranking")],1),i("div",{ref:"right",attrs:{id:"right"}},[i("SizeGraph")],1)])},Q=[],tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"chart1",attrs:{id:"chart-1"}},[i("div",{ref:"svg-container",attrs:{id:"svg-container-1"}})])},et=[],it={name:"SizeGraph",props:["clusters"],data(){return{margin:null,width:null,height:null,x:null,y:null,color:null,svg:null,xAxis:null,yAxis:null,xScale:null,yScale:null}},created:function(){_e.$on("select-ranking",this.reorder)},beforeDestroy:function(){_e.$off("select-ranking",this.reorder)},mounted(){this.margin={top:20,right:10,bottom:20,left:80},this.width=this.$refs.chart1.clientWidth-this.margin.left-this.margin.right,this.height=this.$refs.chart1.clientHeight-this.margin.top-this.margin.bottom,this.x=b["k"]().range([this.margin.left,this.width-this.margin.right]).nice(),this.y=b["j"]().range([this.height-this.margin.bottom,this.margin.top]).padding(.1),this.color=function(t,e){return e.includes(t.cluster_name)?"#FF930E":"#ccc"},this.svg=b["m"]("#chart-1").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.svg.append("clipPath").attr("id","my-clip-path").append("rect").attr("x",-500).attr("y",this.margin.top).attr("width",this.width+500+this.margin.left+this.margin.right).attr("height",this.height-this.margin.top-this.margin.bottom),this.svg.append("rect").attr("class","zoom-panel").attr("x",-500).attr("y",this.margin.top).attr("width",this.width).attr("height",this.height).style("opacity",0);const t=this;this.xScale=function(e){e.attr("transform",`translate(15, ${t.height-t.margin.bottom})`).call(b["a"](t.x)).call(t=>t.select(".domain").remove())},this.xAxis=this.svg.append("g").attr("class","x-axis").call(this.xScale),this.svg.append("text").attr("x",(this.width+this.margin.left)/2).attr("y",this.height-5).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),this.yScale=function(e,i){e.attr("transform",`translate(${t.margin.left+15}, 0)`).call(b["b"](i).ticks(t.width/80).tickSizeOuter(0))},this.yAxis=this.svg.append("g").attr("class","y-axis").attr("clip-path","url(#my-clip-path)").call(this.yScale,this.y),this.svg.append("text").attr("transform","rotate(-90)").attr("x",-(this.height-this.margin.bottom)/2-50).attr("y",15).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),this.reorder("community_size");const e=b["p"]().scaleExtent([1,32]).extent([[t.margin.left,0],[t.width-t.margin.right,t.height-t.margin.bottom]]).translateExtent([[t.margin.left,0],[t.width-t.margin.right,t.height-t.margin.bottom]]).on("zoom",i);function i(e){t.y.range([t.height-t.margin.bottom,t.margin.top].map(t=>e.transform.applyY(t))),t.svg.selectAll(".bar").attr("y",e=>t.y(e.cluster_name)).attr("height",t.y.bandwidth()),t.yAxis.call(t.yScale,t.y)}this.svg.call(e)},methods:{updateBars(t,e){this.x.domain([0,b["h"](t,t=>t.value)]),this.xAxis.transition().duration(1e3).call(b["a"](this.x)),this.y.domain(t.map(t=>t.cluster_name)),this.yAxis.transition().duration(1e3).call(b["b"](this.y));const i=this.svg.selectAll(".bar").data(t),a=this;i.enter().append("rect").attr("clip-path","url(#my-clip-path)").attr("class","bar").attr("x",a.margin.left+15).attr("y",t=>a.y(t.cluster_name)).attr("width",t=>a.x(t.value)-a.margin.left).attr("height",a.y.bandwidth()).attr("fill",t=>a.color(t,e)),i.transition().duration(250).attr("x",a.margin.left+15).attr("y",t=>a.y(t.cluster_name)).attr("width",t=>a.x(t.value)-a.margin.left).attr("height",a.y.bandwidth()).attr("fill",t=>a.color(t,e)),i.exit().remove()},reorder(t){b["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(e=>{e.forEach(e=>e.value=parseInt(e[t],10)),e.sort((t,e)=>t.value-e.value),e.forEach((t,e)=>t.Rank=e+1),t=[],this.updateBars(e,t)})}}},at=it,nt=(i("2070"),Object(d["a"])(at,tt,et,!1,null,"57699d7e",null)),ot=nt.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v(" Ranking Communities ")]),i("b-form-group",{attrs:{label:"Sort the communities by:"}},[i("b-form-radio-group",{staticClass:"button-radio",attrs:{id:"btn-radios-3",options:t.options,name:"radio-btn-stacked",buttons:"",stacked:"","button-variant":"outline-secondary"},on:{change:function(e){return t.selectRanking(t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),i("h4",[t._v(" Zoom in/out and move 👉 ")])],1)},st=[],lt={name:"Ranking",data(){return{selected:"community_size",options:[{text:"community size",value:"community_size"},{text:"average friends count",value:"friends_count_mean"},{text:"average follower count",value:"follower_count_mean"},{text:"average tweet count",value:"tweet_count_mean"}]}},methods:{selectRanking:function(){_e.$emit("select-ranking",this.selected)}}},ct=lt,ht=(i("000d"),Object(d["a"])(ct,rt,st,!1,null,"0d8b6730",null)),ut=ht.exports,dt={name:"BarChart",components:{SizeGraph:ot,Ranking:ut},data(){return{}},created:function(){},beforeDestroy:function(){},mounted(){},methods:{}},mt=dt,ft=(i("fe3b"),Object(d["a"])(mt,q,Q,!1,null,"02dfca9e",null)),gt=ft.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{attrs:{id:"left"}},[i("Factors"),i("transition",{attrs:{name:"fade"}},[t.showingHint?i("div",[i("h4",[t._v(" Hover on a dot to see the topic words of the community 👉 ")])]):i("TooltipThree",{attrs:{clusterName:t.clusterName,topicWords:t.topicWords}})],1)],1),i("div",{ref:"right",attrs:{id:"right"}},[i("h2",[t._v(" Investigate how language variation relates to social factors ")]),i("ScatterGraph")],1)])},vt=[],yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"chart3",attrs:{id:"chart-3"}},[i("div",{ref:"svg-container-3",attrs:{id:"svg-container-3"}})])},bt=[],wt={name:"ScatterGraph",props:["clusters"],data(){return{margin:null,width:null,height:null,x:null,y:null,color:null,svg:null,xAxis:null,yAxis:null,xScale:null,yScale:null,xText:"",yText:"",storedData:null}},created:function(){_e.$on("select-factors",this.updateScatterPlot)},beforeDestroy:function(){_e.$off("select-factors",this.updateScatterPlot)},mounted(){this.margin={top:20,right:10,bottom:20,left:80},this.width=this.$refs.chart3.clientWidth-this.margin.left-this.margin.right,this.height=this.$refs.chart3.clientHeight-this.margin.top-this.margin.bottom,this.x=b["k"]().range([0,this.width]),this.y=b["k"]().range([this.height-50,0]),this.svg=b["m"]("#chart-3").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");const t=this;this.xAxis=this.svg.append("g").attr("class","x-axis").attr("transform","translate(0,"+(t.height-50)+")").call(b["a"](t.x)),this.xText=this.svg.append("text").attr("x",(this.width+this.margin.left)/2).attr("y",this.height-5).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),this.yAxis=this.svg.append("g").attr("class","y-axis").call(b["b"](t.y)),this.yText=this.svg.append("text").attr("transform","rotate(-90)").attr("x",-(this.height-this.margin.bottom)/2-50).attr("y",-50).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),b["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(t=>{this.storedData=t,console.log(this.storedData),this.updateScatterPlot("community_size","lexical_change","all")})},methods:{updateScatterPlot(t,e,i){console.log(t,e,i);const a=this,n="all"!=i?a.storedData.filter(t=>t.category==i):a.storedData;console.log(a.storedData),console.log(n),this.x.domain([0,b["h"](n,e=>parseFloat(e[t]))]),this.xAxis.transition().duration(1e3).call(b["a"](this.x)),this.xText.text(t),this.y.domain([0,b["h"](n,t=>parseFloat(t[e]))]),this.yAxis.transition().duration(1e3).call(b["b"](this.y)),this.yText.text(e);const o=this.svg.selectAll(".dot").data(n.filter((function(t,e){return e<1500})));console.log("Here"),o.enter().append("circle").attr("class","dot").attr("r",5).style("fill","#e25609").style("opacity",.3).style("stroke","white").on("mouseover",(function(t,e){console.log("over"),console.log(t);const i=e.cluster_name,a=e.topic_words;_e.$emit("show-tooltip-3",i,a)})).on("mouseout",(function(){console.log("out"),_e.$emit("hide-tooltip-3")})).transition().delay((function(t,e){return 3*e})).duration(2e3).attr("cx",(function(e){return a.x(e[t])})).attr("cy",(function(t){return a.y(t[e])})),console.log("Here"),o.transition().delay((function(t,e){return 3*e})).duration(2e3).attr("cx",(function(e){return a.x(e[t])})).attr("cy",(function(t){return a.y(t[e])})),console.log("Here"),o.exit().remove(),console.log("Here")}}},xt=wt,_t=(i("7143"),Object(d["a"])(xt,yt,bt,!1,null,"484254cd",null)),kt=_t.exports,$t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-form-group",{attrs:{id:"input-group-1",label:"Choose two factors:","label-for":"m-2"}},[i("b-form-select",{attrs:{options:t.factors},on:{change:t.selectFactors},model:{value:t.factor1,callback:function(e){t.factor1=e},expression:"factor1"}}),i("b-form-select",{attrs:{options:t.factors},on:{change:t.selectFactors},model:{value:t.factor2,callback:function(e){t.factor2=e},expression:"factor2"}})],1),i("b-form-group",{attrs:{id:"input-group-3",label:"Choose a category:","label-for":"m-2"}},[i("b-form-select",{attrs:{options:t.categories},on:{change:t.selectFactors},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)],1)},Ct=[],Tt={name:"Ranking",data(){return{factor1:"community_size",factor2:"lexical_change",category:"all",categories:["all","atlanta","beauty","education","entertainment","health","other","politics","religion","social_justice","sports"],factors:["community_size","lexical_change","ideology_lexical_change","male_ratio","friends_count_mean","friends_count_median","follower_count_mean","follower_count_median","tweet_count_mean","tweet_count_median","tweet_count_rank"]}},methods:{selectFactors:function(){_e.$emit("select-factors",this.factor1,this.factor2,this.category)}}},jt=Tt,St=(i("d4fe"),Object(d["a"])(jt,$t,Ct,!1,null,"45f45f50",null)),Ot=St.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"tooltip-3"}},[i("vue-word-cloud",{attrs:{id:"wordcloud",rotation:t.rotate,spacing:t.spacing,words:t.topicWords,color:"black","font-family":"Roboto"}})],1)},Et=[],zt=i("2d8a"),Nt=i.n(zt),Ht={name:"TooltipThree",props:["clusterName","topicWords"],components:{[Nt.a.name]:Nt.a},data(){return{words:[{text:"Vue",value:1e3},{text:"js",value:200},{text:"is",value:800},{text:"very cool",value:1e6},{text:"lunch",value:100}],margin:{top:0,right:0,bottom:0,left:0},rotate:null,spacing:1/4}},mounted(){this.rotate=function(){const t=[0,1/8,3/4,7/8],e=Math.floor(Math.random()*t.length);return t[e]}}},Dt=Ht,Pt=(i("c0b8"),Object(d["a"])(Dt,At,Et,!1,null,"6f4fd53e",null)),Bt=Pt.exports,Gt={name:"BarChart",components:{ScatterGraph:kt,Factors:Ot,TooltipThree:Bt},data(){return{clusterName:"",topicWords:[],showingHint:!0}},created:function(){_e.$on("show-tooltip-3",this.showTooltip),_e.$on("hide-tooltip-3",this.hideTooltip)},beforeDestroy:function(){_e.$off("show-tooltip-3",this.showTooltip),_e.$off("hide-tooltip-3",this.hideTooltip)},methods:{showTooltip(t,e){console.log("show"),this.clusterName=t,this.topicWords=e.split(",").map(t=>({text:t,value:1})),this.showingHint=!1},hideTooltip(){this.showingHint=!0,console.log("hide")}}},Ft=Gt,Lt=(i("44df"),Object(d["a"])(Ft,pt,vt,!1,null,"08800392",null)),Rt=Lt.exports,Wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spacing"},[i("h5",[t._v("⬇️ continue...")])])}],Mt={name:"Spacing",data(){return{}}},Vt=Mt,Jt=(i("5cd9"),Object(d["a"])(Vt,Wt,It,!1,null,"63f214f0",null)),Yt=Jt.exports,Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"thanks"}},[i("div",{attrs:{id:"thanks-title"}},[i("h1",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[t._v(" "+t._s(t.title1)+" ")])]),i("div",{attrs:{id:"thanks-content"}},[i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"thanks-text-block"}},[i("b-link",{attrs:{href:"https://github.com/6859-sp21/final-project-atlanta-community"}},[t._v("go to our github page")])],1),i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"thanks-image-block"}},[i("b-button",{staticClass:"button-share",attrs:{"label-for":"input-1",variant:"link"}},[i("ShareNetwork",{attrs:{network:"twitter",url:"https://6859-sp21.github.io/final-project-atlanta-community/",title:"A visualization on tweets in Atlanta"}},[i("b-icon",{attrs:{icon:"twitter","font-scale":"3"}}),i("span",{staticStyle:{margin:"0.5em"}},[t._v("Share on twitter")])],1)],1),i("b-img")],1)])])},Ut=[],Xt={name:"Thanks",data(){return{title1:"Thanks for exploring"}}},Zt=Xt,qt=(i("6c29"),Object(d["a"])(Zt,Kt,Ut,!1,null,"ede78a9a",null)),Qt=qt.exports,te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{attrs:{id:"left"}},[i("Ranking")],1),i("div",{ref:"right",attrs:{id:"right"}},[i("CircleGraph")],1)])},ee=[],ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"chart2",attrs:{id:"chart-2"}},[i("div",{attrs:{id:"svg-container-2"}})])},ae=[],ne={name:"CircleGraph",data(){return{width:null,height:null,color:null,svg:null,root:null,focus:null,view:null,label:null,storedData:null,node:null}},created:function(){_e.$on("select-ranking",this.update)},beforeDestroy:function(){_e.$off("select-ranking",this.update)},mounted(){this.width=this.$refs.chart2.clientWidth,this.height=this.$refs.chart2.clientHeight,console.log(this.width,this.height),this.width=Math.min(this.width,this.height),this.height=this.width,console.log(this.width,this.height),this.color=b["k"]().domain([0,5]).range(["hsl(152,80%,80%)","hsl(228,30%,40%)"]).interpolate(b["e"]);const t=this;console.log(t.width,t.height),this.svg=b["m"]("#chart-2").append("svg").attr("width",this.width).attr("height",this.height).attr("viewBox",`-${t.width/2} -${t.height/2} ${t.width} ${t.height}`).style("background",t.color(0)).style("cursor","pointer").on("click",e=>t.zoom(e,t.root)),this.node=this.svg.append("g"),this.label=this.svg.append("g").style("font","10px sans-serif").attr("pointer-events","none").attr("text-anchor","middle"),b["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(t=>{this.storedData=t,this.update("community_size")})},methods:{pack(t){const e=b["i"]().size([this.width,this.height]).padding(3);return e(b["d"](t).sum(t=>t.value).sort((t,e)=>e.value-t.value))},update(t){const e=new Map;this.storedData.forEach(i=>{e.get(i.category)?e.get(i.category).push({name:i.cluster_name,value:parseInt(i[t],10)}):e.set(i.category,[{name:i.cluster_name,value:parseInt(i[t],10)}])});const i=[];e.forEach((t,e)=>{i.push({name:e,children:t})});const a={name:"Atlanta",children:i};console.log(a),this.root=this.pack(a),this.focus=this.root,this.node&&this.node.remove(),this.label&&this.label.remove();const n=this;this.node=this.svg.append("g").selectAll("circle").data(n.root.descendants().slice(1)).join("circle").attr("fill",t=>t.children?n.color(t.depth):"white").attr("pointer-events",t=>t.children?null:"none").on("mouseover",(function(){b["m"](this).attr("stroke","#000")})).on("mouseout",(function(){b["m"](this).attr("stroke",null)})).on("click",(t,e)=>n.focus!==e&&(n.zoom(t,e),t.stopPropagation())),this.label=this.svg.append("g").style("font","10px sans-serif").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(n.root.descendants()).join("text").style("fill-opacity",t=>t.parent===n.root?1:0).style("display",t=>t.parent===n.root?"inline":"none").text(t=>t.data.name),this.zoomTo([n.root.x,n.root.y,2*n.root.r])},zoomTo(t){const e=this.width/t[2];this.view=t,this.label.attr("transform",i=>`translate(${(i.x-t[0])*e},${(i.y-t[1])*e})`),this.node.attr("transform",i=>`translate(${(i.x-t[0])*e},${(i.y-t[1])*e})`),this.node.attr("r",t=>t.r*e)},zoom(t,e){this.focus=e;const i=this,a=this.svg.transition().duration(t.altKey?7500:750).tween("zoom",t=>{console.log(t);const e=b["f"](i.view,[i.focus.x,i.focus.y,2*i.focus.r]);return t=>i.zoomTo(e(t))});this.label.filter((function(t){return t.parent===i.focus||"inline"===this.style.display})).transition(a).style("fill-opacity",t=>t.parent===i.focus?1:0).on("start",(function(t){t.parent===i.focus&&(this.style.display="inline")})).on("end",(function(t){t.parent!==i.focus&&(this.style.display="none")}))}}},oe=ne,re=(i("7175"),Object(d["a"])(oe,ie,ae,!1,null,"72904e84",null)),se=re.exports,le={name:"CirclePacking",components:{CircleGraph:se,Ranking:ut},data(){return{}},created:function(){},beforeDestroy:function(){},mounted(){},methods:{}},ce=le,he=(i("6c00"),Object(d["a"])(ce,te,ee,!1,null,"c38b25f6",null)),ue=he.exports,de={components:{Intro:f,BarChart:Z,SizeChart:gt,ScatterChart:Rt,Spacing:Yt,Thanks:Qt,CirclePacking:ue},name:"MainPage",data(){return{text:"Welcome to Novid"}}},me=de,fe=(i("2c05"),Object(d["a"])(me,r,s,!1,null,"2c6acb8c",null)),ge=fe.exports,pe=i("5f5b"),ve=i("b1e0");i("f9e3"),i("2dd8");const ye=new IntersectionObserver((t,e)=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("enter"),e.unobserve(t.target))})});var be={bind(t){t.classList.add("before-enter"),ye.observe(t)}},we=i("bd8c"),xe=i.n(we);a["default"].use(xe.a),a["default"].use(pe["a"]),a["default"].use(ve["a"]),a["default"].use(o.a),a["default"].directive("scrollanimation",be);const _e=new a["default"];a["default"].config.productionTip=!1,new a["default"]({render:t=>t(ge)}).$mount("#app")},5876:function(t,e,i){},"5cd9":function(t,e,i){"use strict";i("e1b9")},"5e50":function(t,e,i){"use strict";i("e3e3")},"5edb":function(t,e,i){},"6c00":function(t,e,i){"use strict";i("caee")},"6c29":function(t,e,i){"use strict";i("3c6b")},7028:function(t,e,i){},7143:function(t,e,i){"use strict";i("eefc")},7175:function(t,e,i){"use strict";i("dacf")},7528:function(t,e,i){},8718:function(t,e,i){},"99e1":function(t,e,i){},a5ce:function(t,e,i){},aba8:function(t,e,i){},c0b8:function(t,e,i){"use strict";i("56d5")},c4cc:function(t,e,i){"use strict";i("7028")},caee:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.d2bca33d.png"},d4fe:function(t,e,i){"use strict";i("0eaa")},d8da:function(t,e,i){"use strict";i("8718")},dacf:function(t,e,i){},e1b9:function(t,e,i){},e3e3:function(t,e,i){},eefc:function(t,e,i){},fe3b:function(t,e,i){"use strict";i("a5ce")}});
//# sourceMappingURL=app.88d1157d.js.map