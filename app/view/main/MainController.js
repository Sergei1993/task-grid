Ext.define('TaskGrid.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main-controller',

    changeLoadFile: function (field) {
        var _this = this,
            file = field.el.down('input[type=file]').dom.files[0],
            charset = document.characterSet || document.inputEncoding,
            reader = new FileReader();

        field.el.down('input[type=file]').dom.value = '';
        reader.readAsText(file, charset);
        reader.onload = (function () {
            return function (e) {
                if (!Ext.isEmpty(e.target.error)) {
                    throw new Error('File not load');
                }
                var xmlDoc = _this.parseTextToXml(e.target.result);
                _this.xmlParseAndLoadGrid(xmlDoc);
            };
        })(file);
    },

    parseTextToXml: function (text){
        var xmlDoc;
        if (window.DOMParser) {
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, 'application/xml');
        } else {// code for old IE browsers
            xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = false;
            xmlDoc.loadXML(text);
        }
        if (this.isParseError(xmlDoc)) {
            var parseError = xmlDoc.getElementsByTagName('parsererror');
            Ext.Msg.alert('Error parsing XML', parseError[0].innerHTML);
            console.error(parseError);
            throw new Error('Error parsing XML');
        }
        return xmlDoc;
    },

    xmlParseAndLoadGrid: function (xml) {
        var storeDocument = Ext.create('Ext.data.Store', {
            model: 'TaskGrid.model.task.Document',
            data: xml,
            autoLoad: true,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'xml',
                    record: 'DOCUMENT'
                }
            }
        });

        var documentsRoot = this.getDocumentsRoot(storeDocument),
            documentStore = Ext.create('Ext.data.TreeStore', {
                root: documentsRoot
            });
        this.getViewModel().set('documentStore', documentStore)
    },

    getDocumentsRoot: function (documentStore) {
        var documents = documentStore.getRange(),
            documentsRoot = {
                children: []
            };
        for (var i = 0; i < documents.length; i++) {
            documentsRoot.children.push(documents[i].getData());

            var details = documents[i].detail().getRange();
            documentsRoot.children[i].children = [];
            for (var j = 0; j < details.length; j++) {
                documentsRoot.children[i].children.push(details[j].getData());

                var subDetails = details[j].subDetail().getRange();
                documentsRoot.children[i].children[j].children = [];
                for (var k = 0; k < subDetails.length; k++) {
                    documentsRoot.children[i].children[j].children.push(subDetails[k].getData());
                }
            }
        }
        return documentsRoot;
    },

    isParseError: function (parsedDocument) {
        var parser = new DOMParser(),
            errorneousParse = parser.parseFromString('<', 'application/xml'),
            parsererrorNS = errorneousParse.getElementsByTagName('parsererror')[0].namespaceURI;

        if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
            return parsedDocument.getElementsByTagName('parsererror').length > 0;
        }

        return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    }
});