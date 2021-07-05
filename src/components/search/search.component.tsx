import './search.css';

export const SearchComponent: React.FC = () => {
  return (
    <div className="searchContainer">
      <input className="search" type="search" placeholder="Search..." />
    </div>
  );
};
