(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[145],{51474:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2020/10/11/s3-api-compatibility-on-microsoft-azure",function(){return r(10169)}])},10169:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return a}});var n=r(35250),o=r(47147),l=r(77298),i=r(18363);let a=[{depth:2,value:"Prerequisites",id:"prerequisites"},{depth:2,value:"Setup",id:"setup"},{depth:2,value:"Test",id:"test"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",em:"em",code:"code",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"S3 API Compatibility On Microsoft Azure"}),"\n",(0,n.jsxs)("p",{className:"text-xs text-right",children:["October 11, 2020 by ",(0,n.jsx)(s.a,{href:"/about#patrickd",children:"patrickd"})]}),"\n","\n",(0,n.jsx)(i.UW,{type:"warning",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Note that this article is rather old and the proposed solution may no longer work with the steps described."})})}),"\n",(0,n.jsxs)(s.p,{children:["Microsoft's Azure Cloud Service ",(0,n.jsx)(s.a,{href:"https://azure.microsoft.com/en-us/services/storage/blobs/",children:"Blob Storage"})," is an alternative to AWS S3's ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/s3/?",children:"Object Storage"}),", but that doesn't mean it is intended as a drop-in replacement. While the S3 API is now widely considered a quasi-standard for cloud data storage, this was not the case when Azure Blob Storage was first created. While it too has a relatively simple HTTP API, the interfacing is still very different to S3."]}),"\n",(0,n.jsxs)(s.p,{children:["To establish compatibility between S3 API clients and the Azure Blob Storage we'll be using the ",(0,n.jsx)(s.a,{href:"https://github.com/gaul/s3proxy",children:"S3Proxy"})," project. It's a Java application that acts as a proxy between a S3 API client and the Azure Blob Storage Service by translating requests accordingly."]}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.p,{children:["In this example setup the S3Proxy program will be deployed as a container to an ",(0,n.jsx)(s.a,{href:"https://azure.microsoft.com/en-us/services/kubernetes-service/",children:"AKS Cluster"}),". Azure Kubernetes Service provides managed Kubernetes clusters that are easily set up, managed and monitored via the Azure Portal web interface."]}),"\n",(0,n.jsxs)(s.p,{children:["If you do not have an AKS yet, follow Microsoft's instructions on how to ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal#create-an-aks-cluster",children:"setup a Cluster"})," with AKS. Furthermore you might want to set up an ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/aks/ingress-tls",children:"HTTPS ingress"})," that will allow you to securely expose the S3Proxy service on the Internet with SSL encryption."]}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(s.p,{children:["Once your AKS cluster is ready, create an ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create",children:"Azure Blob Storage Account"})," that S3 Proxy will connect to in order to store files at. After it has been created successfully, navigate to ",(0,n.jsx)(s.em,{children:"Access Keys"})," and copy the name of your storage account and one of the keys displayed."]}),"\n",(0,n.jsx)(i.UW,{type:"warning",children:(0,n.jsxs)(s.p,{children:["When dealing with Access Keys from Azure Storage Accounts, make sure that they do NOT contain any special characters such as slashes. Otherwise you might run into issues when using them with S3Proxy. Within the Azure Portal you can keep regenerating new keys until you get one with only digits and letters (the ",(0,n.jsx)(s.code,{children:"=="})," characters at the end are part of the base64 encoding and are fine)."]})}),"\n",(0,n.jsxs)(s.p,{children:["The following is an example ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#creating-a-deployment",children:"manifest file"})," that uses an image from dockerhub (",(0,n.jsx)(s.a,{href:"https://hub.docker.com/r/andrewgaul/s3proxy/",children:"andrewgaul/s3proxy"}),") which includes the S3Proxy in a way that allows us to simply configure it using environment variables:"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",filename:"s3proxy.yaml",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-line-numbers":"","data-language":"yaml","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"apiVersion"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"v1"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"kind"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Namespace"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"metadata"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"apiVersion"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"v1"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"kind"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Service"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"metadata"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"spec"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"selector"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"ports"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"protocol"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"TCP"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"port"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"80"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"targetPort"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"80"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"apiVersion"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"apps/v1"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"kind"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Deployment"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"metadata"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"spec"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"replicas"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"selector"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"matchLabels"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"template"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"metadata"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"labels"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"spec"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"containers"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"s3proxy"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"image"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"andrewgaul/s3proxy:latest"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"imagePullPolicy"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Always"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"ports"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"containerPort"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"80"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"env"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"JCLOUDS_PROVIDER"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"azureblob"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"JCLOUDS_IDENTITY"})]}),"\n",(0,n.jsxs)(s.span,{className:"line highlighted",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"name-of-your-azure-storage-account"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"JCLOUDS_CREDENTIAL"})]}),"\n",(0,n.jsxs)(s.span,{className:"line highlighted",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"access-key-of-your-storage-account"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"S3PROXY_IDENTITY"})]}),"\n",(0,n.jsxs)(s.span,{className:"line highlighted",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"name-of-your-azure-storage-account"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"S3PROXY_CREDENTIAL"})]}),"\n",(0,n.jsxs)(s.span,{className:"line highlighted",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"access-key-of-your-storage-account"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"JCLOUDS_ENDPOINT"})]}),"\n",(0,n.jsxs)(s.span,{className:"line highlighted",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"value"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"https://name-of-your-azure-storage-account.blob.core.windows.net"})]})]})}),"\n",(0,n.jsxs)(s.p,{children:["Here you will use the Storage Account name and key that you previously copied from the ",(0,n.jsx)(s.em,{children:"Access Keys"})," page on your Storage Account's settings."]}),"\n",(0,n.jsx)(i.UW,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Note that it's generally recommended to use ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables",children:"Secrets"})," when handling credentials in Kubernetes."]})}),"\n",(0,n.jsxs)(s.p,{children:["After making your adjustments you may now deploy S3Proxy by executing ",(0,n.jsx)(s.span,{"data-rehype-pretty-code-fragment":"",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"kubectl"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"apply"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-f"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"s3proxy.yaml"})]})})}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"test",children:"Test"}),"\n",(0,n.jsxs)(s.p,{children:["You can test your S3Proxy setup using the ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})," on your local computer. To do so first edit the ",(0,n.jsx)(s.code,{children:"~/.aws/credentials"})," configuration file and add the following lines:"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"ini","data-theme":"default",filename:"~/.aws/credentials",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-line-numbers":"","data-language":"ini","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[azure]"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"aws_access_key_id"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" name-of-your-azure-storage-account"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"aws_secret_access_key"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" access-key-of-your-storage-account"})]})]})}),"\n",(0,n.jsxs)(s.p,{children:["Then add the following lines to your ",(0,n.jsx)(s.code,{children:"~/.aws/config"})," file:"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"ini","data-theme":"default",filename:"~/.aws/config",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-line-numbers":"","data-language":"ini","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[azure]"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"region"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" your-region"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"output"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" json"})]})]})}),"\n",(0,n.jsxs)(s.p,{children:["With that you should be able to manage your Azure Blob Storage Account using the AWS CLI while specifying ",(0,n.jsx)(s.code,{children:"--endpoint-url"})," and ",(0,n.jsx)(s.code,{children:"--profile"}),":"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:'# Create a bucket (actually called a collection on azure) named "my-files"'})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"aws"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--endpoint-url"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://your-s3proxy-ingress.your-region.cloudapp.azure.com/"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--profile"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"azure"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"s3"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"mb"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"s3://my-files"})]})]})})]})}s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/posts/2020/10/11/s3-api-compatibility-on-microsoft-azure.mdx",route:"/posts/2020/10/11/s3-api-compatibility-on-microsoft-azure",timestamp:1701473445e3,title:"S3 API Compatibility On Microsoft Azure",headings:a},pageNextRoute:"/posts/2020/10/11/s3-api-compatibility-on-microsoft-azure"})},47147:function(e,s,r){"use strict";r.d(s,{j:function(){return setupNextraPage}});var n,o=r(44619),l=r.n(o),i=r(54594),a=r(70079);r(77298);var t=r(35250),c=(0,a.createContext)(!1),h=r(65263);function Nextra({__nextra_pageMap:e,__nextra_dynamic_opts:s,...r}){let{context:n,Layout:o}=function(){let e=globalThis[i.eZ],{route:s}=(0,h.useRouter)();(0,a.useState)({})[1];let r=e.context[s];if(!r)throw Error("No content found for the current route. This is a Nextra bug.");return{context:r,Layout:e.Layout}}(),{Content:l,...d}=n;if(e&&(d.pageOpts={...d.pageOpts,pageMap:e}),s){let{headings:e,title:r,frontMatter:n}=JSON.parse(s);d.pageOpts={...d.pageOpts,headings:e,title:r,frontMatter:n}}return(0,t.jsx)(o,{...d,pageProps:r,children:(0,t.jsx)(c.Provider,{value:r,children:(0,t.jsx)(l,{...r})})})}var d=r(86264),p=r(99199),k=r(20439);function pageTitleFromFilename(e){return k(e.replaceAll(/[-_]/g," "))}function isFolder(e){return!!e&&"object"==typeof e&&"folder"===e.type}function normalizeMetaData(e){return Object.fromEntries(Object.entries(e).map(([e,s])=>{if(isFolder(s)){let r=e.replace("/","");return[r,s.title||pageTitleFromFilename(r)]}return[e,s||pageTitleFromFilename(e)]}))}function setupNextraPage({pageNextRoute:e,pageOpts:s,nextraLayout:r,themeConfig:o,MDXContent:a,hot:t,pageOptsChecksum:c,dynamicMetaModules:h=[]}){var k;"undefined"==typeof window&&(globalThis.__nextra_resolvePageMap=async()=>{if(n)return n;let e=JSON.parse(JSON.stringify(x.pageMap));return await Promise.all(h.map(async([s,{metaObjectKeyPath:r,metaParentKeyPath:n}])=>{let o=await s,i=await o.default(),a=l()(e,r);a.data=i;let t=l()(e,n);!function collectCatchAllRoutes(e,s,r=!0){if(r){collectCatchAllRoutes(e,{kind:"Meta",data:s.data,locale:s.locale},!1),s.data=normalizeMetaData(s.data);return}for(let[r,o]of Object.entries(s.data)){if(!isFolder(o)){var n;if("*"===r)continue;e.children.push({kind:"MdxPage",...s.locale&&{locale:s.locale},name:r,route:(n=e.route,p(d.join(n,r.replace(/^index$/,""))))});continue}let l=r.replace("/",""),i={kind:"Folder",name:l,route:`${e.route}/${l}`,children:[{kind:"Meta",...s.locale&&{locale:s.locale},data:normalizeMetaData(o.items)}]};e.children.push(i),collectCatchAllRoutes(i,{kind:"Meta",data:o.items,locale:s.locale},!1)}}(t,a)})),n=e});let x=globalThis[k=i.eZ]||(globalThis[k]=Object.create(null));return s.pageMap?(x.pageMap=s.pageMap,x.Layout=r):(s={...s,pageMap:x.pageMap,flexsearch:x.flexsearch},o=x.themeConfig),s={frontMatter:{},...s},x.route=s.route,x.context||(x.context=Object.create(null)),x.context[e]={Content:a,pageOpts:s,themeConfig:o},Nextra}}},function(e){e.O(0,[3220,9774,2888,179],function(){return e(e.s=51474)}),_N_E=e.O()}]);