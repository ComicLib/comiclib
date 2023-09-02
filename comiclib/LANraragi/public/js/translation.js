if (/^zh\b/.test(navigator.language)) {
    fetch('https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases/db.text.json').then(res => {
        res.json().then(json => {
            if (json["version"] != 6) console.warn('Unknow EhTagTranslation database version.')
            tag_translation = new Object();
            json.data.forEach(data => {
                tag_translation[data["namespace"]] = data;
                (data.frontMatters["aliases"] ?? []).forEach(alias => {
                    tag_translation[alias] = data;
                })
            });
        })
    })
}

function trans_namespace(namespace) {
    if ((typeof tag_translation !== 'undefined') && (namespace in tag_translation))
        return tag_translation[namespace]["frontMatters"]["name"];
    return namespace;
}

function trans_tag(namespace, tag) {
    if ((typeof tag_translation !== 'undefined') && (namespace in tag_translation) && (tag in tag_translation[namespace]["data"]))
        return tag_translation[namespace]["data"][tag]["name"];
    return tag;
}