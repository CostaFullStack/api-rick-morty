export const SelectComponent = ({ opcoes, onChange }) => {
  return (
    <select name="selecionar" id="selecionar" onChange={onChange}>
      {opcoes &&
        opcoes.map((element) => (
          <option id="opcoes" value={element.valor}>
            {element.texto}
          </option>
        ))}
    </select>
  );
};
