import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import config from  '../config/environment'; 

export default class PlatesController extends Controller {
    @service router;
    @tracked sort ='';
    @tracked title ='';

    @action
    newPlate(e){
        e.preventDefault();
        this.router.transitionTo('plate');
    }
    
    @action
    async delete(plate){
        await plate.destroyRecord();
    }

    @action
    downloadFile(attachment) {
        let url = `${config.emberDataHost}/uploads/${attachment.id}/download`;
        return fetch(url, {
          method: 'GET',
          headers: {
          }
        }).then((resp) =>{
          return resp.blob();
        }).then((blob) =>{
            const downloadLink = document.createElement('a');
            downloadLink.href= window.URL.createObjectURL(blob);
            downloadLink.setAttribute('download', attachment.name);
            downloadLink.click();
        });
      }


}
