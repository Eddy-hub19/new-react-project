import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button type="button" onClick={this.toggle} onMouseOver={this.togle}>
          {visible ? 'hide' : 'show'}
        </button>

        {visible && (
          <ul className="DropdownMenu">
            Выпадающее меню
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
