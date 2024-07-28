import{B as j,k as W,l as F,m as S,n as _,a as E,q as Q,r as V,_ as J,t as v,e as z,d as T,f as B,w as D,x as $,c as K,s as Y,u as G,p as X,h as Z,v as ee,j as ne}from"./index-634aa4b7.js";class ae extends j{constructor({body:a,error:t,url:i}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${W(i)}`,`Request body: ${F(a)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}const te=-1;class ie extends j{constructor(a,{code:t,docsPath:i,metaMessages:r,shortMessage:n}){super(n,{cause:a,docsPath:i,metaMessages:r||(a==null?void 0:a.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=a.name,this.code=a instanceof ae?a.code:t??te}}class L extends ie{constructor(a,t){super(a,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class P extends L{constructor(a){super(a,{code:P.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class M extends L{constructor(a){super(a,{code:M.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});const re="08c4b07e3ad25f1a27c14a4e8cecb6f0",x="eip155",A="wallet_addEthereumChain",ce=!0,I={requestedChains:"tw.wc.requestedChains",lastUsedChainId:"tw.wc.lastUsedChainId"};function he(e){return e.id==="walletConnect"}async function fe(e,a,t,i,r){var m,C,p;const n=await k(e,t,r),c=e.walletConnect;let{onDisplayUri:s}=c||{};if(!s&&r){const h=await S(t);s=w=>{const b=h.mobile.native||h.mobile.universal;if(!b)throw new Error("No app url found for wallet connect to redirect to.");const y=$(b,w).redirect;r(y)}}s&&n.events.addListener("display_uri",s);const{rpcMap:u,chainsToRequest:o}=O({client:e.client,chain:e.chain,optionalChains:(m=e.walletConnect)==null?void 0:m.optionalChains});n.session&&await n.connect({...c!=null&&c.pairingTopic?{pairingTopic:c==null?void 0:c.pairingTopic}:{},optionalChains:o,chains:e.chain?[e.chain.id]:o.length>0?[o[0]]:[1],rpcMap:u}),R(o,i);const l=(await n.enable())[0];if(!l)throw new Error("No accounts found on provider.");const f=_(n.chainId),g=e.chain&&e.chain.id===f?e.chain:E(f);if(e){const h={optionalChains:(C=e.walletConnect)==null?void 0:C.optionalChains,chain:e.chain,pairingTopic:(p=e.walletConnect)==null?void 0:p.pairingTopic};i&&Q(i,t,h)}return c!=null&&c.onDisplayUri&&n.events.removeListener("display_uri",c.onDisplayUri),H(l,g,n,a,i)}async function me(e,a,t,i,r){const n=i?await V(i,t):null,c=await k(n?{chain:n.chain,client:e.client,walletConnect:{pairingTopic:n.pairingTopic,optionalChains:n.optionalChains}}:{client:e.client,walletConnect:{}},t,r,!0),s=c.accounts[0];if(!s)throw new Error("No accounts found on provider.");const u=_(c.chainId),o=e.chain&&e.chain.id===u?e.chain:E(u);return H(s,o,c,a,i)}async function k(e,a,t,i=!1){var f,g,m,C,p;const r=await S(a),n=e.walletConnect,{EthereumProvider:c,OPTIONAL_EVENTS:s,OPTIONAL_METHODS:u}=await J(()=>import("./index.es-4efe2126.js"),["assets/index.es-4efe2126.js","assets/index-634aa4b7.js","assets/index-db695948.css","assets/___vite-browser-external_commonjs-proxy-e16188b3.js"]),{rpcMap:o,chainsToRequest:d}=O({client:e.client,chain:e.chain,optionalChains:(f=e.walletConnect)==null?void 0:f.optionalChains}),l=await c.init({showQrModal:t?!1:(n==null?void 0:n.showQrModal)===void 0?ce:n.showQrModal,projectId:(n==null?void 0:n.projectId)||re,optionalMethods:u,optionalEvents:s,optionalChains:d,chains:e.chain?[e.chain.id]:d.length>0?[d[0]]:[1],metadata:{name:((g=n==null?void 0:n.appMetadata)==null?void 0:g.name)||v().name,description:((m=n==null?void 0:n.appMetadata)==null?void 0:m.description)||v().description,url:((C=n==null?void 0:n.appMetadata)==null?void 0:C.url)||v().url,icons:[((p=n==null?void 0:n.appMetadata)==null?void 0:p.logoUrl)||v().logoUrl]},rpcMap:o,qrModalOptions:n==null?void 0:n.qrModalOptions,disableProviderPing:!0});if(l.events.setMaxListeners(Number.POSITIVE_INFINITY),i||l.session&&await l.disconnect(),a!=="walletConnect"){let h=function(){var w,b,y,U;const q=((U=(y=(b=(w=l.session)==null?void 0:w.peer)==null?void 0:b.metadata)==null?void 0:y.redirect)==null?void 0:U.native)||r.mobile.native||r.mobile.universal;t&&q&&t(q)};l.signer.client.on("session_request_sent",h),l.events.addListener("disconnect",()=>{l.signer.client.off("session_request_sent",h)})}return l}function N(e,a){return{address:a,async sendTransaction(i){return{transactionHash:await e.request({method:"eth_sendTransaction",params:[{gas:i.gas?T(i.gas):void 0,value:i.value?T(i.value):void 0,from:this.address,to:i.to,data:i.data}]})}},async signMessage({message:i}){const r=(()=>typeof i=="string"?Y(i):i.raw instanceof Uint8Array?G(i.raw):i.raw)();return e.request({method:"personal_sign",params:[r,this.address]})},async signTypedData(i){const r=X(i),{domain:n,message:c,primaryType:s}=r,u={EIP712Domain:Z({domain:n}),...r.types};ee({domain:n,message:c,primaryType:s,types:u});const o=ne({domain:n??{},message:c,primaryType:s,types:u});return await e.request({method:"eth_signTypedData_v4",params:[this.address,o]})}}}function H(e,a,t,i,r){const n=N(t,e);async function c(){t.removeListener("accountsChanged",u),t.removeListener("chainChanged",o),t.removeListener("disconnect",s),await t.disconnect()}function s(){R([],r),r==null||r.removeItem(I.lastUsedChainId),c(),i.emit("disconnect",void 0)}function u(d){if(d[0]){const l=N(t,K(d[0]));i.emit("accountChanged",l),i.emit("accountsChanged",d)}else s()}function o(d){const l=E(_(d));i.emit("chainChanged",l),r==null||r.setItem(I.lastUsedChainId,String(d))}return t.on("accountsChanged",u),t.on("chainChanged",o),t.on("disconnect",s),t.on("session_delete",s),[n,a,c,d=>de(t,d,r)]}function se(e){var a,t;return((t=(a=e.session)==null?void 0:a.namespaces[x])==null?void 0:t.methods)||[]}function oe(e){var t,i,r;return((r=(i=(t=e.session)==null?void 0:t.namespaces[x])==null?void 0:i.chains)==null?void 0:r.map(n=>Number.parseInt(n.split(":")[1]||"")))??[]}async function de(e,a,t){var r,n;const i=a.id;try{const c=oe(e),s=se(e);if(!c.includes(i)&&s.includes(A)){const o=await z(a);await e.request({method:A,params:[{chainId:T(o.chainId),chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:B(o),blockExplorerUrls:((r=a.blockExplorers)==null?void 0:r.slice(0,1))||((n=o.explorers)==null?void 0:n.slice(0,1))||[]}]});const d=await le(t);d.push(i),R(d,t)}await e.request({method:"wallet_switchEthereumChain",params:[{chainId:T(i)}]})}catch(c){const s=typeof c=="string"?c:c==null?void 0:c.message;throw/user rejected request/i.test(s)?new P(c):new M(c)}}function R(e,a){a==null||a.setItem(I.requestedChains,JSON.stringify(e))}async function le(e){const a=await e.getItem(I.requestedChains);return a?JSON.parse(a):[]}function O(e){const a={};e.chain&&(a[e.chain.id]=D({chain:e.chain,client:e.client}));const t=((e==null?void 0:e.optionalChains)||[]).slice(0,10);for(const n of t)a[n.id]=D({chain:n,client:e.client});const i=t.map(n=>n.id)||[],r=e.chain?[e.chain.id,...i]:i.length>0?i:[1];return!e.chain&&t.length===0&&(a[1]=E(1).rpc),{rpcMap:a,chainsToRequest:r}}export{me as autoConnectWC,fe as connectWC,he as isWalletConnect};
