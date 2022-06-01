"use strict";(self.webpackChunk_autoviews_docs=self.webpackChunk_autoviews_docs||[]).push([[522],{876:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||l[u]||i;return n?o.createElement(y,a(a({ref:t},m),{},{components:n})):o.createElement(y,a({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var o=n(7896),r=n(1461),i=(n(2784),n(876)),a=["components"],p={},s="Repository Components",c={unversionedId:"entities/repository-components",id:"entities/repository-components",title:"Repository Components",description:"AutoViews provides two React components for independent render of any component registered within repo.",source:"@site/docs/entities/repository-components.md",sourceDirName:"entities",slug:"/entities/repository-components",permalink:"/autoviews/docs/entities/repository-components",editUrl:"https://github.com/wix-incubator/autoviews/tree/master/packages/website/docs/entities/repository-components.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Events",permalink:"/autoviews/docs/entities/events"},next:{title:"Subschemas",permalink:"/autoviews/docs/subschemas/"}},m={},l=[{value:"<code>&lt;RepositoryComponentByType /&gt;</code>",id:"repositorycomponentbytype-",level:2},{value:"API",id:"api",level:3},{value:"Example",id:"example",level:3},{value:"<code>&lt;RepositoryComponentByRecordName /&gt;</code>",id:"repositorycomponentbyrecordname-",level:2},{value:"API",id:"api-1",level:3},{value:"Example",id:"example-1",level:3}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"repository-components"},"Repository Components"),(0,i.kt)("p",null,"AutoViews provides two React components for independent render of any component registered within repo.\nThese components are useful in case of rendering some specific logic which couldn't be described in schema."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Both components use Repository context. Make sure they are rendered inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<RepositoryProvider />")," scope."))),(0,i.kt)("h2",{id:"repositorycomponentbytype-"},(0,i.kt)("inlineCode",{parentName:"h2"},"<RepositoryComponentByType />")),(0,i.kt)("p",null,"Renders component, registered by given type."),(0,i.kt)("p",null,"When multiple components registered with the same type, the last registered is chosen."),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RepositoryComponentByTypeProps {\n  type: string | symbol;\n}\ntype RepositoryComponentByType = React.FC<\n  RepositoryComponentByTypeProps & AutoViewProps\n>;\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {RepositoryComponentByType} from '@autoviews/core';\n\n<RepositoryComponentByType\n  type=\"string\"\n  schema={schema}\n  data={data}\n/>;\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using symbols can help avoid collisions with real types, described in schema."))),(0,i.kt)("h2",{id:"repositorycomponentbyrecordname-"},(0,i.kt)("inlineCode",{parentName:"h2"},"<RepositoryComponentByRecordName />")),(0,i.kt)("p",null,"Renders component, registered by given record name."),(0,i.kt)("h3",{id:"api-1"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RepositoryComponentByRecordNameProps {\n  recordName: string;\n}\ntype RepositoryComponentByRecordName = React.FC<\n  RepositoryComponentByRecordNameProps & AutoViewProps\n>;\n")),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {RepositoryComponentByType} from '@autoviews/core';\n\n<RepositoryComponentByRecordName\n  recordName=\"myComponent\"\n  schema={schema}\n  data={data}\n/>;\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=36efa015.0150b4e3.js.map