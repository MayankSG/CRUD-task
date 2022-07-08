import { HomeProps } from './Home.types';
import Header from '../../components/Header';
import ItemsList from './ItemsList';

const Home = ({ items }: HomeProps) => (
  <>
    <Header />
    {items && items.length > 0 && (
      <ItemsList items={items} />
    )}
  </>
);

export default Home;
