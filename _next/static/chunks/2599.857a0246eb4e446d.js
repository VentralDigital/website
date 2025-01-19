"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2599],{37793:function(e,t,l){l.d(t,{a:function(){return addHtmlLabel}});var r=l(95987);function addHtmlLabel(e,t){var l=e.append("foreignObject").attr("width","100000"),a=l.append("xhtml:div");a.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":a.insert(o);break;case"object":a.insert(function(){return o});break;default:a.html(o)}r.bg(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap");var n=a.node().getBoundingClientRect();return l.attr("width",n.width).attr("height",n.height),l}},95987:function(e,t,l){l.d(t,{$p:function(){return applyClass},O1:function(){return edgeToId},WR:function(){return applyTransition},bF:function(){return isSubgraph},bg:function(){return applyStyle}});var r=l(23789),a=l(38348);function isSubgraph(e,t){return!!e.children(t).length}function edgeToId(e){return escapeId(e.v)+":"+escapeId(e.w)+":"+escapeId(e.name)}var o=/:/g;function escapeId(e){return e?String(e).replace(o,"\\:"):""}function applyStyle(e,t){t&&e.attr("style",t)}function applyClass(e,t,l){t&&e.attr("class",t).attr("class",l+" "+e.attr("class"))}function applyTransition(e,t){var l=t.graph();if(r.Z(l)){var o=l.transition;if(a.Z(o))return o(e)}return e}},42599:function(e,t,l){l.d(t,{diagram:function(){return n}});var r=l(60939),a=l(14829),o=l(65480);l(30086),l(79973),l(44748),l(55253),l(58820),l(68148),l(92769);let n={parser:r.p,db:r.f,renderer:a.f,styles:a.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.q)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),a.f.setConf(e.flowchart),r.f.clear(),r.f.setGen("gen-2")}}},14829:function(e,t,l){l.d(t,{a:function(){return flowStyles},f:function(){return u}});var r=l(79973),a=l(30086),o=l(60939),n=l(65480),i=l(77940),s=l(37793),d=l(43864),c=l(82002),methods_channel=(e,t)=>d.Z.lang.round(c.Z.parse(e)[t]),p=l(46828);let b={},addVertices=function(e,t,l,r,a,o){let i=r.select(`[id="${l}"]`),d=Object.keys(e);d.forEach(function(l){let r;let d=e[l],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let p=(0,n.k)(d.styles),b=void 0!==d.text?d.text:d.id;if(n.l.info("vertex",d,d.labelType),"markdown"===d.labelType)n.l.info("vertex",d,d.labelType);else if((0,n.n)((0,n.c)().flowchart.htmlLabels)){let e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};(r=(0,s.a)(i,e).node()).parentNode.removeChild(r)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));let t=b.split(n.e.lineBreakRegex);for(let l of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=l,e.appendChild(t)}r=e}let u=0,f="";switch(d.type){case"round":u=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}t.setNode(d.id,{labelStyle:p.labelStyle,shape:f,labelText:b,labelType:d.labelType,rx:u,ry:u,class:c,style:p.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:o.db.getTooltip(d.id)||"",domId:o.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,n.c)().flowchart.padding}),n.l.info("setNode",{labelStyle:p.labelStyle,labelType:d.labelType,shape:f,labelText:b,rx:u,ry:u,class:c,style:p.style,id:d.id,domId:o.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,n.c)().flowchart.padding})})},addEdges=function(e,t,l){let r,o;n.l.info("abc78 edges = ",e);let i=0,s={};if(void 0!==e.defaultStyle){let t=(0,n.k)(e.defaultStyle);r=t.style,o=t.labelStyle}e.forEach(function(l){i++;let d="L-"+l.start+"-"+l.end;void 0===s[d]?s[d]=0:s[d]++,n.l.info("abc78 new entry",d,s[d]);let c=d+"-"+s[d];n.l.info("abc78 new link id to be used is",d,c,s[d]);let p="LS-"+l.start,u="LE-"+l.end,f={style:"",labelStyle:""};switch(f.minlen=l.length||1,"arrow_open"===l.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",l.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let h="",w="";switch(l.stroke){case"normal":h="fill:none;",void 0!==r&&(h=r),void 0!==o&&(w=o),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==l.style){let e=(0,n.k)(l.style);h=e.style,w=e.labelStyle}f.style=f.style+=h,f.labelStyle=f.labelStyle+=w,void 0!==l.interpolate?f.curve=(0,n.o)(l.interpolate,a.c_6):void 0!==e.defaultInterpolate?f.curve=(0,n.o)(e.defaultInterpolate,a.c_6):f.curve=(0,n.o)(b.curve,a.c_6),void 0===l.text?void 0!==l.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=l.labelType,f.label=l.text.replace(n.e.lineBreakRegex,"\n"),void 0===l.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=c,f.classes="flowchart-link "+p+" "+u,t.setEdge(l.start,l.end,f,i)})},draw=async function(e,t,l,s){let d,c;n.l.info("Drawing flowchart"),s.db.clear(),o.f.setGen("gen-2"),s.parser.parse(e);let p=s.db.getDirection();void 0===p&&(p="TD");let{securityLevel:b,flowchart:u}=(0,n.c)(),f=u.nodeSpacing||50,h=u.rankSpacing||50;"sandbox"===b&&(d=(0,a.Ys)("#i"+t));let w="sandbox"===b?(0,a.Ys)(d.nodes()[0].contentDocument.body):(0,a.Ys)("body"),g="sandbox"===b?d.nodes()[0].contentDocument:document,y=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:p,nodesep:f,ranksep:h,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),k=s.db.getSubGraphs();n.l.info("Subgraphs - ",k);for(let e=k.length-1;e>=0;e--)c=k[e],n.l.info("Subgraph - ",c),s.db.addVertex(c.id,{text:c.title,type:c.labelType},"group",void 0,c.classes,c.dir);let x=s.db.getVertices(),m=s.db.getEdges();n.l.info("Edges",m);let v=0;for(v=k.length-1;v>=0;v--){c=k[v],(0,a.td_)("cluster").append("text");for(let e=0;e<c.nodes.length;e++)n.l.info("Setting up subgraphs",c.nodes[e],c.id),y.setParent(c.nodes[e],c.id)}addVertices(x,y,t,w,g,s),addEdges(m,y);let S=w.select(`[id="${t}"]`),T=w.select("#"+t+" g");if(await (0,i.r)(T,y,["point","circle","cross"],"flowchart",t),n.u.insertTitle(S,"flowchartTitleText",u.titleTopMargin,s.db.getDiagramTitle()),(0,n.p)(y,S,u.diagramPadding,u.useMaxWidth),s.db.indexNodes("subGraph"+v),!u.htmlLabels){let e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let t of e){let e=t.getBBox(),l=g.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("rx",0),l.setAttribute("ry",0),l.setAttribute("width",e.width),l.setAttribute("height",e.height),t.insertBefore(l,t.firstChild)}}let _=Object.keys(x);_.forEach(function(e){let l=x[e];if(l.link){let r=(0,a.Ys)("#"+t+' [id="'+e+'"]');if(r){let e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",l.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",l.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===b?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):l.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",l.linkTarget);let t=r.insert(function(){return e},":first-child"),a=r.select(".label-container");a&&t.append(function(){return a.node()});let o=r.select(".label");o&&t.append(function(){return o.node()})}}})},u={setConf:function(e){let t=Object.keys(e);for(let l of t)b[l]=e[l]},addVertices,addEdges,getClasses:function(e,t){n.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw},fade=(e,t)=>{let l=methods_channel(e,"r"),r=methods_channel(e,"g"),a=methods_channel(e,"b");return p.Z(l,r,a,t)},flowStyles=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

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
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
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
`}}]);