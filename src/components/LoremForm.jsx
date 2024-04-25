const LoremForm = ({ onGenerate, paragraphCount, setParagraphCount }) => {
  return (
    <div className="form-container">
      <input
        type="number"
        value={paragraphCount}
        onChange={(e) => setParagraphCount(e.target.value)}
        placeholder="Number of paragraphs"
        className="input-field"
      />
      <button
        onClick={() => {
          onGenerate(paragraphCount);
          alert(
            "Ayyo ! you are demanding very much paragraph in one go, kindly take little little 😃"
          );
        }}
        className="generate-button"
      >
        Generate
      </button>
    </div>
  );
};

export default LoremForm;
