function appendElementPackDisplay(packname) {
    ApiResponse.getApiResponse(packname, appendElementPackDisplayApiResponseHandler);
}

function appendElementPackDisplayApiResponseHandler(apiResponse) {
    const domelement = document.getElementById("packs");

    const el = document.createElement("div");
    el.classList.add("packdisplay");

    const elPackicon = document.createElement("img");
    elPackicon.classList.add("packicon", "scaling-nearestneighbor", "center");
    elPackicon.src = apiResponse.icon;
    el.appendChild(elPackicon);


    const elPackinfo = document.createElement("div");
    elPackinfo.classList.add("packinfo");

    const elPackname = document.createElement("div");
    elPackname.innerText = apiResponse.packname;
    elPackname.classList.add("packlabel");
    elPackinfo.appendChild(elPackname);

    const elPackversion = document.createElement("label");
    elPackversion.innerText = apiResponse.version;
    elPackversion.classList.add("packversion");
    elPackinfo.appendChild(elPackversion);

    const elPackdownloadinfo = document.createElement("div");
    elPackdownloadinfo.classList.add("packdownloadinfo");

    const elDownload = document.createElement("a");
    elDownload.href = apiResponse.downloadUrl;
    elDownload.classList.add("packdownload");
    elDownload.innerText = "Download";
    elPackdownloadinfo.appendChild(elDownload);

    const elDivCheckboxChangelog = document.createElement("div");
    elDivCheckboxChangelog.classList.add("packchangelogdiv");
    
    const elLabelCheckboxChangelog = document.createElement("label");
    elLabelCheckboxChangelog.classList.add("packchangeloglabel");
    elLabelCheckboxChangelog.innerText = "Changelog";

    const elCheckboxchangelog = document.createElement("input");
    elCheckboxchangelog.type = "checkbox";
    elCheckboxchangelog.classList.add("packchangelogcheckbox");

    const elChangelogBody = document.createElement("textarea");
    elChangelogBody.classList.add("packchangelogbody");
    console.log(apiResponse.changelog);
    elChangelogBody.innerHTML = apiResponse.changelog;

    elLabelCheckboxChangelog.appendChild(elCheckboxchangelog);
    elLabelCheckboxChangelog.appendChild(elChangelogBody);
    elDivCheckboxChangelog.appendChild(elLabelCheckboxChangelog);



    elPackdownloadinfo.appendChild(elDivCheckboxChangelog);

    elPackinfo.appendChild(elPackdownloadinfo);
    el.appendChild(elPackinfo);

    domelement.appendChild(el);
}