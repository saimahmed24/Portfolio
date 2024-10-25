import React, { useState } from 'react'

export default function TextArea(props) {

    const handleCapClick = () => {
        if (text !== "") {
            const capitalizedText = text
                .split(/(\n|\.\s+)/) // Split by paragraph breaks and full stops
                .map((segment, index) => {
                    // Capitalize the first letter of each segment if it's not just a whitespace
                    if (segment.trim()) {
                        return segment.charAt(0).toUpperCase() + segment.slice(1);
                    }
                    return segment; // Return empty segments as they are
                })
                .join(''); // Join the segments back together

            setText(capitalizedText);
        }
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const remExtSpaces = () => {
        const cleanedText = text
            .split('\n') // Split by lines
            .map(line => line.trim().replace(/\s+/g, ' ')) // Trim and replace spaces in each line
            .join('\n'); // Join lines back together

        // If there are multiple line breaks, normalize them to two line breaks for paragraph separation
        setText(cleanedText.replace(/(\n\s*\n)+/g, '\n\n'));
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleCopyClick = () => {
        const copyText = text;
        navigator.clipboard.writeText(copyText)
        props.setAlert("Text copied!");
        setTimeout(() => {
            props.setAlert(""); // Set alert to an empty string to clear it
        }, 2000);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
    const lineCount = text.trim().length === 0 ? 0 : text.trim().split(/\n+/).length;
    const paraCount = text.trim().length === 0 ? 0 : text.split(/\n\s*\n/).length;

    return (
        <>
            <div className='container' style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>

                <h1 style={{ color: props.theme === 'dark' ? 'White' : '#2b3035' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.theme === 'dark' ? '#2b3035' : 'white', color: props.theme === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-success m-1 font-weight-bold' onClick={handleCapClick} >Capitalize Text</button>
                <button className='btn btn-primary m-1 font-weight-bold' onClick={handleUpClick} >Convert to Uppercase</button>
                <button className='btn btn-primary m-1 font-weight-bold' onClick={handleLoClick} >Convert to Lowercase</button>
                <button className='btn btn-primary m-1 font-weight-bold' onClick={remExtSpaces} >Remove Extra Spaces</button>
                <button className='btn btn-danger m-1 font-weight-bold' onClick={handleClearClick} >Clear Text</button>
                <button className='btn btn-secondary m-1 font-weight-bold' onClick={handleCopyClick} >Copy Text</button>
            </div>
            <div className="container my-2" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>{paraCount} paragraphs</p>
                <p>{lineCount} lines</p>
                <p>{wordCount} words</p>
                <p>{wordCount * 0.008} minutes read</p>
                <p>{text.length} characters</p>
                <h2>Preview</h2>
                <p style={{ whiteSpace: 'pre-wrap' }}>
                    {text.length > 0 ? text : "Enter text above to preview"}
                </p>
            </div>

        </>
    )
}
