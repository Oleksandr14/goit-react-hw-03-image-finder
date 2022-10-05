import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, Input, ButtonForm } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { input } = this.state;

    this.props.onSubmit(input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <ButtonForm type="submit">
            <AiOutlineSearch size={16} color="#07c" />
          </ButtonForm>

          <Input
            type="text"
            value={input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </Header>
    );
  }
}
