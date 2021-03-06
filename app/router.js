import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('job', function() {
		this.route('list', function() {
			this.route('info', {path: '/info/:id'});
		});
		this.route('create');
	});
});

export default Router;