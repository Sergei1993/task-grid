Ext.define('TaskGrid.view.main.TaskStore', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.task-store',

    model: 'TaskGrid.model.task.Document',

    root: {
        expanded: true,
        children: []
    }
});