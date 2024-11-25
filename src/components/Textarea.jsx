import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState("");
  const handleChange = (e) => {
    let newText = e.target.value;

    const forbiddenPatterns = [
      {
        pattern: /<script.*?>.*?<\/script>/gi,
        message: "Scripts are not allowed in the text area.",
      },
      {
        pattern: /<.*?javascript:.*?>/gi,
        message: "JavaScript links are not allowed in the text area.",
      },
      {
        pattern: /<.*?on\w+.*?>/gi,
        message: "Event handlers are not allowed in the text area.",
      },
      { pattern: /@/g, message: "@ symbol is not allowed in the text area." },
    ];

    let warningMessage = "";
    forbiddenPatterns.forEach(({ pattern, message }) => {
      if (pattern.test(newText)) {
        warningMessage = message;
      }
      newText = newText.replace(pattern, "");
    });

    setWarningText(warningMessage);
    setText(newText);
  };

  return (
    <div className='relative'>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder='Enter your text here...'
        spellCheck='false'
        className='w-full h-64 p-4 text-lg resize-none focus:outline-none'
      />
      {warningText && <Warning warning={warningText} />}
    </div>
  );
};

export default Textarea;
