"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2025],{42025:function(t,e,r){r.d(e,{diagram:function(){return b}});var i=r(65480),a=r(79973),n=r(30086),s=r(44748);let l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,esm_browser_parse=function(t){let e;if(!("string"==typeof t&&c.test(t)))throw TypeError("Invalid UUID");let r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function ROTL(t,e){return t<<e|t>>>32-e}let h=function(t,e,r){function generateUUID(t,e,i,a){var n;if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));let e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof e&&(e=esm_browser_parse(e)),(null===(n=e)||void 0===n?void 0:n.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let s=new Uint8Array(16+t.length);if(s.set(e),s.set(t,e.length),(s=r(s))[6]=15&s[6]|80,s[8]=63&s[8]|128,i){a=a||0;for(let t=0;t<16;++t)i[a+t]=s[t];return i}return function(t,e=0){return(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase()}(s)}try{generateUUID.name="v5"}catch(t){}return generateUUID.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",generateUUID.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",generateUUID}(0,0,function(t){let e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){let e=unescape(encodeURIComponent(t));t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);let i=t.length/4+2,a=Math.ceil(i/16),n=Array(a);for(let e=0;e<a;++e){let r=new Uint32Array(16);for(let i=0;i<16;++i)r[i]=t[64*e+4*i]<<24|t[64*e+4*i+1]<<16|t[64*e+4*i+2]<<8|t[64*e+4*i+3];n[e]=r}n[a-1][14]=(t.length-1)*8/4294967296,n[a-1][14]=Math.floor(n[a-1][14]),n[a-1][15]=(t.length-1)*8&4294967295;for(let t=0;t<a;++t){let i=new Uint32Array(80);for(let e=0;e<16;++e)i[e]=n[t][e];for(let t=16;t<80;++t)i[t]=ROTL(i[t-3]^i[t-8]^i[t-14]^i[t-16],1);let a=r[0],s=r[1],l=r[2],c=r[3],h=r[4];for(let t=0;t<80;++t){let r=Math.floor(t/20),n=ROTL(a,5)+function(t,e,r,i){switch(t){case 0:return e&r^~e&i;case 1:case 3:return e^r^i;case 2:return e&r^e&i^r&i}}(r,s,l,c)+h+e[r]+i[t]>>>0;h=c,c=l,l=ROTL(s,30)>>>0,s=a,a=n}r[0]=r[0]+a>>>0,r[1]=r[1]+s>>>0,r[2]=r[2]+l>>>0,r[3]=r[3]+c>>>0,r[4]=r[4]+h>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]});r(58820),r(68148),r(92769);var d=function(){var o=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},t=[1,2],e=[1,5],r=[6,9,11,23,25,27,29,30,31,52],i=[1,17],a=[1,18],n=[1,19],s=[1,20],l=[1,21],c=[1,22],h=[1,25],d=[1,30],y=[1,31],u=[1,32],p=[1,33],_=[1,34],f=[6,9,11,15,20,23,25,27,29,30,31,44,45,46,47,48,52],E=[1,46],g=[30,31,49,50],m=[4,6,9,11,23,25,27,29,30,31,52],O=[44,45,46,47,48],b=[22,37],k=[1,66],R=[1,65],N=[22,37,39,41],T={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,entityName:17,relSpec:18,role:19,BLOCK_START:20,attributes:21,BLOCK_STOP:22,title:23,title_value:24,acc_title:25,acc_title_value:26,acc_descr:27,acc_descr_value:28,acc_descr_multiline_value:29,ALPHANUM:30,ENTITY_NAME:31,attribute:32,attributeType:33,attributeName:34,attributeKeyTypeList:35,attributeComment:36,ATTRIBUTE_WORD:37,attributeKeyType:38,COMMA:39,ATTRIBUTE_KEY:40,COMMENT:41,cardinality:42,relType:43,ZERO_OR_ONE:44,ZERO_OR_MORE:45,ONE_OR_MORE:46,ONLY_ONE:47,MD_PARENT:48,NON_IDENTIFYING:49,IDENTIFYING:50,WORD:51,open_directive:52,type_directive:53,arg_directive:54,close_directive:55,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",20:"BLOCK_START",22:"BLOCK_STOP",23:"title",24:"title_value",25:"acc_title",26:"acc_title_value",27:"acc_descr",28:"acc_descr_value",29:"acc_descr_multiline_value",30:"ALPHANUM",31:"ENTITY_NAME",37:"ATTRIBUTE_WORD",39:"COMMA",40:"ATTRIBUTE_KEY",41:"COMMENT",44:"ZERO_OR_ONE",45:"ZERO_OR_MORE",46:"ONE_OR_MORE",47:"ONLY_ONE",48:"MD_PARENT",49:"NON_IDENTIFYING",50:"IDENTIFYING",51:"WORD",52:"open_directive",53:"type_directive",54:"arg_directive",55:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,5],[10,4],[10,3],[10,1],[10,2],[10,2],[10,2],[10,1],[17,1],[17,1],[21,1],[21,2],[32,2],[32,3],[32,3],[32,4],[33,1],[34,1],[35,1],[35,3],[38,1],[36,1],[18,3],[42,1],[42,1],[42,1],[42,1],[42,1],[43,1],[43,1],[19,1],[19,1],[19,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(t,e,r,i,a,n,s){var l=n.length-1;switch(a){case 1:break;case 3:case 7:case 8:this.$=[];break;case 4:n[l-1].push(n[l]),this.$=n[l-1];break;case 5:case 6:case 20:case 44:case 28:case 29:case 32:this.$=n[l];break;case 12:i.addEntity(n[l-4]),i.addEntity(n[l-2]),i.addRelationship(n[l-4],n[l],n[l-2],n[l-3]);break;case 13:i.addEntity(n[l-3]),i.addAttributes(n[l-3],n[l-1]);break;case 14:i.addEntity(n[l-2]);break;case 15:i.addEntity(n[l]);break;case 16:case 17:this.$=n[l].trim(),i.setAccTitle(this.$);break;case 18:case 19:this.$=n[l].trim(),i.setAccDescription(this.$);break;case 21:case 42:case 43:case 33:this.$=n[l].replace(/"/g,"");break;case 22:case 30:this.$=[n[l]];break;case 23:n[l].push(n[l-1]),this.$=n[l];break;case 24:this.$={attributeType:n[l-1],attributeName:n[l]};break;case 25:this.$={attributeType:n[l-2],attributeName:n[l-1],attributeKeyTypeList:n[l]};break;case 26:this.$={attributeType:n[l-2],attributeName:n[l-1],attributeComment:n[l]};break;case 27:this.$={attributeType:n[l-3],attributeName:n[l-2],attributeKeyTypeList:n[l-1],attributeComment:n[l]};break;case 31:n[l-2].push(n[l]),this.$=n[l-2];break;case 34:this.$={cardA:n[l],relType:n[l-1],cardB:n[l-2]};break;case 35:this.$=i.Cardinality.ZERO_OR_ONE;break;case 36:this.$=i.Cardinality.ZERO_OR_MORE;break;case 37:this.$=i.Cardinality.ONE_OR_MORE;break;case 38:this.$=i.Cardinality.ONLY_ONE;break;case 39:this.$=i.Cardinality.MD_PARENT;break;case 40:this.$=i.Identification.NON_IDENTIFYING;break;case 41:this.$=i.Identification.IDENTIFYING;break;case 45:i.parseDirective("%%{","open_directive");break;case 46:i.parseDirective(n[l],"type_directive");break;case 47:n[l]=n[l].trim().replace(/'/g,'"'),i.parseDirective(n[l],"arg_directive");break;case 48:i.parseDirective("}%%","close_directive","er")}},table:[{3:1,4:t,7:3,12:4,52:e},{1:[3]},o(r,[2,3],{5:6}),{3:7,4:t,7:3,12:4,52:e},{13:8,53:[1,9]},{53:[2,45]},{6:[1,10],7:15,8:11,9:[1,12],10:13,11:[1,14],12:4,17:16,23:i,25:a,27:n,29:s,30:l,31:c,52:e},{1:[2,2]},{14:23,15:[1,24],55:h},o([15,55],[2,46]),o(r,[2,8],{1:[2,1]}),o(r,[2,4]),{7:15,10:26,12:4,17:16,23:i,25:a,27:n,29:s,30:l,31:c,52:e},o(r,[2,6]),o(r,[2,7]),o(r,[2,11]),o(r,[2,15],{18:27,42:29,20:[1,28],44:d,45:y,46:u,47:p,48:_}),{24:[1,35]},{26:[1,36]},{28:[1,37]},o(r,[2,19]),o(f,[2,20]),o(f,[2,21]),{11:[1,38]},{16:39,54:[1,40]},{11:[2,48]},o(r,[2,5]),{17:41,30:l,31:c},{21:42,22:[1,43],32:44,33:45,37:E},{43:47,49:[1,48],50:[1,49]},o(g,[2,35]),o(g,[2,36]),o(g,[2,37]),o(g,[2,38]),o(g,[2,39]),o(r,[2,16]),o(r,[2,17]),o(r,[2,18]),o(m,[2,9]),{14:50,55:h},{55:[2,47]},{15:[1,51]},{22:[1,52]},o(r,[2,14]),{21:53,22:[2,22],32:44,33:45,37:E},{34:54,37:[1,55]},{37:[2,28]},{42:56,44:d,45:y,46:u,47:p,48:_},o(O,[2,40]),o(O,[2,41]),{11:[1,57]},{19:58,30:[1,61],31:[1,60],51:[1,59]},o(r,[2,13]),{22:[2,23]},o(b,[2,24],{35:62,36:63,38:64,40:k,41:R}),o([22,37,40,41],[2,29]),o([30,31],[2,34]),o(m,[2,10]),o(r,[2,12]),o(r,[2,42]),o(r,[2,43]),o(r,[2,44]),o(b,[2,25],{36:67,39:[1,68],41:R}),o(b,[2,26]),o(N,[2,30]),o(b,[2,33]),o(N,[2,32]),o(b,[2,27]),{38:69,40:k},o(N,[2,31])],defaultActions:{5:[2,45],7:[2,2],25:[2,48],40:[2,47],46:[2,28],53:[2,23]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var r=Error(t);throw r.hash=e,r}},parse:function(t){var e=this,r=[0],i=[],a=[null],n=[],s=this.table,l="",c=0,h=0,d=n.slice.call(arguments,1),y=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);y.setInput(t,u.yy),u.yy.lexer=y,u.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var _=y.yylloc;n.push(_);var f=y.options&&y.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var E,g,m,O,b,k,R,N,T={};;){if(g=r[r.length-1],this.defaultActions[g]?m=this.defaultActions[g]:(null==E&&(E=function(){var t;return"number"!=typeof(t=i.pop()||y.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}()),m=s[g]&&s[g][E]),void 0===m||!m.length||!m[0]){var x="";for(b in N=[],s[g])this.terminals_[b]&&b>2&&N.push("'"+this.terminals_[b]+"'");x=y.showPosition?"Parse error on line "+(c+1)+":\n"+y.showPosition()+"\nExpecting "+N.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==E?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(x,{text:y.match,token:this.terminals_[E]||E,line:y.yylineno,loc:_,expected:N})}if(m[0]instanceof Array&&m.length>1)throw Error("Parse Error: multiple actions possible at state: "+g+", token: "+E);switch(m[0]){case 1:r.push(E),a.push(y.yytext),n.push(y.yylloc),r.push(m[1]),E=null,h=y.yyleng,l=y.yytext,c=y.yylineno,_=y.yylloc;break;case 2:if(k=this.productions_[m[1]][1],T.$=a[a.length-k],T._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column},f&&(T._$.range=[n[n.length-(k||1)].range[0],n[n.length-1].range[1]]),void 0!==(O=this.performAction.apply(T,[l,h,c,u.yy,m[1],a,n].concat(d))))return O;k&&(r=r.slice(0,-1*k*2),a=a.slice(0,-1*k),n=n.slice(0,-1*k)),r.push(this.productions_[m[1]][0]),a.push(T.$),n.push(T._$),R=s[r[r.length-2]][r[r.length-1]],r.push(R);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return T.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack)for(var n in a)this[n]=a[n];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,r,i,a=this._currentRules(),n=0;n<a.length;n++)if((r=this._input.match(this.rules[a[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,a[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),25;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),27;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return this.begin("open_directive"),52;case 8:return this.begin("type_directive"),53;case 9:return this.popState(),this.begin("arg_directive"),15;case 10:return this.popState(),this.popState(),55;case 11:return 54;case 12:return 11;case 13:case 20:case 25:break;case 14:return 9;case 15:return 31;case 16:return 51;case 17:return 4;case 18:return this.begin("block"),20;case 19:return 39;case 21:return 40;case 22:case 23:return 37;case 24:return 41;case 26:return this.popState(),22;case 27:case 57:return e.yytext[0];case 28:case 32:case 33:case 46:return 44;case 29:case 30:case 31:case 39:case 41:case 48:return 46;case 34:case 35:case 36:case 37:case 38:case 40:case 47:return 45;case 42:case 43:case 44:case 45:return 47;case 49:return 48;case 50:case 53:case 54:case 55:return 49;case 51:case 52:return 50;case 56:return 30;case 58:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},open_directive:{rules:[8],inclusive:!1},type_directive:{rules:[9,10],inclusive:!1},arg_directive:{rules:[10,11],inclusive:!1},block:{rules:[19,20,21,22,23,24,25,26,27],inclusive:!1},INITIAL:{rules:[0,2,4,7,12,13,14,15,16,17,18,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],inclusive:!0}}},Parser.prototype=T,T.Parser=Parser,new Parser}();d.parser=d;let y={},u=[],addEntity=function(t){return void 0===y[t]&&(y[t]={attributes:[]},i.l.info("Added new entity :",t)),y[t]},p={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},parseDirective:function(t,e,r){i.m.parseDirective(this,t,e,r)},getConfig:()=>(0,i.c)().er,addEntity,addAttributes:function(t,e){let r,a=addEntity(t);for(r=e.length-1;r>=0;r--)a.attributes.push(e[r]),i.l.debug("Added attribute ",e[r].attributeName)},getEntities:()=>y,addRelationship:function(t,e,r,a){let n={entityA:t,roleA:e,entityB:r,relSpec:a};u.push(n),i.l.debug("Added new relationship :",n)},getRelationships:()=>u,clear:function(){y={},u=[],(0,i.v)()},setAccTitle:i.s,getAccTitle:i.g,setAccDescription:i.b,getAccDescription:i.a,setDiagramTitle:i.r,getDiagramTitle:i.t},_={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},f={ERMarkers:_,insertMarkers:function(t,e){let r;t.append("defs").append("marker").attr("id",_.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",_.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",_.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",_.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),(r=t.append("defs").append("marker").attr("id",_.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto")).append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),(r=t.append("defs").append("marker").attr("id",_.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto")).append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",_.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",_.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),(r=t.append("defs").append("marker").attr("id",_.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto")).append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),(r=t.append("defs").append("marker").attr("id",_.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto")).append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")}},E=/[^\dA-Za-z](\W)*/g,g={},m=new Map,drawAttributes=(t,e,r)=>{let a=g.entityPadding/3,n=g.entityPadding/3,s=.85*g.fontSize,l=e.node().getBBox(),c=[],h=!1,d=!1,y=0,u=0,p=0,_=0,f=l.height+2*a,E=1;r.forEach(t=>{void 0!==t.attributeKeyTypeList&&t.attributeKeyTypeList.length>0&&(h=!0),void 0!==t.attributeComment&&(d=!0)}),r.forEach(r=>{let n=`${e.node().id}-attr-${E}`,l=0,g=(0,i.x)(r.attributeType),m=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(g),O=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(r.attributeName),b={};b.tn=m,b.nn=O;let k=m.node().getBBox(),R=O.node().getBBox();if(y=Math.max(y,k.width),u=Math.max(u,R.width),l=Math.max(k.height,R.height),h){let e=void 0!==r.attributeKeyTypeList?r.attributeKeyTypeList.join(","):"",a=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(e);b.kn=a;let c=a.node().getBBox();p=Math.max(p,c.width),l=Math.max(l,c.height)}if(d){let e=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(r.attributeComment||"");b.cn=e;let a=e.node().getBBox();_=Math.max(_,a.width),l=Math.max(l,a.height)}b.height=l,c.push(b),f+=l+2*a,E+=1});let m=4;h&&(m+=2),d&&(m+=2);let O=y+u+p+_,b={width:Math.max(g.minEntityWidth,Math.max(l.width+2*g.entityPadding,O+n*m)),height:r.length>0?f:Math.max(g.minEntityHeight,l.height+2*g.entityPadding)};if(r.length>0){let r=Math.max(0,(b.width-O-n*m)/(m/2));e.attr("transform","translate("+b.width/2+","+(a+l.height/2)+")");let i=l.height+2*a,s="attributeBoxOdd";c.forEach(e=>{let l=i+a+e.height/2;e.tn.attr("transform","translate("+n+","+l+")");let c=t.insert("rect","#"+e.tn.node().id).classed(`er ${s}`,!0).attr("x",0).attr("y",i).attr("width",y+2*n+r).attr("height",e.height+2*a),f=parseFloat(c.attr("x"))+parseFloat(c.attr("width"));e.nn.attr("transform","translate("+(f+n)+","+l+")");let E=t.insert("rect","#"+e.nn.node().id).classed(`er ${s}`,!0).attr("x",f).attr("y",i).attr("width",u+2*n+r).attr("height",e.height+2*a),g=parseFloat(E.attr("x"))+parseFloat(E.attr("width"));if(h){e.kn.attr("transform","translate("+(g+n)+","+l+")");let c=t.insert("rect","#"+e.kn.node().id).classed(`er ${s}`,!0).attr("x",g).attr("y",i).attr("width",p+2*n+r).attr("height",e.height+2*a);g=parseFloat(c.attr("x"))+parseFloat(c.attr("width"))}d&&(e.cn.attr("transform","translate("+(g+n)+","+l+")"),t.insert("rect","#"+e.cn.node().id).classed(`er ${s}`,"true").attr("x",g).attr("y",i).attr("width",_+2*n+r).attr("height",e.height+2*a)),i+=e.height+2*a,s="attributeBoxOdd"===s?"attributeBoxEven":"attributeBoxOdd"})}else b.height=Math.max(g.minEntityHeight,f),e.attr("transform","translate("+b.width/2+","+b.height/2+")");return b},drawEntities=function(t,e,r){let a;let n=Object.keys(e);return n.forEach(function(n){let s=function(t="",e=""){let r=t.replace(E,"");return`${strWithHyphen(e)}${strWithHyphen(r)}${h(t,"28e9f9db-3c8d-5aa5-9faf-44286ae5937c")}`}(n,"entity");m.set(n,s);let l=t.append("g").attr("id",s);a=void 0===a?s:a;let c="text-"+s,d=l.append("text").classed("er entityLabel",!0).attr("id",c).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,i.c)().fontFamily).style("font-size",g.fontSize+"px").text(n),{width:y,height:u}=drawAttributes(l,d,e[n].attributes),p=l.insert("rect","#"+c).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",y).attr("height",u),_=p.node().getBBox();r.setNode(s,{width:_.width,height:_.height,shape:"rect",id:s})}),a},adjustEntities=function(t,e){e.nodes().forEach(function(r){void 0!==r&&void 0!==e.node(r)&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})},getEdgeName=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},O=0,drawRelationshipFromLayout=function(t,e,r,a,s){O++;let l=r.edge(m.get(e.entityA),m.get(e.entityB),getEdgeName(e)),c=(0,n.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(n.$0Z),h=t.insert("path","#"+a).classed("er relationshipLine",!0).attr("d",c(l.points)).style("stroke",g.stroke).style("fill","none");e.relSpec.relType===s.db.Identification.NON_IDENTIFYING&&h.attr("stroke-dasharray","8,8");let d="";switch(g.arrowMarkerAbsolute&&(d=(d=(d=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),e.relSpec.cardA){case s.db.Cardinality.ZERO_OR_ONE:h.attr("marker-end","url("+d+"#"+f.ERMarkers.ZERO_OR_ONE_END+")");break;case s.db.Cardinality.ZERO_OR_MORE:h.attr("marker-end","url("+d+"#"+f.ERMarkers.ZERO_OR_MORE_END+")");break;case s.db.Cardinality.ONE_OR_MORE:h.attr("marker-end","url("+d+"#"+f.ERMarkers.ONE_OR_MORE_END+")");break;case s.db.Cardinality.ONLY_ONE:h.attr("marker-end","url("+d+"#"+f.ERMarkers.ONLY_ONE_END+")");break;case s.db.Cardinality.MD_PARENT:h.attr("marker-end","url("+d+"#"+f.ERMarkers.MD_PARENT_END+")")}switch(e.relSpec.cardB){case s.db.Cardinality.ZERO_OR_ONE:h.attr("marker-start","url("+d+"#"+f.ERMarkers.ZERO_OR_ONE_START+")");break;case s.db.Cardinality.ZERO_OR_MORE:h.attr("marker-start","url("+d+"#"+f.ERMarkers.ZERO_OR_MORE_START+")");break;case s.db.Cardinality.ONE_OR_MORE:h.attr("marker-start","url("+d+"#"+f.ERMarkers.ONE_OR_MORE_START+")");break;case s.db.Cardinality.ONLY_ONE:h.attr("marker-start","url("+d+"#"+f.ERMarkers.ONLY_ONE_START+")");break;case s.db.Cardinality.MD_PARENT:h.attr("marker-start","url("+d+"#"+f.ERMarkers.MD_PARENT_START+")")}let y=h.node().getTotalLength(),u=h.node().getPointAtLength(.5*y),p="rel"+O,_=t.append("text").classed("er relationshipLabel",!0).attr("id",p).attr("x",u.x).attr("y",u.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,i.c)().fontFamily).style("font-size",g.fontSize+"px").text(e.roleA),E=_.node().getBBox();t.insert("rect","#"+p).classed("er relationshipLabelBox",!0).attr("x",u.x-E.width/2).attr("y",u.y-E.height/2).attr("width",E.width).attr("height",E.height)};function strWithHyphen(t=""){return t.length>0?`${t}-`:""}let b={parser:d,db:p,renderer:{setConf:function(t){let e=Object.keys(t);for(let r of e)g[r]=t[r]},draw:function(t,e,r,l){var c;let h,d;g=(0,i.c)().er,i.l.info("Drawing ER diagram");let y=(0,i.c)().securityLevel;"sandbox"===y&&(h=(0,n.Ys)("#i"+e));let u="sandbox"===y?(0,n.Ys)(h.nodes()[0].contentDocument.body):(0,n.Ys)("body"),p=u.select(`[id='${e}']`);f.insertMarkers(p,g),d=new a.k({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:g.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});let _=drawEntities(p,l.db.getEntities(),d),E=((c=l.db.getRelationships()).forEach(function(t){d.setEdge(m.get(t.entityA),m.get(t.entityB),{relationship:t},getEdgeName(t))}),c);(0,s.bK)(d),adjustEntities(p,d),E.forEach(function(t){drawRelationshipFromLayout(p,t,d,_,l)});let O=g.diagramPadding;i.u.insertTitle(p,"entityTitleText",g.titleTopMargin,l.db.getDiagramTitle());let b=p.node().getBBox(),k=b.width+2*O,R=b.height+2*O;(0,i.i)(p,R,k,g.useMaxWidth),p.attr("viewBox",`${b.x-O} ${b.y-O} ${k} ${R}`)}},styles:t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`}}}]);