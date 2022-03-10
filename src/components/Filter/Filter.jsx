import { Label, InputFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <InputFilter type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;
