export function Checkbox({ id, checked, placeholder, onToggle }) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      placeholder={placeholder}
      onChange={onToggle}
    />
  );
}
