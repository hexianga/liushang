## 目录

## install

[install-mongodb-on-red-hat](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

## yum 仓库配置

[配置信息](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-configuring_yum_and_yum_repositories)

## mongo cloud

云服务提供商：aws，Google cloud，Microsoft Azure (aws)

Cluster Name: Cluster0

登录信息：

- 用户名: liushang
- 密码: 3CirajveBGuNpNNj

connect cluster:

```
brew install mongosh
mongosh "mongodb+srv://cluster0.gcw1e.mongodb.net/training" --apiVersion 1 --username liushang
```

插入文档：

```
db.articles.insertOne({
uuid: '2121212122',
title: 'readme1',
content: '111222333444',
createdAt: 1647431479546,
updatedAt: 1647431479546,})
```
