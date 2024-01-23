import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchHome from '../components/SearchHome/SearchHome';
import AdvertisingTop from '../components/AdvertisingTop/AdvertisingTop';
import TopRent from '../components/TopRent/TopRent';
import AdvertisingMiddle from '../components/AdvertisingMiddle/AdvertisingMiddle';
import BackToTheTop from '../components/BackToTheTop/BackToTheTop';
import Showroom from '../components/ShowRoom';
import Testimonials from '../components/Testimonials';
import { DeviceProvider } from '../components/DeviceContext/DeviceContext';
import Newsletter from '../components/Forms/Newsletter';

function Home() {
  return (
    <>
      <DeviceProvider>
        <Header />
        <SearchHome />
        <AdvertisingTop />
        <TopRent />
        <AdvertisingMiddle />
        <Showroom />
        <Testimonials />
        <Newsletter />
        <Footer />
        <BackToTheTop />
      </DeviceProvider>
    </>
  );
}

export default Home;
