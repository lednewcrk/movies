import {Dimensions} from 'react-native';
import {GridLayoutProvider} from 'recyclerlistview-gridlayoutprovider';

import Theme from '@values/theme';

import {NUM_OF_COLUMNS} from './styles';

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
      () => deviceWidth * Theme.POSTER_ASPECT_RATIO,
    );
  }
}
