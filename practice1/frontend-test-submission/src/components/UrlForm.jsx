import { useState } from "react";
import API from "../service/api";

function UrlForm() {

    const [originalUrl, setOriginalUrl] = useState("");
    const [validity, setValidity] = useState(30);
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await API.post("/shorturls", {
                originalUrl,
                validity
            });

            setResult(res.data);

        } catch (error) {

            alert("Unable to create short URL");

        }
    };

    return (

        <div>

            <h2>Create Short URL</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter URL"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Validity"
                    value={validity}
                    onChange={(e) => setValidity(e.target.value)}
                />

                <br /><br />

                <button>Create</button>

            </form>

            {result && (

                <div>

                    <h3>Short URL Created</h3>

                    <p>{result.shortCode}</p>

                </div>

            )}

        </div>

    );
}

export default UrlForm;