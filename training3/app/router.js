import EmberRouter from '@ember/routing/router';
import config from 'training3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('contact');
 
  this.route('plates', {path: '/plates'}, function(){
  });
  this.route('plate');
  this.route('view-plate', {path: '/plate/view/:id'});

});
