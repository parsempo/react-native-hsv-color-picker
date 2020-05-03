import React, { createRef } from 'react';
import { View } from 'react-native';
import HsvColorPicker from './HsvColorPicker';
import chroma from 'chroma-js';

export default class ColorPicker extends React.PureComponent {
  constructor(props) {
    super(props);

    const { initialColor } = props;
    if (initialColor) {
      const hsvValue = chroma(initialColor).hsv();
      this.state = {
        hue: hsvValue[0] || 0,
        sat: hsvValue[1],
        val: hsvValue[2],
      }
    }else {
      this.state = {
        hue: 0,
        sat: 0,
        val: 1,
      }
    }
  }

  picker = createRef();

  render() {
    const { hue, sat, val } = this.state;
    const { style } = this.props;
    return (
      <View style={style}>
        <HsvColorPicker
          ref={this.picker}
          huePickerHue={hue}
          onHuePickerDragMove={this.onHuePickerChange}
          onHuePickerPress={this.onHuePickerChange}
          satValPickerHue={hue}
          satValPickerSaturation={sat}
          satValPickerValue={val}
          onSatValPickerDragMove={this.onSatValPickerChange}
          onSatValPickerPress={this.onSatValPickerChange}
        />
      </View>
    );
  }

  getCurrentColor = () => {
    return this.picker.current.getCurrentColor();
  }

  onSatValPickerChange = ({ saturation, value }) => {
    this.setState({
      sat: saturation,
      val: value,
    }, () => this.props.onColorSelect(this.getCurrentColor()));
  }

  onHuePickerChange = ({ hue }) => {
    this.setState({
      hue,
    }, () => this.props.onColorSelect(this.getCurrentColor()));
  }
}
