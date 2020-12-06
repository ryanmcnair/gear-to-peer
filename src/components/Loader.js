import { JellyfishSpinner } from 'react-spinners-kit';

const Loader = () => (
  <div className='spinner'>
    <JellyfishSpinner size={250} color='#ff0000' role='status' />
  </div>
);

export default Loader;
