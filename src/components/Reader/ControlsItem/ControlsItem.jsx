export const ControlsItem = ({ currentIdx, total, onChange }) => {
  return (
    <section>
      <button
        disabled={currentIdx === 1}
        type="button"
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={currentIdx === total}
        onClick={() => onChange(+1)}
      >
        Вперед
      </button>
    </section>
  );
};
