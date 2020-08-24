Ext.define('TaskGrid.Application', {
    extend: 'Ext.app.Application',
    name: 'TaskGrid',
    requires: ['TaskGrid.*'],
    defaultToken: 'info-panel',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {

    }
});
