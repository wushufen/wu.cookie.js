cookie.js
=========

一个极小但强大并容易使用的cookie.js


by wushufen
wusfun@foxmail.com
2014.01.05
update 2014.06.12




cookie('name', 'value', {expires: ms, domain: '', path: '/', secure: true});
cookie('name', 'value'); //set


cookie('name', null);    //delete
cookie(null);            //delete all


cookie();                //get all {}
cookie().name            //get
cookie()['name']         //get
cookie('name');          //get
