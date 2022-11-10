import { PacmanLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 70px',
  opacity: '0.7',
};

const Loader = () => {
  return (
    <PacmanLoader
      cssOverride={override}
      color="#588157"
      aria-label="Loading Spinner"
    />
  );
};

export default Loader;
