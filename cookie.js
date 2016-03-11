/*!
https://github.com/wusfen/wu.cookie.js
最简版
*/
/*
cookie('name', 'value', {expires: day, domain: '', path: '/', secure: true});
cookie('name', 'value'); //set
cookie('name', null);    //delete
cookie('name')           //get
 */

function cookie(name, value, options) {
    options = options || {};
    if (value === null) options.expires = -1;
    if (value !== undefined) {
        var date = new Date;
        date.setDate(date.getDate() + options.expires);
        document.cookie = [
            name + '=' + value,
            options.expires ? ';expires=' + date.toUTCString() : '',
            options.path ? ';path=' + options.path : '',
            options.domain ? ';domain=' + options.domain : '',
            options.secure ? ';secure' : ''
        ].join('');
    }
    return (document.cookie.match(RegExp(name + '=(.*?)(;|$)')) || [])[1]
}
