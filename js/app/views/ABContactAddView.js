define(['requirements'], function () {
    AB.addView = Backbone.View.extend({
    el: 'div.abPanel',

    template: _.template($('#addContactTemplate').html()),

    events: {
        'submit form#frmAddContact': 'addContact'
    },

    initialize: function () {
        _.bindAll(this, 'addContactPage', 'addContact');
    },

    addContactPage: function (id) {
        var contact = {},
            model = AB.contactscollection.get(id);

        if (id !== undefined && model !== undefined) {
            contact = model.toJSON();
        }
        this.$el.html(this.template({contact: contact}));
    },

    addContact: function (event) {
        var full_name = $('#full_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

            var contactmodel = new AB.contactModel({
                full_name: full_name,
                email: email,
                phone: phone,
                address: address
            });
        //        contactmodel.save();
        var contactCollection = localStorage['contacts'];
        if (_.isUndefined(contactCollection)) {
            contactCollection = [];
        } else {
            contactCollection = JSON.parse(contactCollection);
        }
        contactCollection.push(contactmodel);
        localStorage['contacts'] = JSON.stringify(contactCollection);
        return false;
    }
});
});
