import Model, {attr, hasMany, belongsTo} from '@ember-data/model';
import config from  '../config/environment'; 

export default class PlateModel extends Model {
    @attr title;
    @attr label;
    @attr comment;

    @belongsTo("file") attachment;
    @hasMany("plate") conjunctions;

    get imageUrl(){
        console.log('called');
        return `${config.emberDataHost}/uploads/${this.attachment?.id}/download`;
    }
}
