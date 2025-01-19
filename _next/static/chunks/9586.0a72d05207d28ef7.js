(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9586],{89514:function(t){t.exports=function(t,e){var i=e.prototype,r=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return r.bind(this)(t);var n=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return n.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return n.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return n.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return r.bind(this)(s)}}},41554:function(t){var e,i,r,n,s,c,l,u,d,h,f,m;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,c={},l=function(t){return(t=+t)+(t>68?1900:2e3)},u=function(t){return function(e){this[t]=+e}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],h=function(t){var e=c[t];return e&&(e.indexOf?e:e.s.concat(e.f))},f=function(t,e){var i,r=c.meridiem;if(r){for(var n=1;n<=24;n+=1)if(t.indexOf(r(n,0,e))>-1){i=n>12;break}}else i=t===(e?"pm":"PM");return i},m={A:[s,function(t){this.afternoon=f(t,!1)}],a:[s,function(t){this.afternoon=f(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,u("seconds")],ss:[n,u("seconds")],m:[n,u("minutes")],mm:[n,u("minutes")],H:[n,u("hours")],h:[n,u("hours")],HH:[n,u("hours")],hh:[n,u("hours")],D:[n,u("day")],DD:[r,u("day")],Do:[s,function(t){var e=c.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[n,u("month")],MM:[r,u("month")],MMM:[s,function(t){var e=h("months"),i=(h("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[s,function(t){var e=h("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,u("year")],YY:[r,function(t){this.year=l(t)}],YYYY:[/\d{4}/,u("year")],Z:d,ZZ:d},function(t,r,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(l=t.parseTwoDigitYear);var s=r.prototype,u=s.parse;s.parse=function(t){var r=t.date,s=t.utc,l=t.args;this.$u=s;var d=l[1];if("string"==typeof d){var h=!0===l[2],f=!0===l[3],p=l[2];f&&(p=l[2]),c=this.$locale(),!h&&p&&(c=n.Ls[p]),this.$d=function(t,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*t);var s=(function(t){var r,n;r=t,n=c&&c.formats;for(var s=(t=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,i,r){var s=r&&r.toUpperCase();return i||n[r]||e[r]||n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(i),l=s.length,u=0;u<l;u+=1){var d=s[u],h=m[d],f=h&&h[0],p=h&&h[1];s[u]=p?{regex:f,parser:p}:d.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,r=0;i<l;i+=1){var n=s[i];if("string"==typeof n)r+=n.length;else{var c=n.regex,u=n.parser,d=t.slice(r),h=c.exec(d)[0];u.call(e,h),t=t.replace(h,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(r)(t),l=s.year,u=s.month,d=s.day,h=s.hours,f=s.minutes,p=s.seconds,k=s.milliseconds,y=s.zone,g=new Date,v=d||(l||u?1:g.getDate()),T=l||g.getFullYear(),b=0;l&&!u||(b=u>0?u-1:g.getMonth());var x=h||0,_=f||0,D=p||0,$=k||0;return y?new Date(Date.UTC(T,b,v,x,_,D,$+60*y.offset*1e3)):n?new Date(Date.UTC(T,b,v,x,_,D,$)):new Date(T,b,v,x,_,D,$)}catch(t){return new Date("")}}(r,d,s),this.init(),p&&!0!==p&&(this.$L=this.locale(p).$L),(h||f)&&r!=this.format(d)&&(this.$d=new Date("")),c={}}else if(d instanceof Array)for(var k=d.length,y=1;y<=k;y+=1){l[1]=d[y-1];var g=n.apply(this,l);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}y===k&&(this.$d=new Date(""))}else u.call(this,t)}})},90932:function(t){t.exports=function(t,e,i){var a=function(t){return t.add(4-t.isoWeekday(),"day")},r=e.prototype;r.isoWeekYear=function(){return a(this).year()},r.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,r,n,s=a(this),c=(e=this.isoWeekYear(),n=4-(r=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(n+=7),r.add(n,"day"));return s.diff(c,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var n=r.startOf;r.startOf=function(t,e){var i=this.$utils(),r=!!i.u(e)||e;return"isoweek"===i.p(t)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(t,e)}}},89586:function(t,e,i){"use strict";let r,n,s,c;i.d(e,{diagram:function(){return O}});var l=i(68148),u=i(58820),d=i(90932),h=i(41554),f=i(89514),m=i(65480),p=i(30086);i(92769);var k=function(){var o=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},t=[1,3],e=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],r=[1,15],n=[1,16],s=[1,17],c=[1,18],l=[1,19],u=[1,20],d=[1,21],h=[1,22],f=[1,23],m=[1,24],p=[1,25],k=[1,26],y=[1,27],g=[1,29],v=[1,31],T=[1,34],b=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],x={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(t,e,i,r,n,s,c){var l=s.length-1;switch(n){case 2:return s[l-1];case 3:case 7:case 8:this.$=[];break;case 4:s[l-1].push(s[l]),this.$=s[l-1];break;case 5:case 6:this.$=s[l];break;case 9:r.setDateFormat(s[l].substr(11)),this.$=s[l].substr(11);break;case 10:r.enableInclusiveEndDates(),this.$=s[l].substr(18);break;case 11:r.TopAxis(),this.$=s[l].substr(8);break;case 12:r.setAxisFormat(s[l].substr(11)),this.$=s[l].substr(11);break;case 13:r.setTickInterval(s[l].substr(13)),this.$=s[l].substr(13);break;case 14:r.setExcludes(s[l].substr(9)),this.$=s[l].substr(9);break;case 15:r.setIncludes(s[l].substr(9)),this.$=s[l].substr(9);break;case 16:r.setTodayMarker(s[l].substr(12)),this.$=s[l].substr(12);break;case 17:r.setDiagramTitle(s[l].substr(6)),this.$=s[l].substr(6);break;case 18:this.$=s[l].trim(),r.setAccTitle(this.$);break;case 19:case 20:this.$=s[l].trim(),r.setAccDescription(this.$);break;case 21:r.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 23:r.addTask(s[l-1],s[l]),this.$="task";break;case 27:this.$=s[l-1],r.setClickEvent(s[l-1],s[l],null);break;case 28:this.$=s[l-2],r.setClickEvent(s[l-2],s[l-1],s[l]);break;case 29:this.$=s[l-2],r.setClickEvent(s[l-2],s[l-1],null),r.setLink(s[l-2],s[l]);break;case 30:this.$=s[l-3],r.setClickEvent(s[l-3],s[l-2],s[l-1]),r.setLink(s[l-3],s[l]);break;case 31:this.$=s[l-2],r.setClickEvent(s[l-2],s[l],null),r.setLink(s[l-2],s[l-1]);break;case 32:this.$=s[l-3],r.setClickEvent(s[l-3],s[l-1],s[l]),r.setLink(s[l-3],s[l-2]);break;case 33:this.$=s[l-1],r.setLink(s[l-1],s[l]);break;case 34:case 40:this.$=s[l-1]+" "+s[l];break;case 35:case 36:case 38:this.$=s[l-2]+" "+s[l-1]+" "+s[l];break;case 37:case 39:this.$=s[l-3]+" "+s[l-2]+" "+s[l-1]+" "+s[l];break;case 41:r.parseDirective("%%{","open_directive");break;case 42:r.parseDirective(s[l],"type_directive");break;case 43:s[l]=s[l].trim().replace(/'/g,'"'),r.parseDirective(s[l],"arg_directive");break;case 44:r.parseDirective("}%%","close_directive","gantt")}},table:[{3:1,4:2,5:t,30:4,40:e},{1:[3]},{3:6,4:2,5:t,30:4,40:e},o(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:r,13:n,14:s,15:c,16:l,17:u,18:d,19:h,20:f,21:m,23:p,25:k,26:y,27:28,28:g,30:4,35:v,40:e},{32:32,33:[1,33],43:T},o([33,43],[2,42]),o(i,[2,8],{1:[2,2]}),o(i,[2,4]),{4:30,10:35,12:r,13:n,14:s,15:c,16:l,17:u,18:d,19:h,20:f,21:m,23:p,25:k,26:y,27:28,28:g,30:4,35:v,40:e},o(i,[2,6]),o(i,[2,7]),o(i,[2,9]),o(i,[2,10]),o(i,[2,11]),o(i,[2,12]),o(i,[2,13]),o(i,[2,14]),o(i,[2,15]),o(i,[2,16]),o(i,[2,17]),{22:[1,36]},{24:[1,37]},o(i,[2,20]),o(i,[2,21]),o(i,[2,22]),{29:[1,38]},o(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},o(i,[2,5]),o(i,[2,18]),o(i,[2,19]),o(i,[2,23]),o(i,[2,27],{37:[1,44],38:[1,45]}),o(i,[2,33],{36:[1,46]}),o(b,[2,25]),{32:47,43:T},{43:[2,43]},o(i,[2,28],{38:[1,48]}),o(i,[2,29]),o(i,[2,31],{37:[1,49]}),{11:[1,50]},o(i,[2,30]),o(i,[2,32]),o(b,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],r=[],n=[null],s=[],c=this.table,l="",u=0,d=0,h=s.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(m.yy[p]=this.yy[p]);f.setInput(t,m.yy),m.yy.lexer=f,m.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var k=f.yylloc;s.push(k);var y=f.options&&f.options.ranges;"function"==typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,v,T,b,x,_,D,$,w={};;){if(v=i[i.length-1],this.defaultActions[v]?T=this.defaultActions[v]:(null==g&&(g=function(){var t;return"number"!=typeof(t=r.pop()||f.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}()),T=c[v]&&c[v][g]),void 0===T||!T.length||!T[0]){var S="";for(x in $=[],c[v])this.terminals_[x]&&x>2&&$.push("'"+this.terminals_[x]+"'");S=f.showPosition?"Parse error on line "+(u+1)+":\n"+f.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(u+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(S,{text:f.match,token:this.terminals_[g]||g,line:f.yylineno,loc:k,expected:$})}if(T[0]instanceof Array&&T.length>1)throw Error("Parse Error: multiple actions possible at state: "+v+", token: "+g);switch(T[0]){case 1:i.push(g),n.push(f.yytext),s.push(f.yylloc),i.push(T[1]),g=null,d=f.yyleng,l=f.yytext,u=f.yylineno,k=f.yylloc;break;case 2:if(_=this.productions_[T[1]][1],w.$=n[n.length-_],w._$={first_line:s[s.length-(_||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(_||1)].first_column,last_column:s[s.length-1].last_column},y&&(w._$.range=[s[s.length-(_||1)].range[0],s[s.length-1].range[1]]),void 0!==(b=this.performAction.apply(w,[l,d,u,m.yy,T[1],n,s].concat(h))))return b;_&&(i=i.slice(0,-1*_*2),n=n.slice(0,-1*_),s=s.slice(0,-1*_)),i.push(this.productions_[T[1]][0]),n.push(w.$),s.push(w._$),D=c[i[i.length-2]][i[i.length-1]],i.push(D);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return x.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,r,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 20:case 23:case 26:case 29:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:case 13:case 14:case 16:case 17:case 18:break;case 15:return 11;case 19:this.begin("href");break;case 21:return 38;case 22:this.begin("callbackname");break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 27:return 37;case 28:this.begin("click");break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}},Parser.prototype=x,x.Parser=Parser,new Parser}();k.parser=k,u.extend(d),u.extend(h),u.extend(f);let y="",g="",v="",T=[],b=[],x={},_=[],D=[],$="",w="",S=["active","done","crit","milestone"],C=[],E=!1,M=!1,Y=0,isInvalidDate=function(t,e,i,r){return!r.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},checkTaskDates=function(t,e,i,r){let n,s;if(!i.length||t.manualEndTime)return;n=(n=t.startTime instanceof Date?u(t.startTime):u(t.startTime,e,!0)).add(1,"d"),s=t.endTime instanceof Date?u(t.endTime):u(t.endTime,e,!0);let[c,l]=fixTaskDates(n,s,e,i,r);t.endTime=c.toDate(),t.renderEndTime=l},fixTaskDates=function(t,e,i,r,n){let s=!1,c=null;for(;t<=e;)s||(c=e.toDate()),(s=isInvalidDate(t,i,r,n))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,c]},getStartDate=function(t,e,i){i=i.trim();let r=/^after\s+([\d\w- ]+)/.exec(i.trim());if(null!==r){let t=null;if(r[1].split(" ").forEach(function(e){let i=findTaskById(e);void 0!==i&&(t?i.endTime>t.endTime&&(t=i):t=i)}),t)return t.endTime;{let t=new Date;return t.setHours(0,0,0,0),t}}let n=u(i,e.trim(),!0);if(n.isValid())return n.toDate();{m.l.debug("Invalid date:"+i),m.l.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},parseDuration=function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},getEndDate=function(t,e,i,r=!1){let n=u(i=i.trim(),e.trim(),!0);if(n.isValid())return r&&(n=n.add(1,"d")),n.toDate();let s=u(t),[c,l]=parseDuration(i);if(!Number.isNaN(c)){let t=s.add(c,l);t.isValid()&&(s=t)}return s.toDate()},A=0,parseId=function(t){return void 0===t?"task"+(A+=1):t},compileData=function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let r=i.split(","),n={};getTaskTags(r,n,S);for(let t=0;t<r.length;t++)r[t]=r[t].trim();let s="";switch(r.length){case 1:n.id=parseId(),n.startTime=t.endTime,s=r[0];break;case 2:n.id=parseId(),n.startTime=getStartDate(void 0,y,r[0]),s=r[1];break;case 3:n.id=parseId(r[0]),n.startTime=getStartDate(void 0,y,r[1]),s=r[2]}return s&&(n.endTime=getEndDate(n.startTime,y,s,E),n.manualEndTime=u(s,"YYYY-MM-DD",!0).isValid(),checkTaskDates(n,y,b,T)),n},parseData=function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let r=i.split(","),n={};getTaskTags(r,n,S);for(let t=0;t<r.length;t++)r[t]=r[t].trim();switch(r.length){case 1:n.id=parseId(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:r[0]};break;case 2:n.id=parseId(),n.startTime={type:"getStartDate",startData:r[0]},n.endTime={data:r[1]};break;case 3:n.id=parseId(r[0]),n.startTime={type:"getStartDate",startData:r[1]},n.endTime={data:r[2]}}return n},I=[],L={},findTaskById=function(t){let e=L[t];return I[e]},compileTasks=function(){let t=!0;for(let[e,i]of I.entries())!function(t){let e=I[t],i="";switch(I[t].raw.startTime.type){case"prevTaskEnd":{let t=findTaskById(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=getStartDate(void 0,y,I[t].raw.startTime.startData))&&(I[t].startTime=i)}I[t].startTime&&(I[t].endTime=getEndDate(I[t].startTime,y,I[t].raw.endTime.data,E),I[t].endTime&&(I[t].processed=!0,I[t].manualEndTime=u(I[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),checkTaskDates(I[t],y,b,T))),I[t].processed}(e),t=t&&i.processed;return t},setClass=function(t,e){t.split(",").forEach(function(t){let i=findTaskById(t);void 0!==i&&i.classes.push(e)})},setClickFun=function(t,e,i){if("loose"!==(0,m.c)().securityLevel||void 0===e)return;let r=[];if("string"==typeof i){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<r.length;t++){let e=r[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),r[t]=e}}0===r.length&&r.push(t),void 0!==findTaskById(t)&&pushFun(t,()=>{m.u.runFunc(e,...r)})},pushFun=function(t,e){C.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},F={parseDirective:function(t,e,i){m.m.parseDirective(this,t,e,i)},getConfig:()=>(0,m.c)().gantt,clear:function(){_=[],D=[],$="",C=[],A=0,r=void 0,n=void 0,I=[],y="",g="",w="",c=void 0,v="",T=[],b=[],E=!1,M=!1,Y=0,x={},(0,m.v)()},setDateFormat:function(t){y=t},getDateFormat:function(){return y},enableInclusiveEndDates:function(){E=!0},endDatesAreInclusive:function(){return E},enableTopAxis:function(){M=!0},topAxisEnabled:function(){return M},setAxisFormat:function(t){g=t},getAxisFormat:function(){return g},setTickInterval:function(t){c=t},getTickInterval:function(){return c},setTodayMarker:function(t){v=t},getTodayMarker:function(){return v},setAccTitle:m.s,getAccTitle:m.g,setDiagramTitle:m.r,getDiagramTitle:m.t,setDisplayMode:function(t){w=t},getDisplayMode:function(){return w},setAccDescription:m.b,getAccDescription:m.a,addSection:function(t){$=t,_.push(t)},getSections:function(){return _},getTasks:function(){let t=compileTasks(),e=0;for(;!t&&e<10;)t=compileTasks(),e++;return D=I},addTask:function(t,e){let i={section:$,type:$,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},r=parseData(n,e);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=n,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=Y,Y++;let s=I.push(i);n=i.id,L[i.id]=s-1},findTaskById,addTaskOrg:function(t,e){let i={section:$,type:$,description:t,task:t,classes:[]},n=compileData(r,e);i.startTime=n.startTime,i.endTime=n.endTime,i.id=n.id,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,r=i,D.push(i)},setIncludes:function(t){T=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return T},setExcludes:function(t){b=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return b},setClickEvent:function(t,e,i){t.split(",").forEach(function(t){setClickFun(t,e,i)}),setClass(t,"clickable")},setLink:function(t,e){let i=e;"loose"!==(0,m.c)().securityLevel&&(i=(0,l.N)(e)),t.split(",").forEach(function(t){void 0!==findTaskById(t)&&(pushFun(t,()=>{window.open(i,"_self")}),x[t]=i)}),setClass(t,"clickable")},getLinks:function(){return x},bindFunctions:function(t){C.forEach(function(e){e(t)})},parseDuration,isInvalidDate};function getTaskTags(t,e,i){let r=!0;for(;r;)r=!1,i.forEach(function(i){let n="^\\s*"+i+"\\s*$",s=new RegExp(n);t[0].match(s)&&(e[i]=!0,t.shift(1),r=!0)})}let getMaxIntersections=(t,e)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),n=0;for(let t of r)for(let r=0;r<i.length;r++)if(t.startTime>=i[r]){i[r]=t.endTime,t.order=r+e,r>n&&(n=r);break}return n},O={parser:k,db:F,renderer:{setConf:function(){m.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,i,r){let n;let c=(0,m.c)().gantt,l=(0,m.c)().securityLevel;"sandbox"===l&&(n=(0,p.Ys)("#i"+e));let d="sandbox"===l?(0,p.Ys)(n.nodes()[0].contentDocument.body):(0,p.Ys)("body"),h="sandbox"===l?n.nodes()[0].contentDocument:document,f=h.getElementById(e);void 0===(s=f.parentElement.offsetWidth)&&(s=1200),void 0!==c.useWidth&&(s=c.useWidth);let k=r.db.getTasks(),y=[];for(let t of k)y.push(t.type);y=function(t){let e={},i=[];for(let r=0,n=t.length;r<n;++r)Object.prototype.hasOwnProperty.call(e,t[r])||(e[t[r]]=!0,i.push(t[r]));return i}(y);let g={},v=2*c.topPadding;if("compact"===r.db.getDisplayMode()||"compact"===c.displayMode){let t={};for(let e of k)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let r=getMaxIntersections(t[i],e)+1;e+=r,v+=r*(c.barHeight+c.barGap),g[i]=r}}else for(let t of(v+=k.length*(c.barHeight+c.barGap),y))g[t]=k.filter(e=>e.type===t).length;f.setAttribute("viewBox","0 0 "+s+" "+v);let T=d.select(`[id="${e}"]`),b=(0,p.Xf)().domain([(0,p.VV$)(k,function(t){return t.startTime}),(0,p.Fp7)(k,function(t){return t.endTime})]).rangeRound([0,s-c.leftPadding-c.rightPadding]);k.sort(function(t,e){let i=t.startTime,r=e.startTime,n=0;return i>r?n=1:i<r&&(n=-1),n}),function(t,i,n){let s=c.barHeight,l=s+c.barGap,d=c.topPadding,f=c.leftPadding;(0,p.BYU)().domain([0,y.length]).range(["#00B9FA","#F95002"]).interpolate(p.JHv),function(t,e,i,n,s,l,d,h){let f=l.reduce((t,{startTime:e})=>t?Math.min(t,e):e,0),m=l.reduce((t,{endTime:e})=>t?Math.max(t,e):e,0),p=r.db.getDateFormat();if(!f||!m)return;let k=[],y=null,g=u(f);for(;g.valueOf()<=m;)r.db.isInvalidDate(g,p,d,h)?y?y.end=g:y={start:g,end:g}:y&&(k.push(y),y=null),g=g.add(1,"d");let v=T.append("g").selectAll("rect").data(k).enter();v.append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return b(t.start)+i}).attr("y",c.gridLineStartPadding).attr("width",function(t){let e=t.end.add(1,"day");return b(e)-b(t.start)}).attr("height",s-e-c.gridLineStartPadding).attr("transform-origin",function(e,r){return(b(e.start)+i+.5*(b(e.end)-b(e.start))).toString()+"px "+(r*t+.5*s).toString()+"px"}).attr("class","exclude-range")}(l,d,f,0,n,t,r.db.getExcludes(),r.db.getIncludes()),function(t,e,i,n){let s=(0,p.LLu)(b).tickSize(-n+e+c.gridLineStartPadding).tickFormat((0,p.i$Z)(r.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d")),l=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||c.tickInterval);if(null!==l){let t=l[1],e=l[2];switch(e){case"minute":s.ticks(p.Z_i.every(t));break;case"hour":s.ticks(p.WQD.every(t));break;case"day":s.ticks(p.rr1.every(t));break;case"week":s.ticks(p.NGh.every(t));break;case"month":s.ticks(p.F0B.every(t))}}if(T.append("g").attr("class","grid").attr("transform","translate("+t+", "+(n-50)+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||c.topAxis){let i=(0,p.F5q)(b).tickSize(-n+e+c.gridLineStartPadding).tickFormat((0,p.i$Z)(r.db.getAxisFormat()||c.axisFormat||"%Y-%m-%d"));if(null!==l){let t=l[1],e=l[2];switch(e){case"minute":i.ticks(p.Z_i.every(t));break;case"hour":i.ticks(p.WQD.every(t));break;case"day":i.ticks(p.rr1.every(t));break;case"week":i.ticks(p.NGh.every(t));break;case"month":i.ticks(p.F0B.every(t))}}T.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(f,d,0,n),function(t,i,n,s,l,u,d){let h=[...new Set(t.map(t=>t.order))],f=h.map(e=>t.find(t=>t.order===e));T.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+n-2}).attr("width",function(){return d-c.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of y.entries())if(t.type===i)return"section section"+e%c.numberSectionStyles;return"section section0"});let k=T.append("g").selectAll("rect").data(t).enter(),g=r.db.getLinks();k.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?b(t.startTime)+s+.5*(b(t.endTime)-b(t.startTime))-.5*l:b(t.startTime)+s}).attr("y",function(t,e){return t.order*i+n}).attr("width",function(t){return t.milestone?l:b(t.renderEndTime||t.endTime)-b(t.startTime)}).attr("height",l).attr("transform-origin",function(t,e){return e=t.order,(b(t.startTime)+s+.5*(b(t.endTime)-b(t.startTime))).toString()+"px "+(e*i+n+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,r]of y.entries())t.type===r&&(i=e%c.numberSectionStyles);let r="";return t.active?t.crit?r+=" activeCrit":r=" active":t.done?r=t.crit?" doneCrit":" done":t.crit&&(r+=" crit"),0===r.length&&(r=" task"),t.milestone&&(r=" milestone "+r),"task"+(r+=i+" "+e)}),k.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",c.fontSize).attr("x",function(t){let e=b(t.startTime),i=b(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(b(t.endTime)-b(t.startTime))-.5*l),t.milestone&&(i=e+l);let r=this.getBBox().width;return r>i-e?i+r+1.5*c.leftPadding>d?e+s-5:i+s+5:(i-e)/2+e+s}).attr("y",function(t,e){return t.order*i+c.barHeight/2+(c.fontSize/2-2)+n}).attr("text-height",l).attr("class",function(t){let e=b(t.startTime),i=b(t.endTime);t.milestone&&(i=e+l);let r=this.getBBox().width,n="";t.classes.length>0&&(n=t.classes.join(" "));let s=0;for(let[e,i]of y.entries())t.type===i&&(s=e%c.numberSectionStyles);let u="";return(t.active&&(u=t.crit?"activeCritText"+s:"activeText"+s),t.done?u=t.crit?u+" doneCritText"+s:u+" doneText"+s:t.crit&&(u=u+" critText"+s),t.milestone&&(u+=" milestoneText"),r>i-e)?i+r+1.5*c.leftPadding>d?n+" taskTextOutsideLeft taskTextOutside"+s+" "+u:n+" taskTextOutsideRight taskTextOutside"+s+" "+u+" width-"+r:n+" taskText taskText"+s+" "+u+" width-"+r});let v=(0,m.c)().securityLevel;if("sandbox"===v){let t;t=(0,p.Ys)("#i"+e);let i=t.nodes()[0].contentDocument;k.filter(function(t){return void 0!==g[t.id]}).each(function(t){var e=i.querySelector("#"+t.id),r=i.querySelector("#"+t.id+"-text");let n=e.parentNode;var s=i.createElement("a");s.setAttribute("xlink:href",g[t.id]),s.setAttribute("target","_top"),n.appendChild(s),s.appendChild(e),s.appendChild(r)})}}(t,l,d,f,s,0,i),function(t,e){let i=0,r=Object.keys(g).map(t=>[t,g[t]]);T.append("g").selectAll("text").data(r).enter().append(function(t){let e=t[0].split(m.e.lineBreakRegex),i=-(e.length-1)/2,r=h.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,n]of(r.setAttribute("dy",i+"em"),e.entries())){let e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,r.appendChild(e)}return r}).attr("x",10).attr("y",function(n,s){if(!(s>0))return n[1]*t/2+e;for(let c=0;c<s;c++)return i+=r[s-1][1],n[1]*t/2+i*t+e}).attr("font-size",c.sectionFontSize).attr("class",function(t){for(let[e,i]of y.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%c.numberSectionStyles;return"sectionTitle"})}(l,d),function(t,e,i,n){let s=r.db.getTodayMarker();if("off"===s)return;let l=T.append("g").attr("class","today"),u=new Date,d=l.append("line");d.attr("x1",b(u)+t).attr("x2",b(u)+t).attr("y1",c.titleTopMargin).attr("y2",n-c.titleTopMargin).attr("class","today"),""!==s&&d.attr("style",s.replace(/,/g,";"))}(f,0,0,n)}(k,s,v),(0,m.i)(T,v,s,c.useMaxWidth),T.append("text").text(r.db.getDiagramTitle()).attr("x",s/2).attr("y",c.titleTopMargin).attr("class","titleText")}},styles:t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`}}}]);