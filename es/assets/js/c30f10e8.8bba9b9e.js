"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4181],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3817:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},p="Update Pools Registration Certificate",s={unversionedId:"stake-pool-guides/pi-pool-tutorial/update-registration-cert",id:"stake-pool-guides/pi-pool-tutorial/update-registration-cert",title:"Update Pools Registration Certificate",description:"Query the chain for protocol parameters, store them in a file named params.json.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/update-registration-cert.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/update-registration-cert",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rotate KES",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes"},next:{title:"Introduction",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/stakepoolscripts"}},c={},d=[{value:"Create a new pool certificate",id:"create-a-new-pool-certificate",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update-pools-registration-certificate"},"Update Pools Registration Certificate"),(0,o.kt)("p",null,"Query the chain for protocol parameters, store them in a file named params.json."),(0,o.kt)("p",null,'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${NODE_HOME}\ncardano-cli query protocol-parameters \\\n  --${CONFIG_NET} \\\n  --out-file $NODE_HOME/params.json\n")),(0,o.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",null,"If you plan to edit your poolMetaData.json file do so now, run the below command and move poolMetaDataHash.txt to your cold machine. If your poolMetaData.json is not being edited head over to your cold machine."),(0,o.kt)("p",null,'{warning}\n{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli stake-pool metadata-hash \\\n  --pool-metadata-file poolMetaData.json > poolMetaDataHash.txt\n")),(0,o.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,o.kt)("h2",{id:"create-a-new-pool-certificate"},"Create a new pool certificate"),(0,o.kt)("p",null,'{% tabs %}\n{% tab title="Cold Offline" %}'),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"--metadata-url must be 64 characters or less. :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," Open or create a file name registration-cert.txt. Use this file to edit the below command before you issue it. It's also handy to leave this file on the cold machine for any future edits. Below is 1,000 ada pledge, 340 cost and a 1% margin. Refer back to the core guide if you are using more than one relay."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${NODE_HOME}\nnano registration-cert.txt\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli stake-pool registration-certificate \\\n  --cold-verification-key-file ${HOME}/cold-keys/node.vkey \\\n  --vrf-verification-key-file vrf.vkey \\\n  --pool-pledge 10000000000 \\\n  --pool-cost 340000000 \\\n  --pool-margin 0.01 \\\n  --pool-reward-account-verification-key-file stake.vkey \\\n  --pool-owner-stake-verification-key-file stake.vkey \\\n  --${CONFIG_NET} \\\n  --single-host-pool-relay <r1.example.com> \\\n  --pool-relay-port 3001 \\\n  --metadata-url <https://example.com/poolMetaData.json> \\\n  --metadata-hash $(cat poolMetaDataHash.txt) \\\n  --out-file pool.cert\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Once you are satisfied with your edits copy the command, save the file and issue it in your terminal."),(0,o.kt)("p",{parentName:"div"},"Issue a delegation certificate from ",(0,o.kt)("strong",{parentName:"p"},"stake.skey")," & ",(0,o.kt)("strong",{parentName:"p"},"node.vkey"),"."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Cold Offline" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli stake-address delegation-certificate \\\n  --stake-verification-key-file stake.vkey \\\n  --cold-verification-key-file ${HOME}/cold-keys/node.vkey \\\n  --out-file deleg.cert\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Move ",(0,o.kt)("strong",{parentName:"p"},"pool.cert"),", ",(0,o.kt)("strong",{parentName:"p"},"deleg.cert")," to your online core machine."),(0,o.kt)("p",{parentName:"div"},"Query the current slot number or tip of the chain."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"slotNo=$(cardano-cli query tip --${CONFIG_NET} | jq -r '.slot')\necho slotNo: ${slotNo}\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Query the wallets utxo history and build variables for a transaction."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cardano-cli query utxo --address $(cat payment.addr) --${CONFIG_NET} > fullUtxo.out\n\ntail -n +3 fullUtxo.out | sort -k3 -nr > balance.out\n\ncat balance.out\n\ntx_in=""\ntotal_balance=0\nwhile read -r utxo; do\n  in_addr=$(awk \'{ print $1 }\' <<< "${utxo}")\n  idx=$(awk \'{ print $2 }\' <<< "${utxo}")\n  utxo_balance=$(awk \'{ print $3 }\' <<< "${utxo}")\n  total_balance=$((${total_balance}+${utxo_balance}))\n  echo TxHash: ${in_addr}#${idx}\n  echo ADA: ${utxo_balance}\n  tx_in="${tx_in} --tx-in ${in_addr}#${idx}"\ndone < balance.out\ntxcnt=$(cat balance.out | wc -l)\necho Total ADA balance: ${total_balance}\necho Number of UTXOs: ${txcnt}\n')),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Build temporary ",(0,o.kt)("strong",{parentName:"p"},"tx.tmp")," to hold information while we build our raw transaction file."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction build-raw \\\n  ${tx_in} \\\n  --tx-out $(cat payment.addr)+${total_balance} \\\n  --invalid-hereafter $(( ${currentSlot} + 10000)) \\\n  --fee 0 \\\n  --certificate-file pool.cert \\\n  --certificate-file deleg.cert \\\n  --out-file tx.tmp\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Calculate the transaction fee."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fee=$(cardano-cli transaction calculate-min-fee \\\n  --tx-body-file tx.tmp \\\n  --tx-in-count ${txcnt} \\\n  --tx-out-count 1 \\\n  --${CONFIG_NET} \\\n  --witness-count 3 \\\n  --byron-witness-count 0 \\\n  --protocol-params-file params.json | awk '{ print $1 }')\n  echo fee: ${fee}\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Calculate output that comes back to you (change)."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"txOut=$((${total_balance}-${fee}))\necho txOut: ${txOut}\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Build your ",(0,o.kt)("strong",{parentName:"p"},"tx.raw")," (unsigned) transaction file."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction build-raw \\\n  ${tx_in} \\\n  --tx-out $(cat payment.addr)+${txOut} \\\n  --invalid-hereafter $(( ${slotNo} + 10000)) \\\n  --fee ${fee} \\\n  --certificate-file pool.cert \\\n  --certificate-file deleg.cert \\\n  --out-file tx.raw\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Move ",(0,o.kt)("strong",{parentName:"p"},"tx.raw")," to your cold offline machine."),(0,o.kt)("p",{parentName:"div"},"Sign the transaction with your ",(0,o.kt)("strong",{parentName:"p"},"payment.skey"),", ",(0,o.kt)("strong",{parentName:"p"},"node.skey")," & ",(0,o.kt)("strong",{parentName:"p"},"stake.skey"),"."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Cold Offline" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction sign \\\n  --tx-body-file tx.raw \\\n  --signing-key-file payment.skey \\\n  --signing-key-file ${HOME}/cold-keys/node.skey \\\n  --signing-key-file stake.skey \\\n  --${CONFIG_NET} \\\n  --out-file tx.signed\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"Move ",(0,o.kt)("strong",{parentName:"p"},"tx.signed")," back to your core node & submit the transaction to the blockchain."),(0,o.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="Core" %}'),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-cli transaction submit \\\n  --tx-file tx.signed \\\n  --${CONFIG_NET}\n")),(0,o.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,o.kt)("p",{parentName:"div"},"If you lower your pledge you need to wait two epochs before you can remove the ada or your pledge will show as unmet and you will be assigned and forge blocks but neither you nor your delegators will be paid."))))}m.isMDXComponent=!0}}]);