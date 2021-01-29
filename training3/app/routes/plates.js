import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlatesRoute extends Route {
    @service store;

    async model() {
        const plates = await this.store.findAll('plate');
        plates.forEach(element => {
            element.hasMany('conjunctions').reload();
        });
        return plates;
    }
}
