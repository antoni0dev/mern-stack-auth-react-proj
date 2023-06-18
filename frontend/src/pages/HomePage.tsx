import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import { RootState } from '../store/store';

const HomePage = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  return <>{userInfo ? <h1>Hello, {userInfo.name}</h1> : <Hero />}</>;
};

export default HomePage;
