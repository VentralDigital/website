"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7677],{37677:function(t,e,r){r.d(e,{a:function(){return insertMarkers$1},b:function(){return clear$1},c:function(){return createLabel$1},d:function(){return clear},e:function(){return insertNode},f:function(){return insertEdgeLabel},g:function(){return insertEdge},h:function(){return positionEdgeLabel},i:function(){return intersectRect$1},l:function(){return labelHelper},p:function(){return positionNode},s:function(){return setNodeElem},u:function(){return updateNodeBounds}});var a=r(65480),i=r(30086),n=r(5684),l=r(34850);let s={extension:(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",e+"-extensionStart").attr("class","marker extension "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-compositionStart").attr("class","marker composition "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},point:(t,e)=>{t.append("marker").attr("id",e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e)=>{t.append("marker").attr("id",e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e)=>{t.append("marker").attr("id",e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},insertMarkers$1=(t,e,r,a)=>{e.forEach(e=>{s[e](t,r,a)})},createLabel$1=(t,e,r,n)=>{let l=t||"";if("object"==typeof l&&(l=l[0]),(0,a.n)((0,a.c)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),a.l.info("vertexText"+l);let t={isNode:n,label:(0,a.H)(l).replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),labelStyle:e.replace("fill:","color:")};return function(t){var e;let r=(0,i.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=r.append("xhtml:div"),n=t.label,l=t.isNode?"nodeLabel":"edgeLabel";return a.html('<span class="'+l+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+n+"</span>"),(e=t.labelStyle)&&a.attr("style",e),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}(t)}{let t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));for(let e of"string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[]){let a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},labelHelper=async(t,e,r,l)=>{let s,d,o;let c=e.useHtmlLabels||(0,a.n)((0,a.c)().flowchart.htmlLabels);s=r||"node default";let h=t.insert("g").attr("class",s).attr("id",e.domId||e.id),p=h.insert("g").attr("class","label").attr("style",e.labelStyle);d=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];let g=p.node(),y=(o="markdown"===e.labelType?(0,n.c)(p,(0,a.d)((0,a.H)(d),(0,a.c)()),{useHtmlLabels:c,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):g.appendChild(createLabel$1((0,a.d)((0,a.H)(d),(0,a.c)()),e.labelStyle,!1,l))).getBBox(),u=e.padding/2;if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=o.children[0],e=(0,i.Ys)(o),r=t.getElementsByTagName("img");if(r){let t=""===d.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map(e=>new Promise(r=>e.addEventListener("load",function(){if(e.style.display="flex",e.style.flexDirection="column",t){let t=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize;e.style.width=5*parseInt(t,10)+"px"}else e.style.width="100%";r(e)}))))}y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}return c?p.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"):p.attr("transform","translate(0, "+-y.height/2+")"),e.centerLabel&&p.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),p.insert("rect",":first-child"),{shapeSvg:h,bbox:y,halfPadding:u,label:p}},updateNodeBounds=(t,e)=>{let r=e.node().getBBox();t.width=r.width,t.height=r.height};function insertPolygonShape(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function intersectEllipse(t,e,r,a){var i=t.x,n=t.y,l=i-a.x,s=n-a.y,d=Math.sqrt(e*e*s*s+r*r*l*l),o=Math.abs(e*r*l/d);a.x<i&&(o=-o);var c=Math.abs(e*r*s/d);return a.y<n&&(c=-c),{x:i+o,y:n+c}}let intersectRect$1=(t,e)=>{var r,a,i=t.x,n=t.y,l=e.x-i,s=e.y-n,d=t.width/2,o=t.height/2;return Math.abs(s)*d>Math.abs(l)*o?(s<0&&(o=-o),r=0===s?0:o*l/s,a=o):(l<0&&(d=-d),r=d,a=0===l?0:d*s/l),{x:i+r,y:n+a}},d={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return intersectEllipse(t,e,e,r)},ellipse:intersectEllipse,polygon:function(t,e,r){var a=t.x,i=t.y,n=[],l=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach(function(t){l=Math.min(l,t.x),s=Math.min(s,t.y)}):(l=Math.min(l,e.x),s=Math.min(s,e.y));for(var d=a-t.width/2-l,o=i-t.height/2-s,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],g=function(t,e,r,a){var i,n,l,s,d,o,c,h,p,g,y,u,f;if(i=e.y-t.y,l=t.x-e.x,d=e.x*t.y-t.x*e.y,p=i*r.x+l*r.y+d,g=i*a.x+l*a.y+d,(0===p||0===g||!(p*g>0))&&(n=a.y-r.y,s=r.x-a.x,o=a.x*r.y-r.x*a.y,c=n*t.x+s*t.y+o,h=n*e.x+s*e.y+o,!(0!==c&&0!==h&&c*h>0)&&0!=(y=i*s-n*l)))return u=Math.abs(y/2),{x:(f=l*o-s*d)<0?(f-u)/y:(f+u)/y,y:(f=n*d-i*o)<0?(f-u)/y:(f+u)/y}}(t,r,{x:d+h.x,y:o+h.y},{x:d+p.x,y:o+p.y});g&&n.push(g)}return n.length?(n.length>1&&n.sort(function(t,e){var a=t.x-r.x,i=t.y-r.y,n=Math.sqrt(a*a+i*i),l=e.x-r.x,s=e.y-r.y,d=Math.sqrt(l*l+s*s);return n<d?-1:n===d?0:1}),n[0]):t},rect:intersectRect$1},note=async(t,e)=>{let r=e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels;r||(e.centerLabel=!0);let{shapeSvg:i,bbox:n,halfPadding:l}=await labelHelper(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);let s=i.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-l).attr("y",-n.height/2-l).attr("width",n.width+e.padding).attr("height",n.height+e.padding),updateNodeBounds(e,s),e.intersect=function(t){return d.rect(e,t)},i},question=async(t,e)=>{let{shapeSvg:r,bbox:i}=await labelHelper(t,e,void 0,!0),n=i.width+e.padding,l=i.height+e.padding,s=n+l,o=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}];a.l.info("Question main (Circle)");let c=insertPolygonShape(r,s,s,o);return c.attr("style",e.style),updateNodeBounds(e,c),e.intersect=function(t){return a.l.warn("Intersect called"),d.polygon(e,o,t)},r},hexagon=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.height+e.padding,n=i/4,l=a.width+2*n+e.padding,s=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-i/2},{x:l-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}],o=insertPolygonShape(r,l,i,s);return o.attr("style",e.style),updateNodeBounds(e,o),e.intersect=function(t){return d.polygon(e,s,t)},r},rect_left_inv_arrow=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-n/2,y:0},{x:i,y:0},{x:i,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),e.width=i+n,e.height=n,e.intersect=function(t){return d.polygon(e,l,t)},r},lean_right=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:n/6,y:-n}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),updateNodeBounds(e,s),e.intersect=function(t){return d.polygon(e,l,t)},r},lean_left=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:2*n/6,y:0},{x:i+n/6,y:0},{x:i-2*n/6,y:-n},{x:-n/6,y:-n}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),updateNodeBounds(e,s),e.intersect=function(t){return d.polygon(e,l,t)},r},trapezoid=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i+2*n/6,y:0},{x:i-n/6,y:-n},{x:n/6,y:-n}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),updateNodeBounds(e,s),e.intersect=function(t){return d.polygon(e,l,t)},r},inv_trapezoid=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:-2*n/6,y:-n}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),updateNodeBounds(e,s),e.intersect=function(t){return d.polygon(e,l,t)},r},rect_right_inv_arrow=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i+n/2,y:0},{x:i,y:-n/2},{x:i+n/2,y:-n},{x:0,y:-n}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),updateNodeBounds(e,s),e.intersect=function(t){return d.polygon(e,l,t)},r},cylinder=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=i/2,l=n/(2.5+i/50),s=a.height+l+e.padding,o="M 0,"+l+" a "+n+","+l+" 0,0,0 "+i+" 0 a "+n+","+l+" 0,0,0 "+-i+" 0 l 0,"+s+" a "+n+","+l+" 0,0,0 "+i+" 0 l 0,"+-s,c=r.attr("label-offset-y",l).insert("path",":first-child").attr("style",e.style).attr("d",o).attr("transform","translate("+-i/2+","+-(s/2+l)+")");return updateNodeBounds(e,c),e.intersect=function(t){let r=d.rect(e,t),a=r.x-e.x;if(0!=n&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,t.y-e.y>0&&(i=-i),r.y+=i}return r},r},rect=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await labelHelper(t,e,"node "+e.classes,!0),l=r.insert("rect",":first-child"),s=i.width+e.padding,o=i.height+e.padding;if(l.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-i.width/2-n).attr("y",-i.height/2-n).attr("width",s).attr("height",o),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(applyNodePropertyBorders(l,e.props.borders,s,o),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return updateNodeBounds(e,l),e.intersect=function(t){return d.rect(e,t)},r},labelRect=async(t,e)=>{let{shapeSvg:r}=await labelHelper(t,e,"label",!0);a.l.trace("Classes = ",e.classes);let i=r.insert("rect",":first-child");if(i.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(applyNodePropertyBorders(i,e.props.borders,0,0),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return updateNodeBounds(e,i),e.intersect=function(t){return d.rect(e,t)},r};function applyNodePropertyBorders(t,e,r,i){let n=[],addBorder=t=>{n.push(t,0)},skipBorder=t=>{n.push(0,t)};e.includes("t")?(a.l.debug("add top border"),addBorder(r)):skipBorder(r),e.includes("r")?(a.l.debug("add right border"),addBorder(i)):skipBorder(i),e.includes("b")?(a.l.debug("add bottom border"),addBorder(r)):skipBorder(r),e.includes("l")?(a.l.debug("add left border"),addBorder(i)):skipBorder(i),t.attr("stroke-dasharray",n.join(" "))}let stadium=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.height+e.padding,n=a.width+i/4+e.padding,l=r.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-n/2).attr("y",-i/2).attr("width",n).attr("height",i);return updateNodeBounds(e,l),e.intersect=function(t){return d.rect(e,t)},r},circle=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await labelHelper(t,e,void 0,!0),l=r.insert("circle",":first-child");return l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("Circle main"),updateNodeBounds(e,l),e.intersect=function(t){return a.l.info("Circle intersect",e,i.width/2+n,t),d.circle(e,i.width/2+n,t)},r},doublecircle=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await labelHelper(t,e,void 0,!0),l=r.insert("g",":first-child"),s=l.insert("circle"),o=l.insert("circle");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n+5).attr("width",i.width+e.padding+10).attr("height",i.height+e.padding+10),o.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("DoubleCircle main"),updateNodeBounds(e,s),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,i.width/2+n+5,t),d.circle(e,i.width/2+n+5,t)},r},subroutine=async(t,e)=>{let{shapeSvg:r,bbox:a}=await labelHelper(t,e,void 0,!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i,y:0},{x:i,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],s=insertPolygonShape(r,i,n,l);return s.attr("style",e.style),updateNodeBounds(e,s),e.intersect=function(t){return d.polygon(e,l,t)},r},forkJoin=(t,e,r)=>{let a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),i=70,n=10;"LR"===r&&(i=10,n=70);let l=a.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join");return updateNodeBounds(e,l),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return d.rect(e,t)},a},o={rhombus:question,question,rect,labelRect,rectWithTitle:(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";let n=t.insert("g").attr("class",r).attr("id",e.domId||e.id),l=n.insert("rect",":first-child"),s=n.insert("line"),o=n.insert("g").attr("class","label"),c=e.labelText.flat?e.labelText.flat():e.labelText,h="";h="object"==typeof c?c[0]:c,a.l.info("Label text abc79",h,c,"object"==typeof c);let p=o.node().appendChild(createLabel$1(h,e.labelStyle,!0,!0)),g={width:0,height:0};if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=p.children[0],e=(0,i.Ys)(p);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}a.l.info("Text 2",c);let y=c.slice(1,c.length),u=p.getBBox(),f=o.node().appendChild(createLabel$1(y.join?y.join("<br/>"):y,e.labelStyle,!0,!0));if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=f.children[0],e=(0,i.Ys)(f);g=t.getBoundingClientRect(),e.attr("width",g.width),e.attr("height",g.height)}let x=e.padding/2;return(0,i.Ys)(f).attr("transform","translate( "+(g.width>u.width?0:(u.width-g.width)/2)+", "+(u.height+x+5)+")"),(0,i.Ys)(p).attr("transform","translate( "+(g.width<u.width?0:-(u.width-g.width)/2)+", 0)"),g=o.node().getBBox(),o.attr("transform","translate("+-g.width/2+", "+(-g.height/2-x+3)+")"),l.attr("class","outer title-state").attr("x",-g.width/2-x).attr("y",-g.height/2-x).attr("width",g.width+e.padding).attr("height",g.height+e.padding),s.attr("class","divider").attr("x1",-g.width/2-x).attr("x2",g.width/2+x).attr("y1",-g.height/2-x+u.height+x).attr("y2",-g.height/2-x+u.height+x),updateNodeBounds(e,l),e.intersect=function(t){return d.rect(e,t)},n},choice:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(t){return t.x+","+t.y}).join(" "));return a.attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return d.circle(e,14,t)},r},circle,doublecircle,stadium,hexagon,rect_left_inv_arrow,lean_right,lean_left,trapezoid,inv_trapezoid,rect_right_inv_arrow,cylinder,start:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),updateNodeBounds(e,a),e.intersect=function(t){return d.circle(e,7,t)},r},end:(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),updateNodeBounds(e,i),e.intersect=function(t){return d.circle(e,7,t)},r},note:note,subroutine,fork:forkJoin,join:forkJoin,class_box:(t,e)=>{let r;let n=e.padding/2;r=e.classes?"node "+e.classes:"node default";let s=t.insert("g").attr("class",r).attr("id",e.domId||e.id),o=s.insert("rect",":first-child"),c=s.insert("line"),h=s.insert("line"),p=0,g=4,y=s.insert("g").attr("class","label"),u=0,f=e.classData.annotations&&e.classData.annotations[0],x=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",b=y.node().appendChild(createLabel$1(x,e.labelStyle,!0,!0)),w=b.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=b.children[0],e=(0,i.Ys)(b);w=t.getBoundingClientRect(),e.attr("width",w.width),e.attr("height",w.height)}e.classData.annotations[0]&&(g+=w.height+4,p+=w.width);let m=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?m+="&lt;"+e.classData.type+"&gt;":m+="<"+e.classData.type+">");let k=y.node().appendChild(createLabel$1(m,e.labelStyle,!0,!0));(0,i.Ys)(k).attr("class","classTitle");let L=k.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=k.children[0],e=(0,i.Ys)(k);L=t.getBoundingClientRect(),e.attr("width",L.width),e.attr("height",L.height)}g+=L.height+4,L.width>p&&(p=L.width);let B=[];e.classData.members.forEach(t=>{let r=(0,l.p)(t),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let s=y.node().appendChild(createLabel$1(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),d=s.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=s.children[0],e=(0,i.Ys)(s);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>p&&(p=d.width),g+=d.height+4,B.push(s)}),g+=8;let S=[];if(e.classData.methods.forEach(t=>{let r=(0,l.p)(t),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let s=y.node().appendChild(createLabel$1(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),d=s.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){let t=s.children[0],e=(0,i.Ys)(s);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>p&&(p=d.width),g+=d.height+4,S.push(s)}),g+=8,f){let t=(p-w.width)/2;(0,i.Ys)(b).attr("transform","translate( "+(-1*p/2+t)+", "+-1*g/2+")"),u=w.height+4}let v=(p-L.width)/2;return(0,i.Ys)(k).attr("transform","translate( "+(-1*p/2+v)+", "+(-1*g/2+u)+")"),u+=L.height+4,c.attr("class","divider").attr("x1",-p/2-n).attr("x2",p/2+n).attr("y1",-g/2-n+8+u).attr("y2",-g/2-n+8+u),u+=8,B.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*g/2+u+4)+")"),u+=L.height+4}),u+=8,h.attr("class","divider").attr("x1",-p/2-n).attr("x2",p/2+n).attr("y1",-g/2-n+8+u).attr("y2",-g/2-n+8+u),u+=8,S.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-p/2+", "+(-1*g/2+u)+")"),u+=L.height+4}),o.attr("class","outer title-state").attr("x",-p/2-n).attr("y",-(g/2)-n).attr("width",p+e.padding).attr("height",g+e.padding),updateNodeBounds(e,o),e.intersect=function(t){return d.rect(e,t)},s}},c={},insertNode=async(t,e,r)=>{let i,n;if(e.link){let l;"sandbox"===(0,a.c)().securityLevel?l="_top":e.linkTarget&&(l=e.linkTarget||"_blank"),i=t.insert("svg:a").attr("xlink:href",e.link).attr("target",l),n=await o[e.shape](i,e,r)}else i=n=await o[e.shape](t,e,r);return e.tooltip&&n.attr("title",e.tooltip),e.class&&n.attr("class","node default "+e.class),c[e.id]=i,e.haveCallback&&c[e.id].attr("class",c[e.id].attr("class")+" clickable"),i},setNodeElem=(t,e)=>{c[e.id]=t},clear$1=()=>{c={}},positionNode=t=>{let e=c[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");let r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},h={},p={},clear=()=>{h={},p={}},insertEdgeLabel=(t,e)=>{let r;let l=(0,a.n)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,n.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:l,addSvgBackground:!0}):createLabel$1(e.label,e.labelStyle);a.l.info("abc82",e,e.labelType);let d=t.insert("g").attr("class","edgeLabel"),o=d.insert("g").attr("class","label");o.node().appendChild(s);let c=s.getBBox();if(l){let t=s.children[0],e=(0,i.Ys)(s);c=t.getBoundingClientRect(),e.attr("width",c.width),e.attr("height",c.height)}if(o.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),h[e.id]=d,e.width=c.width,e.height=c.height,e.startLabelLeft){let a=createLabel$1(e.startLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),p[e.id]||(p[e.id]={}),p[e.id].startLeft=i,setTerminalWidth(r,e.startLabelLeft)}if(e.startLabelRight){let a=createLabel$1(e.startLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=i.node().appendChild(a),n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),p[e.id]||(p[e.id]={}),p[e.id].startRight=i,setTerminalWidth(r,e.startLabelRight)}if(e.endLabelLeft){let a=createLabel$1(e.endLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),i.node().appendChild(a),p[e.id]||(p[e.id]={}),p[e.id].endLeft=i,setTerminalWidth(r,e.endLabelLeft)}if(e.endLabelRight){let a=createLabel$1(e.endLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),i.node().appendChild(a),p[e.id]||(p[e.id]={}),p[e.id].endRight=i,setTerminalWidth(r,e.endLabelRight)}return s};function setTerminalWidth(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}let positionEdgeLabel=(t,e)=>{a.l.info("Moving label abc78 ",t.id,t.label,h[t.id]);let r=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){let i=h[t.id],n=t.x,l=t.y;if(r){let i=a.u.calcLabelPosition(r);a.l.info("Moving label "+t.label+" from (",n,",",l,") to (",i.x,",",i.y,") abc78"),e.updatedPath&&(n=i.x,l=i.y)}i.attr("transform","translate("+n+", "+l+")")}if(t.startLabelLeft){let e=p[t.id].startLeft,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.startLabelRight){let e=p[t.id].startRight,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.endLabelLeft){let e=p[t.id].endLeft,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.endLabelRight){let e=p[t.id].endRight,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}},outsideNode=(t,e)=>{let r=t.x,a=t.y,i=Math.abs(e.x-r),n=Math.abs(e.y-a),l=t.width/2,s=t.height/2;return i>=l||n>=s},intersection=(t,e,r)=>{a.l.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);let i=t.x,n=t.y,l=Math.abs(i-r.x),s=t.width/2,d=r.x<e.x?s-l:s+l,o=t.height/2,c=Math.abs(e.y-r.y),h=Math.abs(e.x-r.x);if(Math.abs(n-e.y)*s>Math.abs(i-e.x)*o){let t=r.y<e.y?e.y-o-n:n-o-e.y;d=h*t/c;let i={x:r.x<e.x?r.x+d:r.x-h+d,y:r.y<e.y?r.y+c-t:r.y-c+t};return 0===d&&(i.x=e.x,i.y=e.y),0===h&&(i.x=e.x),0===c&&(i.y=e.y),a.l.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${d}`,i),i}{let t=c*(d=r.x<e.x?e.x-s-i:i-s-e.x)/h,n=r.x<e.x?r.x+h-d:r.x-h+d,l=r.y<e.y?r.y+t:r.y-t;return a.l.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${d}`,{_x:n,_y:l}),0===d&&(n=e.x,l=e.y),0===h&&(n=e.x),0===c&&(l=e.y),{x:n,y:l}}},cutPathAtIntersect=(t,e)=>{a.l.warn("abc88 cutPathAtIntersect",t,e);let r=[],i=t[0],n=!1;return t.forEach(t=>{if(a.l.info("abc88 checking point",t,e),outsideNode(e,t)||n)a.l.warn("abc88 outside",t,i),i=t,n||r.push(t);else{let l=intersection(e,i,t);a.l.warn("abc88 inside",t,i,l),a.l.warn("abc88 intersection",l);let s=!1;r.forEach(t=>{s=s||t.x===l.x&&t.y===l.y}),r.some(t=>t.x===l.x&&t.y===l.y)?a.l.warn("abc88 no intersect",l,r):r.push(l),n=!0}}),a.l.warn("abc88 returning points",r),r},insertEdge=function(t,e,r,n,l,s){let d,o,c=r.points,h=!1,p=s.node(e.v);var g=s.node(e.w);a.l.info("abc88 InsertEdge: ",r),g.intersect&&p.intersect&&((c=c.slice(1,r.points.length-1)).unshift(p.intersect(c[0])),a.l.info("Last point",c[c.length-1],g,g.intersect(c[c.length-1])),c.push(g.intersect(c[c.length-1]))),r.toCluster&&(a.l.info("to cluster abc88",n[r.toCluster]),c=cutPathAtIntersect(r.points,n[r.toCluster].node),h=!0),r.fromCluster&&(a.l.info("from cluster abc88",n[r.fromCluster]),c=cutPathAtIntersect(c.reverse(),n[r.fromCluster].node).reverse(),h=!0);let y=c.filter(t=>!Number.isNaN(t.y));d=("graph"===l||"flowchart"===l)&&r.curve||i.$0Z;let u=(0,i.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d);switch(r.thickness){case"normal":o="edge-thickness-normal";break;case"thick":case"invisible":o="edge-thickness-thick";break;default:o=""}switch(r.pattern){case"solid":o+=" edge-pattern-solid";break;case"dotted":o+=" edge-pattern-dotted";break;case"dashed":o+=" edge-pattern-dashed"}let f=t.append("path").attr("d",u(y)).attr("id",r.id).attr("class"," "+o+(r.classes?" "+r.classes:"")).attr("style",r.style),x="";switch(((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(x=(x=(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),a.l.info("arrowTypeStart",r.arrowTypeStart),a.l.info("arrowTypeEnd",r.arrowTypeEnd),r.arrowTypeStart){case"arrow_cross":f.attr("marker-start","url("+x+"#"+l+"-crossStart)");break;case"arrow_point":f.attr("marker-start","url("+x+"#"+l+"-pointStart)");break;case"arrow_barb":f.attr("marker-start","url("+x+"#"+l+"-barbStart)");break;case"arrow_circle":f.attr("marker-start","url("+x+"#"+l+"-circleStart)");break;case"aggregation":f.attr("marker-start","url("+x+"#"+l+"-aggregationStart)");break;case"extension":f.attr("marker-start","url("+x+"#"+l+"-extensionStart)");break;case"composition":f.attr("marker-start","url("+x+"#"+l+"-compositionStart)");break;case"dependency":f.attr("marker-start","url("+x+"#"+l+"-dependencyStart)");break;case"lollipop":f.attr("marker-start","url("+x+"#"+l+"-lollipopStart)")}switch(r.arrowTypeEnd){case"arrow_cross":f.attr("marker-end","url("+x+"#"+l+"-crossEnd)");break;case"arrow_point":f.attr("marker-end","url("+x+"#"+l+"-pointEnd)");break;case"arrow_barb":f.attr("marker-end","url("+x+"#"+l+"-barbEnd)");break;case"arrow_circle":f.attr("marker-end","url("+x+"#"+l+"-circleEnd)");break;case"aggregation":f.attr("marker-end","url("+x+"#"+l+"-aggregationEnd)");break;case"extension":f.attr("marker-end","url("+x+"#"+l+"-extensionEnd)");break;case"composition":f.attr("marker-end","url("+x+"#"+l+"-compositionEnd)");break;case"dependency":f.attr("marker-end","url("+x+"#"+l+"-dependencyEnd)");break;case"lollipop":f.attr("marker-end","url("+x+"#"+l+"-lollipopEnd)")}let b={};return h&&(b.updatedPath=c),b.originalPath=r.points,b}},34850:function(t,e,r){r.d(e,{p:function(){return parseMember},s:function(){return l}});var a=r(30086),i=r(65480);let n=0,getClassTitleString=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},parseMember=function(t){let e="",r="",a="",n="",l=t.substring(0,1),s=t.substring(t.length-1,t.length);l.match(/[#+~-]/)&&(n=l);let d=/[\s\w)~]/;s.match(d)||(r=parseClassifier(s));let o=""===n?0:1,c=""===r?t.length:t.length-1;t=t.substring(o,c);let h=t.indexOf("("),p=t.indexOf(")"),g=h>1&&p>h&&p<=t.length;if(g){let l=t.substring(0,h).trim(),s=t.substring(h+1,p);if(e=n+l+"("+(0,i.x)(s.trim())+")",p<t.length){let n=t.substring(p+1,p+2);""!==r||n.match(d)?a=t.substring(p+1).trim():(r=parseClassifier(n),a=t.substring(p+2).trim()),""!==a&&(":"===a.charAt(0)&&(a=a.substring(1).trim()),e+=a=" : "+(0,i.x)(a))}}else e=n+(0,i.x)(t);return{displayText:e,cssStyle:r}},addTspan=function(t,e,r,a){let i=parseMember(e),n=t.append("tspan").attr("x",a.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),r||n.attr("dy",a.textHeight)},parseClassifier=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},l={getClassTitleString,drawClass:function(t,e,r,a){let n;i.l.debug("Rendering class ",e,r);let l=e.id,s={id:l,label:e.id,width:0,height:0},d=t.append("g").attr("id",a.db.lookUpDomId(l)).attr("class","classGroup");n=e.link?d.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):d.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let o=!0;e.annotations.forEach(function(t){let e=n.append("tspan").text("\xab"+t+"\xbb");o||e.attr("dy",r.textHeight),o=!1});let c=getClassTitleString(e),h=n.append("tspan").text(c).attr("class","title");o||h.attr("dy",r.textHeight);let p=n.node().getBBox().height,g=d.append("line").attr("x1",0).attr("y1",r.padding+p+r.dividerMargin/2).attr("y2",r.padding+p+r.dividerMargin/2),y=d.append("text").attr("x",r.padding).attr("y",p+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");o=!0,e.members.forEach(function(t){addTspan(y,t,o,r),o=!1});let u=y.node().getBBox(),f=d.append("line").attr("x1",0).attr("y1",r.padding+p+r.dividerMargin+u.height).attr("y2",r.padding+p+r.dividerMargin+u.height),x=d.append("text").attr("x",r.padding).attr("y",p+2*r.dividerMargin+u.height+r.textHeight).attr("fill","white").attr("class","classText");o=!0,e.methods.forEach(function(t){addTspan(x,t,o,r),o=!1});let b=d.node().getBBox();var w=" ";e.cssClasses.length>0&&(w+=e.cssClasses.join(" "));let m=d.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",b.width+2*r.padding).attr("height",b.height+r.padding+.5*r.dividerMargin).attr("class",w),k=m.node().getBBox().width;return n.node().childNodes.forEach(function(t){t.setAttribute("x",(k-t.getBBox().width)/2)}),e.tooltip&&n.insert("title").text(e.tooltip),g.attr("x2",k),f.attr("x2",k),s.width=k,s.height=b.height+r.padding+.5*r.dividerMargin,s},drawEdge:function(t,e,r,l,s){let d,o,c,h,p,g;let getRelationType=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let y=e.points,u=(0,a.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(a.$0Z),f=t.append("path").attr("d",u(y)).attr("id","edge"+n).attr("class","relation"),x="";l.arrowMarkerAbsolute&&(x=(x=(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==r.relation.lineType&&f.attr("class","relation dashed-line"),10==r.relation.lineType&&f.attr("class","relation dotted-line"),"none"!==r.relation.type1&&f.attr("marker-start","url("+x+"#"+getRelationType(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&f.attr("marker-end","url("+x+"#"+getRelationType(r.relation.type2)+"End)");let b=e.points.length,w=i.u.calcLabelPosition(e.points);if(d=w.x,o=w.y,b%2!=0&&b>1){let t=i.u.calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),a=i.u.calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[b-1]);i.l.debug("cardinality_1_point "+JSON.stringify(t)),i.l.debug("cardinality_2_point "+JSON.stringify(a)),c=t.x,h=t.y,p=a.x,g=a.y}if(void 0!==r.title){let e=t.append("g").attr("class","classLabel"),a=e.append("text").attr("class","label").attr("x",d).attr("y",o).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=a;let i=a.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-l.padding/2).attr("y",i.y-l.padding/2).attr("width",i.width+l.padding).attr("height",i.height+l.padding)}if(i.l.info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type1").attr("x",c).attr("y",h).attr("fill","black").attr("font-size","6").text(r.relationTitle1)}if(void 0!==r.relationTitle2&&"none"!==r.relationTitle2){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type2").attr("x",p).attr("y",g).attr("fill","black").attr("font-size","6").text(r.relationTitle2)}n++},drawNote:function(t,e,r,a){i.l.debug("Rendering note ",e,r);let n=e.id,l={id:n,text:e.text,width:0,height:0},s=t.append("g").attr("id",n).attr("class","classGroup"),d=s.append("text").attr("y",r.textHeight+r.padding).attr("x",0),o=JSON.parse(`"${e.text}"`).split("\n");o.forEach(function(t){i.l.debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)});let c=s.node().getBBox(),h=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*r.padding).attr("height",c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin),p=h.node().getBBox().width;return d.node().childNodes.forEach(function(t){t.setAttribute("x",(p-t.getBBox().width)/2)}),l.width=p,l.height=c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin,l},parseMember}}}]);