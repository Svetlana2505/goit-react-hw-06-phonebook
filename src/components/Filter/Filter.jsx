import { Input } from './Filter.styled.js';
import { changeFilter } from 'components/redux/filterSlice.js';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};
