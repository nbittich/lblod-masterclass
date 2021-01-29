import { helper } from '@ember/component/helper';
import config from  '../config/environment'; 

export default helper(function imageHelper(params/*, hash*/) {
  console.log(params)
  return params;
});
