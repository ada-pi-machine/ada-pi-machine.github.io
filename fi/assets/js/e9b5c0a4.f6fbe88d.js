"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7709],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7462),n=a(7294),o=a(2389),i=a(5979),l=a(6010),u="tabItem_LplD";function s(e){var t,a,o,s=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,g=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,n.useState)(b),O=N[0],P=N[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==O&&v.some((function(e){return e.value===x}))&&P(x)}var D=function(e){var t=e.currentTarget,a=T.indexOf(t),r=v[a].value;r!==O&&(E(t),P(r),null!=m&&w(m,r))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},887:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(9877),l=a(8215),u=["components"],s={description:"Flash image"},p="Download & Flash",d={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it",id:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it",title:"Download & Flash",description:"Flash image",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/download-and-write-it.md",tags:[],version:"current",frontMatter:{description:"Flash image"},sidebar:"tutorialSidebar",previous:{title:"(GUIDE) Cardano Stake Pool with Raspberry Pi 4",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/"},next:{title:"Logging in Securely",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/logging-in-securely"}},c={},m=[{value:"Flash Image",id:"flash-image",level:2}],f={toc:m};function g(e){var t=e.components,s=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download--flash"},"Download & Flash"),(0,o.kt)("h2",{id:"flash-image"},"Flash Image"),(0,o.kt)("p",null,"Download, install & open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raspberrypi/rpi-imager/releases/latest"},"Raspberry Pi Imager"),". Plug in your target USB drive."),(0,o.kt)("p",null,"Ubuntu users can download and install with snapd."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo apt update\nsudo apt install snapd\nsudo snap install rpi-imager\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Older models of the Pi4B 8GB need to have their boot loader updated to boot from USB. If your image won't boot remove the USB3 drive and use rpi-imager to flash Pi 4 EEPROM boot recovery to an sd card.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Plug the Pi into a monitor, insert the sd card and power up. Once you see a green screen you should be good to boot from your USB3 drive. Newer versions are shipping with a USB boot capable boot loader. ",(0,o.kt)("strong",{parentName:"p"},"Feeling lucky?")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Choose OS -> Misc utility images -> Raspberry Pi 4 EEPROM boot recovery")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md"},"https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md")," :::"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{src:a(538).Z,width:"680",height:"420"})),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Pre configured Pi-Node.img.gz",label:"Pre configured Pi-Node.img.gz",default:!0,mdxType:"TabItem"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obtain Pi-Node.img.gz file")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Download Pi-Node")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Within Raspberry Pi Imager")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Choose OS -> Use custom")),(0,o.kt)("p",{parentName:"div"},"Locate the .img.gz file you downloaded & wish to flash."),(0,o.kt)("p",{parentName:"div"},"Locate your target drive & write it to disk."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{src:a(9580).Z,width:"680",height:"418"})),"  "),(0,o.kt)(l.Z,{value:"Fresh Ubuntu 22.04 LTS installation",label:"Fresh Ubuntu 22.04 LTS installation",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Within Raspberry Pi Imager")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Download Ubuntu Server 22.04 (RPI 3/4/400)")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://cdimage.ubuntu.com/ubuntu-server/daily-preinstalled/current/jammy-preinstalled-server-arm64+raspi.img.xz"},"Raspberry Pi Generic (64-bit ARM) preinstalled server image")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Choose OS -> Use custom")," "),(0,o.kt)("p",{parentName:"div"},"Locate the .img.gz file you downloaded & wish to flash. Locate your target drive & write it to disk."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{src:a(9580).Z,width:"680",height:"418"})),"  ")))))}g.isMDXComponent=!0},9580:function(e,t,a){t.Z=a.p+"assets/images/custom-os-4520505f2502c6754c7cf5dbb6705892.png"},538:function(e,t,a){t.Z=a.p+"assets/images/otgpoltut-6a6e93bcb1f093d4fc7fbd09823c8970.png"}}]);