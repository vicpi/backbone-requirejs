define('app', ['requirements', 'app/routers/ABRouter', 'app/models/ABContactModel',
        'app/views/ContactAddView', 'app/views/ABContactListView',
        'app/views/ABContactSearchView', 'app/models/ABContactCollection',
        'app/routers/ContactController', 'app/routers/ContactAddEvents'], function () {

});

require(['app'], function() {

    $(function () {
        app.run();
    });
});
