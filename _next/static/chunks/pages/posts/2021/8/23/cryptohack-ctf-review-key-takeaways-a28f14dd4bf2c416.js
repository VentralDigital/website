(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9998],{28103:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2021/8/23/cryptohack-ctf-review-key-takeaways",function(){return n(63753)}])},63753:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return i}});var o=n(35250),s=n(47147),a=n(77298);let i=[{depth:2,value:"Use standards, use libraries and use them correctly",id:"use-standards-use-libraries-and-use-them-correctly"},{depth:2,value:"What you lack in knowledge you can make up with OSINT experience",id:"what-you-lack-in-knowledge-you-can-make-up-with-osint-experience"},{depth:2,value:"Python is excellent for experimenting with cryptography",id:"python-is-excellent-for-experimenting-with-cryptography"},{depth:2,value:"Cryptography is about more than encryption",id:"cryptography-is-about-more-than-encryption"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",a:"a",p:"p",hr:"hr",h2:"h2",pre:"pre",code:"code",span:"span"},(0,a.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"CryptoHack CTF: Key Takeaways"}),"\n",(0,o.jsxs)("p",{className:"text-xs text-right",children:["August 23, 2021 by ",(0,o.jsx)(t.a,{href:"/about#patrickd",children:"patrickd"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://cryptohack.org/",children:"CryptoHack"})," is a collection of Capture-The-Flag-like Challenges that intend to teach you modern cryptography, the math behind it and how to exploit it when implemented incorrectly. Since the Authors of the Platform ask participants not to share any instructions on how to solve the Challenges, this won't be a write-up but rather a spoiler-free list of realizations that one might have while solving the challenges."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"use-standards-use-libraries-and-use-them-correctly",children:"Use standards, use libraries and use them correctly"}),"\n",(0,o.jsx)(t.p,{children:'If you\'ve been doing any programming you should have heard by now that "reinventing the wheel" is usually considered a bad practice. One should always look for established and widely used libraries instead of re-implementing complex logic or algorithms from scratch.'}),"\n",(0,o.jsx)(t.p,{children:"Especially learning about the mathematical intricacies in cryptography will bring that point home. Small errors or misunderstandings can introduce fatal flaws into your application's security. You'll be tempted to introduce optimizations, simplifications and shortcuts which will likely end up doing much more harm than good. Sometimes things that intuitively feel like genuine improvements, such as using even larger numbers than recommended, may actually have the opposite effect."}),"\n",(0,o.jsx)(t.p,{children:"CryptoHack will introduce you to many of these issues and their outcome, and it assured me of something I was already suspecting: I should definitely not try to use my own cryptographic inventions in production. Playing around with all the newly learned things and attempting to give them my own twist was certainly a fun experience, but one has to remember that standards like RSA have been published as scientific papers and have been analyzed, criticized and attacked by other researchers for years. Those standards have stood the test of time and had a lot of brainpower looking at how secure they really are - it's not very likely I'm smart enough to pull all that off alone."}),"\n",(0,o.jsx)(t.p,{children:"But even if you use libraries implementing established standards, there's still a big chance that it'll all be for naught because you are simply not using them in a proper manner. Since they are likely to provide flexibility for implementing a wide variety of different use cases, that flexibility will give you lots of opportunities to mess things up again. So even when utilizing trusted and widely used libraries, thinking you can blindly rely on them to do everything correctly out of the box, with default options or by simply copying and pasting the example code snippets, might end up shooting you in the foot."}),"\n",(0,o.jsx)(t.p,{children:"Therefore, you shouldn't dismiss the usefulness of understanding the principles behind the ciphers that you're planning to make use of even if you do not intend to implement them yourself."}),"\n",(0,o.jsx)(t.h2,{id:"what-you-lack-in-knowledge-you-can-make-up-with-osint-experience",children:"What you lack in knowledge you can make up with OSINT experience"}),"\n",(0,o.jsx)(t.p,{children:"While most challenges on CryptoHack start nice and easy, the difficulty ramps up pretty quickly and you'll soon find yourself blindly poking around at your code until it finally produces the solution - and that might even work, for a while. Then you'll quickly run into walls where the provided resources won't be enough to understand and solve the challenge. And this is where you can make use of and practice your information gathering skills."}),"\n",(0,o.jsx)(t.p,{children:"Remember that the challenges aren't entirely original. They are often based on bugs, issues and attacks that have been reported and probably explained somewhere on the Internet. Don't be intimidated if your search leads you to PDFs of scientific papers with complex mathematical formulas, skim over them to look what places could contain the information that you need and take them apart piece by piece."}),"\n",(0,o.jsx)(t.p,{children:"If you don't know where to start looking, note that these challenges are in the typical style of CTFs: Check for hints in the title or description of the challenge. If a word or a whole sentence doesn't fit into the context of cryptography, at least as far as you know now, you should probably search the Internet about it and find out why it was mentioned at all, since it's likely a clue."}),"\n",(0,o.jsxs)(t.p,{children:["And lastly, if you're getting really frustrated there's always the chance that a similar challenge has been part of another CTF before. You can always look for writeups of those and even if you don't find the actual solution you'll still likely find helpful resources and tools. A good example is the ",(0,o.jsx)(t.a,{href:"https://github.com/Ganapati/RsaCtfTool",children:"RsaCTFtool"}),", which is able to perform a variety of attacks on RSA that are typical for CTF challenges. Look at all of the attacks it supports, maybe there's one that matches what you're working on."]}),"\n",(0,o.jsx)(t.h2,{id:"python-is-excellent-for-experimenting-with-cryptography",children:"Python is excellent for experimenting with cryptography"}),"\n",(0,o.jsx)(t.p,{children:"Python is well known for being the most popular language in the InfoSec scene, and that probably for good reasons. To me, it offers all the simplicity of being a high level scripting language while at the same time allowing you to work with low-level structures and interfaces."}),"\n",(0,o.jsx)(t.p,{children:"More than that, it really shines in cryptography. While most other languages I know of struggle with big numbers, Python not only supports them natively but has so many crypto-libraries making it easy to use while working on the challenges. It lets you easily generate primes, make use of modular arithmetic while using large exponents, and convert values between most of the encodings that you'll ever encounter in the real world."}),"\n",(0,o.jsx)(t.pre,{"data-language":"python","data-theme":"default",filename:"RSA.py",children:(0,o.jsxs)(t.code,{"data-line-numbers":"","data-language":"python","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Crypto"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Util"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"number "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" getPrime"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" bytes_to_long"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" long_to_bytes"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" inverse"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"M "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"input"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter Hex message: '"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"m "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"bytes_to_long"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"bytes"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"fromhex"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(M))"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"p"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" q "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"getPrime"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2048"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"),"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"getPrime"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2048"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"N"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" phi "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" p"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"q"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" (p"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(q"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsxs)(t.span,{className:"line highlighted",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"e "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" N "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" phi"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"d "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"inverse"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(e, phi)"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"c "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"pow"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(m, e, N)"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"C "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"long_to_bytes"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(c)."}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"hex"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"f"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pubkey: "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"{"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"N"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"}"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:", "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"{"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"e"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"}"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"f"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ciphertext: "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"{"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"C"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"}"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"assert"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" m "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"pow"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(c, d, N)"})]})]})}),"\n",(0,o.jsx)(t.p,{children:"Nice and short RSA implementation right? Did you spot a problem?"}),"\n",(0,o.jsx)(t.h2,{id:"cryptography-is-about-more-than-encryption",children:"Cryptography is about more than encryption"}),"\n",(0,o.jsx)(t.p,{children:'You have probably already heard about "digital-signatures" which provide proof that an encrypted message you received is authentic. But have you heard about how cryptography allows people to exchange secrets on a public medium without having ever met before? You are using standards like PEM, DER and x509 every day, but what do they actually do? Do you know how to calculate with probabilities to find out how random the numbers that your computer comes up with really are?'}),"\n",(0,o.jsx)(t.p,{children:"From the historically grown mess that many of the standards are that we're using today, to the mind blowing and elegant mathematics beneath all of it. The CryptoHack challenges are a great exercise for anyone looking to brush up on their cryptography knowledge and, while sometimes a bit frustrating, I had a lot of fun trying to solve them while struggling with the complex mathematical concepts that I was completely ignorant of. Many thanks to the authors that provide us this incredible website free of charge."}),"\n",(0,o.jsxs)(t.p,{children:["You can take a look at how far I managed to get at ",(0,o.jsx)(t.a,{href:"https://cryptohack.org/user/patrickd/",children:"https://cryptohack.org/user/patrickd/"})]})]})}t.default=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/posts/2021/8/23/cryptohack-ctf-review-key-takeaways.mdx",route:"/posts/2021/8/23/cryptohack-ctf-review-key-takeaways",timestamp:1701551175e3,title:"CryptoHack CTF: Key Takeaways",headings:i},pageNextRoute:"/posts/2021/8/23/cryptohack-ctf-review-key-takeaways"})},47147:function(e,t,n){"use strict";n.d(t,{j:function(){return setupNextraPage}});var o,s=n(44619),a=n.n(s),i=n(54594),r=n(70079);n(77298);var l=n(35250),c=(0,r.createContext)(!1),h=n(65263);function Nextra({__nextra_pageMap:e,__nextra_dynamic_opts:t,...n}){let{context:o,Layout:s}=function(){let e=globalThis[i.eZ],{route:t}=(0,h.useRouter)();(0,r.useState)({})[1];let n=e.context[t];if(!n)throw Error("No content found for the current route. This is a Nextra bug.");return{context:n,Layout:e.Layout}}(),{Content:a,...p}=o;if(e&&(p.pageOpts={...p.pageOpts,pageMap:e}),t){let{headings:e,title:n,frontMatter:o}=JSON.parse(t);p.pageOpts={...p.pageOpts,headings:e,title:n,frontMatter:o}}return(0,l.jsx)(s,{...p,pageProps:n,children:(0,l.jsx)(c.Provider,{value:n,children:(0,l.jsx)(a,{...n})})})}var p=n(86264),d=n(99199),u=n(20439);function pageTitleFromFilename(e){return u(e.replaceAll(/[-_]/g," "))}function isFolder(e){return!!e&&"object"==typeof e&&"folder"===e.type}function normalizeMetaData(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>{if(isFolder(t)){let n=e.replace("/","");return[n,t.title||pageTitleFromFilename(n)]}return[e,t||pageTitleFromFilename(e)]}))}function setupNextraPage({pageNextRoute:e,pageOpts:t,nextraLayout:n,themeConfig:s,MDXContent:r,hot:l,pageOptsChecksum:c,dynamicMetaModules:h=[]}){var u;"undefined"==typeof window&&(globalThis.__nextra_resolvePageMap=async()=>{if(o)return o;let e=JSON.parse(JSON.stringify(y.pageMap));return await Promise.all(h.map(async([t,{metaObjectKeyPath:n,metaParentKeyPath:o}])=>{let s=await t,i=await s.default(),r=a()(e,n);r.data=i;let l=a()(e,o);!function collectCatchAllRoutes(e,t,n=!0){if(n){collectCatchAllRoutes(e,{kind:"Meta",data:t.data,locale:t.locale},!1),t.data=normalizeMetaData(t.data);return}for(let[n,s]of Object.entries(t.data)){if(!isFolder(s)){var o;if("*"===n)continue;e.children.push({kind:"MdxPage",...t.locale&&{locale:t.locale},name:n,route:(o=e.route,d(p.join(o,n.replace(/^index$/,""))))});continue}let a=n.replace("/",""),i={kind:"Folder",name:a,route:`${e.route}/${a}`,children:[{kind:"Meta",...t.locale&&{locale:t.locale},data:normalizeMetaData(s.items)}]};e.children.push(i),collectCatchAllRoutes(i,{kind:"Meta",data:s.items,locale:t.locale},!1)}}(l,r)})),o=e});let y=globalThis[u=i.eZ]||(globalThis[u]=Object.create(null));return t.pageMap?(y.pageMap=t.pageMap,y.Layout=n):(t={...t,pageMap:y.pageMap,flexsearch:y.flexsearch},s=y.themeConfig),t={frontMatter:{},...t},y.route=t.route,y.context||(y.context=Object.create(null)),y.context[e]={Content:r,pageOpts:t,themeConfig:s},Nextra}}},function(e){e.O(0,[3220,9774,2888,179],function(){return e(e.s=28103)}),_N_E=e.O()}]);