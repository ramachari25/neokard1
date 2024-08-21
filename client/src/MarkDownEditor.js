import React, { useEffect, useState } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';
const MarkDownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');
  useEffect(() => {
    if (markdown) {
      fetch('http://localhost:5000/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown }),
      })
        .then((response) => response.json())
        .then((data) => setHtml(data.html))
        .catch((error) => console.error('Error:', error));
    }
  }, [markdown]);
  return (
    <div className="container">
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown here..."
      />
      <SyntaxHighlighter language="markdown" style={docco}/>
      <div className="markdown-preview">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default MarkDownEditor;
