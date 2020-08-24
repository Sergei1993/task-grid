Ext.define('TaskGrid.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-view-model',

    data: {
        name: 'TaskGrid'
    },

    stores: {
        documentStore: {
            type: 'task-store'
        }
    }
});