import Component from '@glimmer/component';
import config from  '../config/environment'; 

export default class AppImageComponent extends Component {

    get imageUrl(){
        console.log(this.args)
       return `${config.emberDataHost}/uploads/${this.args.src}/download`;
    }
}
