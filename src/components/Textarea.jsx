import { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    // Check if the text contains any script or @ symbol (Will refactor this later)
    if (newText.includes("<script>") || newText.includes("</script>")) {
      newText = newText.replace("<script>", "");
      newText = newText.replace("</script>", "");
      setWarningText("Scripts are not allowed in the text area.");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarningText("@ symbol is not allowed in the text area.");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className='textarea'>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder='Enter your text here...'
        spellCheck='false'
      />
      {warningText ? <Warning warning={warningText} /> : null}
    </div>
  );
};

export default Textarea;
