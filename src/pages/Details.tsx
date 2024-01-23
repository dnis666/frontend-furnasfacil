import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BackToTheTop from '../components/BackToTheTop/BackToTheTop';
import { DeviceProvider } from '../components/DeviceContext/DeviceContext';

function Details() {
  return (
    <>
      <DeviceProvider>
        <Header />
        <Footer />
        <BackToTheTop />
      </DeviceProvider>
    </>
  );
}

export default Details;
