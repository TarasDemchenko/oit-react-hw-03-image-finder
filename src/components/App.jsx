import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { SearchBar } from './Searchbar';

const { Component } = require('react');

export class App extends Component {
  state = {
    imeges: [],
    query: '',
    page: 1,
    loading: false,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      imeges: [],
      page: 1,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.changeQuery(event.target.elements.query.value);
    event.target.reset();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    )
      if (this.state.query === '') {
        alert('Введіть запрос');
      }
    {
      fetch(
        'https://pixabay.com/api/?key=38310547-46b116b28ccce7cbd05875092'
      ).then(res => res.json());
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery />
        {this.state.loading && <Loader />}
        <Button onClick={this.handleLoadMore} />
      </div>
    );
  }
}
