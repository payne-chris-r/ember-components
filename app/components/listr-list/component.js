import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      this.toggleProperty('listDetailHidden');
    },
    // toggleListDetail: function(){
    //
    // }
  }
});
