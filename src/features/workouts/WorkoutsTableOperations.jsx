import SortyByValue from '../../ui/SortByValue';
import TableOperations from '../../ui/TableOperations';

function WorkoutsTableOperations() {
  return (
    <TableOperations>
      <SortyByValue
        options={[
          { value: 'date', label: 'Sort by date' },
          { value: 'name', label: 'Sort by name' },
          { value: 'rate', label: 'Sort by rate' },
        ]}
      />
    </TableOperations>
  );
}

export default WorkoutsTableOperations;
