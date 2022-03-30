






# Environment Setup

![](</img/yoda-patient.jpeg>)

## Install packages

Install the packages we will need.

```bash title=">_ Terminal"
sudo apt install build-essential libssl-dev tcptraceroute python3-pip \
         jq make automake unzip net-tools nginx ssl-cert pkg-config \
         libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev \
         zlib1g-dev g++ libncursesw5 libtool autoconf -y
```

## Environment

Make some directories.

```bash title=">_ Terminal"
mkdir -p $HOME/.local/bin
mkdir -p $HOME/pi-pool/files
mkdir -p $HOME/pi-pool/scripts
mkdir -p $HOME/pi-pool/logs
mkdir $HOME/git
mkdir $HOME/tmp
```

### Create bash variables & add \~/.local/bin to our $PATH 🏃

:::info
[Environment Variables in Linux/Unix](https://askubuntu.com/questions/247738/why-is-etc-profile-not-invoked-for-non-login-shells/247769#247769).
:::

:::caution
Changes to this file require reloading .bashrc or logging out then back in.
:::

{% tabs %}
{% tab title="Testnet" %}
```bash title=">_ Terminal"
echo PATH="$HOME/.local/bin:$PATH" >> $HOME/.bashrc
echo export NODE_HOME=$HOME/pi-pool >> $HOME/.bashrc
echo export NODE_CONFIG=testnet >> $HOME/.bashrc
echo export NODE_FILES=$HOME/pi-pool/files >> $HOME/.bashrc
echo export NODE_BUILD_NUM=$(curl https://hydra.iohk.io/job/Cardano/iohk-nix/cardano-deployment/latest-finished/download/1/index.html | grep -e "build" | sed 's/.*build\/\([0-9]*\)\/download.*/\1/g') >> $HOME/.bashrc
echo export CARDANO_NODE_SOCKET_PATH="$HOME/pi-pool/db/socket" >> $HOME/.bashrc
source $HOME/.bashrc
```
{% endtab %}

{% tab title="Mainnet" %}
```bash title=">_ Terminal"
echo PATH="$HOME/.local/bin:$PATH" >> $HOME/.bashrc
echo export NODE_HOME=$HOME/pi-pool >> $HOME/.bashrc
echo export NODE_CONFIG=mainnet >> $HOME/.bashrc
echo export NODE_FILES=$HOME/pi-pool/files >> $HOME/.bashrc
echo export NODE_BUILD_NUM=$(curl https://hydra.iohk.io/job/Cardano/iohk-nix/cardano-deployment/latest-finished/download/1/index.html | grep -e "build" | sed 's/.*build\/\([0-9]*\)\/download.*/\1/g') >> $HOME/.bashrc
echo export CARDANO_NODE_SOCKET_PATH="$HOME/pi-pool/db/socket" >> $HOME/.bashrc
source $HOME/.bashrc
```
{% endtab %}
{% endtabs %}

### Retrieve node files

```bash title=">_ Terminal"
cd $NODE_FILES
wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-config.json
wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-byron-genesis.json
wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-shelley-genesis.json
wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-alonzo-genesis.json
wget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-topology.json
```

Run the following to modify testnet-config.json and update TraceBlockFetchDecisions to "true"

```bash title=">_ Terminal"
sed -i ${NODE_CONFIG}-config.json \
    -e "s/TraceBlockFetchDecisions\": false/TraceBlockFetchDecisions\": true/g"
```

:::info
**Tip for relay nodes**: It's possible to reduce memory and cpu usage by setting "TraceMemPool" to "false" in **mainnet-config.json.** This will turn off mempool data in Grafana and gLiveView.sh.
:::

### Retrieve aarch64 binaries

:::info
The **unofficial** cardano-node & cardano-cli binaries available to us are being built by an IOHK engineer in his **spare time**. Please visit the '[Arming Cardano](https://t.me/joinchat/FeKTCBu-pn5OUZUz4joF2w)' Telegram group for more information.
:::

```bash title=">_ Terminal"
cd $HOME/tmp
wget -O cardano_node_$(date +"%m-%d-%y").zip https://ci.zw3rk.com/build/1771/download/1/aarch64-unknown-linux-musl-cardano-node-1.30.1.zip
unzip *.zip
mv cardano-node/* $HOME/.local/bin
rm -r cardano*
cd $HOME
```

:::caution
If binaries already exist you will have to confirm overwriting the old ones.
:::

Confirm binaries are in ada $PATH.

```bash title=">_ Terminal"
cardano-node version
cardano-cli version
```

### Systemd unit files

Let us now create the systemd unit file and startup script so systemd can manage cardano-node.

```bash title=">_ Terminal"
nano $HOME/.local/bin/cardano-service
```

Paste the following, save & exit.

{% tabs %}
{% tab title="Testnet" %}
```bash title=">_ Terminal"
#!/bin/bash
DIRECTORY=/home/ada/pi-pool
FILES=/home/ada/pi-pool/files
PORT=3003
HOSTADDR=0.0.0.0
TOPOLOGY=${FILES}/testnet-topology.json
DB_PATH=${DIRECTORY}/db
SOCKET_PATH=${DIRECTORY}/db/socket
CONFIG=${FILES}/testnet-config.json
## +RTS -N4 -RTS = Multicore(4)
cardano-node +RTS -N4 --disable-delayed-os-memory-return -qg -qb -c -RTS run \
  --topology ${TOPOLOGY} \
  --database-path ${DB_PATH} \
  --socket-path ${SOCKET_PATH} \
  --host-addr ${HOSTADDR} \
  --port ${PORT} \
  --config ${CONFIG}
```
{% endtab %}

{% tab title="Mainnet" %}
```bash title=">_ Terminal"
#!/bin/bash
DIRECTORY=/home/ada/pi-pool
FILES=/home/ada/pi-pool/files
PORT=3003
HOSTADDR=0.0.0.0
TOPOLOGY=${FILES}/mainnet-topology.json
DB_PATH=${DIRECTORY}/db
SOCKET_PATH=${DIRECTORY}/db/socket
CONFIG=${FILES}/mainnet-config.json
## +RTS -N4 -RTS = Multicore(4)
cardano-node +RTS -N4 --disable-delayed-os-memory-return -qg -qb -c -RTS run \
  --topology ${TOPOLOGY} \
  --database-path ${DB_PATH} \
  --socket-path ${SOCKET_PATH} \
  --host-addr ${HOSTADDR} \
  --port ${PORT} \
  --config ${CONFIG}
```
{% endtab %}
{% endtabs %}

Allow execution of our new startup script.

```bash title=">_ Terminal"
chmod +x $HOME/.local/bin/cardano-service
```

Open /etc/systemd/system/cardano-node.service.

```bash title=">_ Terminal"
sudo nano /etc/systemd/system/cardano-node.service
```

Paste the following, save & exit.

```bash title=">_ Terminal"
# The Cardano Node Service (part of systemd)
# file: /etc/systemd/system/cardano-node.service

[Unit]
Description     = Cardano node service
Wants           = network-online.target
After           = network-online.target

[Service]
User            = ada
Type            = simple
WorkingDirectory= /home/ada/pi-pool
ExecStart       = /bin/bash -c "PATH=/home/ada/.local/bin:$PATH exec /home/ada/.local/bin/cardano-service"
KillSignal=SIGINT
RestartKillSignal=SIGINT
TimeoutStopSec=3
LimitNOFILE=32768
Restart=always
RestartSec=5
#EnvironmentFile=-/home/ada/.pienv

[Install]
WantedBy= multi-user.target
```

Set permissions and reload systemd so it picks up our new service file..

```bash title=">_ Terminal"
sudo systemctl daemon-reload
```

Let's add a function to the bottom of our .bashrc file to make life a little easier.

```bash title=">_ Terminal"
nano $HOME/.bashrc
```

```bash title=">_ Terminal"
cardano-service() {
    #do things with parameters like $1 such as
    sudo systemctl "$1" cardano-node.service
}
```

Save & exit.

```bash title=">_ Terminal"
source $HOME/.bashrc
```

What we just did there was add a function to control our cardano-service without having to type out

> > sudo systemctl enable cardano-node.service
> >
> > sudo systemctl start cardano-node.service
> >
> > sudo systemctl stop cardano-node.service
> >
> > sudo systemctl status cardano-node.service

Now we just have to:

* cardano-service enable (enables cardano-node.service auto start at boot)
* cardano-service start (starts cardano-node.service)
* cardano-service stop (stops cardano-node.service)
* cardano-service status (shows the status of cardano-node.service)

## ⛓ Syncing the chain ⛓

You are now ready to start cardano-node. Doing so will start the process of 'syncing the chain'. This is going to take about 30 hours and the db folder is about 8.5GB in size right now. We used to have to sync it to one node and copy it from that node to our new ones to save time.

### Download snapshot

:::danger
Do not attempt this on an 8GB sd card. Not enough space! [Create your image file](https://app.gitbook.com/s/-MVFzwtnGyycav4A2zJu/create-.img-file) and flash it to your ssd.
:::

I have started taking snapshots of my backup nodes db folder and hosting it in a web directory. With this service it takes around 15 minutes to pull the latest snapshot and maybe another 30 minutes to sync up to the tip of the chain. This service is provided as is. It is up to you. If you want to sync the chain on your own simply:

```bash title=">_ Terminal"
cardano-service enable
cardano-service start
cardano-service status
```

Otherwise, be sure your node is **not** running & delete the db folder if it exists and download db.

```bash title=">_ Terminal"
cardano-service stop
cd $NODE_HOME
rm -r db/
```

Download the DB snapshot.

{% tabs %}
{% tab title="Testnet" %}
```bash title=">_ Terminal"
wget -r -np -nH -R "index.html*" -e robots=off https://testnet.adamantium.online/db/
```
{% endtab %}

{% tab title="Mainnet" %}
```bash title=">_ Terminal"
wget -r -np -nH -R "index.html*" -e robots=off https://mainnet.adamantium.online/db/
```
{% endtab %}
{% endtabs %}

Once wget completes enable & start cardano-node.

```bash title=">_ Terminal"
cardano-service enable
cardano-service start
cardano-service status
```

### gLiveView.sh

Guild operators scripts have a couple of useful tools for operating a pool. We do not want the project as a whole, though there are a couple of scripts we are going to use.

{% embed url="https://github.com/cardano-community/guild-operators/tree/master/scripts/cnode-helper-scripts" %}

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/env
wget https://raw.githubusercontent.com/cardano-community/guild-operators/master/scripts/cnode-helper-scripts/gLiveView.sh
```

We have to edit the env file to work with our environment. The port number here will have to be updated to match the port cardano-node is running on. For the **Pi-Node** it's port 3003. As we build the pool we will work down. For example Pi-Relay(2) will run on port 3002, Pi-Relay(1) on 3001 and Pi-Core on port 3000.

:::info
You can change the port cardano-node runs on in /home/ada/.local/bin/cardano-service.
:::

```bash title=">_ Terminal"
sed -i env \
    -e "s/\#CNODE_HOME=\"\/opt\/cardano\/cnode\"/CNODE_HOME=\"\home\/ada\/pi-pool\"/g" \
    -e "s/"6000"/"3001"/g" \
    -e "s/\#CONFIG=\"\${CNODE_HOME}\/files\/config.json\"/CONFIG=\"\${NODE_FILES}\/${NODE_CONFIG}-config.json\"/g" \
    -e "s/\#SOCKET=\"\${CNODE_HOME}\/sockets\/node0.socket\"/SOCKET=\"\${NODE_HOME}\/db\/socket\"/g"
```

Allow execution of gLiveView.sh.

```bash title=">_ Terminal"
chmod +x gLiveView.sh
```

### topologyUpdater.sh

Until peer to peer is enabled on the network operators need a way to get a list of relays/peers to connect to. The topology updater service runs in the background with cron. Every hour the script will run and tell the service you are a relay and want to be a part of the network. It will add your relay to it's directory after four hours and start generating a list of relays in a json file in the $NODE\_HOME/logs directory. A second script, relay-topology\_pull.sh can then be used manually to generate a mainnet-topolgy file with relays/peers that are aware of you and you of them.

:::info
The list generated will show you the distance in miles & a clue as to where the relay is located.
:::

Open a file named topologyUpdater.sh

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
nano topologyUpdater.sh
```

Paste in the following, save & exit.

:::caution
The port number here must match the port cardano-node is running on. If you are using dns records you can add the FQDN that matches on line 6(line 6 only). Leave it as is if you are not using dns. The service will pick up the public IP and use that.
:::

:::caution
Don't forget to update User and Paths to your user, unless you used 'ada'
:::

{% tabs %}
{% tab title="Testnet" %}
```bash title=">_ Terminal"
#!/bin/bash
# shellcheck disable=SC2086,SC2034

USERNAME=ada
CNODE_PORT=3003 # must match your relay node port as set in the startup command
CNODE_HOSTNAME="CHANGE ME"  # optional. must resolve to the IP you are requesting from
CNODE_BIN="/home/ada/.local/bin"
CNODE_HOME="/home/ada/pi-pool"
LOG_DIR="${CNODE_HOME}/logs"
GENESIS_JSON="${CNODE_HOME}/files/testnet-shelley-genesis.json"
NETWORKID=$(jq -r .networkId $GENESIS_JSON)
CNODE_VALENCY=1   # optional for multi-IP hostnames
NWMAGIC=$(jq -r .networkMagic < $GENESIS_JSON)
[[ "${NETWORKID}" = "Mainnet" ]] && HASH_IDENTIFIER="--mainnet" || HASH_IDENTIFIER="--testnet-magic ${NWMAGIC}"
[[ "${NWMAGIC}" = "1097911063" ]] && NETWORK_IDENTIFIER="--mainnet" || NETWORK_IDENTIFIER="--testnet-magic ${NWMAGIC}"

export PATH="${CNODE_BIN}:${PATH}"
export CARDANO_NODE_SOCKET_PATH="${CNODE_HOME}/db/socket"

blockNo=$(/home/ada/.local/bin/cardano-cli query tip ${NETWORK_IDENTIFIER} | jq -r .block )

# Note:
# if you run your node in IPv4/IPv6 dual stack network configuration and want announced the
# IPv4 address only please add the -4 parameter to the curl command below  (curl -4 -s ...)
if [ "${CNODE_HOSTNAME}" != "CHANGE ME" ]; then
  T_HOSTNAME="&hostname=${CNODE_HOSTNAME}"
else
  T_HOSTNAME=''
fi

if [ ! -d ${LOG_DIR} ]; then
  mkdir -p ${LOG_DIR};
fi

curl -s -f -4 "https://api.clio.one/htopology/v1/?port=${CNODE_PORT}&blockNo=${blockNo}&valency=${CNODE_VALENCY}&magic=${NWMAGIC}${T_HOSTNAME}" | tee -a "${LOG_DIR}"/topologyUpdater_lastresult.json
```
{% endtab %}

{% tab title="Mainnet" %}
```bash title=">_ Terminal"
#!/bin/bash
# shellcheck disable=SC2086,SC2034

USERNAME=ada
CNODE_PORT=3003 # must match your relay node port as set in the startup command
CNODE_HOSTNAME="CHANGE ME"  # optional. must resolve to the IP you are requesting from
CNODE_BIN="/home/ada/.local/bin"
CNODE_HOME="/home/ada/pi-pool"
LOG_DIR="${CNODE_HOME}/logs"
GENESIS_JSON="${CNODE_HOME}/files/mainnet-shelley-genesis.json"
NETWORKID=$(jq -r .networkId $GENESIS_JSON)
CNODE_VALENCY=1   # optional for multi-IP hostnames
NWMAGIC=$(jq -r .networkMagic < $GENESIS_JSON)
[[ "${NETWORKID}" = "Mainnet" ]] && HASH_IDENTIFIER="--mainnet" || HASH_IDENTIFIER="--testnet-magic ${NWMAGIC}"
[[ "${NWMAGIC}" = "764824073" ]] && NETWORK_IDENTIFIER="--mainnet" || NETWORK_IDENTIFIER="--testnet-magic ${NWMAGIC}"

export PATH="${CNODE_BIN}:${PATH}"
export CARDANO_NODE_SOCKET_PATH="${CNODE_HOME}/db/socket"

blockNo=$(/home/ada/.local/bin/cardano-cli query tip ${NETWORK_IDENTIFIER} | jq -r .block )

# Note:
# if you run your node in IPv4/IPv6 dual stack network configuration and want announced the
# IPv4 address only please add the -4 parameter to the curl command below  (curl -4 -s ...)
if [ "${CNODE_HOSTNAME}" != "CHANGE ME" ]; then
  T_HOSTNAME="&hostname=${CNODE_HOSTNAME}"
else
  T_HOSTNAME=''
fi

if [ ! -d ${LOG_DIR} ]; then
  mkdir -p ${LOG_DIR};
fi

curl -s -f -4 "https://api.clio.one/htopology/v1/?port=${CNODE_PORT}&blockNo=${blockNo}&valency=${CNODE_VALENCY}&magic=${NWMAGIC}${T_HOSTNAME}" | tee -a "${LOG_DIR}"/topologyUpdater_lastresult.json
```
{% endtab %}
{% endtabs %}

Save, exit, and make it executable.

```bash title=">_ Terminal"
chmod +x topologyUpdater.sh
```

:::caution
You will not be able to successfully execute ./topologyUpdater.sh until you are fully synced up to the tip of the chain.
:::

:::info
Choose nano when prompted for editor.
:::

Create a cron job that will run the script every hour.

```bash title=">_ Terminal"
crontab -e
```

Add the following to the bottom, save & exit.

:::info
The Pi-Node image has this cron entry disabled by default. You can enable it by removing the #.
:::

```bash title=">_ Terminal"
33 * * * * /home/ada/pi-pool/scripts/topologyUpdater.sh
```

After 4 hours of on boarding you will be added to the service and can pull your new list of peers into the mainnet-topology file.

Create another file relay-topology\_pull.sh and paste in the following.

```bash title=">_ Terminal"
nano relay-topology_pull.sh
```

{% tabs %}
{% tab title="Testnet" %}
```bash title=">_ Terminal"
#!/bin/bash
BLOCKPRODUCING_IP=<BLOCK PRODUCERS PRIVATE IP>
BLOCKPRODUCING_PORT=3000
curl -4 -s -o /home/ada/pi-pool/files/testnet-topology.json "https://api.clio.one/htopology/v1/fetch/?max=15&magic=1097911063&customPeers=${BLOCKPRODUCING_IP}:${BLOCKPRODUCING_PORT}:1"
```
{% endtab %}

{% tab title="Mainnet" %}
```bash title=">_ Terminal"
#!/bin/bash
BLOCKPRODUCING_IP=<BLOCK PRODUCERS PRIVATE IP>
BLOCKPRODUCING_PORT=3000
curl -4 -s -o /home/ada/pi-pool/files/mainnet-topology.json "https://api.clio.one/htopology/v1/fetch/?max=15&magic=764824073&customPeers=${BLOCKPRODUCING_IP}:${BLOCKPRODUCING_PORT}:1"
```
{% endtab %}
{% endtabs %}

Save, exit and make it executable.

```bash title=">_ Terminal"
chmod +x relay-topology_pull.sh
```

:::danger
Pulling in a new list will overwrite your existing topology file. Keep that in mind.
:::

After 4 hours you can pull in your new list and restart the cardano-service.

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
./relay-topology_pull.sh
```

:::info
relay-topology\_pull.sh will add 15 peers to your mainnet-topology file. I usually remove the furthest 5 relays and use the closest 10.
:::

```bash title=">_ Terminal"
nano $NODE_FILES/${NODE_CONFIG}-topology.json
```

:::info
You can use gLiveView.sh to view ping times in relation to the peers in your mainnet-topology file. Use Ping to resolve hostnames to IP's.
:::

Changes to this file will take affect upon restarting the cardano-service.

:::caution
Don't forget to remove the last comma in your topology file!
:::

Status should show as enabled & running.

Once your node syncs past epoch 208(shelley era) you can use gLiveView.sh to monitor.

:::danger
It can take up to an hour for cardano-node to sync to the tip of the chain. Use ./gliveView.sh, htop and log outputs to view process. Be patient it will come up.
:::

```bash title=">_ Terminal"
cd $NODE_HOME/scripts
./gLiveView.sh
```

![](</img/pi-node-glive.png>)

## Prometheus, Node Exporter & Grafana

Prometheus connects to cardano-nodes backend and serves metrics over http. Grafana in turn can use that data to display graphs and create alerts. Our Grafana dashboard will be made up of data from our Ubuntu system & cardano-node. Grafana can display data from other sources as well, like [adapools.org](https://adapools.org).

:::info
You can connect a Telegram bot to Grafana which can alert you of problems with the server. Much easier than trying to configure email alerts.
:::

{% embed url="https://github.com/prometheus" %}

![](</img/pi-pool-grafana.png>)

### Install Prometheus & Node Exporter.

:::info
Prometheus can scrape the http endpoints of other servers running node exporter. Meaning Grafana and Prometheus does not have to be installed on your core and relays. Only the package prometheus-node-exporter is required if you would like to build a central Grafana dashboard for the pool, freeing up resources.
:::

```bash title=">_ Terminal"
sudo apt-get install -y prometheus prometheus-node-exporter
```

Disable them in systemd for now.

```bash title=">_ Terminal"
sudo systemctl disable prometheus.service
sudo systemctl disable prometheus-node-exporter.service
```

### Configure Prometheus

Open prometheus.yml.

```bash title=">_ Terminal"
sudo nano /etc/prometheus/prometheus.yml
```

Replace the contents of the file with.

:::caution
Indentation must be correct YAML format or Prometheus will fail to start.
:::

```yaml
global:
  scrape_interval:     15s # By default, scrape targets every 15 seconds.

  # Attach these labels to any time series or alerts when communicating with
  # external systems (federation, remote storage, Alertmanager).
  external_labels:
    monitor: 'codelab-monitor'

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label job=<job_name> to any timeseries scraped from this config.
  - job_name: 'Prometheus' # To scrape data from the cardano node
    scrape_interval: 5s
    static_configs:
#      - targets: ['<CORE PRIVATE IP>:12798']
#        labels:
#          alias: 'C1'
#          type:  'cardano-node'
#      - targets: ['<RELAY PRIVATE IP>:12798']
#        labels:
#          alias: 'R1'
#          type:  'cardano-node'
      - targets: ['localhost:12798']
        labels:
          alias: 'N1'
          type:  'cardano-node'

#      - targets: ['<CORE PRIVATE IP>:9100']
#        labels:
#          alias: 'C1'
#          type:  'node'
#      - targets: ['<RELAY PRIVATE IP>:9100']
#        labels:
#          alias: 'R1'
#          type:  'node'
      - targets: ['localhost:9100']
        labels:
          alias: 'N1'
          type:  'node'
```

Save & exit.

Edit mainnet-config.json so cardano-node exports traces on all interfaces.

```bash title=">_ Terminal"
cd $NODE_FILES
sed -i ${NODE_CONFIG}-config.json -e "s/127.0.0.1/0.0.0.0/g"
```

### Install Grafana

{% embed url="https://github.com/grafana/grafana" %}

Add Grafana's gpg key to Ubuntu.

```bash title=">_ Terminal"
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
```

Add latest stable repo to apt sources.

```bash title=">_ Terminal"
echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
```

Update your package lists & install Grafana.

```bash title=">_ Terminal"
sudo apt update
sudo apt install grafana
```

Change the port Grafana listens on so it does not clash with cardano-node.

```bash title=">_ Terminal"
sudo sed -i /etc/grafana/grafana.ini \
-e "s/;http_port/http_port/" \
-e "s/3000/5000/"
```

### cardano-monitor bash function

Open .bashrc.

```bash title=">_ Terminal"
cd $HOME
nano .bashrc
```

Down at the bottom add.

```bash title=">_ Terminal"
cardano-monitor() {
    #do things with parameters like $1 such as
    sudo systemctl "$1" prometheus.service
    sudo systemctl "$1" prometheus-node-exporter.service
    sudo systemctl "$1" grafana-server.service
}
```

Save, exit & source.

```bash title=">_ Terminal"
source .bashrc
```

Here we tied all three services under one function. Enable Prometheus.service, prometheus-node-exporter.service & grafana-server.service to run on boot and start the services.

```bash title=">_ Terminal"
cardano-monitor enable
cardano-monitor start
```

:::caution
At this point you may want to start cardano-service and get synced up before we continue to configure Grafana. Skip ahead to [syncing the chain section](https://app.gitbook.com/s/-MVFzwtnGyycav4A2zJu/pi-node/environment-setup). Choose whether you want to wait 30 hours or download my latest chain snapshot. Return here once gLiveView.sh shows you are at the tip of the chain.
:::

### Configure Grafana

On your local machine open your browser and got to \[http://\<Pi-Node's]\(http://\<Pi-Node's) private ip>:5000

:::danger
Do not change the default password yet, there is no encryption on the wire. Choose skip when it asks. The next time we visit Grafana it will be with a self signed TLS certificate handled by Nginx webservers proxy\_pass and your passwords will be safe from anything listening on your internal network.
:::

Log in and set a new password. Default username and password is **admin:admin**.

### **Configure data source**

In the left hand vertical menu go to **Configure** > **Datasources** and click to **Add data source**. Choose Prometheus. Enter [http://localhost:9090](http://localhost:9090) where it is grayed out, everything can be left default. At the bottom save & test. You should get the green "Data source is working" if cardano-monitor has been started. If for some reason those services failed to start issue **cardano-service restart**.

### **Import dashboards**

Save the dashboard json files to your local machine.

{% embed url="https://github.com/armada-alliance/dashboards" %}

In the left hand vertical menu go to **Dashboards** > **Manage** and click on **Import**. Select the file you just downloaded/created and save. Head back to **Dashboards** > **Manage** and click on your new dashboard.

![](</img/pi-pool-grafana.png>)

### Configure poolDataLive

Here you can use the poolData api to bring your pools data into Grafana.

{% embed url="https://api.pooldata.live/dashboard" %}

Follow the instructions to install the Grafana plugin, configure your datasource and import the dashboard.

Follow log output to journal.

```bash title=">_ Terminal"
sudo journalctl --unit=cardano-node --follow
```

Follow log output to stdout.

```bash title=">_ Terminal"
sudo tail -f /var/log/syslog
```

### Grafana, Nginx proxy\_pass & snakeoil

Let's put Grafana behind Nginx with self signed(snakeoil) certificate. The certificate was generated when we installed the ssl-cert package.

You will get a warning from your browser. This is because ca-certificates cannot follow a trust chain to a trusted (centralized) source. The connection is however encrypted and will protect your passwords flying around in plain text.

```bash title=">_ Terminal"
sudo nano /etc/nginx/sites-available/default
```

Replace contents of the file with below.

```bash title=">_ Terminal"
# Default server configuration
#
server {
        listen 80 default_server;
        return 301 https://$host$request_uri;
}

server {
        # SSL configuration
        #
        listen 443 ssl default_server;
        #listen [::]:443 ssl default_server;
        #
        # Note: You should disable gzip for SSL traffic.
        # See: https://bugs.debian.org/773332
        #
        # Read up on ssl_ciphers to ensure a secure configuration.
        # See: https://bugs.debian.org/765782
        #
        # Self signed certs generated by the ssl-cert package
        # Don't use them in a production server!
        #
        include snippets/snakeoil.conf;

        add_header X-Proxy-Cache $upstream_cache_status;
        location / {
          proxy_pass http://127.0.0.1:5000;
          proxy_redirect      off;
          include proxy_params;
        }
}
```

Check that Nginx is happy with our changes and restart it.

```bash title=">_ Terminal"
sudo nginx -t
## if ok do
sudo service nginx restart
```

You can now visit your pi-nodes ip address without any port specification, the connection will be upgraded to SSL/TLS and you will get a scary message(not really scary at all). Continue through to your dashboard.

![](</img/pi-pool-grafana.png>)

From here you have a pi-node with tools to build a stake pool from the following pages. Best of Luck and please join the [armada-alliance](https://armada-alliance.com), together we are stronger!