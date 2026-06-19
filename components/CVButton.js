"use client";

function CVButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Jagriti Resume 2026.pdf";
        link.download = "Jagriti_Resume_2026.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="cv-wrap" onClick={handleDownload}>
            <div className="cv-lines">
                <div className="cv-line" />
                <div className="cv-line" />
                <div className="cv-line" />
            </div>
            <button className="cv-btn">Download CV</button>
            <div className="cv-lines">
                <div className="cv-line" />
                <div className="cv-line" />
                <div className="cv-line" />
            </div>
        </div>
    );
}

export default CVButton;