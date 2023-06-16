import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
const CodeEditor = ({ codeValue }) => {
  const onChange = useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <CodeMirror
        value={codeValue}
        height="200px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
