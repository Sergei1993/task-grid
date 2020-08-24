Ext.define('TaskGrid.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'TaskGrid.view.main.MainController',
        'TaskGrid.view.main.MainModel'
    ],

    alias: 'widget.app-main',

    controller: 'main-controller',
    viewModel: 'main-view-model',

    items: [
        {
            xtype: 'task-tree-grid',
            bind: {
                store: '{documentStore}'
            }
        }
    ]
});
