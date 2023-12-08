Demo for connection limit.

Client -- envoy(Side car) --> Connection Limit --> Service A

Service Aは同時接続台数に制限があるので、envoyで弾くようにする

k6で負荷をかけて実際に動作するか見る

## 環境
- M1 Mac(OS: mac OS Monterey)


## 準備
- docker desktopをinstall
- k6をinstall

```
brew install k6
```

## 負荷掛け方

```
k6 run script.js
```

## 参考
- https://christina04.hatenablog.com/entry/envoy-circuit-breaker
- https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/circuit_breaker.proto