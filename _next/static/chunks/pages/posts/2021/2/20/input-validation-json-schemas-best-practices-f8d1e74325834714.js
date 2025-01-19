(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6842],{6385:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2021/2/20/input-validation-json-schemas-best-practices",function(){return s(55975)}])},55975:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return o}});var t=s(35250),i=s(47147),r=s(77298),a=s(18363);let o=[{depth:2,value:"Validate before usage",id:"validate-before-usage"},{depth:2,value:"Validation should be as strict as reasonably possible",id:"validation-should-be-as-strict-as-reasonably-possible"},{depth:3,value:"Object validation",id:"object-validation"},{depth:3,value:"String validation",id:"string-validation"},{depth:3,value:"Numeric validation",id:"numeric-validation"},{depth:3,value:"Array validation",id:"array-validation"},{depth:3,value:"Automatic defaults",id:"automatic-defaults"},{depth:2,value:"Caveats",id:"caveats"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",strong:"strong",ol:"ol"},(0,r.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Input Validation With JSON Schemas: Best Practices"}),"\n",(0,t.jsxs)("p",{className:"text-xs text-right",children:["February 20, 2021 by ",(0,t.jsx)(n.a,{href:"/about#patrickd",children:"patrickd"})]}),"\n","\n",(0,t.jsxs)(n.p,{children:["In a ",(0,t.jsx)(n.a,{href:"/posts/2020/9/6/mongodb-nosql-operator-injection-mitigation",children:"previous article"})," we discussed how ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/ajv",children:"AJV"})," can be used to build API middlewares for validating user input with JSON schemas. This article builds on it by providing an example set of rules that can be implemented as a best practice when writing schemas."]}),"\n",(0,t.jsx)(n.h2,{id:"validate-before-usage",children:"Validate before usage"}),"\n",(0,t.jsx)(a.UW,{children:(0,t.jsx)(n.p,{children:"It should generally be avoided to make use of any user input without validating it first."})}),"\n",(0,t.jsx)(n.p,{children:"This is one of the things that should be checked during code review but you might even want to consider having automated processes in place to detect these kinds of problems. This could mean making it impossible to use input variables without having applied a validator function on them, therefore causing an error. Or by implementing things like a custom ESLint rule that will check whether a variable seems to have been validated before usage – these are likely to be prone to false positives though."}),"\n",(0,t.jsx)(n.p,{children:"The following is a (incomplete) list of possible User Input sources in a typical web application:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["HTTP Headers","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["URI","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Path"}),"\n",(0,t.jsxs)(n.li,{children:["Path parameters (eg. ",(0,t.jsx)(n.code,{children:"id"})," in ",(0,t.jsx)(n.code,{children:"/user/:id"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Query parameters"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Host Name (maybe derived from other headers, eg. ",(0,t.jsx)(n.code,{children:"X-Forwarded-Host"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Content Type"}),"\n",(0,t.jsx)(n.li,{children:"Content Length"}),"\n",(0,t.jsx)(n.li,{children:"Cookies (both their names and values)"}),"\n",(0,t.jsx)(n.li,{children:"Referer"}),"\n",(0,t.jsxs)(n.li,{children:["IP Address (specifically when it's derived from other headers, eg. ",(0,t.jsx)(n.code,{children:"X-Forwarded-For"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Protocol / Port (eg. ",(0,t.jsx)(n.code,{children:"X-Forwarded-Proto"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"User Agent"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["HTTP Body","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Raw/Binary (consider checking "magic bytes", running anti-virus, etc.)'}),"\n",(0,t.jsx)(n.li,{children:"Serialized information (json, xml, etc.: decode and validate)"}),"\n",(0,t.jsx)(n.li,{children:"Multi-Part-Uploads (part-separators, part-length, ...)"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Web-Socket Messages"}),"\n",(0,t.jsx)(n.li,{children:"Database Entries created with User Input (these should already be validated, but usually not sanitized)"}),"\n",(0,t.jsx)(n.li,{children:"Cached User input"}),"\n",(0,t.jsx)(n.li,{children:"Forwarded User input (Inter-Process-Communication)"}),"\n",(0,t.jsx)(n.li,{children:'Fetched User input from 3rd-party APIs (even if it is not "User input", you may not want to fully trust the 3rd-parties security or consistency)'}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(a.UW,{children:(0,t.jsx)(n.p,{children:"Remember that any validation made by your frontend clients can usually easily be bypassed and can't be relied upon."})}),"\n",(0,t.jsx)(n.p,{children:'But we still want to do as much validation as early as we can. Even if we already have some validation in place at deeper parts of our program (eg. Database Schemas), from a standpoint of application security these measures usually take effect "too late". We want to reject any unreasonable values from ever reaching our business logic in the first place.'}),"\n",(0,t.jsx)(n.h2,{id:"validation-should-be-as-strict-as-reasonably-possible",children:"Validation should be as strict as reasonably possible"}),"\n",(0,t.jsx)(a.UW,{children:(0,t.jsx)(n.p,{children:"Structure and contents of User Input should be within the expectations of our business logic."})}),"\n",(0,t.jsx)(n.p,{children:"To ensure this, we want to define our schemas as explicitly as possible, making sure that anything outside of expectations, is rejected by the validator function. This again, should be double-checked during manual code review and, if possible, through automated means."}),"\n",(0,t.jsxs)(n.h3,{id:"object-validation",children:[(0,t.jsx)(n.code,{children:"Object"})," validation"]}),"\n",(0,t.jsxs)(n.p,{children:["As shown in the ",(0,t.jsx)(n.a,{href:"/posts/2020/9/6/mongodb-nosql-operator-injection-mitigation#validating-user-input",children:"previously"}),", the JSON Schema validator AJV supports the automatic removal of any properties that are not explicitly defined within an Object's schema with ",(0,t.jsx)(n.code,{children:"removeAdditional: true"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object.html#properties",children:(0,t.jsx)(n.code,{children:"additionalProperties"})})," should always be present"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Preferably we want to be able to always specify ",(0,t.jsx)(n.code,{children:"additionalProperties: false"})," to ensure the removal of properties we do not expect to be present. Any properties that we do expect should be explicitly defined within the ",(0,t.jsx)(n.code,{children:"properties"}),". It should not be forgotten to also set this on all Sub-Object's defined within the parent Object's properties."]}),"\n",(0,t.jsxs)(n.li,{children:["Business logic that requires allowing additional properties or generally, objects with unknown properties should be avoided. If this is not possible (for example for key-value maps) other restrictions should be enforced (such as ",(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object.html#property-names",children:(0,t.jsx)(n.code,{children:"propertyNames"})}),", ",(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object.html#pattern-properties",children:(0,t.jsx)(n.code,{children:"patternProperties"})}),", ",(0,t.jsxs)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object.html#size",children:[(0,t.jsx)(n.code,{children:"minProperties"}),", ",(0,t.jsx)(n.code,{children:"maxProperties"})]}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object.html#required-properties",children:(0,t.jsx)(n.code,{children:"required"})})," should always be present"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If possible, any fields used by our business logic should be required to be present. For more complicated cases, like where the presence of a field is only required if another field is present as well, the ",(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object.html#dependencies",children:(0,t.jsx)(n.code,{children:"dependencies"})})," option can be used."]}),"\n",(0,t.jsx)(n.li,{children:"Even if no properties can be specified as required, we should still explicitly state this fact within the schema by specifying an empty array."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"string-validation",children:[(0,t.jsx)(n.code,{children:"String"})," validation"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"One of the following options should always be present"}),", preferably used in the following order:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values",children:(0,t.jsx)(n.code,{children:"enum"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string.html#format",children:(0,t.jsx)(n.code,{children:"format"})})," (build-in or custom)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string.html#regular-expressions",children:(0,t.jsx)(n.code,{children:"pattern"})})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The regular expression should match the full string (start with ",(0,t.jsx)(n.code,{children:"^"})," and end with ",(0,t.jsx)(n.code,{children:"$"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"It should have an easy-to-understand explanation of what it is supposed to match in the code-comments (reading and understanding regular expressions is not easy)."}),"\n",(0,t.jsx)(n.li,{children:"It should have a variation of unit tests ensuring it works as intended."}),"\n",(0,t.jsxs)(n.li,{children:["Patterns that are re-used across various schemas should be defined as custom formats (and therefore used via the ",(0,t.jsx)(n.code,{children:"format"})," option)."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string.html#length",children:[(0,t.jsx)(n.code,{children:"minLength"})," & ",(0,t.jsx)(n.code,{children:"maxLength"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If there's no minimum length that can be derived from the implemented use-case, a minimum of ",(0,t.jsx)(n.code,{children:"1"})," should be used to ensure truthyness of the value. If possible, maxima should follow already existing restrictions set by database schemas."]}),"\n",(0,t.jsx)(n.li,{children:"Name, Address, Phone, Title and Identifier-like fields can generally be restricted to a lenient maximum of 512 characters."}),"\n",(0,t.jsxs)(n.li,{children:["Free-Text and Description-like fields should be restricted to a reasonable maximum within the database's capabilities. For example, a lenient maximum of ",(0,t.jsx)(n.code,{children:"1048576"})," (1 MiB) could be possible for MongoDB (which supports an overall 16MiB within a single document) assuming there aren't too many other fields allowing for such sizeable inputs."]}),"\n",(0,t.jsx)(n.li,{children:"Use-cases that are re-used across various schemas should be defined as custom formats."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"numeric-validation",children:[(0,t.jsx)(n.code,{children:"Numeric"})," validation"]}),"\n",(0,t.jsxs)(n.p,{children:["There are two numeric types, one for ",(0,t.jsxs)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/numeric.html#integer",children:["whole numbers (",(0,t.jsx)(n.code,{children:"type: 'integer'"}),")"]})," and one for ",(0,t.jsxs)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/numeric.html#number",children:["fractional numbers (",(0,t.jsx)(n.code,{children:"type: 'number'"}),")"]}),". ",(0,t.jsxs)(n.strong,{children:["Prefer ",(0,t.jsx)(n.code,{children:"integer"})," over ",(0,t.jsx)(n.code,{children:"number"})," whenever possible"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"One of the following options should always be present"}),", preferably used in the following order:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values",children:(0,t.jsx)(n.code,{children:"enum"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/numeric.html#range",children:[(0,t.jsx)(n.code,{children:"minimum"}),"/",(0,t.jsx)(n.code,{children:"exclusiveMinimum"})," and/or ",(0,t.jsx)(n.code,{children:"maximum"}),"/",(0,t.jsx)(n.code,{children:"exclusiveMaximum"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Whenever there are no clear minima or maxima based on the use-case, it should at least be ensured that numeric value has the correct sign (negative allowed? zero allowed? positive allowed?)."}),"\n",(0,t.jsx)(n.li,{children:"Depending on how you continue to process the value, you might want to restrict the number to a range that prevents over or underflows."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"array-validation",children:[(0,t.jsx)(n.code,{children:"Array"})," validation"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/array.html#items",children:(0,t.jsx)(n.code,{children:"items"})})," option should always be present"]})," and define what type of values may be contained within the list or tuple."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/array.html#uniqueness",children:(0,t.jsx)(n.code,{children:"uniqueItems"})})," option should be present for scalar item values"]})," and explicitly state whether duplicate values are allowed or not."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsxs)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/array.html#length",children:[(0,t.jsx)(n.code,{children:"minItems"})," and ",(0,t.jsx)(n.code,{children:"maxItems"})]})," options should be present."]})," If no maximum or minimum of allowed items can be derived from the use-case, a range of 1-1000 should suffice for most cases. Remember though that some technologies have hard limits (eg. MonoDB with 16MiB) – if it's possible for items to be very large, it might make sense to choose smaller limits. (In case of an array being restricted by both ",(0,t.jsx)(n.code,{children:"enum"})," and ",(0,t.jsx)(n.code,{children:"uniqueItems"})," it would not hurt to omit min/max restrictions since they'd be redundant)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"automatic-defaults",children:"Automatic defaults"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/generic.html#annotations",children:(0,t.jsx)(n.code,{children:"default"})})," option should be specified whenever possible."]})," Especially in cases when it should possible to omit values within the User Input that are still required by the business logic, the ",(0,t.jsx)(n.code,{children:"default"})," option together with the ",(0,t.jsx)(n.code,{children:"useDefaults: true"})," setting (during initialization of AJV) will ensure they are present as expected automatically."]}),"\n",(0,t.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsxs)(n.p,{children:["It will often be difficult to come up with a reasonable minimum or maximum value – ",(0,t.jsx)(n.strong,{children:"when in doubt, pick a value based on the most extreme use-case you can come up with"})," but is unlikely to cause any problems within your system."]}),"\n",(0,t.jsxs)(n.p,{children:["Also, be especially careful when restricting validation of values belonging to existing data in your system. It might be that customers are currently using a value that lies outside of your defined minimum or maximum and that might cause them to no longer able to make updates or execute related actions. ",(0,t.jsx)(n.strong,{children:"Consider checking real-world data (how do customers actually use your product?) before deciding on restrictions."})]}),"\n",(0,t.jsx)(n.p,{children:"As stated at the beginning, this is merely an example set of rules that can be used to build your own best practices upon. Depending on the technologies used in your project and its specifications, it might require many adjustments for you to make use of it. But it could, at least, offer a good basis to start with."})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/posts/2021/2/20/input-validation-json-schemas-best-practices.mdx",route:"/posts/2021/2/20/input-validation-json-schemas-best-practices",timestamp:1701551175e3,title:"Input Validation With JSON Schemas: Best Practices",headings:o},pageNextRoute:"/posts/2021/2/20/input-validation-json-schemas-best-practices"})},47147:function(e,n,s){"use strict";s.d(n,{j:function(){return setupNextraPage}});var t,i=s(44619),r=s.n(i),a=s(54594),o=s(70079);s(77298);var l=s(35250),d=(0,o.createContext)(!1),c=s(65263);function Nextra({__nextra_pageMap:e,__nextra_dynamic_opts:n,...s}){let{context:t,Layout:i}=function(){let e=globalThis[a.eZ],{route:n}=(0,c.useRouter)();(0,o.useState)({})[1];let s=e.context[n];if(!s)throw Error("No content found for the current route. This is a Nextra bug.");return{context:s,Layout:e.Layout}}(),{Content:r,...h}=t;if(e&&(h.pageOpts={...h.pageOpts,pageMap:e}),n){let{headings:e,title:s,frontMatter:t}=JSON.parse(n);h.pageOpts={...h.pageOpts,headings:e,title:s,frontMatter:t}}return(0,l.jsx)(i,{...h,pageProps:s,children:(0,l.jsx)(d.Provider,{value:s,children:(0,l.jsx)(r,{...s})})})}var h=s(86264),u=s(99199),p=s(20439);function pageTitleFromFilename(e){return p(e.replaceAll(/[-_]/g," "))}function isFolder(e){return!!e&&"object"==typeof e&&"folder"===e.type}function normalizeMetaData(e){return Object.fromEntries(Object.entries(e).map(([e,n])=>{if(isFolder(n)){let s=e.replace("/","");return[s,n.title||pageTitleFromFilename(s)]}return[e,n||pageTitleFromFilename(e)]}))}function setupNextraPage({pageNextRoute:e,pageOpts:n,nextraLayout:s,themeConfig:i,MDXContent:o,hot:l,pageOptsChecksum:d,dynamicMetaModules:c=[]}){var p;"undefined"==typeof window&&(globalThis.__nextra_resolvePageMap=async()=>{if(t)return t;let e=JSON.parse(JSON.stringify(m.pageMap));return await Promise.all(c.map(async([n,{metaObjectKeyPath:s,metaParentKeyPath:t}])=>{let i=await n,a=await i.default(),o=r()(e,s);o.data=a;let l=r()(e,t);!function collectCatchAllRoutes(e,n,s=!0){if(s){collectCatchAllRoutes(e,{kind:"Meta",data:n.data,locale:n.locale},!1),n.data=normalizeMetaData(n.data);return}for(let[s,i]of Object.entries(n.data)){if(!isFolder(i)){var t;if("*"===s)continue;e.children.push({kind:"MdxPage",...n.locale&&{locale:n.locale},name:s,route:(t=e.route,u(h.join(t,s.replace(/^index$/,""))))});continue}let r=s.replace("/",""),a={kind:"Folder",name:r,route:`${e.route}/${r}`,children:[{kind:"Meta",...n.locale&&{locale:n.locale},data:normalizeMetaData(i.items)}]};e.children.push(a),collectCatchAllRoutes(a,{kind:"Meta",data:i.items,locale:n.locale},!1)}}(l,o)})),t=e});let m=globalThis[p=a.eZ]||(globalThis[p]=Object.create(null));return n.pageMap?(m.pageMap=n.pageMap,m.Layout=s):(n={...n,pageMap:m.pageMap,flexsearch:m.flexsearch},i=m.themeConfig),n={frontMatter:{},...n},m.route=n.route,m.context||(m.context=Object.create(null)),m.context[e]={Content:o,pageOpts:n,themeConfig:i},Nextra}}},function(e){e.O(0,[3220,9774,2888,179],function(){return e(e.s=6385)}),_N_E=e.O()}]);