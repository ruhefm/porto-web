---
title: OpenSSL convert to PKCS12 to JKS
desc: This it to convert .cert into .p12 and .jks, the usage is for SSL management in web server.
images: []
size:
tools: []
tags: ['SSL', 'Server', 'Tomcat']
---
# OpenSSL
## Convert to PCKS12
```
openssl pkcs12 -export -in certificate.crt -inkey cert_key.key -certfile ca_bundle.crt -out output.p12
```
## Convert PCKS12 to JKS
```
keytool -importkeystore -srckeystore output.p12 -srcstoretype pkcs12 -destkeystore output.jks -deststoretype JKS
```
## Tomcat SSL
/tomcat/conf/server.xml
```
<Connector port="443"
              protocol="org.apache.coyote.http11.Http11Protocol"
              SSLEnabled="true"
              maxThreads="150"
              scheme="https"
              secure="true"
              keystoreFile="/tomcat/ssl/output.jks"
              keystorePass="keystorepass"
              clientAuth="false"
              sslProtocol="TLSv1.3"
              sslEnabledProtocols="TLSv1.3,TLSv1.2,TLSv1.1,TLSv1"
              ciphers="TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
                       TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384,
                       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
                       TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256,
                       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,
                       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,
                       TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384,
                       TLS_ECDH_RSA_WITH_AES_256_CBC_SHA,TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA,
                       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,
                       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,
                       TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256,
                       TLS_ECDH_RSA_WITH_AES_128_CBC_SHA,TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA"
/>

<Connector SSLEnabled="true" acceptCount="100" clientAuth="false" 
           disableUploadTimeout="true" enableLookups="false" 
           keystoreFile="/tomcat/ssl/output.jks" keystorePass="keystorepass" 
           maxThreads="25" port="443" 
           protocol="org.apache.coyote.http11.Http11NioProtocol" 
           scheme="https" secure="true" sslProtocol="TLSv1.3"
           sslEnabledProtocols="TLSv1.3,TLSv1.2,TLSv1.1,TLSv1"
              ciphers="TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
                       TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384,
                       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
                       TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256,
                       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,
                       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA,
                       TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384,
                       TLS_ECDH_RSA_WITH_AES_256_CBC_SHA,TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA,
                       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,
                       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA,
                       TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256,
                       TLS_ECDH_RSA_WITH_AES_128_CBC_SHA,TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA"
    />
```