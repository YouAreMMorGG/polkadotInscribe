# Polkadot Inscribe
## 环境准备
准备 node 环境
```
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install nodejs
npm install -g n
n stable
```
安装 yarn
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```
安装依赖
```
yarn
```
启动
```
node mint.js
```
不会的，自己搜索下对应的 mac or windows 的 node 环境安装

## 手搓
介于很多人不会用脚本，我提供一个比网页 mint 更快的方式
1. 进入 polkadot.js app 
> https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.public.curie.radiumblock.co%2Fws#/extrinsics/decode
![image](https://hackmd.io/_uploads/rJdnB6lPT.png)


2. 把下面的 decode 放进去
>0xe902840020ce2984fe52d9bcc9608b77074872a0d91304cc89be1fe607d62eb8fa3f3d5401e4b7a5d691f46d085e2c939afb719b52938ab6c1b28f32c31e44e6b22b3e6b1be412c6731130f42c0d7dde6031864d7f496cc082a78402e22d80ae217296e18fe5033503001a020805030020ce2984fe52d9bcc9608b77074872a0d91304cc89be1fe607d62eb8fa3f3d54000000a07b2270223a22646f742d3230222c226f70223a226d696e74222c227469636b223a22444f5441227d

![image](https://hackmd.io/_uploads/ByOgf6gPp.png)


3. 点击旁边的 Submission，然后更改我标红框的两处地址，改成自己的
![image](https://hackmd.io/_uploads/SyDBGalP6.png)

4. 接下来，狂点 ![image](https://hackmd.io/_uploads/Hkj8fplP6.png)


5. 查交易记录 
> https://polkadot.subscan.io/ 


## 查询
address后面写你自己的地址
> https://api.dota.fyi/v1/get_balance_list?address=



