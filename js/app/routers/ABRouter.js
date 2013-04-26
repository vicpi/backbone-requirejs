define(['requirements'], function () {
    AB.Router = Backbone.Router.extend({
        routes: {
            'list_contacts': 	'renderListContactsPage',
            'add_new_contact': 	'contactAddPage',
            'search_contacts': 	'renderSearchContactsPage',
            'edit_contact/:id': 'renderEditContactPage'
        },

        contactAddPage : function () {
            var contactController = new AB.ContactController();
            contactController.renderAddNewContactPage();
        },

        renderListContactsPage: function () {
            AB.listview.setElement('div.abPanel');
            AB.listview.listContactsPage();
        },

        renderSearchContactsPage: function () {
            AB.searchview.searchContactsPage();
        },

        renderEditContactPage: function (id) {
            AB.addview.addContactPage(id);
        }
    });
});
