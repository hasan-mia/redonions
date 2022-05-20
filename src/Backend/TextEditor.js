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
    <div className='grid grid-flow-col'>
        <form action="">
          <div className='border'>
            <div className="px-2">
              <label htmlFor="title" className='text-2xl'>Add Title</label>
              <input type="text" name='title' placeholder='Enter Title'  className='w-full p-2 border'/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='p-2'>
                <label htmlFor="description" className='text-2xl'>Desciption</label>
                <Editor 
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName = "wrapper-class"
                editorClassName = "editor-class"
                toolbarClassName = "toolbar-class"
                />
              </div>

              <div className='p-2'>
                <label htmlFor="image" className='text-2xl'>Image</label>
                <input type="file" name='title' placeholder='Enter Title'  className='w-full p-2 border'/>

              </div>

            </div>
          </div>
        </form>
      </div>
	);
};

export default TextEditor;