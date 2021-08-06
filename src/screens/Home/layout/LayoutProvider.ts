import {Dimensions} from 'react-native';
import {DataProvider} from 'recyclerlistview';
import {GridLayoutProvider} from 'recyclerlistview-gridlayoutprovider';
import {ITEM_TYPE} from './types';

const MAX_SPAN = 3;
const ITEM_HEIGHT = Dimensions.get('window').height / 3;

export default class LayoutProvider extends GridLayoutProvider {
  constructor(props: DataProvider) {
    super(
      MAX_SPAN,
      index => {
        // Get layout type
        // const type = props.getDataForIndex(index).type;
        // return type
        return ITEM_TYPE.SPAN_1;
      },
      index => {
        // Get item span
        // const type = props.getDataForIndex(index).type;
        // switch (type) {
        //   case ITEM_TYPE.SPAN_1:
        //   default:
        //     return 1;
        // }
        return 1;
      },
      index => {
        // Get item height
        return ITEM_HEIGHT;
      },
    );
  }
}
