import React, { useState } from "react";

type CopyButtonProps = {
  toCopy: string;
};

const CopyButton = ({ toCopy }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <button
      onClick={() => {
        setIsCopied(true);
        copyToClipBoard(toCopy);
        setTimeout(() => setIsCopied(false), 3000);
      }}
      className="rounded absolute right-1 top-1 px-2 py-1 hover:bg-orange-800"
    >
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
};

const copyToClipBoard = async (toCopy: string) => {
  try {
    /* 
    https://web.dev/async-clipboard/ 
    */
    await navigator.clipboard.writeText(toCopy);
  } catch (err) {
    console.log("failed to copy : ", err);
  }
};

export default CopyButton;
