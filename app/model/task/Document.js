Ext.define('TaskGrid.model.task.Document', {
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
            mapping: '@TOTAL_AMOUNT',
            type: 'int'
        },
        {
            name: 'expanded',
            type: 'bool',
            defaultValue: false
        },
        {
            name: 'isBold',
            type: 'bool',
            defaultValue: true
        }
    ],

    hasMany: [
        {
            model: 'TaskGrid.model.task.Detail',
            name: 'detail',
            reader: {
                type: 'xml',
                rootProperty: 'DOCUMENT',
                record: 'DETAIL'
            }
        }
    ]

});