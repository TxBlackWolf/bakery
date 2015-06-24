import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['products'],
  actions: {
    createProduct: function () {
      var that = this;
      var product = this.store.createRecord("product", {
        title: this.get("title"),
        description: this.get("description"),
        batchSize: this.get("batchSize"),
        cost: this.get("cost")
      });
      product.save()
      var productsController = this.get('controllers.products')
      productsController.setProperties({
        viewing: true,
        editing: false,
        adding: false
      });
      this.setProperties({
        title: '',
        description: '',
        batchSize: '',
        cost: ''
      })
      this.transitionToRoute('products');
    }
  }
});
