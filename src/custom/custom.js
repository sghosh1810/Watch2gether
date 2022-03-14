/**
 * Returns value for key if present in url else false
 * @param {*} key
 * @param {*} url
 * @returns
 */
const getUrlParameter = function getUrlParameter(key, url) {
    var sPageURL = url.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === key) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

export { getUrlParameter };
