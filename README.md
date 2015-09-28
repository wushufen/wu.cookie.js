wui.cookie.js
=========

**一个小巧易用的 cookie 插件**

by wushufen
wusfun@foxmail.com
2014.01.05
update 2015.09.28



## Usage 使用方法

### set
```javascript
wui.cookie('name', 'value'); //set
```
```javascript
wui.cookie('name', 'value', {
	expires: day,
	path: '',
	domain: '',
	secure: true
}); //options
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
