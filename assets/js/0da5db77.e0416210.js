"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[8034],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9207:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={description:"How to add adapools.org summary.json info to your Grafana instance."},l="Add adapools Metrics to Grafana \ud83d\udcca",d={unversionedId:"stake-pool-guides/add-adapools-info-to-grafana",id:"stake-pool-guides/add-adapools-info-to-grafana",title:"Add adapools Metrics to Grafana \ud83d\udcca",description:"How to add adapools.org summary.json info to your Grafana instance.",source:"@site/docs/stake-pool-guides/add-adapools-info-to-grafana.md",sourceDirName:"stake-pool-guides",slug:"/stake-pool-guides/add-adapools-info-to-grafana",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/add-adapools-info-to-grafana",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/add-adapools-info-to-grafana.md",tags:[],version:"current",frontMatter:{description:"How to add adapools.org summary.json info to your Grafana instance."},sidebar:"tutorialSidebar",previous:{title:"Basic Stake Pool Networking \ud83d\udcab",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/basic-stake-pool-networking"},next:{title:"Updating a Cardano Node",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/updating-a-cardano-node"}},p={},u=[{value:"Assumptions",id:"assumptions",level:2},{value:"Make New Directory",id:"make-new-directory",level:2},{value:"Get adapools Summary File",id:"get-adapools-summary-file",level:2},{value:"Create crontab Entry",id:"create-crontab-entry",level:2},{value:"Run node exporter Command",id:"run-node-exporter-command",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-adapools-metrics-to-grafana-"},"Add adapools Metrics to Grafana \ud83d\udcca"),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"You have set up a Cardano node using one of the tutorials provided ",(0,r.kt)("a",{parentName:"p",href:"pi-pool-tutorial/"},"here"),". If so, you should have the necessary dependencies installed that the steps below utilize. If not, see the apt install ",(0,r.kt)("a",{parentName:"p",href:"/armada-alliance-docusaurus/docs/cardano-developer-guides/raspi-node/environment-setup#install-packages"},"Environment Setup")," section of the Pi-Pool Tutorial."),(0,r.kt)("h2",{id:"make-new-directory"},"Make New Directory"),(0,r.kt)("p",null,"To start, pick a location on the machine that is running Grafana where you will create a new directory for the node exporter to use. The node exporter is likely located in /opt/cardano/monitoring/",(0,r.kt)("strong",{parentName:"p"},"node","_","exporter")," given the pi-pool default location. ","_","_",'If not, see if you can find it using the "which node',"_","exporter\" command. If that doesn't find it, the directory where it's located is not on your $PATH and you'll need to dig deeper. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"Check this git")," for more information."),(0,r.kt)("p",null,"Change to the location for the new directory, here I'm selecting the local bin for my user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> cd $HOME/.local/bin\n")),(0,r.kt)("p",null,"Now make a new directory here where we can store custom text file stats that the node","_","exporter will parse. I'm calling the directory ",(0,r.kt)("strong",{parentName:"p"},"customStats"),", but you can name it whatever you like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> mkdir customStats\n")),(0,r.kt)("h2",{id:"get-adapools-summary-file"},"Get adapools Summary File"),(0,r.kt)("p",null,"The adapools.org site provides a ",(0,r.kt)("strong",{parentName:"p"},"summary.json")," file for every registered pool. We'll use this file to parse out the data we want and store it in our directory we just created. We can create a bash script to handle this for us. I'm in my $HOME/.local/bin directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> nano getAdaPoolsSummary.sh\n")),(0,r.kt)("p",null,"Add this content below, replace ",(0,r.kt)("strong",{parentName:"p"},"YOUR POOL ID")," with your pool's ID, save and exit. Essentially this pulls a copy of the ",(0,r.kt)("strong",{parentName:"p"},"summary.json")," file for your pool, removes some things that the node exporter cannot parse (string values) and saves a copy in our new directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl https://js.adapools.org/pools/<YOUR POOL ID>/summary.json 2>/dev/null \\\n| jq '.data | del(.direct, .hist_bpe, .handles, .hist_roa, .db_ticker, .db_name, .db_description, .db_url, .ticker_orig, .pool_id, .pool_id_bech32, .group_basic)' \\\n| tr -d \\\"{},: \\\n| awk NF \\\n| sed -e 's/^[ \\t]*/adapools_/' > $HOME/.local/bin/customStats/adapools.prom\n")),(0,r.kt)("p",null,"Now when the ",(0,r.kt)("strong",{parentName:"p"},"getAdaPoolsSummary.sh")," is run it'll refresh a file called ",(0,r.kt)("strong",{parentName:"p"},"adapools.prom")," in our new directory. This file will contain metrics that start with the term ",(0,r.kt)("strong",{parentName:"p"},"adapools")," and will be visible in the Grafana query builder metrics section as such."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's important that the results in the file do not include string values. The node exporter will throw an error and you won't see the adapools metrics."))),(0,r.kt)("p",null,'If you discover string values, you can remove them by adding a new key to the "del" section in the script above. For example, to remove the ',(0,r.kt)("strong",{parentName:"p"},"adapools","_","db","_","description")," metric (has a string value), you'd add ",(0,r.kt)("strong",{parentName:"p"},".db","_","description")," to the ",(0,r.kt)("strong",{parentName:"p"},"del( )")," section."),(0,r.kt)("h2",{id:"create-crontab-entry"},"Create crontab Entry"),(0,r.kt)("p",null,"Depending on how often you want to refresh a copy of these stats, you can create a local crontab entry to pull a fresh copy of the adapools.prom file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> crontab -e\n")),(0,r.kt)("p",null,"The following line ",(0,r.kt)("strong",{parentName:"p"},"runs the script we created every 5 minutes"),". Add the line, save and exit. Since this data doesn't change that often, you shouldn't need to pull it that often. Don't piss off the adapools.org folks by pulling this data every 5 seconds - it's not necessary. For other examples of crontab run times, ",(0,r.kt)("a",{parentName:"p",href:"https://crontab.tech/examples"},"see this lovely link"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*/5 * * * * $HOME/.local/bin/getAdaPoolsSummary.sh\n")),(0,r.kt)("h2",{id:"run-node-exporter-command"},"Run node exporter Command"),(0,r.kt)("p",null,"Now that we are generating the ",(0,r.kt)("strong",{parentName:"p"},"adapools.prom")," file, we need to tell the node exporter where to find our custom text file. Depending on how you are running your node exporter instance, you'll need to add the following command line parameters. This might be found in the ",(0,r.kt)("strong",{parentName:"p"},"startMonitor")," script included with the pi-pool default build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> node_exporter --collector.textfile.directory=$HOME/.local/bin/customStats --collector.textfile\n")),(0,r.kt)("p",null,"If all goes as planned, you should be able to pull up this URL in your browser and see the new ",(0,r.kt)("strong",{parentName:"p"},"adapools")," metrics. If this worked, your new metrics should be visible in the Grafana query builder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://<YOUR GRAFANA NODE IP>:9100/metrics\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are other methods you could use to implement this approach. Basically, if you can create a text file with key/value pairs and put it into this new directory, the node exporter should pull the data into Grafana. It opens up a vast array of possibilities. Just ensure you prefix the label names with a unique value (the ",(0,r.kt)("strong",{parentName:"p"},"adapools","_")," ","_","_","part in the adapools.prom file above) per file."))),(0,r.kt)("p",null,"Was this information helpful? Earn rewards with us! ",(0,r.kt)("a",{parentName:"p",href:"/armada-alliance-docusaurus/docs/delegate"},"Consider delegating some ADA"),"."))}m.isMDXComponent=!0}}]);