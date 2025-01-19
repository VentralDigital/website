"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5034],{75034:function(e,t,r){r.d(t,{diagram:function(){return p}});var a=r(60939),o=r(30086),l=r(37677),i=r(65480),n=r(90325);r(58820),r(68148),r(92769);let findCommonAncestor=(e,t,r)=>{let{parentById:a}=r,o=new Set,l=e;for(;l;){if(o.add(l),l===t)return l;l=a[l]}for(l=t;l;){if(o.has(l))return l;l=a[l]}return"root"},s=new n,d={},c={},h={},addVertices=async function(e,t,r,a,o,n,s){let d=r.select(`[id="${t}"]`),c=d.insert("g").attr("class","nodes"),p=Object.keys(e);return await Promise.all(p.map(async function(t){let r,s;let d=e[t],p="default";d.classes.length>0&&(p=d.classes.join(" ")),p+=" flowchart-label";let u=(0,i.k)(d.styles),b=void 0!==d.text?d.text:d.id,g={width:0,height:0},y=[{id:d.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:d.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:d.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:d.id+"-north",layoutOptions:{"port.side":"NORTH"}}],w=0,k="",f={};switch(d.type){case"round":w=5,k="rect";break;case"square":case"group":default:k="rect";break;case"diamond":k="question",f={portConstraints:"FIXED_SIDE"};break;case"hexagon":k="hexagon";break;case"odd":case"odd_right":k="rect_left_inv_arrow";break;case"lean_right":k="lean_right";break;case"lean_left":k="lean_left";break;case"trapezoid":k="trapezoid";break;case"inv_trapezoid":k="inv_trapezoid";break;case"circle":k="circle";break;case"ellipse":k="ellipse";break;case"stadium":k="stadium";break;case"subroutine":k="subroutine";break;case"cylinder":k="cylinder";break;case"doublecircle":k="doublecircle"}let x={labelStyle:u.labelStyle,shape:k,labelText:b,labelType:d.labelType,rx:w,ry:w,class:p,style:u.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:o.db.getTooltip(d.id)||"",domId:o.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,i.c)().flowchart.padding};if("group"!==x.type)r=(s=await (0,l.e)(c,x,d.dir)).node().getBBox();else{a.createElementNS("http://www.w3.org/2000/svg","text");let{shapeSvg:e,bbox:t}=await (0,l.l)(c,x,void 0,!0);g.width=t.width,g.wrappingWidth=(0,i.c)().flowchart.wrappingWidth,g.height=t.height,g.labelNode=e.node(),x.labelData=g}let m={id:d.id,ports:"diamond"===d.type?y:[],layoutOptions:f,labelText:b,labelData:g,domId:o.db.lookUpDomId(d.id),width:null==r?void 0:r.width,height:null==r?void 0:r.height,type:d.type,el:s,parent:n.parentById[d.id]};h[x.id]=m})),s},getNextPosition=(e,t,r)=>{let a={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return a.TD=a.TB,i.l.info("abc88",r,t,e),a[r][t][e]},getNextPort=(e,t,r)=>{if(i.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!d[e])switch(r){case"TB":case"TD":d[e]={inPosition:"north",outPosition:"south"};break;case"BT":d[e]={inPosition:"south",outPosition:"north"};break;case"RL":d[e]={inPosition:"east",outPosition:"west"};break;case"LR":d[e]={inPosition:"west",outPosition:"east"}}let a="in"===t?d[e].inPosition:d[e].outPosition;return"in"===t?d[e].inPosition=getNextPosition(d[e].inPosition,t,r):d[e].outPosition=getNextPosition(d[e].outPosition,t,r),a},getEdgeStartEndPoint=(e,t)=>{let r=e.start,a=e.end,o=r,l=a,i=h[r],n=h[a];return i&&n?("diamond"===i.type&&(r=`${r}-${getNextPort(r,"out",t)}`),"diamond"===n.type&&(a=`${a}-${getNextPort(a,"in",t)}`),{source:r,target:a,sourceId:o,targetId:l}):{source:r,target:a}},addEdges=function(e,t,r,a){let n,s;i.l.info("abc78 edges = ",e);let d=a.insert("g").attr("class","edgeLabels"),h={},p=t.db.getDirection();if(void 0!==e.defaultStyle){let t=(0,i.k)(e.defaultStyle);n=t.style,s=t.labelStyle}return e.forEach(function(t){let a="L-"+t.start+"-"+t.end;void 0===h[a]?h[a]=0:h[a]++,i.l.info("abc78 new entry",a,h[a]);let u=a+"-"+h[a];i.l.info("abc78 new link id to be used is",a,u,h[a]);let b="LS-"+t.start,g="LE-"+t.end,y={style:"",labelStyle:""};switch(y.minlen=t.length||1,"arrow_open"===t.type?y.arrowhead="none":y.arrowhead="normal",y.arrowTypeStart="arrow_open",y.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":y.arrowTypeStart="arrow_cross";case"arrow_cross":y.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":y.arrowTypeStart="arrow_point";case"arrow_point":y.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":y.arrowTypeStart="arrow_circle";case"arrow_circle":y.arrowTypeEnd="arrow_circle"}let w="",k="";switch(t.stroke){case"normal":w="fill:none;",void 0!==n&&(w=n),void 0!==s&&(k=s),y.thickness="normal",y.pattern="solid";break;case"dotted":y.thickness="normal",y.pattern="dotted",y.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":y.thickness="thick",y.pattern="solid",y.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let e=(0,i.k)(t.style);w=e.style,k=e.labelStyle}y.style=y.style+=w,y.labelStyle=y.labelStyle+=k,void 0!==t.interpolate?y.curve=(0,i.o)(t.interpolate,o.c_6):void 0!==e.defaultInterpolate?y.curve=(0,i.o)(e.defaultInterpolate,o.c_6):y.curve=(0,i.o)(c.curve,o.c_6),void 0===t.text?void 0!==t.style&&(y.arrowheadStyle="fill: #333"):(y.arrowheadStyle="fill: #333",y.labelpos="c"),y.labelType=t.labelType,y.label=t.text.replace(i.e.lineBreakRegex,"\n"),void 0===t.style&&(y.style=y.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),y.labelStyle=y.labelStyle.replace("color:","fill:"),y.id=u,y.classes="flowchart-link "+b+" "+g;let f=(0,l.f)(d,y),{source:x,target:m,sourceId:E,targetId:_}=getEdgeStartEndPoint(t,p);i.l.debug("abc78 source and target",x,m),r.edges.push({id:"e"+t.start+t.end,sources:[x],targets:[m],sourceId:E,targetId:_,labelEl:f,labels:[{width:y.width,height:y.height,orgWidth:y.width,orgHeight:y.height,text:y.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:y})}),r},addMarkersToEdge=function(e,t,r,a){let o="";switch(a&&(o=(o=(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+o+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+o+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+o+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+o+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+o+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+o+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+o+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+o+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+o+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+o+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+o+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+o+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+o+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+o+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+o+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+o+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+o+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+o+"#"+r+"-lollipopEnd)")}},addSubGraphs=function(e){let t={parentById:{},childrenById:{}},r=e.getSubGraphs();return i.l.info("Subgraphs - ",r),r.forEach(function(e){e.nodes.forEach(function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)})}),r.forEach(function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]}),t},calcOffset=function(e,t,r){let a=findCommonAncestor(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};let o=h[a].offset;return{x:o.posX,y:o.posY}},insertEdge=function(e,t,r,a,l){let i=calcOffset(t.sourceId,t.targetId,l),n=t.sections[0].startPoint,s=t.sections[0].endPoint,d=t.sections[0].bendPoints?t.sections[0].bendPoints:[],c=d.map(e=>[e.x+i.x,e.y+i.y]),h=[[n.x+i.x,n.y+i.y],...c,[s.x+i.x,s.y+i.y]],p=(0,o.jvg)().curve(o.c_6),u=e.insert("path").attr("d",p(h)).attr("class","path").attr("fill","none"),b=e.insert("g").attr("class","edgeLabel"),g=(0,o.Ys)(b.node().appendChild(t.labelEl)),y=g.node().firstChild.getBoundingClientRect();g.attr("width",y.width),g.attr("height",y.height),b.attr("transform",`translate(${t.labels[0].x+i.x}, ${t.labels[0].y+i.y})`),addMarkersToEdge(u,r,a.type,a.arrowMarkerAbsolute)},insertChildren=(e,t)=>{e.forEach(e=>{e.children||(e.children=[]);let r=t.childrenById[e.id];r&&r.forEach(t=>{e.children.push(h[t])}),insertChildren(e.children,t)})},draw=async function(e,t,r,a){var n;let c,p;a.db.clear(),h={},d={},a.db.setGen("gen-2"),a.parser.parse(e);let u=(0,o.Ys)("body").append("div").attr("style","height:400px").attr("id","cy"),b={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(i.l.info("Drawing flowchart using v3 renderer",s),a.db.getDirection()){case"BT":b.layoutOptions["elk.direction"]="UP";break;case"TB":b.layoutOptions["elk.direction"]="DOWN";break;case"LR":b.layoutOptions["elk.direction"]="RIGHT";break;case"RL":b.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:g,flowchart:y}=(0,i.c)();"sandbox"===g&&(c=(0,o.Ys)("#i"+t));let w="sandbox"===g?(0,o.Ys)(c.nodes()[0].contentDocument.body):(0,o.Ys)("body"),k="sandbox"===g?c.nodes()[0].contentDocument:document,f=w.select(`[id="${t}"]`);(0,l.a)(f,["point","circle","cross"],a.type,a.arrowMarkerAbsolute);let x=a.db.getVertices(),m=a.db.getSubGraphs();i.l.info("Subgraphs - ",m);for(let e=m.length-1;e>=0;e--)p=m[e],a.db.addVertex(p.id,{text:p.title,type:p.labelType},"group",void 0,p.classes,p.dir);let E=f.insert("g").attr("class","subgraphs"),_=addSubGraphs(a.db);b=await addVertices(x,t,w,k,a,_,b);let T=f.insert("g").attr("class","edges edgePath"),S=a.db.getEdges();b=addEdges(S,a,b,f);let v=Object.keys(h);v.forEach(e=>{let t=h[e];t.parent||b.children.push(t),void 0!==_.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),insertChildren(b.children,_),i.l.info("after layout",JSON.stringify(b,null,2));let $=await s.layout(b);drawNodes(0,0,$.children,f,E,a,0),i.l.info("after layout",$),null==(n=$.edges)||n.map(e=>{insertEdge(T,e,e.edgeData,a,_)}),(0,i.p)({},f,y.diagramPadding,y.useMaxWidth),u.remove()},drawNodes=(e,t,r,a,o,l,n)=>{r.forEach(function(r){if(r){if(h[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:n,width:r.width,height:r.height},"group"===r.type){let a=o.insert("g").attr("class","subgraph");a.insert("rect").attr("class","subgraph subgraph-lvl-"+n%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);let l=a.insert("g").attr("class","label"),s=(0,i.c)().flowchart.htmlLabels?r.labelData.width/2:0;l.attr("transform",`translate(${r.labels[0].x+e+r.x+s}, ${r.labels[0].y+t+r.y+3})`),l.node().appendChild(r.labelData.labelNode),i.l.info("Id (UGH)= ",r.type,r.labels)}else i.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)}}),r.forEach(function(r){r&&"group"===r.type&&drawNodes(e+r.x,t+r.y,r.children,a,o,l,n+1)})},genSections=e=>{let t="";for(let r=0;r<5;r++)t+=`
      .subgraph-lvl-${r} {
        fill: ${e[`surface${r}`]};
        stroke: ${e[`surfacePeer${r}`]};
      }
    `;return t},p={db:a.d,renderer:{getClasses:function(e,t){i.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(e){return{}}},draw},parser:a.p,styles:e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${genSections(e)}
`}}}]);