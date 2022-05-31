import React, { useState, useRef} from 'react'
import JoditEditor from 'jodit-react'

const config = {
  buttons: ['bold', 'italic', 'link', 'unlink', 'underline', 'source']
}


const TextEditor = () => {
  let initialValue="";
  const editor = useRef(null);
	const [value, setValue] = useState("");
  const getValue = (value) => {setValue(value);};

  console.log(value);

	return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      //   onBlur={(newContent) => getValue(newContent)}
      onChange={(newContent) => getValue(newContent)}
    />
	);
};

export default TextEditor;