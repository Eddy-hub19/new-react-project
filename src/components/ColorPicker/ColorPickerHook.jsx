//edf
import { useState } from 'react';
import { css } from './ColorPicker.module.css';
export default function ColorPickerHook({ options }) {
  const [activeOptionsIdx, setActiveOptionsIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionsIdx ? css.activeOption : css.option;
  };

  const { label } = options[activeOptionsIdx];

  return (
    <div className={css.ColorPicker}>
      <h2 className={css.ColorPicker_title}>Color Pickers</h2>
      <p>Selected color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionsIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
