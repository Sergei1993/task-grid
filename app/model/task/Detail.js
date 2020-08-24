Ext.define('TaskGrid.model.task.Detail', {
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
            name: 'expanded',
            type: 'bool',
            defaultValue: false
        }
    ],

    hasMany: [
        {
            model: 'TaskGrid.model.task.SubDetail',
            name: 'subDetail',
            reader: {
                type: 'xml',
                rootProperty: 'DETAIL',
                record: 'SUBDETAIL'
            }
        }
    ]
});
