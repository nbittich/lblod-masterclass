import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import config from  '../config/environment'; 

export default class PlateController extends Controller {
    @service store;
    @service router;

    file;
    isValid =false;

    @action
    async createRecord(e){
        e.preventDefault();
        if(this.file){
            const formData = new FormData();
            formData.append('file', this.file);
            const response = await fetch(config.emberDataHost+"/uploads", {
                method: 'POST',
                body: formData
            });
            const upload = await response.json();
            const uploadData = await this.store.findRecord('file', upload.data.id);
            this.model.attachment = uploadData;
            this.file = null;
        }
        await this.model.save();
        this.router.transitionTo('plates');

    }

    get plates(){
        return this.store.findAll('plate');
    }

    @action
    updateConjunctions(e){
       this.model.conjunctions = e;
    }

    @action
    setFile(e) {
        const reader = new FileReader();
        this.file = event.target.files[0];
        this.set('isValid', this.file === null);
    }

}
