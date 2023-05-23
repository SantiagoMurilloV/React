


export const NumberInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={({ target }) => onChange(target.value)} />
    </div>
  );
};

export const Result = ({ label, value }) => {
  return <p>{label} {value}</p>;
};