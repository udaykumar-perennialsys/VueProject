import mutation from './mutation'
import getters from "./getters"
import actions from "./actions";

export default {
  nameSpaced : true,
  state(){
    return {
      name : "uday kumar"
    }
  },
  mutation,
  getters,
  actions,
}
