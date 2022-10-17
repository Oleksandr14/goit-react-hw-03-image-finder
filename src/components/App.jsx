import { Component } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Box } from './Box';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getNewItems } from '../utils/Api';

export class App extends Component {
  state = {
    searchInput: '',
    items: [],
    page: 1,
    totalHits: 0,
    isLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchInput, page } = this.state;

    if (prevState.searchInput !== searchInput || prevState.page !== page) {
      this.setState({ isLoader: true });
      getNewItems(searchInput, page).then(({ hits, totalHits }) =>
        this.setState(prev => ({
          items: [...prev.items, ...hits],
          totalHits,
          isLoader: false,
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
    const { items, totalHits, isLoader } = this.state;
    const loadMoreBtnTrue = items.length > 0 && items.length < totalHits;
    return (
      <Box pb={4}>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery items={items} onToggle={this.toggleModal} />

        {isLoader && <Loader />}

        {loadMoreBtnTrue && <Button onClick={this.updatePage} />}

        <GlobalStyle />
      </Box>
    );
  }
}
