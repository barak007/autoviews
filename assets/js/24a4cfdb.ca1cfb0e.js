"use strict";(self.webpackChunk_autoviews_website=self.webpackChunk_autoviews_website||[]).push([[668],{7947:(e,n,t)=>{t.d(n,{B:()=>p});var o=t(7294),a=t(7219),r=t(2949);const s={"@autoviews/core":"latest"};function p(e){const{colorMode:n}=(0,r.I)();return o.createElement(a.xR,{theme:n,template:"react-ts",customSetup:{files:e.files,dependencies:{...s,...e.dependencies}},options:{showNavigator:!0,editorHeight:500,externalResources:["https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"],...e.options}})}},1612:(e,n,t)=>{t.r(n),t.d(n,{dependencies:()=>a,files:()=>o,options:()=>r});const o={"/App.tsx":"import React from 'react';\nimport {\n    RepositoryProvider,\n    AutoView,\n    CoreSchemaMetaSchema\n} from '@autoviews/core';\n\nimport {data} from './data';\nimport schema from './schema.json';\nimport {repo} from './repo';\nimport {userUISchema} from './UISchema';\n\nexport default function App() {\n    return (\n        <RepositoryProvider components={repo}>\n            <AutoView\n                schema={schema as CoreSchemaMetaSchema}\n                data={data}\n                uiSchema={userUISchema}\n            />\n        </RepositoryProvider>\n    );\n}\n","/repo.tsx":"import React from 'react';\nimport {\n    ComponentsRepo,\n    AutoFields,\n    AutoItems,\n    AutoHeaders\n} from '@autoviews/core';\nimport {\n    Table,\n    TableContainer,\n    Paper,\n    TableHead,\n    TableRow,\n    TableCell,\n    TableBody\n} from '@mui/material';\n\nexport const repo = new ComponentsRepo('MyTableRepo')\n    .register('array', {\n        name: 'MyTableComponent',\n        component: props => {\n            return (\n                <TableContainer\n                    component={Paper}\n                    sx={{margin: '10px'}}\n                >\n                    <Table>\n                        <TableHead>\n                            <TableRow>\n                                <AutoHeaders\n                                    {...props}\n                                    path=\"/items\"\n                                >\n                                    {headerProps => (\n                                        <AutoItems {...headerProps} />\n                                    )}\n                                </AutoHeaders>\n                            </TableRow>\n                        </TableHead>\n                        <TableBody>\n                            <AutoItems {...props} />\n                        </TableBody>\n                    </Table>\n                </TableContainer>\n            );\n        }\n    })\n    .register('object', {\n        name: 'MyTableRow',\n        component: props => (\n            <TableRow>\n                <AutoFields {...props} />\n            </TableRow>\n        )\n    })\n    .register('string', {\n        name: 'MyStringComponent',\n        component: props => <span>{props.data}</span>\n    })\n    .register('number', {\n        name: 'MyNumberComponent',\n        component: props => <span>{props.data}</span>\n    })\n    .register('boolean', {\n        name: 'MyBooleanComponent',\n        component: props => {\n            const isOnline = props.data;\n            return (\n                <span style={{color: isOnline ? 'green' : 'red'}}>\n                    {isOnline ? 'online' : 'offline'}\n                </span>\n            );\n        }\n    })\n    .addWrapper(item => <TableCell>{item}</TableCell>, {\n        include: [\n            'MyStringComponent',\n            'MyBooleanComponent',\n            'MyNumberComponent'\n        ]\n    });\n","/schema.json":'{\n  "type": "array",\n  "items": {\n    "type": "object",\n    "properties": {\n      "login": {\n        "type": "string",\n        "title": "User Login"\n      },\n      "age": {\n        "type": "number",\n        "title": "Age"\n      },\n      "active": {\n        "type": "boolean",\n        "title": "Status"\n      }\n    }\n  }\n}\n',"/data.ts":"export const data = [\n    {\n        login: 'johondoe',\n        age: 21,\n        active: true\n    },\n    {\n        login: 'janedoe',\n        age: 20,\n        active: false\n    }\n];\n","/UISchema.ts":"import {createUISchema, UISchema} from '@autoviews/core';\n\nexport const userUISchema: UISchema = createUISchema(\n    {},\n    {\n        '/items': {\n            order: ['active', 'login', 'age']\n        }\n    }\n);\n"},a={"@mui/material":"^5.3.1","@emotion/react":"^11.7.1","@emotion/styled":"^11.6.0"},r={activePath:"/App.tsx"}},9540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var o=t(7462),a=(t(7294),t(3905)),r=t(7947),s=t(1612);const p={},i="AutoHeaders usage",m={unversionedId:"examples/table-with-header",id:"examples/table-with-header",title:"AutoHeaders usage",description:"This is the example of using AutoHeaders component to render table with headers.",source:"@site/docs/examples/table-with-header.md",sourceDirName:"examples",slug:"/examples/table-with-header",permalink:"/autoviews/docs/examples/table-with-header",draft:!1,editUrl:"https://github.com/wix-incubator/autoviews/tree/master/website/docs/examples/table-with-header.md",tags:[],version:"current",frontMatter:{},sidebar:"examples",previous:{title:"Switch ComponentsRepo",permalink:"/autoviews/docs/examples/switch-repo"}},l={},c=[],d={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"autoheaders-usage"},"AutoHeaders usage"),(0,a.kt)("p",null,"This is the example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoHeaders")," component to render table with headers.\n",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/array-components"},"Here read more")," about creating array components."),(0,a.kt)(r.B,(0,o.Z)({},s,{mdxType:"Demo"})))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=24a4cfdb.ca1cfb0e.js.map