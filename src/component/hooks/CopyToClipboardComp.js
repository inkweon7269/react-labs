import React from 'react';
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const CopyToClipboardComp = () => {
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (
        <>
            <button onClick={() => copyToClipboard("This was copied")}>
                {success ? "Copied" : "Copy Text"}
            </button>
            <input type="text" />
        </>
    )
};

export default CopyToClipboardComp;