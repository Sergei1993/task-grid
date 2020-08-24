Ext.define('TaskGrid.model.task.SubDetail', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'idDoc',
            mapping: '@ID',
            type: 'int'
        },
        {
            name: 'caption',
            mapping: '@CAPTION',
            type: 'string'
        },
        {
            name: 'amount',
            mapping: '@AMOUNT',
            type: 'int'
        },
        {
            name: 'leaf',
            type: 'bool',
            defaultValue: true
        }
    ]

});
