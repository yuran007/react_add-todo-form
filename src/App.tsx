import React from 'react';
import { ColorsList } from './components/ColorsList';
import { AddColorForm } from './components/AddColorForm';

type Props = {};
type State = {
  colors: Color[];
};

export class App extends React.Component<Props, State> {
  state: State = {
    colors: [
      { id: 1, name: 'red' },
    ],
  };

  addColor = (color: Color) => {
    this.setState((currentState) => ({
      colors: [...currentState.colors, color],
    }));
  };

  removeColor = (colorId: number) => {
    // eslint-disable-next-line no-console
    console.log(`removed color with id ${colorId}`);
  };

  render() {
    const { colors } = this.state;

    return (
      <div>
        <h2>Colors list</h2>

        <AddColorForm
          addColor={this.addColor}
          colors={colors}
        />

        <ColorsList
          removeColor={this.removeColor}
          colors={colors}
        />
      </div>
    );
  }
}
