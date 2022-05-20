import React, { useState } from 'react';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import DOMPurify from 'dompurify';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
	  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

	return (
		<>
			<Editor 
			editorState={editorState}
			onEditorStateChange={setEditorState}
			wrapperClassName = "wrapper-class"
			editorClassName = "editor-class"
			toolbarClassName = "toolbar-class"
			/>;
		<div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
		</>
	);
};

export default TextEditor;