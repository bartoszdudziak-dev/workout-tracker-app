import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortByValue({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  const handleOnChange = (e) => {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  };

  return <Select options={options} value={sortBy} onChange={handleOnChange} />;
}

export default SortByValue;
