# Demo envoy connection limit.

<img src="https://raw.githubusercontent.com/Ko1103/envoy-connection-limit-sample/c55ce971e7996b167d415f01f4ee5e3f60e25ab2/assets/test_result.png" />

リクエスト先のサーバに同時接続台数の制限がある場合、クライアントでconnectionを制限するなどの方法がある。
Node.jsなどのアプリケーションでコネクション数を制限できるが、envoyを使ってネットワークの設定とアプリケーションを分けられる方がよいのでそれを試す。

## Description

想定している構成(K8sの場合)

```
Pod[Node.js + envoy(as side car)] -> Service A
```

demoで用意した構成

```
K6 --> envoy(Side car) --> envoy(side car with Service A) --> Service A
```

Service Aは同時接続台数に制限があり、envoyでPodから1つだけConnectionを貼りにいくことができるか検証
ServiceA側の接続台数制限を表現するために、Service Aの前段にもenvoyを用意

## 環境
- M1 Mac(OS: mac OS Monterey)

## 準備
- docker desktopをinstall
- k6をinstall

```
brew install k6
```

## Quick Start

```
docker compose up
```

```
k6 run script.js
```


## 参考
- https://christina04.hatenablog.com/entry/envoy-circuit-breaker
- https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/circuit_breaker.proto
