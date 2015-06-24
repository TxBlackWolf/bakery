import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find("product");
  },
  renderTemplate: function () {
    this.render('new-product', {
      into: 'products',
      outlet: 'newProduct'
    });
  }
});