import axios from 'axios';
import PropTypes from 'prop-types';

const MY_API_KEY = '19959194-3659489a6d8c2eddec11cef16';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

const fetchImage = async (page, text) => {
  const response = await axios.get(
    `?q=${text}&page=${page}&key=${MY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  const items = response.data;

  return items;
};

fetchImage.proptypes = {
  page: PropTypes.number.isRequired,
  text: PropTypes.string,
};

fetchImage.defaultProps = {
  text: '',
};

export default fetchImage;
