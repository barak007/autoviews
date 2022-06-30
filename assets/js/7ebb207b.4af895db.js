"use strict";(self.webpackChunk_autoviews_website=self.webpackChunk_autoviews_website||[]).push([[687],{876:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,c=u["".concat(p,".").concat(h)]||u[h]||m[h]||a;return n?i.createElement(c,r(r({ref:t},d),{},{components:n})):i.createElement(c,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var i=n(7896),o=n(1461),a=(n(2784),n(876)),r=["components"],l={},p="UISchema",s={unversionedId:"entities/ui-schema",id:"entities/ui-schema",title:"UISchema",description:"The optional UISchema represents additional instructions for how AutoView is to render the data.",source:"@site/docs/entities/ui-schema.md",sourceDirName:"entities",slug:"/entities/ui-schema",permalink:"/autoviews/docs/entities/ui-schema",editUrl:"https://github.com/wix-incubator/autoviews/tree/master/packages/website/docs/entities/ui-schema.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"The JSON Schema",permalink:"/autoviews/docs/entities/the-json-schema"},next:{title:"Events",permalink:"/autoviews/docs/entities/events"}},d={},m=[{value:"Usage of <code>UISchema</code>",id:"usage-of-uischema",level:2},{value:"Properties of <code>UISchema</code>",id:"properties-of-uischema",level:2},{value:"the <code>components</code> overrides",id:"the-components-overrides",level:2},{value:"the getComponentOptions utility",id:"the-getcomponentoptions-utility",level:3},{value:"Example - component override and options",id:"example---component-override-and-options",level:3},{value:"The <code>hints</code> UI hint",id:"the-hints-ui-hint",level:2},{value:"Example - the <code>order</code> and <code>hidden</code> hints",id:"example---the-order-and-hidden-hints",level:3},{value:"Example - the <code>uiGroups</code> hint",id:"example---the-uigroups-hint",level:3},{value:"the <code>getHints</code> utility",id:"the-gethints-utility",level:2},{value:"Example - extract the order and hidden hints",id:"example---extract-the-order-and-hidden-hints",level:3}],u={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uischema"},"UISchema"),(0,a.kt)("p",null,"The optional ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema")," represents additional instructions for how ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoView")," is to render the data.\nIt is used to modify the rendered components, by selecting a specific component for a specific property,\nordering object properties or grouping properties."),(0,a.kt)("h2",{id:"usage-of-uischema"},"Usage of ",(0,a.kt)("inlineCode",{parentName:"h2"},"UISchema")),(0,a.kt)("p",null,"The best practice is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema")," allowing users to order or group fields or change which component to use for a field.\nIt can be used as a base for saving user setting views or as a way for applications to fine tune forms."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema")," is not the best tool to switch layouts (from gallery to cards to table) as it assumes all the components are available\nfor rendering. To switch layouts, ",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/components-repo#using-multiple-repositories"},"replacing a component repository")," is a better solution."),(0,a.kt)("h2",{id:"properties-of-uischema"},"Properties of ",(0,a.kt)("inlineCode",{parentName:"h2"},"UISchema")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UIHintsOverrides")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:null},"Hints to modify")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UIHints")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Hints to modify")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .order")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the desired order of the fields to be rendered for an ",(0,a.kt)("inlineCode",{parentName:"td"},"object"),". It is up to ",(0,a.kt)("a",{parentName:"td",href:"/docs/entities/object-components"},"the object component")," to use the order hints.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .hidden")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines which fields should be hidden. It is up to ",(0,a.kt)("a",{parentName:"td",href:"/docs/entities/object-components"},"the object component")," to use the hidden hints.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .uiGroups")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UIGroup[]")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines field groups. It is up to ",(0,a.kt)("a",{parentName:"td",href:"/docs/entities/object-components"},"the object component")," to support field groups.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .uiGroups.name")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the name of a fields group.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .uiGroups.title")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the title of a fields group.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .uiGroups.fields")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines which ",(0,a.kt)("inlineCode",{parentName:"td"},"object")," fields are included in the group.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hints[pointer:string] .autoFocus")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"JSONPointer")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Defines which component should be focused when first rendering the form. It is up to the components to implement support for Autofocus.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"components")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"RepoPointersCollection")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:null},"Defines component overrides and component options")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"components[name: string]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"RepoPointers")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Components Repository to apply the component hints to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"compoennts[name: string] [pointer: string]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ComponentOptions")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The location in the JSONSchema using JSONPointer to apply the component override")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"compoennts[name: string] [pointer: string].name")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the component to use at the above location, which has to be available in the above component repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"compoennts[name: string] [pointer: string].options")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Options to pass to the component at the above location")))),(0,a.kt)("h2",{id:"the-components-overrides"},"the ",(0,a.kt)("inlineCode",{parentName:"h2"},"components")," overrides"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema")," is responsible for component overrides -\ndefining which component ",(0,a.kt)("inlineCode",{parentName:"p"},"<AutoView/>")," should choose for a given field and what ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," this component should get."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"<AutoView/>")," picks last component record registered in ",(0,a.kt)("a",{parentName:"p",href:"docs/entities/components-repo#registering-multiple-components-per-jsonschema-data-type"},"the components repository")," for each type.\nWhen registering two (or more) components for a specific type, the last one will be used by default."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," overrides defines that for a specific ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6901"},"JSONPointer")," in the data ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONSchema"),"\na component with specific ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," should be chosen."),(0,a.kt)("h3",{id:"the-getcomponentoptions-utility"},"the getComponentOptions utility"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"getComponentOptions")," utility function enables a component to extract the component options from the ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema"),"."),(0,a.kt)("p",null,"In most cases, it will be used as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const myFunctionalComponent = props => {\n    let componentOptions  = getComponentOptions(\n        props.uiSchema!,\n        props.repositoryName,\n        props.schemaPointer\n    )\n    return (/*... the actual component */)\n}\n")),(0,a.kt)("h3",{id:"example---component-override-and-options"},"Example - component override and options"),(0,a.kt)("p",null,"In this example we show how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," overrides to render texts using one of three text components"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A styled text component, which gets the styles from the component options"),(0,a.kt)("li",{parentName:"ol"},"A header text component"),(0,a.kt)("li",{parentName:"ol"},"A Default paragraph component")),(0,a.kt)("p",null,"The example shows how to render"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," field using the header component"),(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"author")," field using the styled component, with blue text"),(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"content")," field using the paragraph component"),(0,a.kt)("li",{parentName:"ol"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," field using the styled component, with blue background and white text")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema")," to use is then"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const uiSchema: UISchema = {\n  components: {\n    MyRepo: {\n      title: {\n        name: 'headerText'\n      },\n      author: {\n        name: 'styledText',\n        options: {color: 'blue'}\n      },\n      status: {\n        name: 'styledText',\n        options: {color: 'white', backgroundColor: 'blue'}\n      }\n    }\n  }\n};\n")),(0,a.kt)("p",null,"Notice there is no need to define that the ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," field is using the ",(0,a.kt)("inlineCode",{parentName:"p"},"paragraphText")," as it is the default component for the ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,a.kt)("p",null,"Given the components repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const myRepo = new ComponentsRepo('MyRepo')\n  .register('string', {\n    name: 'styledText',\n    component: props => (\n      <span\n        style={getComponentOptions(\n          props.uiSchema!,\n          props.repositoryName,\n          props.schemaPointer\n        )}\n      >\n        {props.data}\n      </span>\n    )\n  })\n  .register('string', {\n    name: 'headerText',\n    component: props => <h1>{props.data}</h1>\n  })\n  .register('string', {\n    name: 'paragraphText',\n    component: props => <p>{props.data}</p>\n  });\n//... other components;\n")),(0,a.kt)("p",null,"And given the Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const postSchema: CoreSchemaMetaSchema = {\n  $id: 'post',\n  type: 'object',\n  properties: {\n    title: {\n      type: 'string',\n      title: 'Post Title'\n    },\n    author: {\n      type: 'string',\n      title: 'Author'\n    },\n    content: {\n      type: 'string',\n      title: 'The Full Comment'\n    },\n    status: {\n      type: 'string',\n      title: 'Approval Status'\n    }\n  }\n};\n")),(0,a.kt)("h2",{id:"the-hints-ui-hint"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"hints")," UI hint"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hints")," member of UI hints defines additional instructions that ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," components in ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentsRepo")," might implement.\nThe instructions, or hints, are field ordering, field hiding, grouping or autofocus."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hints")," UI hint defines that for a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONPointer")," in the data ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONSchema")," specific instructions should be applied."),(0,a.kt)("p",null,"The Hints can be applied in twp ways -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"without ui groups")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"order")," defines fields to be rendered in a specific order"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hidden")," defines fields to be hidden"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autofocus")," defines a field to be autofocused")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"with ui groups")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uiGroups")," defines a field group. Groups are to be rendered in the order defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uiGroup.name")," defines the group name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uiGroup.title")," defines the group title"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uiGroup.fields")," defines the fields of the group, to be rendered in the specified order")),(0,a.kt)("p",null,"When using groups, there are two 'special' keys - ",(0,a.kt)("inlineCode",{parentName:"p"},"OTHER_PROPERTIES")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UNGROUPED"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OTHER_PROPERTIES")," is a special 'field' key that signifies a named group includes all properties that are not included in any other group"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UNGROUPED")," is a special group that includes all properties that are not included in any other group")),(0,a.kt)("h3",{id:"example---the-order-and-hidden-hints"},"Example - the ",(0,a.kt)("inlineCode",{parentName:"h3"},"order")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"hidden")," hints"),(0,a.kt)("p",null,"This example shows how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden")," hints on the above ",(0,a.kt)("inlineCode",{parentName:"p"},"postSchema")," schema, to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"order the fields as ",(0,a.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"author"),"."),(0,a.kt)("li",{parentName:"ol"},"hide the ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," field.")),(0,a.kt)("p",null,"The UISchema in this case will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const uiSchema: UISchema = {\n  hints: {\n    '': {\n      order: ['title', 'content', 'author'],\n      hidden: ['status']\n    }\n  },\n  components: {\n    MyRepo: {\n      title: {\n        name: 'headerText'\n      },\n      author: {\n        name: 'styledText',\n        options: {color: 'blue'}\n      },\n      status: {\n        name: 'styledText',\n        options: {color: 'white', backgroundColor: 'blue'}\n      }\n    }\n  }\n};\n")),(0,a.kt)("p",null,"The repo ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," component has to support the ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," hints - see more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/object-components"},"creating object components"),".\nFor this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," component can be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const myRepo = new ComponentsRepo('MyRepo')\n  // ... other components\n  .register('object', {\n    name: 'MyObjectComponent',\n    component: props => <AutoFields {...props} />\n  });\n")),(0,a.kt)("h3",{id:"example---the-uigroups-hint"},"Example - the ",(0,a.kt)("inlineCode",{parentName:"h3"},"uiGroups")," hint"),(0,a.kt)("p",null,"This example shows how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiGroups")," hint to group fields:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"content")," fields as one group"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"author")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," fields as a second group.")),(0,a.kt)("p",null,"The example also shows how to build an ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," component that renders"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The groups separated with an ",(0,a.kt)("inlineCode",{parentName:"li"},"<hr/>")," line"),(0,a.kt)("li",{parentName:"ol"},"The groups with a ",(0,a.kt)("inlineCode",{parentName:"li"},"<h2>")," group title based on the group title field.")),(0,a.kt)("p",null,"The UISchema in this case will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const uiSchema: UISchema = {\n  hints: {\n    '': {\n      uiGroups: [\n        {\n          name: 'group 1',\n          title: 'The Post',\n          fields: ['title', 'content']\n        },\n        {\n          name: 'group 2',\n          title: 'The Post Metadata',\n          fields: ['author', 'status']\n        }\n      ]\n    }\n  },\n  components: {\n    MyRepo: {\n      title: {\n        name: 'headerText'\n      },\n      author: {\n        name: 'styledText',\n        options: {color: 'blue'}\n      },\n      status: {\n        name: 'styledText',\n        options: {color: 'white', backgroundColor: 'blue'}\n      }\n    }\n  }\n};\n")),(0,a.kt)("p",null,"and the ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," component will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const myRepo = new ComponentsRepo('MyRepo')\n  // ... other components\n  .register('object', {\n    name: 'MyObjectComponent',\n    component: props => {\n      const {uiGroups} = getHints(props.uiSchema, props.schemaPointer);\n\n      if (!uiGroups) {\n        return <AutoFields {...props} />;\n      }\n\n      return (\n        <>\n          {uiGroups.map(group => (\n            <>\n              <h2>{group.title}</h2>\n              <AutoFields\n                {...props}\n                pick={\n                  // this utility retrieves `OTHER_PROPERTIES` used in `UIGroups` as well\n                  getPropertiesByGroupName(\n                    uiGroups,\n                    group.name,\n                    Object.keys(props.data)\n                  )\n                }\n              />\n              <hr />\n            </>\n          ))}\n        </>\n      );\n    }\n  });\n")),(0,a.kt)("p",null,"With the above ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," component the example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"extracts the ",(0,a.kt)("inlineCode",{parentName:"li"},"uiGroups")," using the ",(0,a.kt)("inlineCode",{parentName:"li"},"getHints")," utility."),(0,a.kt)("li",{parentName:"ol"},"then for each group renders the ",(0,a.kt)("inlineCode",{parentName:"li"},"<h2>")," title."),(0,a.kt)("li",{parentName:"ol"},"using the ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoFields")," utility and the ",(0,a.kt)("inlineCode",{parentName:"li"},"pick")," property to only render the fields of that group.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"using the ",(0,a.kt)("inlineCode",{parentName:"li"},"getPropertiesByGroupName")," to get the field names of the group, taking into account the ",(0,a.kt)("inlineCode",{parentName:"li"},"OTHER_PROPERTIES")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"UNGROUPED")," keys.")))),(0,a.kt)("h2",{id:"the-gethints-utility"},"the ",(0,a.kt)("inlineCode",{parentName:"h2"},"getHints")," utility"),(0,a.kt)("p",null,"This example shows how to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden")," hints of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UISchema")," for the current object component to be rendered.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"getHints")," utility function lookups the hints given the current ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONPointer"),"."),(0,a.kt)("h3",{id:"example---extract-the-order-and-hidden-hints"},"Example - extract the order and hidden hints"),(0,a.kt)("p",null,"The following component will only render the list of hints, not the actual object data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const myRepo = new ComponentsRepo('MyRepo')\n  // ... other components\n  .register('object', {\n    name: 'MyObjectComponent',\n    component: props => {\n      return (\n        <>\n          <div>\n            order list is:\n            {' ' +\n              getHints(props.uiSchema, props.schemaPointer).order?.join(', ')}\n          </div>\n          <div>\n            hidden list is:\n            {' ' +\n              getHints(props.uiSchema, props.schemaPointer).hidden?.join(', ')}\n          </div>\n        </>\n      );\n    }\n  });\n")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=7ebb207b.4af895db.js.map