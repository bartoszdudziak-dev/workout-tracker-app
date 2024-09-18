import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className='overflow-hidden rounded border border-tetiary shadow-md'>
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`grid shadow-sm ${columns} place-items-center gap-0.5 bg-tetiary px-1 py-2 text-xs font-bold uppercase tracking-widest text-accent-primary sm:text-sm md:text-lg`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`grid ${columns} place-items-center gap-0.5 px-1 py-1 text-xs sm:text-sm md:py-0.5 md:text-base`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  return (
    <div className='divide-y divide-tetiary bg-primary'>{data.map(render)}</div>
  );
}

function Footer() {}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
