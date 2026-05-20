"use client";

function CVButton() {
    return (
        <div className="cv-wrap" onClick={() => alert("CV download would start here!")}>
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