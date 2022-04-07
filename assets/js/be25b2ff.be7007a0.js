"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4169],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},626:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},s="Pi-Cold",u={unversionedId:"stake-pool-guides/pi-pool-tutorial/cold-offline",id:"stake-pool-guides/pi-pool-tutorial/cold-offline",title:"Pi-Cold",description:"Cold server setup",source:"@site/docs/stake-pool-guides/pi-pool-tutorial/cold-offline.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/cold-offline",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/cold-offline",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/cold-offline.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pi-Core",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/core-online"},next:{title:"Rotate KES",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/pi-pool-tutorial/rotate-kes"}},d={},p=[{value:"Cold server setup",id:"cold-server-setup",level:2},{value:"Ubuntu or Raspbian",id:"ubuntu-or-raspbian",level:4},{value:"Log in &amp; setup user",id:"log-in--setup-user",level:3},{value:"USB transfer",id:"usb-transfer",level:3},{value:"Test your drive mounts",id:"test-your-drive-mounts",level:4},{value:"Transfer contents of the USB stick.",id:"transfer-contents-of-the-usb-stick",level:3},{value:"Install VSCodium",id:"install-vscodium",level:3},{value:"Pool Creation",id:"pool-creation",level:3}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pi-cold"},"Pi-Cold"),(0,o.kt)("h2",{id:"cold-server-setup"},"Cold server setup"),(0,o.kt)("p",null,"This can be any 64 bit capable Raspi. Any Raspberry Pi 4, Raspberry Pi 3b+ or a Raspberry Pi-400. I would use a Pi-400. Keyboard is built in which is convenient and safer. The cold machine is only used to sign transactions and is left powered down for 99% of the time(if not more). The Pi-400 can just be powered off and in a safe. Also unlike an online node, the Cold machine can be run from the sdcard. Just make sure you have multiple copies of your keys just in case you get a bad sdcard. Or better yet clone this system onto 3 or 4 other bootable sdcards. Remember you can also boot from USB."),(0,o.kt)("h4",{id:"ubuntu-or-raspbian"},"Ubuntu or Raspbian"),(0,o.kt)("p",null,"Raspberry Pi OS desktop is a lot faster and more stable than the gnome desktop in Ubuntu. There is now a 64bit image you can install, it is not available in raspi-imager selection, IDK why. Check out the images in the link below grab the latest version. It is a zip file so we have to unzip it."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://downloads.raspberrypi.org/raspios_arm64"},"Download Pi 64bit Raspbian OS")),(0,o.kt)("p",null,"Unzip the img file and flash it with Raspi-imager."),(0,o.kt)("h3",{id:"log-in--setup-user"},"Log in & setup user"),(0,o.kt)("p",null,"Disable the radios. It would just be foolish to leave these enabled.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo rfkill block wifi\nsudo rfkill block bluetooth\n")),(0,o.kt)("p",null,"I put a network jack without a wire into the NIC port to block it. Preventing any accidental insertion."),(0,o.kt)("p",null,"Open up Preferences/Raspberry Pi Configuration window(GUI) and disable auto login."),(0,o.kt)("p",null,"Create the $USER and add it to sudoers. ada in our case. We have to create a new user so the uid, gid and name match that of the core. It is far less error prone than trying to change the user id of the default user. With the user/group id of 1001 you will not run into issues with permissions transferring between systems."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo adduser ada; sudo adduser ada sudo\n")),(0,o.kt)("p",null,"Reboot the server to stop the autologin pi user process running in the background. Log in as ada and delete the pi user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo deluser --remove-home pi\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you find your keyboard is not correctly printing the home symbol ~, you repair with, sudo locale-gen and reboot."))),(0,o.kt)("h3",{id:"usb-transfer"},"USB transfer"),(0,o.kt)("p",null,"Basically repeating the steps to setup an fstab entry from the Core guide. This is to mount the USB transfer disk at boot should you have it inserted when you power on. It also makes the mount command simpler. You can just sudo mount usb-transfer."),(0,o.kt)("p",null,"Create the mount point & set default ACL for files and folders with umask."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd; mkdir $HOME/usb-transfer; umask 022 $HOME/usb-transfer\n")),(0,o.kt)("p",null,"Attach the external drive and list all drives with fdisk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo fdisk -l\n")),(0,o.kt)("p",null,"If you are booting from the sdcard the first inserted disk is /dev/sda. The sdcard you are booting from will have the /dev/mmcblk0 designation."),(0,o.kt)("p",null,"Example output for my system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"Disk /dev/sda: 57.66 GiB, 61907927040 bytes, 120913920 sectors\nDisk model: Cruzer\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: gpt\nDisk identifier: 75B71A3E-9E1A-4659-94D0-E0C949A26740\n\nDevice     Start       End   Sectors  Size Type\n/dev/sda1   2048 120913886 120911839 57.7G Linux filesystem\n")),(0,o.kt)("p",null,"In my case it is /dev/sda because I am using the sdcard slot in the pi-400. Yours may be /dev/sdb, /dev/sdc, /dev/sdd or so on. /dev/sda is usually the system drive. Just be careful you are dealing with the correct drive."),(0,o.kt)("p",null,"Locate your drive and get the UUID for the partition we created earlier."),(0,o.kt)("p",null,"Run blkid and copy the UUID. In my case it is the UUID for /dev/sda1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo blkid\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'UUID="c2a8f8c7-3e7a-40f2-8dac-c2b16ab07f37"\n')),(0,o.kt)("p",null,"Add a mount entry to the bottom of fstab adding your UUID and the full system path to you backup folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo nano /etc/fstab\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"UUID=c2a8f8c7-3e7a-40f2-8dac-c2b16ab07f37 /home/ada/usb-transfer auto nosuid,nodev,nofail 0 1\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"nofail allows the server to boot if the drive is not inserted.")),(0,o.kt)("h4",{id:"test-your-drive-mounts"},"Test your drive mounts"),(0,o.kt)("p",null,"Mount the drive and confirm it mounted by locating listing the contents. You should see the ada folder, offline-transfer and lost\\&found. If they are not present then your drive is not mounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo mount usb-transfer; ls $HOME/usb-transfer\n")),(0,o.kt)("h3",{id:"transfer-contents-of-the-usb-stick"},"Transfer contents of the USB stick."),(0,o.kt)("p",null,"The cold machine will never be online, these machines do not have any cmos battery to keep time. It should not pose too many issues if any. Just be aware that when you fire up the cold machine it's time is off."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd; rsync -aP usb-transfer/ada/ ~/\n")),(0,o.kt)("p",null,"Source the .adaenv file on login."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"echo . ~/.adaenv >> ~/.bashrc\n")),(0,o.kt)("p",null,"Switch the Stake Pool Operator scripts to 'offline mode'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cd\nsed -i stakepoolscripts/bin/common.inc \\\n    -e \'s#offlineMode="no"#offlineMode="yes"#\'\n')),(0,o.kt)("p",null,"Move the jq binary into it's system PATH."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"sudo cp usb-transfer/ada/jq /usr/local/bin\njq -V\n")),(0,o.kt)("p",null,"Confirm SPOS is installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},". .adaenv; 00_common.sh\n")),(0,o.kt)("h3",{id:"install-vscodium"},"Install VSCodium"),(0,o.kt)("p",null,"Right click on the VSCodium .deb file in the usb-transfer folder and choose install. You can then open the markdown files and use ctr+shift+V to render a preview."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vscodium.com"},"VSCodium Website")),(0,o.kt)("h3",{id:"pool-creation"},"Pool Creation"),(0,o.kt)("p",null,"That's it! you can now use Martins guide in the stakepoolscripts/bin file. Remember to always manually unmount your USB stick before unplugging it. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gitmachtl/scripts"},"Stake pool operator scripts GitHub")),(0,o.kt)("p",null,"Thank you Martin for all your hard work!"))}m.isMDXComponent=!0}}]);