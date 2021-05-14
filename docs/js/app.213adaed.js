(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/final-project-atlanta-community/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"000d":function(t,e,a){"use strict";a("99e1")},"205e":function(t,e,a){"use strict";a("7a36")},2070:function(t,e,a){"use strict";a("7528")},"23bc":function(t,e,a){},"29f4":function(t,e,a){"use strict";a("aba8")},"4b5e":function(t,e,a){"use strict";a("23bc")},"4d68":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"eventBus",(function(){return oe}));var i=a("2b0e"),n=a("00e7"),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Intro"),a("BarChart",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),a("Spacing"),a("SizeChart",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),a("Spacing"),a("ScatterChart",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]}),a("Thanks")],1)},s=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"intro"}},[i("div",{attrs:{id:"title"}},[i("h1",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[t._v(" "+t._s(t.title1)+" ")]),i("h2",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[t._v(" "+t._s(t.title2)+" ")])]),i("div",{attrs:{id:"content"}},[i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"text-block"}},[i("p",[t._v(" Our team will explore how different communities in Atlanta perceive language in different ways. To do this, we’ll be using a dataset of 149 local communities with information about their online behavior on Twitter. Information at the twitter account level allowed us to create summary statistics at the community level such as community size, average number of followers, friends and tweets and understand what are the top follows and topic words in each community. Following a specific methodology, deviations from the normal language can be measured and these deviations are called lexical variation. Our main goal is that the user can understand lexical variation in social media across Atlanta’s communities and have a guide for current local trends online. Examples of potential users are journalists, politicians and society as a whole. ")])]),i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"image-block"}},[i("b-img",{attrs:{id:"logo",center:"",src:a("cf05"),alt:"Center image"}})],1)])])},c=[],h={name:"Intro",data(){return{title1:"Exploring patterns of language variation on social media",title2:"A case study in Atlanta online communities"}}},u=h,d=(a("d8da"),a("2877")),m=Object(d["a"])(u,l,c,!1,null,"a47055ce",null),g=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{attrs:{id:"left"}},[a("transition",{attrs:{name:"move"}},[t.showingTwitters?a("Twitters",{attrs:{followingList:t.followingList}}):t._e()],1),a("transition",{attrs:{name:"move"}},[t.showingHint2?a("div",{attrs:{id:"hint-2"}},[a("h4",[t._v(" Check a community to see the top follows 👉 ")])]):t._e()])],1),a("div",{ref:"right",attrs:{id:"right"}},[a("BarGraph",{attrs:{clusters:t.clusters}}),a("div",{attrs:{id:"right-bottom"}},[a("transition",{attrs:{name:"fade"}},[t.showingCheckbox?a("Checkbox",{attrs:{options:t.options,category:t.category}}):a("div",{attrs:{id:"hint-1"}},[a("h4",[t._v(" Click the bar to show communities under the category ☝️ ")])])],1)],1)],1)])},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart",attrs:{id:"chart"}},[a("TooltipOne",{attrs:{data:t.tipData,visible:t.tipVisible}}),a("div",{ref:"svg-container",attrs:{id:"svg-container"}})],1)},b=[],y=a("5698"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tooltip",attrs:{id:"tooltip-1"}},[a("b-card",{attrs:{title:t.data.category}},[a("b-card-text",[t._v(" "+t._s(t.data.alc)+" ")])],1)],1)},w=[],_={name:"TooltipOne",props:["data","visible"]},k=_,$=(a("c4cc"),Object(d["a"])(k,x,w,!1,null,"790a4940",null)),T=$.exports,C={name:"BarGraph",components:{TooltipOne:T},props:["clusters"],data(){return{tipData:{category:"dddd",alc:"www"},tipVisible:!1,margin:null,width:null,height:null,x:null,y:null,color:null,svg:null}},mounted(){this.margin={top:20,right:20,bottom:70,left:40},this.width=this.$refs.chart.clientWidth-this.margin.left-this.margin.right,this.height=this.$refs.chart.clientHeight-this.margin.top-this.margin.bottom,this.x=y["f"]().padding(.85).rangeRound([0,this.width]),this.y=y["g"]().range([this.height,0]),this.color=y["h"],this.svg=y["i"]("#chart").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.showBarGraph()},methods:{showBarGraph(){y["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/category_avg.csv").then(t=>{t.forEach((function(t){t.alc=+t.avg_lex_change})),console.log("data",t),this.x.domain(t.map((function(t){return t.category}))),this.y.domain([0,.05+y["e"](t,(function(t){return t.alc}))]),this.svg.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+this.height+")").call(y["a"](this.x)).selectAll("text").attr("y",23).attr("x",9).attr("dy","-2em").attr("transform","rotate(90)").style("text-anchor","start"),this.svg.append("g").attr("class","axis axis--y").call(y["b"](this.y)).append("text").attr("y",6).attr("dy","0em").attr("text-anchor","end").text("Average Lexical Change");const e=this.svg.selectAll(".bar").data(t),a=this;e.enter().append("rect").attr("class","bar").attr("x",(function(t){return a.x(t.category)})).attr("y",(function(t){return a.y(t.alc)})).attr("width",20).attr("height",(function(t){return a.height-a.y(t.alc)})).style("fill","#ccc").on("click",(function(t,e){console.log(t);const i=a.clusters.filter(t=>t.category==e.category);a.showCheckbox({category:e.category,options:i}),console.log(i)})).on("mouseover",(function(t,e){console.log("over"),a.tipData.category=e.category,a.tipData.alc=e.alc,y["j"]("#tooltip-1").style("left",t.clientX+"px").style("top",t.clientY-100+"px").transition().duration(500).style("opacity","1")})).on("mouseout",(function(){console.log("out"),y["j"]("#tooltip-1").transition().duration(500).style("opacity","0")}));var i=y["k"](t,(function(t){return t.alc})),n=i/t.length;this.svg.append("path").attr("class","mean").attr("d",y["d"]()([[0,a.y(n)],[a.width,a.y(n)]])).attr("stroke","black"),this.svg.append("text").attr("transform","translate("+(this.width+3)+","+this.y(n)+")").attr("dy","1em").attr("text-anchor","end").style("fill","red").html("Average = $"+n)})},showCheckbox(t){oe.$emit("show-checkbox",t)}}},j=C,O=(a("29f4"),Object(d["a"])(j,v,b,!1,null,"4f2e8d93",null)),S=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.followingList.length>0?a("div",{attrs:{id:"following-list"}},[a("h5",[t._v(" Top Follows of Selected Community ")]),a("div",{attrs:{id:"follows"}},t._l(t.followingList,(function(t){return a("TwitterPreview",{key:t,attrs:{following:t}})})),1)]):t._e()},A=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-link",{attrs:{href:"https://twitter.com/"+t.following}},[t._v(" @"+t._s(t.following)+" ")])],1)},z=[],H={name:"TwitterPreview",props:["following"]},P=H,D=Object(d["a"])(P,N,z,!1,null,null,null),B=D.exports,F={name:"Twitters",components:{TwitterPreview:B},props:["followingList"]},L=F,G=(a("4b5e"),Object(d["a"])(L,E,A,!1,null,"558772b0",null)),W=G.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"checkbox"}},[a("h5",[t._v(" Clusters in Category "+t._s(t.category.toUpperCase())+" ")]),a("b-form-group",[a("b-form-radio-group",{attrs:{id:"checkbox-group",options:t.options},on:{change:function(e){return t.selectCommunity(t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},I=[],M={name:"Checkbox",props:["options","category"],data(){return{selected:null}},methods:{selectCommunity:function(){oe.$emit("select-community",this.selected)}}},J=M,V=Object(d["a"])(J,R,I,!1,null,"96bdc64e",null),Y=V.exports,U={name:"BarChart",components:{BarGraph:S,Checkbox:Y,Twitters:W},data(){return{title:"Exploring patterns of language variation on social media",clusters:[],options:[],followingList:[],category:"",showingCheckbox:!1,showingTwitters:!1,showingHint2:!1}},created:function(){oe.$on("show-checkbox",this.showCheckbox),oe.$on("select-community",this.showTwitters)},beforeDestroy:function(){oe.$off("show-checkbox",this.showCheckbox),oe.$off("select-community",this.showTwitters)},mounted(){y["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(t=>{const e=this;t.forEach((function(t){e.clusters.push({text:t.cluster_name,value:t.cluster_name,category:t.category})}))})},methods:{showCheckbox(t){this.options=t.options,this.category=t.category,this.showingCheckbox=!0,this.showingHint2=!0,this.followingList=[]},showTwitters(t){y["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(e=>{const a=e.find(e=>e.cluster_name==t);this.followingList=a.top_follows.split(",")}),console.log(this.followingList),this.showingTwitters=!0,this.showingHint2=!1}}},X=U,Z=(a("5e50"),Object(d["a"])(X,f,p,!1,null,"c9676f9e",null)),q=Z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{attrs:{id:"left"}},[a("Ranking")],1),a("div",{ref:"right",attrs:{id:"right"}},[a("SizeGraph")],1)])},Q=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart1",attrs:{id:"chart-1"}},[a("div",{ref:"svg-container",attrs:{id:"svg-container-1"}})])},et=[],at={name:"SizeGraph",props:["clusters"],data(){return{margin:null,width:null,height:null,x:null,y:null,color:null,svg:null,xAxis:null,yAxis:null,xScale:null,yScale:null}},created:function(){oe.$on("select-ranking",this.reorder)},beforeDestroy:function(){oe.$off("select-ranking",this.reorder)},mounted(){this.margin={top:20,right:10,bottom:20,left:80},this.width=this.$refs.chart1.clientWidth-this.margin.left-this.margin.right,this.height=this.$refs.chart1.clientHeight-this.margin.top-this.margin.bottom,this.x=y["g"]().range([this.margin.left,this.width-this.margin.right]).nice(),this.y=y["f"]().range([this.height-this.margin.bottom,this.margin.top]).padding(.1),this.color=function(t,e){return e.includes(t.cluster_name)?"#FF930E":"#ccc"},this.svg=y["i"]("#chart-1").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.svg.append("clipPath").attr("id","my-clip-path").append("rect").attr("x",-500).attr("y",this.margin.top).attr("width",this.width+500+this.margin.left+this.margin.right).attr("height",this.height-this.margin.top-this.margin.bottom),this.svg.append("rect").attr("class","zoom-panel").attr("x",-500).attr("y",this.margin.top).attr("width",this.width).attr("height",this.height).style("opacity",0);const t=this;this.xScale=function(e){e.attr("transform",`translate(15, ${t.height-t.margin.bottom})`).call(y["a"](t.x)).call(t=>t.select(".domain").remove())},this.xAxis=this.svg.append("g").attr("class","x-axis").call(this.xScale),this.svg.append("text").attr("x",(this.width+this.margin.left)/2).attr("y",this.height-5).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),this.yScale=function(e,a){e.attr("transform",`translate(${t.margin.left+15}, 0)`).call(y["b"](a).ticks(t.width/80).tickSizeOuter(0))},this.yAxis=this.svg.append("g").attr("class","y-axis").attr("clip-path","url(#my-clip-path)").call(this.yScale,this.y),this.svg.append("text").attr("transform","rotate(-90)").attr("x",-(this.height-this.margin.bottom)/2-50).attr("y",15).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),this.reorder("community_size");const e=y["l"]().scaleExtent([1,32]).extent([[t.margin.left,0],[t.width-t.margin.right,t.height-t.margin.bottom]]).translateExtent([[t.margin.left,0],[t.width-t.margin.right,t.height-t.margin.bottom]]).on("zoom",a);function a(e){t.y.range([t.height-t.margin.bottom,t.margin.top].map(t=>e.transform.applyY(t))),t.svg.selectAll(".bar").attr("y",e=>t.y(e.cluster_name)).attr("height",t.y.bandwidth()),t.yAxis.call(t.yScale,t.y)}this.svg.call(e)},methods:{updateBars(t,e){this.x.domain([0,y["e"](t,t=>t.value)]),this.xAxis.transition().duration(1e3).call(y["a"](this.x)),this.y.domain(t.map(t=>t.cluster_name)),this.yAxis.transition().duration(1e3).call(y["b"](this.y));const a=this.svg.selectAll(".bar").data(t),i=this;a.enter().append("rect").attr("clip-path","url(#my-clip-path)").attr("class","bar").attr("x",i.margin.left+15).attr("y",t=>i.y(t.cluster_name)).attr("width",t=>i.x(t.value)-i.margin.left).attr("height",i.y.bandwidth()).attr("fill",t=>i.color(t,e)),a.transition().duration(250).attr("x",i.margin.left+15).attr("y",t=>i.y(t.cluster_name)).attr("width",t=>i.x(t.value)-i.margin.left).attr("height",i.y.bandwidth()).attr("fill",t=>i.color(t,e)),a.exit().remove()},reorder(t){y["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(e=>{e.forEach(e=>e.value=parseInt(e[t],10)),e.sort((t,e)=>t.value-e.value),e.forEach((t,e)=>t.Rank=e+1),t=[],this.updateBars(e,t)})}}},it=at,nt=(a("2070"),Object(d["a"])(it,tt,et,!1,null,"57699d7e",null)),rt=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(" Ranking Communities ")]),a("b-form-group",{attrs:{label:"Sort the communities by:"}},[a("b-form-radio-group",{staticClass:"button-radio",attrs:{id:"btn-radios-3",options:t.options,name:"radio-btn-stacked",buttons:"",stacked:"","button-variant":"outline-secondary"},on:{change:function(e){return t.selectRanking(t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),a("h4",[t._v(" Zoom in/out and move 👉 ")])],1)},st=[],lt={name:"Ranking",data(){return{selected:"community_size",options:[{text:"community size",value:"community_size"},{text:"average friends count",value:"friends_count_mean"},{text:"average follower count",value:"follower_count_mean"},{text:"average tweet count",value:"tweet_count_mean"}]}},methods:{selectRanking:function(){oe.$emit("select-ranking",this.selected)}}},ct=lt,ht=(a("000d"),Object(d["a"])(ct,ot,st,!1,null,"0d8b6730",null)),ut=ht.exports,dt={name:"BarChart",components:{SizeGraph:rt,Ranking:ut},data(){return{}},created:function(){},beforeDestroy:function(){},mounted(){},methods:{}},mt=dt,gt=(a("fe3b"),Object(d["a"])(mt,K,Q,!1,null,"02dfca9e",null)),ft=gt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{attrs:{id:"left"}},[a("Factors"),a("transition",{attrs:{name:"fade"}},[t.showingHint?a("div",[a("h4",[t._v(" Hover on a dot to see the topic words of the community 👉 ")])]):a("TooltipThree",{attrs:{clusterName:t.clusterName,topicWords:t.topicWords}})],1)],1),a("div",{ref:"right",attrs:{id:"right"}},[a("h2",[t._v(" Investigate how language variation relates to social factors ")]),a("ScatterGraph")],1)])},vt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart3",attrs:{id:"chart-3"}},[a("div",{ref:"svg-container-3",attrs:{id:"svg-container-3"}})])},yt=[],xt={name:"ScatterGraph",props:["clusters"],data(){return{margin:null,width:null,height:null,x:null,y:null,color:null,svg:null,xAxis:null,yAxis:null,xScale:null,yScale:null,xText:"",yText:"",storedData:null}},created:function(){oe.$on("select-factors",this.updateScatterPlot)},beforeDestroy:function(){oe.$off("select-factors",this.updateScatterPlot)},mounted(){this.margin={top:20,right:10,bottom:20,left:80},this.width=this.$refs.chart3.clientWidth-this.margin.left-this.margin.right,this.height=this.$refs.chart3.clientHeight-this.margin.top-this.margin.bottom,this.x=y["g"]().range([0,this.width]),this.y=y["g"]().range([this.height-50,0]),this.svg=y["i"]("#chart-3").append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");const t=this;this.xAxis=this.svg.append("g").attr("class","x-axis").attr("transform","translate(0,"+(t.height-50)+")").call(y["a"](t.x)),this.xText=this.svg.append("text").attr("x",(this.width+this.margin.left)/2).attr("y",this.height-5).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),this.yAxis=this.svg.append("g").attr("class","y-axis").call(y["b"](t.y)),this.yText=this.svg.append("text").attr("transform","rotate(-90)").attr("x",-(this.height-this.margin.bottom)/2-50).attr("y",-50).attr("text-anchor","middle").attr("font-family","Helvetica Neue, Arial").attr("font-weight",700).attr("font-size",20).attr("fill","black").text(""),y["c"]("https://raw.githubusercontent.com/6859-sp21/final-project-atlanta-community/main/data/filtered_data_category.csv").then(t=>{this.storedData=t,console.log(this.storedData),this.updateScatterPlot("community_size","lexical_change","all")})},methods:{updateScatterPlot(t,e,a){console.log(t,e,a);const i=this,n="all"!=a?i.storedData.filter(t=>t.category==a):i.storedData;console.log(i.storedData),console.log(n),this.x.domain([0,y["e"](n,e=>parseFloat(e[t]))]),this.xAxis.transition().duration(1e3).call(y["a"](this.x)),this.xText.text(t),this.y.domain([0,y["e"](n,t=>parseFloat(t[e]))]),this.yAxis.transition().duration(1e3).call(y["b"](this.y)),this.yText.text(e);const r=this.svg.selectAll(".dot").data(n.filter((function(t,e){return e<1500})));console.log("Here"),r.enter().append("circle").attr("class","dot").attr("r",5).style("fill","#e25609").style("opacity",.3).style("stroke","white").on("mouseover",(function(t,e){console.log("over"),console.log(t);const a=e.cluster_name,i=e.topic_words;oe.$emit("show-tooltip-3",a,i)})).on("mouseout",(function(){console.log("out"),oe.$emit("hide-tooltip-3")})).transition().delay((function(t,e){return 3*e})).duration(2e3).attr("cx",(function(e){return i.x(e[t])})).attr("cy",(function(t){return i.y(t[e])})),console.log("Here"),r.transition().delay((function(t,e){return 3*e})).duration(2e3).attr("cx",(function(e){return i.x(e[t])})).attr("cy",(function(t){return i.y(t[e])})),console.log("Here"),r.exit().remove(),console.log("Here")}}},wt=xt,_t=(a("7143"),Object(d["a"])(wt,bt,yt,!1,null,"484254cd",null)),kt=_t.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form-group",{attrs:{id:"input-group-1",label:"Choose two factors:","label-for":"m-2"}},[a("b-form-select",{attrs:{options:t.factors},on:{change:t.selectFactors},model:{value:t.factor1,callback:function(e){t.factor1=e},expression:"factor1"}}),a("b-form-select",{attrs:{options:t.factors},on:{change:t.selectFactors},model:{value:t.factor2,callback:function(e){t.factor2=e},expression:"factor2"}})],1),a("b-form-group",{attrs:{id:"input-group-3",label:"Choose a category:","label-for":"m-2"}},[a("b-form-select",{attrs:{options:t.categories},on:{change:t.selectFactors},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)],1)},Tt=[],Ct={name:"Ranking",data(){return{factor1:"community_size",factor2:"lexical_change",category:"all",categories:["all","atlanta","beauty","education","entertainment","health","other","politics","religion","social_justice","sports"],factors:["community_size","lexical_change","ideology_lexical_change","male_ratio","friends_count_mean","friends_count_median","follower_count_mean","follower_count_median","tweet_count_mean","tweet_count_median","tweet_count_rank"]}},methods:{selectFactors:function(){oe.$emit("select-factors",this.factor1,this.factor2,this.category)}}},jt=Ct,Ot=Object(d["a"])(jt,$t,Tt,!1,null,"0adbde63",null),St=Ot.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tooltip-3"}},[a("b-card",[a("b-card-text",[t._v(" The "),a("b",[t._v(t._s(t.clusterName))]),t._v(" community described with the following topic words: "+t._s(t.topicWords)+" ")])],1)],1)},At=[],Nt={name:"TooltipThree",props:["clusterName","topicWords"]},zt=Nt,Ht=Object(d["a"])(zt,Et,At,!1,null,"1408b2a1",null),Pt=Ht.exports,Dt={name:"BarChart",components:{ScatterGraph:kt,Factors:St,TooltipThree:Pt},data(){return{clusterName:"",topicWords:[],showingHint:!0}},created:function(){oe.$on("show-tooltip-3",this.showTooltip),oe.$on("hide-tooltip-3",this.hideTooltip)},beforeDestroy:function(){oe.$off("show-tooltip-3",this.showTooltip),oe.$off("hide-tooltip-3",this.hideTooltip)},methods:{showTooltip(t,e){console.log("show"),this.clusterName=t,this.topicWords=e,this.showingHint=!1},hideTooltip(){this.showingHint=!0,console.log("hide")}}},Bt=Dt,Ft=(a("75c3"),Object(d["a"])(Bt,pt,vt,!1,null,"396eb944",null)),Lt=Ft.exports,Gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spacing"},[a("h5",[t._v("⬇️ cotinue...")])])}],Rt={name:"Spacing",data(){return{}}},It=Rt,Mt=(a("b492"),Object(d["a"])(It,Gt,Wt,!1,null,"35107be8",null)),Jt=Mt.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"thanks"}},[i("div",{attrs:{id:"thanks-title"}},[i("h1",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}]},[t._v(" "+t._s(t.title1)+" ")])]),i("div",{attrs:{id:"thanks-content"}},[i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"thanks-text-block"}},[i("b-link",{attrs:{href:"https://github.com/6859-sp21/final-project-atlanta-community"}},[t._v("go to our github page")])],1),i("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],attrs:{id:"thanks-image-block"}},[i("b-img",{attrs:{id:"thanks-logo",center:"",src:a("cf05"),alt:"Center image"}})],1)])])},Yt=[],Ut={name:"Thanks",data(){return{title1:"Thanks for exploring"}}},Xt=Ut,Zt=(a("b402"),Object(d["a"])(Xt,Vt,Yt,!1,null,"629ad3b0",null)),qt=Zt.exports,Kt={components:{Intro:g,BarChart:q,SizeChart:ft,ScatterChart:Lt,Spacing:Jt,Thanks:qt},name:"MainPage",data(){return{text:"Welcome to Novid"}}},Qt=Kt,te=(a("205e"),Object(d["a"])(Qt,o,s,!1,null,"6d5ee08e",null)),ee=te.exports,ae=a("5f5b"),ie=a("b1e0");a("f9e3"),a("2dd8");const ne=new IntersectionObserver((t,e)=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("enter"),e.unobserve(t.target))})});var re={bind(t){t.classList.add("before-enter"),ne.observe(t)}};i["default"].use(ae["a"]),i["default"].use(ie["a"]),i["default"].use(r.a),i["default"].directive("scrollanimation",re);const oe=new i["default"];i["default"].config.productionTip=!1,new i["default"]({render:t=>t(ee)}).$mount("#app")},"5e50":function(t,e,a){"use strict";a("e3e3")},7028:function(t,e,a){},7143:function(t,e,a){"use strict";a("eefc")},7528:function(t,e,a){},"75c3":function(t,e,a){"use strict";a("4d68")},"7a36":function(t,e,a){},8718:function(t,e,a){},"99e1":function(t,e,a){},a5ce:function(t,e,a){},aba8:function(t,e,a){},b402:function(t,e,a){"use strict";a("bee0")},b492:function(t,e,a){"use strict";a("be3c")},be3c:function(t,e,a){},bee0:function(t,e,a){},c4cc:function(t,e,a){"use strict";a("7028")},cf05:function(t,e,a){t.exports=a.p+"img/logo.d2bca33d.png"},d8da:function(t,e,a){"use strict";a("8718")},e3e3:function(t,e,a){},eefc:function(t,e,a){},fe3b:function(t,e,a){"use strict";a("a5ce")}});
//# sourceMappingURL=app.213adaed.js.map