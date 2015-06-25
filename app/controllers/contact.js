import Ember from 'ember';


export default Ember.Controller.extend({
  needs: ['products'],
  actions: {
    addContact: function() {
      var newContact = this.store.createRecord('contact', {
        businessName: this.get('businessName'),
        emailAddress: this.get('emailAddress'),
        //products: this.get('')
        streetAddress: this.get('streetAddress'),
        city: this.get('city'),
        state: this.get('state'),
        zip: this.get('zip'),
        phone: this.get('phone'),
      });

      var api_key = "AIzaSyBYLnE6A_CVHUO1RouMjmuBiMs4ZLQC2ZE";
      var addressNoSpace = this.get('streetAddress').replace(/\s/g, '');
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressNoSpace + this.get('city') + this.get('state') + this.get('zip') + '&key=' + api_key;
      var latlng = function () {
        return Ember.$.getJSON(url).then(function(responseJSON) {
          var lat = responseJSON.results[0].geometry.location.lat;
          var lng = responseJSON.results[0].geometry.location.lng;

          newContact.setProperties({
            lat: lat,
            lng: lng
          });
          newContact.save();
          return [lat, lng];
        });
      }();

      this.setProperties({
        businessName: " ",
        emailAddress: " ",
        streetAddress: " ",
        city: " ",
        state: " ",
        zip: " ",
        phone: " "
      });
      this.transitionToRoute('products');
    }
  }
});
