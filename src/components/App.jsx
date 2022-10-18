import { Component } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Box } from './Box';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { ErrorMessage } from './App.styled';

import { getNewItems, normalizeApi } from '../utils/Api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchInput: '',
    items: [],
    page: 1,
    totalHits: null,
    isLoader: false,
    total: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchInput, page } = this.state;

    if (prevState.searchInput !== searchInput || prevState.page !== page) {
      this.setState({ isLoader: true, total: null });

      getNewItems(searchInput, page).then(({ hits, totalHits, total }) => {
        this.setState(prev => ({
          items: [...prev.items, ...normalizeApi(hits)],
          totalHits,
          isLoader: false,
          total,
        }));
      });
    }
  }

  handleSubmit = searchInput => {
    this.setState({ searchInput, items: [], page: 1 });
  };

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { items, totalHits, isLoader, total } = this.state;
    const loadMoreBtnTrue = items.length > 0 && items.length < totalHits;
    return (
      <Box pb={4}>
        <Searchbar onSubmit={this.handleSubmit} />

        {totalHits > 0 && (
          <ImageGallery items={items} onToggle={this.toggleModal} />
        )}

        {isLoader && <Loader />}

        {total === 0 && <ErrorMessage>Sorry, not found</ErrorMessage>}

        {loadMoreBtnTrue && <Button onClick={this.updatePage} />}

        <GlobalStyle />
        <ToastContainer autoClose={1500} />
      </Box>
    );
  }
}
