import React, { PureComponent } from 'react';
import './ColorPicker.css';

class ColorPicker extends PureComponent {
  state = {
    activeOptionsIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker_option'];

    if (index === this.state.activeOptionsIdx) {
      optionClasses.push('ColorPicker_option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionsIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionsIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker_title">Color Pickers</h2>
        <p>Selected color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
