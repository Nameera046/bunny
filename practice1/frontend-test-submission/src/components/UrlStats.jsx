import { useState } from "react";
import API from "../service/api";

function UrlStats() {

    const [shortCode, setShortCode] = useState("");
    const [stats, setStats] = useState(null);

    const getStats = async () => {

        try {

            const res = await API.get(`/shorturls/${shortCode}`);

            setStats(res.data);

        }

        catch {

            alert("Shortcode not found");

        }

    };

    return (

        <div>

            <input
                type="text"
                placeholder="Short Code"
                value={shortCode}
                onChange={(e) => setShortCode(e.target.value)}
            />

            <button onClick={getStats}>

                Get Statistics

            </button>

            {stats && (

                <div>

                    <p>Original URL : {stats.originalUrl}</p>

                    <p>Clicks : {stats.clickCount}</p>

                    <p>Expiry : {stats.expiry}</p>

                </div>

            )}

        </div>

    );

}

export default UrlStats;