"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[489],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return d},toc:function(){return c},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Guide: Install Windows on a Mac",date:new Date("2021-04-18T15:12:16.000Z"),draft:!1,authors:"enk",tags:["guide","macos","windows"]},p=void 0,l={permalink:"/guide_installation_windows_on_mac",editUrl:"https://github.com/3n3a/blog/tree/main/blog/guide_installation_windows_on_mac.md",source:"@site/blog/guide_installation_windows_on_mac.md",title:"Guide: Install Windows on a Mac",description:"This guide covers the installation of Windows 10 on an Apple Mac. For demonstration purposes an iMac (Mid-2011) was utilised.",date:"2021-04-18T15:12:16.000Z",formattedDate:"April 18, 2021",tags:[{label:"guide",permalink:"/tags/guide"},{label:"macos",permalink:"/tags/macos"},{label:"windows",permalink:"/tags/windows"}],readingTime:3.055,truncated:!1,authors:[{name:"Enea Kr\xe4henb\xfchl",title:"masterful blogger",url:"https://3n3a.ch",image_ur:"https://thispersondoesnotexist.com/image",key:"enk"}],frontMatter:{title:"Guide: Install Windows on a Mac",date:"2021-04-18T15:12:16.000Z",draft:!1,authors:"enk",tags:["guide","macos","windows"]},prevItem:{title:"Hackernews Client with Hackerfeed API",permalink:"/hackernews_client"},nextItem:{title:"Interview Kol Deda, Autor",permalink:"/interview_kol_deda"}},d={authorsImageUrls:[void 0]},c=[{value:"1. Step: <strong>Format the USB-Drive</strong>",id:"format-usb",children:[],level:2},{value:"2. Step: <strong>Download Windows 10 ISO</strong>",id:"download-iso",children:[],level:2},{value:"3. Step: <strong>Download Bootcamp Software</strong>",id:"3-step-download-bootcamp-software",children:[],level:2},{value:"4. Step: <strong>Copy Windows 10 to USB-Drive</strong>",id:"4-step-copy-windows-10-to-usb-drive",children:[],level:2},{value:"5. Step: <strong>Copy Bootcamp onto USB-Drive</strong>",id:"5-step-copy-bootcamp-onto-usb-drive",children:[],level:2},{value:"6. Step: <strong>Installing Windows</strong>",id:"6-step-installing-windows",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This guide covers the installation of Windows 10 on an Apple Mac. For demonstration purposes an ",(0,r.kt)("a",{parentName:"em",href:"https://everymac.com/systems/apple/imac/specs/imac-core-i5-2.7-21-inch-aluminum-mid-2011-thunderbolt-specs.html"},"iMac (Mid-2011)")," was utilised.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This guide aims to show that Windows 10 can be installed without the use of Bootcamp at all. But as far as I know you still need a Mac for certain Steps.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you own a newer Mac it might be worthwile using the Official Boot Camp Installation & Setup Guide. But also if you need further guidance, which you can't find on ",(0,r.kt)("a",{parentName:"p",href:"https://discussions.apple.com/community/windows_software/boot_camp"},"Apple's Forums"),".")),(0,r.kt)("h2",{id:"format-usb"},"1. Step: ",(0,r.kt)("strong",{parentName:"h2"},"Format the USB-Drive")),(0,r.kt)("p",null,"The USB-Drive needs to be formatted as ",(0,r.kt)("em",{parentName:"p"},"ExFAT"),", because ",(0,r.kt)("em",{parentName:"p"},"FAT32")," only supports file sizes of up to 4GB and Windows 10 has some files which exceed that limitation. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Boot into MacOS (if you are in a different partition on your mac, you can hold down the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALT")," key on boot and then select ",(0,r.kt)("em",{parentName:"p"},"MacOS"),".) and open ",(0,r.kt)("em",{parentName:"p"},"Disk Utility"),". Then insert the USB-Drive and ",(0,r.kt)("em",{parentName:"p"},"Erase")," it as ",(0,r.kt)("em",{parentName:"p"},"ExFAT")," (as can be seen in the image below). "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ab1973af-734d-4a3c-9a1d-6acbf16c725d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T112331Z&X-Amz-Expires=86400&X-Amz-Signature=95260cd5d1ee75c282f5f40c406803d85701827c5249ad9dbde6c81122395137&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",alt:"Screenshot Disk Utility App's Erase Screen",title:"Screenshot: DiskUtility.app's Erase Screen"})),(0,r.kt)("h2",{id:"download-iso"},"2. Step: ",(0,r.kt)("strong",{parentName:"h2"},"Download Windows 10 ISO")),(0,r.kt)("p",null,"Head over to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/software-download/windows10ISO"},"Microsoft Download Website")," preferably on a Non-Windows Computer and Download the Windows 10 ISO for your language. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1e8b4053-413f-4e10-8e43-fb6649743a2f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T113633Z&X-Amz-Expires=86400&X-Amz-Signature=a86319128c18b91e3149b450fdf5a7498e4b16f70409529770649185d540b769&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",alt:"Screenshot: The Microsoft ISO Download Website",title:"Screenshot: The Microsoft ISO Download Website"})),(0,r.kt)("h2",{id:"3-step-download-bootcamp-software"},"3. Step: ",(0,r.kt)("strong",{parentName:"h2"},"Download Bootcamp Software")),(0,r.kt)("p",null,"The Bootcamp Support Package for my specific iMac Model was downloaded by using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timsutton/brigadier"},"brigadier")," ",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". The following are the commands I ran in Terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/timsutton/brigadier\npython2 brigadier -m YOUR_MAC_MODEL_ID\n")),(0,r.kt)("p",null,"Your specific Mac Model Id can be found on your Mac's casing, or on ",(0,r.kt)("a",{parentName:"p",href:"https://everymac.com/systems/apple/index-apple-specs-applespec.html"},"everymac.com (Desktop)")," / ",(0,r.kt)("a",{parentName:"p",href:"https://everymac.com/app/"},"(Mobile)"),". In my case the ID of the iMac 2011 was ",(0,r.kt)("inlineCode",{parentName:"p"},"iMac12,1"),"."),(0,r.kt)("h2",{id:"4-step-copy-windows-10-to-usb-drive"},"4. Step: ",(0,r.kt)("strong",{parentName:"h2"},"Copy Windows 10 to USB-Drive")),(0,r.kt)("p",null,"Once you have ",(0,r.kt)("a",{parentName:"p",href:"#download-iso"},"downloaded the Windows 10 ISO")," you should open it with ",(0,r.kt)("em",{parentName:"p"},"DiskImageMounter"),", do this by ",(0,r.kt)("em",{parentName:"p"},"right-clicking")," it, then go to ",(0,r.kt)("em",{parentName:"p"},"Open With")," and finally select ",(0,r.kt)("em",{parentName:"p"},"DiskImageMounter"),". This will open a new Window with its contents, now you're going to drag all of those files onto the USB-Drive, ",(0,r.kt)("a",{parentName:"p",href:"#format-usb"},"which you formatted before"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ca0de37e-ce14-4634-92d4-7354d80cae05/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T114533Z&X-Amz-Expires=86400&X-Amz-Signature=366534ad74a516c480c3863ba11b10202ef684d3a3012b53f78e57f1d4d5e854&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",alt:"Screenshot: Finder Windows of Windows 10 Disk Image's Contents",title:"Screenshot: Finder Windows of Windows 10 Disk Image's Contents"})),(0,r.kt)("h2",{id:"5-step-copy-bootcamp-onto-usb-drive"},"5. Step: ",(0,r.kt)("strong",{parentName:"h2"},"Copy Bootcamp onto USB-Drive")),(0,r.kt)("p",null,"Go to the folder named ",(0,r.kt)("em",{parentName:"p"},"brigadier")," and open the folder within it, called something along the lines of ",(0,r.kt)("em",{parentName:"p"},"BootCamp-041-84868"),". Inside of this folder you can find the ",(0,r.kt)("em",{parentName:"p"},"WindowsSupport.dmg"),". Mount this Disk Image by ",(0,r.kt)("em",{parentName:"p"},"right-clicking")," it, then go to ",(0,r.kt)("em",{parentName:"p"},"Open With")," and then selecting ",(0,r.kt)("em",{parentName:"p"},"DiskImageMounter"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1dca9160-44d7-4a1b-8eec-a17385f11f05/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T115845Z&X-Amz-Expires=86400&X-Amz-Signature=e405a8d0cee1c0f3b1df61c11106317c6b19821971cab0e774c3e88fb77ba05c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",alt:"Screenshot: Finder window of Brigadier Download",title:"Screenshot: Finder window of Brigadier Download"})),(0,r.kt)("p",null,"A new Finder window opens with the Boot Camp Drivers, these are needed for Windows to interface with the Mac's hardware. Next you're going to copy all the files in the window ",(0,r.kt)("em",{parentName:"p"},"Boot Camp")," to your USB-Drive, by dragging them onto the USB-Drive Icon. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7605f16a-5e15-4049-bb14-129065efddf2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T115847Z&X-Amz-Expires=86400&X-Amz-Signature=bc359ba9c87c41ea3f0aac3a08049121c1614ac62b50e1fbfdec21b565d95947&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",alt:"Screenshot: Finder window with Boot Camp Drivers",title:"Screenshot: Finder window with Boot Camp Drivers"})),(0,r.kt)("p",null,"Finder will ask you if you want to keep both copies of files, the best option here is to select ",(0,r.kt)("em",{parentName:"p"},"Apply to All")," and ",(0,r.kt)("em",{parentName:"p"},"Replace"),"."),(0,r.kt)("h2",{id:"6-step-installing-windows"},"6. Step: ",(0,r.kt)("strong",{parentName:"h2"},"Installing Windows")),(0,r.kt)("p",null,"First thing after finishing the above steps, is to eject the USB-Drive and shutdown your system. Then boot the system while holding down the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALT"),"-Key. As can be seen below, you select the Windows Icon and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/levibostian/1307b4f329562245900cb449bbcfdefa"},"Install windows on a mac"),": Used as a general guide for the installation ",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/software-download/windows10ISO"},"Windows ISO Download (Microsoft)"),": Downloaded the Windows 10 ISO from here. Only works on Non-Windows Devices, e.g. a Mac.",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/timsutton/brigadier"},"brigadier: Fetch and install Boot Camp ESDs with ease."),": Used to download the correct bootcamp drivers from Apple's Servers.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);