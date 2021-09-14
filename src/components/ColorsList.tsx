import React from 'react';

type Props = {
  colors: Color[];
  removeColor: (colorId: number) => void;
};

export const ColorsList: React.FC<Props> = (props) => {
  const { colors, removeColor } = props;

  return (
    <div>
      {colors.map((color) => (
        <div key={color.id}>
          <span>{`${color.id}. ${color.name}`}</span>
          <button
            type="button"
            onClick={() => removeColor(color.id)}
            style={{ marginLeft: 5 }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};
