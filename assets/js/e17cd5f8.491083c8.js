"use strict";(self.webpackChunk_autoviews_website=self.webpackChunk_autoviews_website||[]).push([[491],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},i="Creating Object components",p={unversionedId:"entities/object-components",id:"entities/object-components",title:"Creating Object components",description:"AutoViews does not come with pre-made components to render objects (doing so will defeat the idea of",source:"@site/docs/entities/object-components.md",sourceDirName:"entities",slug:"/entities/object-components",permalink:"/autoviews/docs/entities/object-components",draft:!1,editUrl:"https://github.com/wix-incubator/autoviews/tree/master/website/docs/entities/object-components.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Creating Array components",permalink:"/autoviews/docs/entities/array-components"},next:{title:"The Repository Provider",permalink:"/autoviews/docs/entities/repository-provider"}},s={},l=[{value:"AutoFields",id:"autofields",level:2},{value:"<code>AutoFields</code> props",id:"autofields-props",level:3},{value:"the render function",id:"the-render-function",level:3},{value:"Example - simple form rendering",id:"example---simple-form-rendering",level:3},{value:"Example - rendering form for array objects",id:"example---rendering-form-for-array-objects",level:3},{value:"Example - using the render function to add field titles",id:"example---using-the-render-function-to-add-field-titles",level:3},{value:"Example - grouping different input fields using &#39;UISchema&#39;",id:"example---grouping-different-input-fields-using-uischema",level:3}],m={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-object-components"},"Creating Object components"),(0,o.kt)("p",null,"AutoViews does not come with pre-made components to render objects (doing so will defeat the idea of\nusing your own components). However, AutoViews provides utilities and APIs to create your own components\nto render objects."),(0,o.kt)("p",null,"The simplest object component will be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"new ComponentsRepo('ObjectRepo').register('object', {\n  name: 'obj',\n  component: props => <AutoFields {...props} />\n});\n")),(0,o.kt)("h2",{id:"autofields"},"AutoFields"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AutoFields")," is a utility element used to render the fields of an object.\nEach object field is matched with the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSONSchema")," fields by field names.\nInternally it apply ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoViews")," for each of the fields of the object."),(0,o.kt)("h3",{id:"autofields-props"},(0,o.kt)("inlineCode",{parentName:"h3"},"AutoFields")," props"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"extending ",(0,o.kt)("inlineCode",{parentName:"li"},"AutoViewProps")," - getting the same properties as ",(0,o.kt)("inlineCode",{parentName:"li"},"AutoViews")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"render")," - optional callback to apply to each of the rendered object fields")),(0,o.kt)("h3",{id:"the-render-function"},"the render function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function render(\n  item: React.ReactNode,\n  props: AutoViewProps,\n  key: string\n): React.ReactNode;\n")),(0,o.kt)("p",null,"The render callback parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"item")," - the rendered item, rendered using ",(0,o.kt)("inlineCode",{parentName:"li"},"AutoViews"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"props")," - the ",(0,o.kt)("inlineCode",{parentName:"li"},"AutoViewProps")," used to render the object field."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - the field name in the object")),(0,o.kt)("h3",{id:"example---simple-form-rendering"},"Example - simple form rendering"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"new ComponentsRepo('ObjectRepo')\n  .register('string', {\n    name: 'StringComponent',\n    component: props => <input value={props.value} />\n  })\n  .register('number', {\n    name: 'NumberComponent',\n    component: props => (\n      <input\n        value={props.value}\n        type=\"number\"\n      />\n    )\n  })\n  .register('object', {\n    name: 'FormComponent',\n    component: props => (\n      <form>\n        <AutoFields {...props} />\n      </form>\n    )\n  });\n")),(0,o.kt)("h3",{id:"example---rendering-form-for-array-objects"},"Example - rendering form for array objects"),(0,o.kt)("p",null,"This example shows how to render a form for an object which is a member of an array.\nTo do so, we need to specify to ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoFields")," which part of the schema to use\nto render the form, for instance for a new item form (new item to be added to the array)."),(0,o.kt)("p",null,"The example is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"extractItemUISchema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"createUISchema")," utility functions\nimported from ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoViews")," to extract the array items schema from the root schema\n(extract ",(0,o.kt)("inlineCode",{parentName:"p"},"userSchema")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"usersSchema"),")"),(0,o.kt)("p",null,"Such a form will be using such a component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"new ComponentsRepo('ObjectRepo')\n  .register('string', {\n    name: 'StringComponent',\n    component: props => <input value={props.value} />\n  })\n  .register('number', {\n    name: 'NumberComponent',\n    component: props => (\n      <input\n        value={props.value}\n        type=\"number\"\n      />\n    )\n  })\n  .register('object', {\n    name: 'FormComponent',\n    component: props => (\n      <form>\n        <AutoFields\n          {...props}\n          uiSchema={extractItemUISchema(props.uiSchema ?? createUISchema())}\n        />\n      </form>\n    )\n  });\n")),(0,o.kt)("p",null,"For reference, the schema used is something like the below schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const userSchema: CoreSchemaMetaSchema = {\n  $id: 'userSchema',\n  type: 'object',\n  properties: {\n    firstName: {\n      type: 'string',\n      title: 'First Name'\n    },\n    lastName: {\n      type: 'string',\n      title: 'Last Name'\n    },\n    age: {\n      type: 'number',\n      title: 'Age'\n    },\n    active: {\n      type: 'boolean',\n      title: 'Is User Active'\n    }\n  },\n  required: ['firstName', 'lastName', 'age']\n};\n\nexport const usersSchema: CoreSchemaMetaSchema = {\n  type: 'array',\n  title: 'Users',\n  items: userSchema\n};\n")),(0,o.kt)("h3",{id:"example---using-the-render-function-to-add-field-titles"},"Example - using the render function to add field titles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"new ComponentsRepo('ObjectRepo')\n  .register('string', {\n    name: 'StringComponent',\n    component: props => <input value={props.value} />\n  })\n  .register('number', {\n    name: 'NumberComponent',\n    component: props => (\n      <input\n        value={props.value}\n        type=\"number\"\n      />\n    )\n  })\n  .register('object', {\n    name: 'FormComponent',\n    component: props => (\n      <form>\n        <AutoFields\n          {...props}\n          render={node => (\n            <>\n              <span>{props.schema.title}</span>\n              node\n            </>\n          )}\n        />\n      </form>\n    )\n  });\n")),(0,o.kt)("h3",{id:"example---grouping-different-input-fields-using-uischema"},"Example - grouping different input fields using 'UISchema'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export const FormComponent = (props: AutoViewProps) => {\n  const itemUISchema = extractItemUISchema(props.uiSchema ?? createUISchema());\n  const UISchemaAcessor = createUISchemaAccessor(\n    itemUISchema,\n    '',\n    ACCESSOR_TYPES.object\n  );\n\n  const allProperties = Object.keys(props.schema.properties!);\n  const groups = UISchemaAcessor.getGroups() ?? [];\n  const groupNames = groups.map(({name}) => name).concat([UNGROUPED]);\n  return (\n    <form>\n      {groupNames.map(name => {\n        const fields = getPropertiesByGroupName(\n          groups,\n          name,\n          allProperties\n        ).filter(field => allProperties.includes(field));\n\n        if (!fields.length) return null;\n\n        return (\n          <div\n            className=\"group\"\n            key={name}\n          >\n            <AutoFields\n              {...props}\n              uiSchema={itemUISchema}\n              pick={fields}\n            />\n          </div>\n        );\n      })}\n    </form>\n  );\n};\n\nnew ComponentsRepo('ObjectRepo')\n  .register('string', {\n    name: 'StringComponent',\n    component: props => <input value={props.value} />\n  })\n  .register('number', {\n    name: 'NumberComponent',\n    component: props => (\n      <input\n        value={props.value}\n        type=\"number\"\n      />\n    )\n  })\n  .register('object', {\n    name: 'FormComponent',\n    component: FormComponent\n  });\n")),(0,o.kt)("p",null,"For reference, the above form can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"JSONSchema")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const userSchema: CoreSchemaMetaSchema = {\n  $id: 'userSchema',\n  type: 'object',\n  properties: {\n    firstName: {\n      type: 'string',\n      title: 'First Name'\n    },\n    lastName: {\n      type: 'string',\n      title: 'Last Name'\n    },\n    age: {\n      type: 'number',\n      title: 'Age'\n    },\n    active: {\n      type: 'boolean',\n      title: 'Is User Active'\n    }\n  },\n  required: ['firstName', 'lastName', 'age']\n};\n")),(0,o.kt)("p",null,"and the ",(0,o.kt)("inlineCode",{parentName:"p"},"UISchema")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export const hintsSchema: UISchema = {\n  hints: {\n    '/': {\n      order: ['age'],\n      uiGroups: [\n        {\n          name: 'personalData',\n          title: 'Personal Data',\n          fields: ['firstName', 'lastName']\n        },\n        {\n          name: 'other',\n          title: 'Other Fields',\n          fields: [OTHER_PROPERTIES]\n        }\n      ]\n    }\n  },\n  components: {}\n};\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=e17cd5f8.491083c8.js.map