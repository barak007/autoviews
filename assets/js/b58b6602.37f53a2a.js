"use strict";(self.webpackChunk_autoviews_website=self.webpackChunk_autoviews_website||[]).push([[885],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,p=function(e,n){if(null==e)return{};var t,o,p={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(t),u=p,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return t?o.createElement(h,r(r({ref:n},s),{},{components:t})):o.createElement(h,r({ref:n},s))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,r=new Array(a);r[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var m=2;m<a;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=t(7462),p=(t(7294),t(3905));const a={},r="The Components Repository",i={unversionedId:"entities/components-repo",id:"entities/components-repo",title:"The Components Repository",description:"The component repository is a map of data type to AutoView React components used to render a field of that data type.",source:"@site/docs/entities/components-repo.md",sourceDirName:"entities",slug:"/entities/components-repo",permalink:"/autoviews/docs/entities/components-repo",draft:!1,editUrl:"https://github.com/wix-incubator/autoviews/tree/master/website/docs/entities/components-repo.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"The AutoView Component",permalink:"/autoviews/docs/basic/autoview"},next:{title:"Creating Array components",permalink:"/autoviews/docs/entities/array-components"}},l={},m=[{value:"Usage of the Component Repository",id:"usage-of-the-component-repository",level:2},{value:"The ComponentsRepo Class",id:"the-componentsrepo-class",level:2},{value:"Example - A simple repository example",id:"example---a-simple-repository-example",level:3},{value:"The register function",id:"the-register-function",level:2},{value:"The getNodeType constructor parameter",id:"the-getnodetype-constructor-parameter",level:2},{value:"Example - using <code>getNodeType</code> with JSONSchema enum",id:"example---using-getnodetype-with-jsonschema-enum",level:3},{value:"Example \u2014 Using custom JSONSchema types",id:"example--using-custom-jsonschema-types",level:3},{value:"Registering multiple components per JSONSchema data type",id:"registering-multiple-components-per-jsonschema-data-type",level:2},{value:"Predicates",id:"predicates",level:2},{value:"Example \u2014 selecting Slider component for numbers with min &amp; max constraints",id:"example--selecting-slider-component-for-numbers-with-min--max-constraints",level:3},{value:"Using Multiple Repositories",id:"using-multiple-repositories",level:2},{value:"Clone",id:"clone",level:2},{value:"Example - cloning a repo",id:"example---cloning-a-repo",level:3},{value:"addWrapper",id:"addwrapper",level:2},{value:"Example - wrapping all components with adding a title",id:"example---wrapping-all-components-with-adding-a-title",level:3},{value:"Example - wrapping all components with a table cell",id:"example---wrapping-all-components-with-a-table-cell",level:3},{value:"Example \u2014 wrapping only &#39;number-input&#39; component",id:"example--wrapping-only-number-input-component",level:3},{value:"Example \u2014 wrapping all components except &#39;number-input&#39;",id:"example--wrapping-all-components-except-number-input",level:3},{value:"remove",id:"remove",level:2},{value:"Example - remove a component from the repo",id:"example---remove-a-component-from-the-repo",level:3},{value:"replace",id:"replace",level:2},{value:"Example - replacing a single component",id:"example---replacing-a-single-component",level:3},{value:"replaceAll",id:"replaceall",level:2},{value:"Example - replacing multiple components",id:"example---replacing-multiple-components",level:3},{value:"composeRepos",id:"composerepos",level:2},{value:"Example - creating a new component repo from 2 repos",id:"example---creating-a-new-component-repo-from-2-repos",level:3}],s={toc:m};function c(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"the-components-repository"},"The Components Repository"),(0,p.kt)("p",null,"The component repository is a map of data type to AutoView React components used to render a field of that data type."),(0,p.kt)("p",null,"In essence, the component repository is a map of"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"Map<type => React.ComponentType<AutoViewProps>>\n")),(0,p.kt)("p",null,"An AutoView React Component has the signature"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"React.ComponentType<AutoViewProps>\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"AutoViewProps")," has a lot of properties, but the most important is the ",(0,p.kt)("inlineCode",{parentName:"p"},"data")," prop which is the field data the component has to render."),(0,p.kt)("h2",{id:"usage-of-the-component-repository"},"Usage of the Component Repository"),(0,p.kt)("p",null,"The main use of the component repository to provide ",(0,p.kt)("inlineCode",{parentName:"p"},"AutoView")," a set of component to render for different\ndata types."),(0,p.kt)("p",null,"One common pattern is to replace views by replacing the Component Repository with another, for instance\nshifting from a single column layout to a dual column layout, or from a Card layout to a Table layout."),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentsRepo")," class provides function to create, clone, modify or apply aspects (wrap) on the Components Repository."),(0,p.kt)("h2",{id:"the-componentsrepo-class"},"The ComponentsRepo Class"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentsRepo")," is the main implementation of the Component Repository.\nIt takes two parameters"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"name"),": Repository name"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"getNodeType"),": the callback that resolves the ",(0,p.kt)("inlineCode",{parentName:"li"},"type")," from the ",(0,p.kt)("inlineCode",{parentName:"li"},"JSONSchema")," leaf (more on the callback below)")),(0,p.kt)("h3",{id:"example---a-simple-repository-example"},"Example - A simple repository example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ComponentsRepo} from '@autoviews/core';\n\nexport const myRepo = new ComponentsRepo('displayRepo')\n  .register('string', {\n    name: 'textComponent',\n    component: props => <span>{props.data}</span>\n  })\n  .register('number', {\n    name: 'numberComponent',\n    component: props => <span>{props.data}</span>\n  })\n  .register('boolean', {\n    name: 'booleanComponent',\n    component: props => <span>{props.data ? '+' : '-'}</span>\n  });\n")),(0,p.kt)("h2",{id:"the-register-function"},"The register function"),(0,p.kt)("p",null,"The repository register function adds a new component to the repository per data type."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"register(type: string | symbol,\n  record: ComponentRepoRecord<AutoViewProps>)\n\nexport interface ComponentRepoRecord<P> {\n    name: string;\n    component: React.ComponentType<P>;\n    predicate?: Predicate;\n}\n")),(0,p.kt)("p",null,"Where"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"type"),": the name of the ",(0,p.kt)("inlineCode",{parentName:"li"},"JSONSchema"),"'s type, such as ",(0,p.kt)("inlineCode",{parentName:"li"},'"string"'),", ",(0,p.kt)("inlineCode",{parentName:"li"},'"object"'),", ",(0,p.kt)("inlineCode",{parentName:"li"},'"number"'),", or a ",(0,p.kt)("inlineCode",{parentName:"li"},"Symbol")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"record"),": the repository record, which provides information on the registered component",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"name"),": the name of component within the repository, for later reference"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"component"),": the actual component"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"predicate"),": a predicate computed on the schema field, if to use the component for that schema member")))),(0,p.kt)("h2",{id:"the-getnodetype-constructor-parameter"},"The getNodeType constructor parameter"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"getNodeType")," callback allows defining how to calculate data type for the JSONSchema nodes. The return value of the callback is used to match with registered component record types."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getNodeType: (node: CoreSchemaMetaSchema) => (string = node => node.type);\n")),(0,p.kt)("p",null,"The default ",(0,p.kt)("inlineCode",{parentName:"p"},"getNodeType")," implementation returns the type field of the JSONSchema node. ",(0,p.kt)("inlineCode",{parentName:"p"},"getNodeType")," can return any string value, which can be used to extract any mapping of JSON Schema nodes to type name."),(0,p.kt)("h3",{id:"example---using-getnodetype-with-jsonschema-enum"},"Example - using ",(0,p.kt)("inlineCode",{parentName:"h3"},"getNodeType")," with JSONSchema enum"),(0,p.kt)("p",null,"One example of when ",(0,p.kt)("inlineCode",{parentName:"p"},"getNodeType")," is useful is with JSONSchema enums. JSONSchema does not define an Enum type, rather it considers enum as a constraint on other types."),(0,p.kt)("p",null,"The JSONSchema enum is defined as"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "enum": ["red", "amber", "green"]\n}\n')),(0,p.kt)("p",null,"The following defining the ",(0,p.kt)("inlineCode",{parentName:"p"},"getNodeType")," maps the enum JSON node into enum type name"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const myRepo = new ComponentsRepo('myRepo', node =>\n  'enum' in node ? 'enum' : node.type\n);\nmyRepo.register('enum', {\n  name: 'select',\n  component: SelectComponent\n});\n")),(0,p.kt)("h3",{id:"example--using-custom-jsonschema-types"},"Example \u2014 Using custom JSONSchema types"),(0,p.kt)("p",null,"Let\u2019s assume we have a custom type name on the JSONSchema called ",(0,p.kt)("inlineCode",{parentName:"p"},"myCustomType"),". We can support it like the below example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const myRepo = new ComponentsRepo('myRepo', node => node.myCustomType);\nmyRepo.register('user', {\n  name: 'user-card',\n  component: UserCardComponent\n});\n")),(0,p.kt)("h2",{id:"registering-multiple-components-per-jsonschema-data-type"},"Registering multiple components per JSONSchema data type"),(0,p.kt)("p",null,"Multiple components can be registered for the same data type. When registering multiple components, by default, the last registered component will be selected."),(0,p.kt)("p",null,"Registering multiple components allows selecting components using predicates or ",(0,p.kt)("a",{parentName:"p",href:"/docs/entities/ui-schema"},"UISchema"),"."),(0,p.kt)("p",null,"Predicates are used when the condition is computed on the JSONSchema, such as ",(0,p.kt)("inlineCode",{parentName:"p"},"maxLength"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"maximum")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"required"),". A concrete example is selecting the Slider component when a number has ",(0,p.kt)("inlineCode",{parentName:"p"},"maximum")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"minimum")," constraints."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"UISchema")," is used when we want to select a specific component or pass properties to the component on a specific JSONSchema path (",(0,p.kt)("inlineCode",{parentName:"p"},"JSONPointer"),")."),(0,p.kt)("h2",{id:"predicates"},"Predicates"),(0,p.kt)("p",null,"Predicates are functions defined when registering a component, defining when to use the component based on the JSONSchema and Component's props."),(0,p.kt)("p",null,"If predicates returns ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," ",(0,p.kt)("strong",{parentName:"p"},"and")," the current component is the ",(0,p.kt)("strong",{parentName:"p"},"latest")," registred component, it will be used by ",(0,p.kt)("inlineCode",{parentName:"p"},"AutoViews")," (conidering there is no override in ",(0,p.kt)("a",{parentName:"p",href:"/docs/entities/ui-schema#the-components-overrides"},"UISchema.components"),")."),(0,p.kt)("p",null,"The idea of Predicates is to target special cases only, when you registring components for the same type multiple times."),(0,p.kt)("admonition",{type:"caution"},(0,p.kt)("p",{parentName:"admonition"},"If you register component without predicate after the one with predicate, component without predicate will be choosen (because it is latest), even if predicate returns ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,p.kt)("p",null,"The Predicate signature is"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Predicate = (\n  node: CoreSchemaMetaSchema,\n  props?: AutoViewProps,\n  ...rest: any[]\n) => boolean;\n")),(0,p.kt)("p",null,"Where"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"node: is the JSONSchema node the component is considered for"),(0,p.kt)("li",{parentName:"ul"},"props: is the same ",(0,p.kt)("inlineCode",{parentName:"li"},"AutoViewProps")," object which current component has")),(0,p.kt)("h3",{id:"example--selecting-slider-component-for-numbers-with-min--max-constraints"},"Example \u2014 selecting Slider component for numbers with min & max constraints"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"myRepo.register(\n    'number',\n    {\n        name: 'slider',\n        component: Slider,\n        predicate: node =>\n            node.hasOwnProperty('minimum') && node.hasOwnProperty('maximum');\n    }\n);\n")),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"node")," in the example above is the current JSONSchema node for the Slider component. In this example the predicate applies the Slider component only for number type JSONSchema nodes that have defined the minimum and maximum constraints."),(0,p.kt)("h2",{id:"using-multiple-repositories"},"Using Multiple Repositories"),(0,p.kt)("p",null,"In many applications we want to have multiple component repositories."),(0,p.kt)("p",null,"The best example is when we want to render different layouts (such as card, table, grid or different form layouts) at which each we want to have different sets of components. In such a case it makes sense to use multiple component repositories, which gives us a few features:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Change layout by changing repository."),(0,p.kt)("li",{parentName:"ul"},"Partial loading \u2014 loading one repository at a time.")),(0,p.kt)("h2",{id:"clone"},"Clone"),(0,p.kt)("p",null,"The clone function allows to deep copy a repo including all the components. Repository cloning is useful when in need of multiple repositories, for creating a base repository which is cloned and extended, by adding more components, replacing components or adding wrappers."),(0,p.kt)("p",null,"Once cloning a repository, any additional action on the cloned repository do not affect the base repository, including adding wrappers (",(0,p.kt)("inlineCode",{parentName:"p"},"addWrapper"),"), removing components (",(0,p.kt)("inlineCode",{parentName:"p"},"remove"),") or replacing components (",(0,p.kt)("inlineCode",{parentName:"p"},"replace")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"replaceAll"),")."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"clone(name: string, getNodeType?: GetNode)\n")),(0,p.kt)("h3",{id:"example---cloning-a-repo"},"Example - cloning a repo"),(0,p.kt)("p",null,"Cloning the ",(0,p.kt)("inlineCode",{parentName:"p"},"myRepo")," defined above"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const myRepoClone = myRepo.clone('myRepoClone');\n")),(0,p.kt)("h2",{id:"addwrapper"},"addWrapper"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"addWrapper")," allows wrapping all or some of the components of a repository with another React component."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"addWrapper")," is very useful when combined with ",(0,p.kt)("inlineCode",{parentName:"p"},"clone")," as it allows extending a base repository"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"addWrapper(fn: WrapperFunction, rules?: IncludeExcludeRules)\n\nexport type WrapperFunction = (\n    item: JSX.Element,\n    props: AutoViewProps\n) => JSX.Element;\n\nexport interface IncludeExcludeRules {\n    include?: string[];\n    exclude?: string[];\n}\n")),(0,p.kt)("p",null,"Where"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"fn"),": the wrapper function, which accepts",(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"item"),": the original React component"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"props"),": the ",(0,p.kt)("inlineCode",{parentName:"li"},"AutoViewProps")," at the schema location"),(0,p.kt)("li",{parentName:"ul"},"Returns: the wrapped component"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"rules"),": ",(0,p.kt)("inlineCode",{parentName:"li"},"include")," and ",(0,p.kt)("inlineCode",{parentName:"li"},"exclude")," rules for what types to wrap, by the component name as defined when registering the component")),(0,p.kt)("h3",{id:"example---wrapping-all-components-with-adding-a-title"},"Example - wrapping all components with adding a title"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"myRepoClone.addWrapper(\n  (item: JSX.Element, props: AutoViewProps): JSX.Element => (\n    <>\n      <h3>{props.schema.title}</h3>\n      {item}\n    </>\n  )\n);\n")),(0,p.kt)("h3",{id:"example---wrapping-all-components-with-a-table-cell"},"Example - wrapping all components with a table cell"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"myRepoClone.addWrapper(\n  (item: JSX.Element, props: AutoViewProps): JSX.Element => <td>{item}<td/>\n);\n")),(0,p.kt)("h3",{id:"example--wrapping-only-number-input-component"},"Example \u2014 wrapping only 'number-input' component"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"myRepo.addWrapper(\n  (item, props) => (\n    <>\n      <h3>{props.schema.title}</h3>\n      {item}\n    </>\n  ),\n  {\n    include: ['number-input']\n  }\n);\n")),(0,p.kt)("h3",{id:"example--wrapping-all-components-except-number-input"},"Example \u2014 wrapping all components except 'number-input'"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"myRepo.addWrapper(\n  (item, props) => (\n    <>\n      <h3>{props.schema.title}</h3>\n      {item}\n    </>\n  ),\n  {\n    exclude: ['number-input']\n  }\n);\n")),(0,p.kt)("h2",{id:"remove"},"remove"),(0,p.kt)("p",null,"Removes previously registered component from the component repository by component name."),(0,p.kt)("h3",{id:"example---remove-a-component-from-the-repo"},"Example - remove a component from the repo"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"myRepo.register('string', {\n  name: 'string-component',\n  component: SomeComponent\n});\n//...\nmyRepo.remove('string-component');\n")),(0,p.kt)("h2",{id:"replace"},"replace"),(0,p.kt)("p",null,"Replace a previously registered component by component name."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"replace")," ensures that the new component will have the same index (order) as the old one. It is important because by default ",(0,p.kt)("inlineCode",{parentName:"p"},"<AutoView />")," picks the last registered component in ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentsRepo"),"."),(0,p.kt)("h3",{id:"example---replacing-a-single-component"},"Example - replacing a single component"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"myRepo.register('number', {\n  name: 'number-input',\n  component: OldComponent\n});\n\nrepo.replace('MyNumberComponent', oldRecord => ({\n  ...oldRecord,\n  component: NewComponent\n}));\n")),(0,p.kt)("h2",{id:"replaceall"},"replaceAll"),(0,p.kt)("p",null,"Replace all enables replacing multiple existing components with a given component. It is useful for replacing original components with higher order components."),(0,p.kt)("p",null,"Similar to ",(0,p.kt)("inlineCode",{parentName:"p"},"addWrapper"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"replaceAll")," method allows defining ",(0,p.kt)("inlineCode",{parentName:"p"},"include")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"exclude")," options (array of component names)."),(0,p.kt)("h3",{id:"example---replacing-multiple-components"},"Example - replacing multiple components"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"repo.replaceAll(\n  record => {\n    const OriginalComponent = record.component;\n    return {\n      ...record,\n      component: props => <OriginalComponent {...doSomethingWithProps(props)} />\n    };\n  },\n  {\n    include: ['number-input', 'text-input']\n  }\n);\n")),(0,p.kt)("h2",{id:"composerepos"},"composeRepos"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"composeRepos")," utility creates a new repository by composing multiple repositories into one.\nThe utility is not a member of the ",(0,p.kt)("inlineCode",{parentName:"p"},"ComponentsRepo"),", rather it is imported independently."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function composeRepos(\n  config: {\n    name: string;\n    getNodeType?: GetNode;\n  },\n  ...repos: [ComponentsRepo, ...ComponentsRepo[]]\n): ComponentsRepo;\n")),(0,p.kt)("h3",{id:"example---creating-a-new-component-repo-from-2-repos"},"Example - creating a new component repo from 2 repos"),(0,p.kt)("p",null,"With this example we assume we have two component repos, ",(0,p.kt)("inlineCode",{parentName:"p"},"formLayoutRepo")," for our form layout components and\n",(0,p.kt)("inlineCode",{parentName:"p"},"inputsRepo")," for input components. We create a new repo by"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import {composeRepos} from '@autoviews/core';\n\nconst newRepo = composeRepos(\n  {name: 'RepoToRenderForms'},\n  formLayoutRepo,\n  inputsRepo\n);\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=b58b6602.37f53a2a.js.map