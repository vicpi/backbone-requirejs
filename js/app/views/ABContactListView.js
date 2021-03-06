define(['requirements'], function () {
    app.listView = Backbone.View.extend({
        el: 'div.abPanel',

        template: _.template($('#listContactsTemplate').html()),

        initialize: function () {
            _.bindAll(this, 'listContactsPage', 'render');
        },

        render: function (response) {
            var self = this;

            this.$el.html(this.template({contacts: response}));
            $('#contactsGrid tr[data-id]').each(function () {
                var id = $(this).attr('data-id');
                $(this).find('a:first').click(function () {
                    self.editContact(id);
                });
                $(this).find('a:last').click(function () {
                    self.deleteContact(id);
                });
            });
        },

        listContactsPage: function (querystring) {
            var self = this;

            app.contactscollection.fetch({
                data: querystring,
                success: function (collection, response) {
                    self.render(response);
                }
            });
        },

        deleteContact: function (id) {
            if (confirm('Are you sure to delete?')) {
                app.contactscollection.get(id).destroy();
            }
        },

        editContact: function (id) {
            app.router.navigate('edit_contact/' + id, {trigger: true});
        }
    });
});