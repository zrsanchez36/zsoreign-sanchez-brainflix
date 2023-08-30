import React from "react";
import UploadForm from "./UploadForm";

function UploadVideo () {

    return(
        <section className="upload__section">
            <div className="upload__section--container">
                <h1>Upload Video</h1>
                <UploadForm />
            </div>
        </section>
    );
}

export default UploadVideo;