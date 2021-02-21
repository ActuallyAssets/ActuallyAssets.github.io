class ApiResponse {
    /*
    JSON json;
    */

    constructor(packname, text) {
        this.packname = packname;
        this.json = JSON.parse(text);
    }

    get asset() {
        return this.json[0]["assets"][0];
    }

    get downloadUrl() {
        return this.asset["browser_download_url"];
    }

    get version() {
        return this.json[0]["tag_name"];
    }
    get icon() {
        return "https://raw.githubusercontent.com/ActuallyAssets/" + this.packname + "/master/pack.png";
    }

    get body() {
        return this.json[0]["body"];
    }

    get changelog() {
        const body = this.body + "";
        body.replace("\n", "<br>");
        return body;
    }

    static getApiResponse(texturepack, reponseHandler) {
        let url = "https://api.github.com/repos/ActuallyAssets/" + texturepack + "/releases";
        //let url = "mockresponse." + texturepack + ".json";
        fetch(url)
        .then(response => {
            response.text().then(text => {
                let apiResponse = new ApiResponse(texturepack, text);
                reponseHandler(apiResponse);
            });
        });
    }
}