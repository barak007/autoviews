/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    mySidebar: [
        {
            type: 'doc',
            id: 'index'
        },
        {
            type: 'doc',
            id: 'basic/autoview'
        },
        {
            type: 'category',
            label: 'Autoviews Elements',
            collapsed: false,
            items: [
                'entities/components-repo',
                'entities/array-components',
                'entities/object-components',
                'entities/repository-provider',
                'entities/the-json-schema',
                'entities/ui-schema',
                'entities/events'
            ]
        },
        {
            type: 'category',
            label: 'utilities',
            collapsed: false,
            items: ['entities/repository-components']
        },
        {
            type: 'category',
            label: 'Subschemas',
            collapsed: false,
            items: [
                'subschemas/subschemas',
                'subschemas/conditions',
                'subschemas/combiners-oneof',
                'subschemas/combiners-ref'
            ]
        }
    ],
    examples: [
        {
            type: 'doc',
            id: 'examples'
        },
        {
            type: 'category',
            label: 'Examples',
            collapsed: false,
            items: [
                'examples/basic',
                'examples/showcase',
                'examples/onclick',
                'examples/switch-repo',
                'examples/table-with-header'
            ]
        }
    ]
};
