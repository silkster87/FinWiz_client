// COMPONENTS
import UserNewsColumn from './UserNewsColumn';
// DATA
import newsListGrid from './newListGrid';
// HELPERS
import { getPortfolioNews } from 'helpers/newsHelpers';
// REDUX
import { userApi } from 'redux/store';

const UserNewsColumnData = () => {

  const { useGetUserNewsQuery } = userApi;

  // get the user news data
  const newsSymbols = getPortfolioNews();
  const { data: news } = useGetUserNewsQuery(newsSymbols, {
    pollingInterval: 900000,
  });

  if(news) {
    const sliceNews = news.slice(1,9);

    sliceNews.forEach((article, index) => {
      newsListGrid[index].content = (
        <a href={article.url} target='_blank' rel='noreferrer'>
          <p>{article.title}</p>
          <img src={article.image} />
        </a>
      );
    });
  }

  return <UserNewsColumn data={newsListGrid} />;
};

export default UserNewsColumnData;
