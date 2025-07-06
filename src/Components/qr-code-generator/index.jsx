import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");
    function handleGenerateQrCode() {
        setQrCode(input);
        setInput("");
    }

    return (
        <div className="qr-code-container">
            <h1 className="header">QR Code Generator</h1>
            <div>
                <input
                    className="input-qr"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter your value here"
                />
                <button
                    className="button-qr"
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div className="qr-code">
                <QRCode id="qr-code-value" value={qrCode} size={400} />
            </div>
        </div>
    );
}
