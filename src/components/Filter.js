export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    </>
  );
};
