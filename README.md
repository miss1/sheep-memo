# Web page with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


```
1. 确定上传策略
2. 将上传策略序列化成为json格式:
{"scope":"yylcc:data.db","deadline":1661619678,"insertOnly":0}
3. 对json序列化后的上传策略进行URL安全的Base64编码,得到如下encoded:
eyJzY29wZSI6Inl5bGNjOmRhdGEuZGIiLCJkZWFkbGluZSI6MTY2MTYxOTY3OCwiaW5zZXJ0T25seSI6MH0=
4. 用SecretKey对编码后的上传策略进行HMAC-SHA1加密，并且做URL安全的Base64编码,得到如下的encoded_signed:
PtIPRawqEZ/x3gTFJQq7ct2VMro=
5. 将 AccessKey、encode_signed 和 encoded 用 “:” 连接起来,得到如下的UploadToken:
EArdtQg_8zBUB1NAWypgxZ3aQZpYyPyMQ7f3m1Bs:PtIPRawqEZ_x3gTFJQq7ct2VMro=:eyJzY29wZSI6Inl5bGNjOmRhdGEuZGIiLCJkZWFkbGluZSI6MTY2MTYxOTY3OCwiaW5zZXJ0T25seSI6MH0=
```
