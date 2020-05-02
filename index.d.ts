declare module 'react-native-hsv-color-picker' {
  import React from 'react';

  type Props = {
    initialColor: string;
    onColorSelect: (color: string) => void;
  }

  export default class ColorPicker extends React.PureComponent<Props> {
    public getCurrentColor(): string;
  }
}
