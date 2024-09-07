import { useSearchParams } from 'react-router-dom';

function TestComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('plan'));

  function handleClick(e) {
    console.log(e.target.value);
    setSearchParams((prev) => {
      prev.set('plan', e.target.value);
      return prev;
    });
  }

  return (
    <div>
      <button onClick={handleClick} value={1}>
        1
      </button>
      <button onClick={handleClick} value={2}>
        2
      </button>
      <button onClick={handleClick} value={3}>
        3
      </button>
    </div>
  );
}

export default TestComponent;
