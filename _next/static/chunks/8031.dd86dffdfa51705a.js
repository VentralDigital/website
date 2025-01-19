"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8031],{88031:function(t,e,a){a.d(e,{diagram:function(){return p}});var r=a(97364),i=a(30086),n=a(44748),d=a(79973),s=a(65480),l=a(34850);a(58820),a(68148),a(92769);let o={},getGraphId=function(t){let e=Object.entries(o).find(e=>e[1].label===t);if(e)return e[0]},insertMarkers=function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},p={parser:r.p,db:r.d,renderer:{draw:function(t,e,a,r){let p;let g=(0,s.c)().class;o={},s.l.info("Rendering diagram "+t);let h=(0,s.c)().securityLevel;"sandbox"===h&&(p=(0,i.Ys)("#i"+e));let c="sandbox"===h?(0,i.Ys)(p.nodes()[0].contentDocument.body):(0,i.Ys)("body"),f=c.select(`[id='${e}']`);insertMarkers(f);let u=new d.k({multigraph:!0});u.setGraph({isMultiGraph:!0}),u.setDefaultEdgeLabel(function(){return{}});let x=r.db.getClasses(),y=Object.keys(x);for(let t of y){let e=x[t],a=l.s.drawClass(f,e,g,r);o[a.id]=a,u.setNode(a.id,a),s.l.info("Org height: "+a.height)}let b=r.db.getRelations();b.forEach(function(t){s.l.info("tjoho"+getGraphId(t.id1)+getGraphId(t.id2)+JSON.stringify(t)),u.setEdge(getGraphId(t.id1),getGraphId(t.id2),{relation:t},t.title||"DEFAULT")});let m=r.db.getNotes();m.forEach(function(t){s.l.debug(`Adding note: ${JSON.stringify(t)}`);let e=l.s.drawNote(f,t,g,r);o[e.id]=e,u.setNode(e.id,e),t.class&&t.class in x&&u.setEdge(t.id,getGraphId(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,n.bK)(u),u.nodes().forEach(function(t){void 0!==t&&void 0!==u.node(t)&&(s.l.debug("Node "+t+": "+JSON.stringify(u.node(t))),c.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(u.node(t).x-u.node(t).width/2)+","+(u.node(t).y-u.node(t).height/2)+" )"))}),u.edges().forEach(function(t){void 0!==t&&void 0!==u.edge(t)&&(s.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(u.edge(t))),l.s.drawEdge(f,u.edge(t),u.edge(t).relation,g,r))});let w=f.node().getBBox(),k=w.width+40,T=w.height+40;(0,s.i)(f,T,k,g.useMaxWidth);let E=`${w.x-20} ${w.y-20} ${k} ${T}`;s.l.debug(`viewBox ${E}`),f.attr("viewBox",E)}},styles:r.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}},34850:function(t,e,a){a.d(e,{p:function(){return parseMember},s:function(){return d}});var r=a(30086),i=a(65480);let n=0,getClassTitleString=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},parseMember=function(t){let e="",a="",r="",n="",d=t.substring(0,1),s=t.substring(t.length-1,t.length);d.match(/[#+~-]/)&&(n=d);let l=/[\s\w)~]/;s.match(l)||(a=parseClassifier(s));let o=""===n?0:1,p=""===a?t.length:t.length-1;t=t.substring(o,p);let g=t.indexOf("("),h=t.indexOf(")"),c=g>1&&h>g&&h<=t.length;if(c){let d=t.substring(0,g).trim(),s=t.substring(g+1,h);if(e=n+d+"("+(0,i.x)(s.trim())+")",h<t.length){let n=t.substring(h+1,h+2);""!==a||n.match(l)?r=t.substring(h+1).trim():(a=parseClassifier(n),r=t.substring(h+2).trim()),""!==r&&(":"===r.charAt(0)&&(r=r.substring(1).trim()),e+=r=" : "+(0,i.x)(r))}}else e=n+(0,i.x)(t);return{displayText:e,cssStyle:a}},addTspan=function(t,e,a,r){let i=parseMember(e),n=t.append("tspan").attr("x",r.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),a||n.attr("dy",r.textHeight)},parseClassifier=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},d={getClassTitleString,drawClass:function(t,e,a,r){let n;i.l.debug("Rendering class ",e,a);let d=e.id,s={id:d,label:e.id,width:0,height:0},l=t.append("g").attr("id",r.db.lookUpDomId(d)).attr("class","classGroup");n=e.link?l.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):l.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let o=!0;e.annotations.forEach(function(t){let e=n.append("tspan").text("\xab"+t+"\xbb");o||e.attr("dy",a.textHeight),o=!1});let p=getClassTitleString(e),g=n.append("tspan").text(p).attr("class","title");o||g.attr("dy",a.textHeight);let h=n.node().getBBox().height,c=l.append("line").attr("x1",0).attr("y1",a.padding+h+a.dividerMargin/2).attr("y2",a.padding+h+a.dividerMargin/2),f=l.append("text").attr("x",a.padding).attr("y",h+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");o=!0,e.members.forEach(function(t){addTspan(f,t,o,a),o=!1});let u=f.node().getBBox(),x=l.append("line").attr("x1",0).attr("y1",a.padding+h+a.dividerMargin+u.height).attr("y2",a.padding+h+a.dividerMargin+u.height),y=l.append("text").attr("x",a.padding).attr("y",h+2*a.dividerMargin+u.height+a.textHeight).attr("fill","white").attr("class","classText");o=!0,e.methods.forEach(function(t){addTspan(y,t,o,a),o=!1});let b=l.node().getBBox();var m=" ";e.cssClasses.length>0&&(m+=e.cssClasses.join(" "));let w=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",b.width+2*a.padding).attr("height",b.height+a.padding+.5*a.dividerMargin).attr("class",m),k=w.node().getBBox().width;return n.node().childNodes.forEach(function(t){t.setAttribute("x",(k-t.getBBox().width)/2)}),e.tooltip&&n.insert("title").text(e.tooltip),c.attr("x2",k),x.attr("x2",k),s.width=k,s.height=b.height+a.padding+.5*a.dividerMargin,s},drawEdge:function(t,e,a,d,s){let l,o,p,g,h,c;let getRelationType=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let f=e.points,u=(0,r.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(r.$0Z),x=t.append("path").attr("d",u(f)).attr("id","edge"+n).attr("class","relation"),y="";d.arrowMarkerAbsolute&&(y=(y=(y=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&x.attr("class","relation dashed-line"),10==a.relation.lineType&&x.attr("class","relation dotted-line"),"none"!==a.relation.type1&&x.attr("marker-start","url("+y+"#"+getRelationType(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&x.attr("marker-end","url("+y+"#"+getRelationType(a.relation.type2)+"End)");let b=e.points.length,m=i.u.calcLabelPosition(e.points);if(l=m.x,o=m.y,b%2!=0&&b>1){let t=i.u.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=i.u.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[b-1]);i.l.debug("cardinality_1_point "+JSON.stringify(t)),i.l.debug("cardinality_2_point "+JSON.stringify(r)),p=t.x,g=t.y,h=r.x,c=r.y}if(void 0!==a.title){let e=t.append("g").attr("class","classLabel"),r=e.append("text").attr("class","label").attr("x",l).attr("y",o).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=r;let i=r.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-d.padding/2).attr("y",i.y-d.padding/2).attr("width",i.width+d.padding).attr("height",i.height+d.padding)}if(i.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type1").attr("x",p).attr("y",g).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type2").attr("x",h).attr("y",c).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}n++},drawNote:function(t,e,a,r){i.l.debug("Rendering note ",e,a);let n=e.id,d={id:n,text:e.text,width:0,height:0},s=t.append("g").attr("id",n).attr("class","classGroup"),l=s.append("text").attr("y",a.textHeight+a.padding).attr("x",0),o=JSON.parse(`"${e.text}"`).split("\n");o.forEach(function(t){i.l.debug(`Adding line: ${t}`),l.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)});let p=s.node().getBBox(),g=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin),h=g.node().getBBox().width;return l.node().childNodes.forEach(function(t){t.setAttribute("x",(h-t.getBBox().width)/2)}),d.width=h,d.height=p.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin,d},parseMember}}}]);