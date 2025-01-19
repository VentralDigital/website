"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2215],{52215:function(t,e,i){i.d(e,{D:function(){return h},S:function(){return l},a:function(){return u},b:function(){return c},c:function(){return a},d:function(){return b},p:function(){return n},s:function(){return styles}});var s=i(65480),r=function(){var o=function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},t=[1,2],e=[1,3],i=[1,5],s=[1,7],r=[2,5],n=[1,15],a=[1,17],c=[1,21],l=[1,22],h=[1,23],u=[1,24],d=[1,37],p=[1,25],y=[1,26],f=[1,27],g=[1,28],S=[1,29],_=[1,32],m=[1,33],T=[1,34],k=[1,35],b=[1,36],E=[1,39],v=[1,40],x=[1,41],D=[1,42],C=[1,38],$=[1,45],A=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],I=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],L=[1,4,5,7,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],N=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],O={trace:function(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,directive:6,SD:7,document:8,line:9,statement:10,classDefStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,class:42,CLASSENTITY_IDS:43,STYLECLASS:44,openDirective:45,typeDirective:46,closeDirective:47,":":48,argDirective:49,direction_tb:50,direction_bt:51,direction_rl:52,direction_lr:53,eol:54,";":55,EDGE_STATE:56,STYLE_SEPARATOR:57,left_of:58,right_of:59,open_directive:60,type_directive:61,arg_directive:62,close_directive:63,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",7:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"class",43:"CLASSENTITY_IDS",44:"STYLECLASS",48:":",50:"direction_tb",51:"direction_bt",52:"direction_rl",53:"direction_lr",55:";",56:"EDGE_STATE",57:"STYLE_SEPARATOR",58:"left_of",59:"right_of",60:"open_directive",61:"type_directive",62:"arg_directive",63:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[9,1],[9,1],[10,1],[10,1],[10,1],[10,2],[10,3],[10,4],[10,1],[10,2],[10,1],[10,4],[10,3],[10,6],[10,1],[10,1],[10,1],[10,1],[10,4],[10,4],[10,1],[10,1],[10,2],[10,2],[10,1],[11,3],[11,3],[12,3],[6,3],[6,5],[32,1],[32,1],[32,1],[32,1],[54,1],[54,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1],[45,1],[46,1],[49,1],[47,1]],performAction:function(t,e,i,s,r,n,a){var c=n.length-1;switch(r){case 4:return s.setRootDoc(n[c]),n[c];case 5:this.$=[];break;case 6:"nl"!=n[c]&&(n[c-1].push(n[c]),this.$=n[c-1]);break;case 7:case 8:case 12:this.$=n[c];break;case 9:this.$="nl";break;case 13:let l=n[c-1];l.description=s.trimColon(n[c]),this.$=l;break;case 14:this.$={stmt:"relation",state1:n[c-2],state2:n[c]};break;case 15:let h=s.trimColon(n[c]);this.$={stmt:"relation",state1:n[c-3],state2:n[c-1],description:h};break;case 19:this.$={stmt:"state",id:n[c-3],type:"default",description:"",doc:n[c-1]};break;case 20:var u=n[c],d=n[c-2].trim();if(n[c].match(":")){var p=n[c].split(":");u=p[0],d=[d,p[1]]}this.$={stmt:"state",id:u,type:"default",description:d};break;case 21:this.$={stmt:"state",id:n[c-3],type:"default",description:n[c-5],doc:n[c-1]};break;case 22:this.$={stmt:"state",id:n[c],type:"fork"};break;case 23:this.$={stmt:"state",id:n[c],type:"join"};break;case 24:this.$={stmt:"state",id:n[c],type:"choice"};break;case 25:this.$={stmt:"state",id:s.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:n[c-1].trim(),note:{position:n[c-2].trim(),text:n[c].trim()}};break;case 30:this.$=n[c].trim(),s.setAccTitle(this.$);break;case 31:case 32:this.$=n[c].trim(),s.setAccDescription(this.$);break;case 33:case 34:this.$={stmt:"classDef",id:n[c-1].trim(),classes:n[c].trim()};break;case 35:this.$={stmt:"applyClass",id:n[c-1].trim(),styleClass:n[c].trim()};break;case 38:s.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:s.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:s.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:s.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:n[c].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:n[c-2].trim(),classes:[n[c].trim()],type:"default",description:""};break;case 50:s.parseDirective("%%{","open_directive");break;case 51:s.parseDirective(n[c],"type_directive");break;case 52:n[c]=n[c].trim().replace(/'/g,'"'),s.parseDirective(n[c],"arg_directive");break;case 53:s.parseDirective("}%%","close_directive","state")}},table:[{3:1,4:t,5:e,6:4,7:i,45:6,60:s},{1:[3]},{3:8,4:t,5:e,6:4,7:i,45:6,60:s},{3:9,4:t,5:e,6:4,7:i,45:6,60:s},{3:10,4:t,5:e,6:4,7:i,45:6,60:s},o([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],r,{8:11}),{46:12,61:[1,13]},{61:[2,50]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4],4:n,5:a,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,22:u,24:d,25:p,26:y,27:f,28:g,29:S,32:31,33:_,35:m,37:T,38:k,42:b,45:6,50:E,51:v,52:x,53:D,56:C,60:s},{47:43,48:[1,44],63:$},o([48,63],[2,51]),o(A,[2,6]),{6:30,10:46,11:18,12:19,13:20,16:c,17:l,19:h,22:u,24:d,25:p,26:y,27:f,28:g,29:S,32:31,33:_,35:m,37:T,38:k,42:b,45:6,50:E,51:v,52:x,53:D,56:C,60:s},o(A,[2,8]),o(A,[2,9]),o(A,[2,10]),o(A,[2,11]),o(A,[2,12],{14:[1,47],15:[1,48]}),o(A,[2,16]),{18:[1,49]},o(A,[2,18],{20:[1,50]}),{23:[1,51]},o(A,[2,22]),o(A,[2,23]),o(A,[2,24]),o(A,[2,25]),{30:52,31:[1,53],58:[1,54],59:[1,55]},o(A,[2,28]),o(A,[2,29]),{34:[1,56]},{36:[1,57]},o(A,[2,32]),{39:[1,58],41:[1,59]},{43:[1,60]},o(I,[2,44],{57:[1,61]}),o(I,[2,45],{57:[1,62]}),o(A,[2,38]),o(A,[2,39]),o(A,[2,40]),o(A,[2,41]),o(L,[2,36]),{49:63,62:[1,64]},o(L,[2,53]),o(A,[2,7]),o(A,[2,13]),{13:65,24:d,56:C},o(A,[2,17]),o(N,r,{8:66}),{24:[1,67]},{24:[1,68]},{23:[1,69]},{24:[2,48]},{24:[2,49]},o(A,[2,30]),o(A,[2,31]),{40:[1,70]},{40:[1,71]},{44:[1,72]},{24:[1,73]},{24:[1,74]},{47:75,63:$},{63:[2,52]},o(A,[2,14],{14:[1,76]}),{4:n,5:a,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,21:[1,77],22:u,24:d,25:p,26:y,27:f,28:g,29:S,32:31,33:_,35:m,37:T,38:k,42:b,45:6,50:E,51:v,52:x,53:D,56:C,60:s},o(A,[2,20],{20:[1,78]}),{31:[1,79]},{24:[1,80]},o(A,[2,33]),o(A,[2,34]),o(A,[2,35]),o(I,[2,46]),o(I,[2,47]),o(L,[2,37]),o(A,[2,15]),o(A,[2,19]),o(N,r,{8:81}),o(A,[2,26]),o(A,[2,27]),{4:n,5:a,6:30,9:14,10:16,11:18,12:19,13:20,16:c,17:l,19:h,21:[1,82],22:u,24:d,25:p,26:y,27:f,28:g,29:S,32:31,33:_,35:m,37:T,38:k,42:b,45:6,50:E,51:v,52:x,53:D,56:C,60:s},o(A,[2,21])],defaultActions:{7:[2,50],8:[2,1],9:[2,2],10:[2,3],54:[2,48],55:[2,49],64:[2,52]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],s=[],r=[null],n=[],a=this.table,c="",l=0,h=0,u=n.slice.call(arguments,1),d=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);d.setInput(t,p.yy),p.yy.lexer=d,p.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var f=d.yylloc;n.push(f);var g=d.options&&d.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var S,_,m,T,k,b,E,v,x={};;){if(_=i[i.length-1],this.defaultActions[_]?m=this.defaultActions[_]:(null==S&&(S=function(){var t;return"number"!=typeof(t=s.pop()||d.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}()),m=a[_]&&a[_][S]),void 0===m||!m.length||!m[0]){var D="";for(k in v=[],a[_])this.terminals_[k]&&k>2&&v.push("'"+this.terminals_[k]+"'");D=d.showPosition?"Parse error on line "+(l+1)+":\n"+d.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==S?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(D,{text:d.match,token:this.terminals_[S]||S,line:d.yylineno,loc:f,expected:v})}if(m[0]instanceof Array&&m.length>1)throw Error("Parse Error: multiple actions possible at state: "+_+", token: "+S);switch(m[0]){case 1:i.push(S),r.push(d.yytext),n.push(d.yylloc),i.push(m[1]),S=null,h=d.yyleng,c=d.yytext,l=d.yylineno,f=d.yylloc;break;case 2:if(b=this.productions_[m[1]][1],x.$=r[r.length-b],x._$={first_line:n[n.length-(b||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(b||1)].first_column,last_column:n[n.length-1].last_column},g&&(x._$.range=[n[n.length-(b||1)].range[0],n[n.length-1].range[1]]),void 0!==(T=this.performAction.apply(x,[c,h,l,p.yy,m[1],r,n].concat(u))))return T;b&&(i=i.slice(0,-1*b*2),r=r.slice(0,-1*b),n=n.slice(0,-1*b)),i.push(this.productions_[m[1]][0]),r.push(x.$),n.push(x._$),E=a[i[i.length-2]][i[i.length-1]],i.push(E);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return O.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,r=this._currentRules(),n=0;n<r.length;n++)if((i=this._input.match(this.rules[r[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,s){switch(i){case 0:return 41;case 1:case 44:return 50;case 2:case 45:return 51;case 3:case 46:return 52;case 4:case 47:return 53;case 5:return this.begin("open_directive"),60;case 6:return this.begin("type_directive"),61;case 7:return this.popState(),this.begin("arg_directive"),48;case 8:return this.popState(),this.popState(),63;case 9:return 62;case 10:case 11:case 13:case 14:case 15:case 16:case 56:case 58:case 64:break;case 12:case 79:return 5;case 17:case 34:return this.pushState("SCALE"),17;case 18:case 35:return 18;case 19:case 25:case 36:case 51:case 54:this.popState();break;case 20:return this.begin("acc_title"),33;case 21:return this.popState(),"acc_title_value";case 22:return this.begin("acc_descr"),35;case 23:return this.popState(),"acc_descr_value";case 24:this.begin("acc_descr_multiline");break;case 26:return"acc_descr_multiline_value";case 27:return this.pushState("CLASSDEF"),38;case 28:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 29:return this.popState(),this.pushState("CLASSDEFID"),39;case 30:return this.popState(),40;case 31:return this.pushState("CLASS"),42;case 32:return this.popState(),this.pushState("CLASS_STYLE"),43;case 33:return this.popState(),44;case 37:this.pushState("STATE");break;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 39:case 42:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 40:case 43:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 48:this.pushState("STATE_STRING");break;case 49:return this.pushState("STATE_ID"),"AS";case 50:case 66:return this.popState(),"ID";case 52:return"STATE_DESCR";case 53:return 19;case 55:return this.popState(),this.pushState("struct"),20;case 57:return this.popState(),21;case 59:return this.begin("NOTE"),29;case 60:return this.popState(),this.pushState("NOTE_ID"),58;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:this.popState(),this.pushState("FLOATING_NOTE");break;case 63:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 65:return"NOTE_TEXT";case 67:return this.popState(),this.pushState("NOTE_TEXT"),24;case 68:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 69:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 70:case 71:return 7;case 72:return 16;case 73:return 56;case 74:return 24;case 75:return e.yytext=e.yytext.trim(),14;case 76:return 15;case 77:return 28;case 78:return 57;case 80:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[14,15],inclusive:!1},close_directive:{rules:[14,15],inclusive:!1},arg_directive:{rules:[8,9,14,15],inclusive:!1},type_directive:{rules:[7,8,14,15],inclusive:!1},open_directive:{rules:[6,14,15],inclusive:!1},struct:{rules:[14,15,27,31,37,44,45,46,47,56,57,58,59,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[66],inclusive:!1},FLOATING_NOTE:{rules:[63,64,65],inclusive:!1},NOTE_TEXT:{rules:[68,69],inclusive:!1},NOTE_ID:{rules:[67],inclusive:!1},NOTE:{rules:[60,61,62],inclusive:!1},CLASS_STYLE:{rules:[33],inclusive:!1},CLASS:{rules:[32],inclusive:!1},CLASSDEFID:{rules:[30],inclusive:!1},CLASSDEF:{rules:[28,29],inclusive:!1},acc_descr_multiline:{rules:[25,26],inclusive:!1},acc_descr:{rules:[23],inclusive:!1},acc_title:{rules:[21],inclusive:!1},SCALE:{rules:[18,19,35,36],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[50],inclusive:!1},STATE_STRING:{rules:[51,52],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[14,15,38,39,40,41,42,43,48,49,53,54,55],inclusive:!1},ID:{rules:[14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,10,11,12,13,15,16,17,20,22,24,27,31,34,37,55,59,70,71,72,73,74,75,76,78,79,80],inclusive:!0}}},Parser.prototype=O,O.Parser=Parser,new Parser}();r.parser=r;let n=r,a="TB",c="state",l="relation",h="default",u="divider",d="start",p="color",y="fill",f="LR",g=[],S={},newDoc=()=>({relations:[],states:{},documents:{}}),_={root:newDoc()},m=_.root,T=0,k=0,clone=t=>JSON.parse(JSON.stringify(t)),docTranslator=(t,e,i)=>{if(e.stmt===l)docTranslator(t,e.state1,!0),docTranslator(t,e.state2,!1);else if(e.stmt===c&&("[*]"===e.id?(e.id=i?t.id+"_start":t.id+"_end",e.start=i):e.id=e.id.trim()),e.doc){let t;let i=[],r=[];for(t=0;t<e.doc.length;t++)if(e.doc[t].type===u){let s=clone(e.doc[t]);s.doc=clone(r),i.push(s),r=[]}else r.push(e.doc[t]);if(i.length>0&&r.length>0){let t={stmt:c,id:(0,s.F)(),type:"divider",doc:clone(r)};i.push(clone(t)),e.doc=i}e.doc.forEach(t=>docTranslator(e,t,!0))}},addState=function(t,e=h,i=null,r=null,n=null,a=null,c=null,l=null){let u=null==t?void 0:t.trim();if(void 0===m.states[u]?(s.l.info("Adding state ",u,r),m.states[u]={id:u,descriptions:[],type:e,doc:i,note:n,classes:[],styles:[],textStyles:[]}):(m.states[u].doc||(m.states[u].doc=i),m.states[u].type||(m.states[u].type=e)),r&&(s.l.info("Setting state description",u,r),"string"==typeof r&&addDescription(u,r.trim()),"object"==typeof r&&r.forEach(t=>addDescription(u,t.trim()))),n&&(m.states[u].note=n,m.states[u].note.text=s.e.sanitizeText(m.states[u].note.text,(0,s.c)())),a){s.l.info("Setting state classes",u,a);let t="string"==typeof a?[a]:a;t.forEach(t=>setCssClass(u,t.trim()))}if(c){s.l.info("Setting state styles",u,c);let t="string"==typeof c?[c]:c;t.forEach(t=>setStyle(u,t.trim()))}l&&(s.l.info("Setting state styles",u,c),("string"==typeof l?[l]:l).forEach(t=>setTextStyle(u,t.trim())))},clear=function(t){m=(_={root:newDoc()}).root,T=0,S={},t||(0,s.v)()},getState=function(t){return m.states[t]};function startIdIfNeeded(t=""){let e=t;return"[*]"===t&&(T++,e=`${d}${T}`),e}function startTypeIfNeeded(t="",e=h){return"[*]"===t?d:e}let addRelation=function(t,e,i){if("object"==typeof t){let r,n,a,c;r=startIdIfNeeded(t.id.trim()),n=startTypeIfNeeded(t.id.trim(),t.type),a=startIdIfNeeded(e.id.trim()),c=startTypeIfNeeded(e.id.trim(),e.type),addState(r,n,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),addState(a,c,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),m.relations.push({id1:r,id2:a,relationTitle:s.e.sanitizeText(i,(0,s.c)())})}else{let r=startIdIfNeeded(t.trim()),n=startTypeIfNeeded(t),a=function(t=""){let e=t;return"[*]"===t&&(T++,e=`end${T}`),e}(e.trim()),c=function(t="",e=h){return"[*]"===t?"end":e}(e);addState(r,n),addState(a,c),m.relations.push({id1:r,id2:a,title:s.e.sanitizeText(i,(0,s.c)())})}},addDescription=function(t,e){let i=m.states[t],r=e.startsWith(":")?e.replace(":","").trim():e;i.descriptions.push(s.e.sanitizeText(r,(0,s.c)()))},addStyleClass=function(t,e=""){void 0===S[t]&&(S[t]={id:t,styles:[],textStyles:[]});let i=S[t];null!=e&&e.split(",").forEach(t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(t.match(p)){let t=e.replace(y,"bgFill"),s=t.replace(p,y);i.textStyles.push(s)}i.styles.push(e)})},setCssClass=function(t,e){t.split(",").forEach(function(t){let i=getState(t);if(void 0===i){let e=t.trim();addState(e),i=getState(e)}i.classes.push(e)})},setStyle=function(t,e){let i=getState(t);void 0!==i&&i.textStyles.push(e)},setTextStyle=function(t,e){let i=getState(t);void 0!==i&&i.textStyles.push(e)},b={parseDirective:function(t,e,i){s.m.parseDirective(this,t,e,i)},getConfig:()=>(0,s.c)().state,addState,clear,getState,getStates:function(){return m.states},getRelations:function(){return m.relations},getClasses:function(){return S},getDirection:()=>f,addRelation,getDividerId:()=>"divider-id-"+ ++k,setDirection:t=>{f=t},cleanupLabel:function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()},lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:function(){s.l.info("Documents = ",_)},getRootDoc:()=>g,setRootDoc:t=>{s.l.info("Setting root doc",t),g=t},getRootDocV2:()=>(docTranslator({id:"root"},{id:"root",doc:g},!0),{id:"root",doc:g}),extract:t=>{let e;e=t.doc?t.doc:t,s.l.info(e),clear(!0),s.l.info("Extract",e),e.forEach(t=>{switch(t.stmt){case c:addState(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case l:addRelation(t.state1,t.state2,t.description);break;case"classDef":addStyleClass(t.id.trim(),t.classes);break;case"applyClass":setCssClass(t.id.trim(),t.styleClass)}})},trimColon:t=>t&&":"===t[0]?t.substr(1).trim():t.trim(),getAccTitle:s.g,setAccTitle:s.s,getAccDescription:s.a,setAccDescription:s.b,addStyleClass,setCssClass,addDescription,setDiagramTitle:s.r,getDiagramTitle:s.t},styles=t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`}}]);