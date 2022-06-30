"use strict";(self.webpackChunk_autoviews_website=self.webpackChunk_autoviews_website||[]).push([[173],{876:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||i;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2587:function(e,t,n){n.r(t),n.d(t,{REQUIRED:function(){return u},assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(7896),r=n(1461),i=(n(2784),n(876)),o=["components"],l={},d="The AutoView Component",p={unversionedId:"basic/autoview",id:"basic/autoview",title:"The AutoView Component",description:"<span",source:"@site/docs/basic/autoview.md",sourceDirName:"basic",slug:"/basic/autoview",permalink:"/autoviews/docs/basic/autoview",editUrl:"https://github.com/wix-incubator/autoviews/tree/master/packages/website/docs/basic/autoview.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/autoviews/docs/"},next:{title:"The Components Repository",permalink:"/autoviews/docs/entities/components-repo"}},m={},s=[{value:"Basic example of AutoView usage",id:"basic-example-of-autoview-usage",level:2},{value:"Properties of the <code>AutoView</code> Component",id:"properties-of-the-autoview-component",level:2}],u=function(){return(0,i.kt)("span",{style:{backgroundColor:"#00a4db",color:"white",borderRadius:"10px",padding:"0 10px"}},"Required")},k={toc:s,REQUIRED:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-autoview-component"},"The AutoView Component"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoView")," React component is the main component of the AutoViews library.\n",(0,i.kt)("inlineCode",{parentName:"p"},"AutoView")," automatically render ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," that conforms to the given ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONSchema")," using the React components\nregistered in ",(0,i.kt)("a",{parentName:"p",href:"/docs/entities/components-repo"},"The Components Repository")," (",(0,i.kt)("inlineCode",{parentName:"p"},"ComponentsRepo"),")\nand provided through ",(0,i.kt)("a",{parentName:"p",href:"/docs/entities/repository-provider"},"The Repository Provider")," (",(0,i.kt)("inlineCode",{parentName:"p"},"RepositoryProvider"),")."),(0,i.kt)("p",null,"Optionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoView")," can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/entities/ui-schema"},"UISchema")," (",(0,i.kt)("inlineCode",{parentName:"p"},"UISchema"),") to customize how to render the components - which components to use,\nat which order or using which groups."),(0,i.kt)("h2",{id:"basic-example-of-autoview-usage"},"Basic example of AutoView usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<RepositoryProvider components={repo}>\n  <AutoView\n    schema={schema}\n    data={currentData}\n    uiSchema={uiSchema}\n    onClick={clickHandler}\n  />\n</RepositoryProvider>\n")),(0,i.kt)("h2",{id:"properties-of-the-autoview-component"},"Properties of the ",(0,i.kt)("inlineCode",{parentName:"h2"},"AutoView")," Component"),(0,i.kt)("p",null,"For reference, the properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoView")," are defined as the interface ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoViewProps"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CoreSchemaMetaSchema")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{mdxType:"REQUIRED"})," The ",(0,i.kt)("inlineCode",{parentName:"td"},"JSONSchema")," representing the data that should be rendered. See also ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/the-json-schema"},"the Data JSONSchema"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," property is the input to be rendered by ",(0,i.kt)("inlineCode",{parentName:"td"},"AutoViews"),". ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," is optional, and if present should be valid against ",(0,i.kt)("inlineCode",{parentName:"td"},"JSONSchema"),". If not valid and if the ",(0,i.kt)("inlineCode",{parentName:"td"},"validation")," property is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the ",(0,i.kt)("inlineCode",{parentName:"td"},"onError")," callback will be called with a validation error.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uiSchema")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UISchema")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/ui-schema"},"UISchema")," used to modify how the data is rendered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"validation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Defined if to validate the ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," against the ",(0,i.kt)("inlineCode",{parentName:"td"},"schema"),". If the validation fails, the ",(0,i.kt)("inlineCode",{parentName:"td"},"onError")," callback will be called with a validation error.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointer")," is a ",(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc6901"},"JSONPointer")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," that defines what ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," part ",(0,i.kt)("inlineCode",{parentName:"td"},"AutoView")," should render. By default the ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," root is rendered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schemaPointer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schemaPointer")," is a ",(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc6901"},"JSONPointer")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," that defines what ",(0,i.kt)("inlineCode",{parentName:"td"},"schema")," part ",(0,i.kt)("inlineCode",{parentName:"td"},"AutoView")," should use for data rendering. By default the 'schema' root is used for rendering.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pick")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies an array of field names ",(0,i.kt)("strong",{parentName:"td"},"to render")," for ",(0,i.kt)("inlineCode",{parentName:"td"},"object")," types.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"omit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies an array of field names ",(0,i.kt)("strong",{parentName:"td"},"to not render")," for ",(0,i.kt)("inlineCode",{parentName:"td"},"object")," types.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onChange")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AutoEventHandler <AutoChangeEvent>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A data change event handler that components in the ",(0,i.kt)("inlineCode",{parentName:"td"},"ComponentsRepo")," can invoke with ",(0,i.kt)("inlineCode",{parentName:"td"},"JSONPatch")," over the ",(0,i.kt)("inlineCode",{parentName:"td"},"data"),". See also ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/events"},"Events"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onClick")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AutoEventHandler <AutoClickEvent>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A click event handler that components in the ",(0,i.kt)("inlineCode",{parentName:"td"},"ComponentsRepo")," can invoke with any ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," payload. See also ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/events"},"Events"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onError")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(error:ValidationError) => void")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Called when ",(0,i.kt)("inlineCode",{parentName:"td"},"validation")," is set and the ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," does not conform to the ",(0,i.kt)("inlineCode",{parentName:"td"},"schema"),". See also ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/events"},"Events"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onRenderError")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(error:ValidationError) => void")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Called if any child component throws an error during rendering. See also ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/events"},"Events"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onCustomEvent")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AutoEventHandler<AutoCustomEvent> ")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A Custom event with payload of ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," for custom usage by components and applications. See also ",(0,i.kt)("a",{parentName:"td",href:"/docs/entities/events"},"Events"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Metadata")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A Map of JSONShema pointer to ",(0,i.kt)("inlineCode",{parentName:"td"},"any")," payload that is passed to components. The utility ",(0,i.kt)("inlineCode",{parentName:"td"},"getComponentMetadata")," can be used to extract the metadata by the schema pointer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"repositoryName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Passed to the components - The repository name is the component is registered with.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"field")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Passed to the components - the field to be rendered.")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=c81e2c9d.893049e5.js.map