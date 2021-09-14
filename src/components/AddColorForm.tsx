import React from 'react';

type Props = {
  colors: Color[];
  addColor: (color: Color) => void;
};

type State = {
  color: string;
};

export class AddColorForm extends React.Component<Props, State> {
  latestId = Math.max(...this.props.colors.map((c) => c.id)) + 1;

  state: State = {
    color: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: event.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { color } = this.state;

    const newColor: Color = {
      id: this.latestId,
      name: color,
    };

    this.latestId += 1;

    this.props.addColor(newColor);
  };

  render() {
    const { color } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={this.handleChange}
        />

        <button type="submit">
          Add color
        </button>
      </form>
    );
  }
}
