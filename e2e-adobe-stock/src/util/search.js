const API_ROOT = "https://stock.adobe.io/Rest/Media/1/Search/Files";
async function search(query, { apikey, locale = "en_US", offset = 0, limit = 20 } = {}) {
    if (!apikey) {
        throw new Error("Must specify an API Key");
    }

    const queryString = Object.entries({
        locale,
        "search_parameters[offset]": offset,
        "search_parameters[limit]": limit,
        "search_parameters[words]": query,
        "search_parameters[thumbnail_size]": "1000",
        "search_parameters[filters][content_type:photo]": "1",
        "search_parameters[filters][content_type:illustration]": "0",
        "search_parameters[filters][content_type:vector]": "1",
        "search_parameters[filters][content_type:vector]": "0",
        "search_parameters[filters][content_type:template]": "0",
        "search_parameters[filters][content_type:3d]": "0"
    }).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");

    const url = `${API_ROOT}?${queryString}`;

    try {
        const r = await fetch(url, {
            headers: {
                "X-API-Key": apikey,
                "X-Product": "XD Stock Search Plugin/1.0"
            }
        });
        if (!r.ok) {
            throw new Error(`Server returned ${r.status}`);
        }
        const j = await r.json();

        // Stock will have a `files` key in the response; return it as-is
        return j.files;

    } catch (err) {
        throw err;
    }
}

module.exports = search;