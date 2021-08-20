import {Dimensions} from 'react-native';
import {GridLayoutProvider} from 'recyclerlistview-gridlayoutprovider';

import {NUM_OF_COLUMNS, ITEM_ASPECT_RATIO} from './styles';

export enum ViewTypes {
  ITEM,
}

const {width: deviceWidth} = Dimensions.get('window');
export default class LayoutProvider extends GridLayoutProvider {
  constructor() {
    super(
      NUM_OF_COLUMNS,
      () => ViewTypes.ITEM,
      () => 1,
      () => deviceWidth * ITEM_ASPECT_RATIO,
    );
  }
}
