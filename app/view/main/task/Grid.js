Ext.define('TaskGrid.view.main.task.Grid', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.task-tree-grid',

    width: '50%',
    rootVisible: false,

    tbar: [
        {
            xtype: 'fileuploadfield',
            buttonText: 'Загрузить файл',
            width: 120,
            buttonOnly: true,
            hideLabel: true,
            listeners: {
                change: 'changeLoadFile'
            }
        }
    ],

    columns: {
        defaults: {
            sortable: false
        },
        items: [
            {
                xtype: 'treecolumn',
                text: 'caption',
                dataIndex: 'caption',
                minWidth: 300,
                flex: 4
            },
            {
                xtype: 'numbercolumn',
                text: 'amount',
                dataIndex: 'amount',
                minWidth: 50,
                flex: 1
            }
        ]
    }
});
