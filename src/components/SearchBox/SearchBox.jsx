import s from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
    return (
        <label className={s.wrapper}>
            <p className={s.label}>Find contact by name</p>
            <input
                className={s.searchInput}
                type="text"
                value={value}
                onChange={e => onFilter(e.target.value)}
            />
        </label>
    );
};

export default SearchBox;
