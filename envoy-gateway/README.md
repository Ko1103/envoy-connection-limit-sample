
```
 helm template --include-crds --namespace default -f values.yaml --version v0.0.0-latest  oci://docker.io/envoyproxy/gateway-helm > envoy-gateway.yaml
```