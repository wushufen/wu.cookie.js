wui.cookie.js
=========

**一个极小但强大并容易使用的wui.cookie.js**

**a tiny but powerfull and easy to use wui.cookie.js**

**只有 only 0.5k**


by wushufen
wusfun@foxmail.com
2014.01.05
update 2014.06.12



## Usage 使用方法

### set
```javascript
wui.cookie('name', 'value', {
	expires: ms,
	path: '',
	domain: '',
	secure: true
}); //options
```
```javascript
wui.cookie('name', 'value'); //set
```

### delete
```javascript
wui.cookie('name', null);    //delete
```
```javascript
wui.cookie(null);            //delete all
```

### get
```javascript
wui.cookie()                 //get all {}
```
```javascript
wui.cookie().name            //get
```
```javascript
wui.cookie()['name']         //get
```
```javascript
wui.cookie('name')           //get
```
