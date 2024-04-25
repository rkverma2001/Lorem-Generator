import { useEffect, useState } from "react";
import "./App.css";
import LoremForm from "./components/LoremForm";

const App = () => {
  const [availableParagraphs, setAvailableParagraphs] = useState([]);
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);
  const [paragraphCount, setParagraphCount] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAvailableParagraphs(data.paragraphs))
      .catch((error) => console.error("Error fetching paragraphs:", error));
  }, []);

  const generateLoremIpsum = (count) => {
    const countInt = parseInt(count, 10);
    const selectedParagraphs = availableParagraphs.slice(0, countInt);
    setDisplayedParagraphs(selectedParagraphs);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied to clipboard: "${text}"`))
      .catch((err) => console.error("Failed to copy text to clipboard", err));
  };

  return (
    <div className="App">
      <h1>Lorem Ipsum Generator</h1>
      <LoremForm
        paragraphCount={paragraphCount}
        setParagraphCount={setParagraphCount}
        onGenerate={generateLoremIpsum}
      />
      <div className="output">
        {displayedParagraphs.map((para, index) => (
          <div key={index} className="paragraph-container">
            <p>
              <span className="paragraph-number">Paragraph {index + 1}: </span>
              {para}
            </p>
            <button
              className="copy-button"
              onClick={() => copyToClipboard(para)}
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
