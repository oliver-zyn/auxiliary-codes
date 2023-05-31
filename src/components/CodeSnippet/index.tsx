import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ContainerCodeSnippet } from './styles';
import { Check, Copy } from "phosphor-react";

type CodeSnippetProps = {
  code: string;
}

export function CodeSnippet ({ code }: CodeSnippetProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false)
    }, 2000)
  };

  return (
    <ContainerCodeSnippet>
      <SyntaxHighlighter language="c" style={atomDark}>
        {code}
      </SyntaxHighlighter>
      <button onClick={handleCopyClick}>
        <Copy size={20} />
        {
          !copySuccess ? 'COPIAR' : <Check size={20} />
        }
      </button>
    </ContainerCodeSnippet>
  );
}