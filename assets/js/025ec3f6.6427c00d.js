"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const i={title:"Create a Blog with Phoenix in Elixir.",date:new Date("2022-07-16T13:42:00.000Z"),draft:!1,authors:"enk",tags:["tutorial","phoenix","elixir","webframework"]},o=void 0,l={permalink:"/phoenix_blog_tutorial",editUrl:"https://github.com/3n3a/blog/tree/master/blog/phoenix_blog_tutorial.md",source:"@site/blog/phoenix_blog_tutorial.md",title:"Create a Blog with Phoenix in Elixir.",description:"In this Tutorial you will learn how to setup a Phoenix Project and the database.",date:"2022-07-16T13:42:00.000Z",formattedDate:"July 16, 2022",tags:[{label:"tutorial",permalink:"/tags/tutorial"},{label:"phoenix",permalink:"/tags/phoenix"},{label:"elixir",permalink:"/tags/elixir"},{label:"webframework",permalink:"/tags/webframework"}],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"Enea Kr\xe4henb\xfchl",title:"Software Developer",url:"https://3n3a.ch",imageURL:"img/favicon.ico",key:"enk"}],frontMatter:{title:"Create a Blog with Phoenix in Elixir.",date:"2022-07-16T13:42:00.000Z",draft:!1,authors:"enk",tags:["tutorial","phoenix","elixir","webframework"]},prevItem:{title:"Ein JavaScript-Webserver mit Express.js implementieren",permalink:"/node-express-hallo-welt"},nextItem:{title:"Hackernews Client with Hackerfeed API",permalink:"/hackernews_client"}},p={authorsImageUrls:[void 0]},s=[{value:"Create the Application",id:"create-the-application",level:2},{value:"Setup Database",id:"setup-database",level:2},{value:"Initialize Database",id:"initialize-database",level:2},{value:"Start Server",id:"start-server",level:2}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this Tutorial you will learn how to setup a Phoenix Project and the database.\nYou'll also learn how to use Phoenix amd create a simple Blog, but there's also a section about the final\nDeployment of your Phoenix Blog. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You should already have installed Erlang 22 or later, with Elixir 1.12 or later. Also the Hex Package manager should be installed (",(0,r.kt)("inlineCode",{parentName:"p"},"mix local.hex"),") and also ",(0,r.kt)("inlineCode",{parentName:"p"},"phx_new")," (",(0,r.kt)("inlineCode",{parentName:"p"},"mix archive.install hex phx_new"),") "),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://hexdocs.pm/phoenix/installation.html"},"Source"))," ")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Linux Users"),": If you want live-reload to work in your Dev-Environment be sure to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/inotify-tools/inotify-tools/wiki"},"inotify-tools")," ")),(0,r.kt)("h2",{id:"create-the-application"},"Create the Application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mix phx.new <name/folder> --database postgres --no-mailer \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name")," is a placeholder for the Name of your Application. It generates the new bootstrapped application in a folder with that name and names the main module after it. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--database")," selects the database you want to use in your Application, in our case Postgres, which is also the recommended DB by the Team behind Phoenix. "),(0,r.kt)("p",null,"Finally ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-mailer")," excludes the Email-Sending component from being generated. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://hexdocs.pm/phoenix/Mix.Tasks.Phx.New.html"},"Source"))," "),(0,r.kt)("h2",{id:"setup-database"},"Setup Database"),(0,r.kt)("p",null,"Since it\u2018s so simple to setup a Postgres Database in our Dev-Environment with Docker, I have written this config, which comes with Pgadmin a Postgres Web Admin UI. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/3n3a/docker-compose-templates/tree/master/postgres-database"},"See here for mor Info")," "),(0,r.kt)("p",null,"Simply copy the contents of that Folder into your project and run your Database. "),(0,r.kt)("h2",{id:"initialize-database"},"Initialize Database"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Database needs to be running for this ")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"mix ecto.create")," which will configure the Database specified in the config file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/dev.exs"),". "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://hexdocs.pm/phoenix/up_and_running.html"},"Source"))," "),(0,r.kt)("h2",{id:"start-server"},"Start Server"),(0,r.kt)("p",null,"Run either of those commands to start the Development server. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mix phx.server \n")),(0,r.kt)("p",null,"Or run the server inside of Interactive Elixir "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iex -S mix phx.server \n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Your Phoenix Application should now be running at ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/"},"http://127.0.0.1:4000")," ")),(0,r.kt)("p",null,"If you can see this picture you have yourself a working Phoenix Application. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5844).Z,width:"1526",height:"1194"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://hexdocs.pm/phoenix/up_and_running.html"},"Source"))))}c.isMDXComponent=!0},5844:function(e,t,n){t.Z=n.p+"assets/images/A9AB9B55-9E9D-4031-BDD5-847C6D291A43-eb7d6296ae8d0a3b4368a552fae72c62.png"}}]);