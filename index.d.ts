declare module 'react-native-hsv-color-picker' {
  import React from 'react';
  import { StyleProp, ViewStyle } from 'react-native'

  type Props = {
    initialColor: string;
    onColorSelect: (color: string) => void;
    style?: StyleProp<ViewStyle>
  }

  export default class ColorPicker extends React.PureComponent<Props> {
    public getCurrentColor(): string;
  }
}
