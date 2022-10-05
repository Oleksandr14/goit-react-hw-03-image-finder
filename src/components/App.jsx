import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { getNewItems } from './utils/Api';

export class App extends Component {
  state = {
    searchInput: '',
    items: [],
    totalHits: 0,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchInput, page } = this.state;

    if (prevState.searchInput !== searchInput || prevState.page !== page) {
      getNewItems(searchInput, page).then(({ hits, totalHits }) =>
        this.setState(prev => ({
          items: [...prev.items, ...hits],
          totalHits,
        }))
      );
    }
  }

  handleSubmit = searchInput => {
    this.setState({ searchInput, items: [], page: 1 });
  };

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { items, totalHits } = this.state;
    return (
      <Box pb={4}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={items} />
        {items.length > 0 && items.length < totalHits && (
          <Button onClick={this.updatePage} />
        )}
        <GlobalStyle />
      </Box>
    );
  }
}
