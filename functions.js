
/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws (Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
    } catch (error) {
        console.log(error.message);
        return undefined;
    }
}
S
