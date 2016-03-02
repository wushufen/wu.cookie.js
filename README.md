wu.cookie.js
=========

**一个小巧易用的 cookie 插件**

by wushufen
wusfun@foxmail.com
2014.01.05
update 2015.09.28



## Usage 使用方法

### set
```javascript
wu.cookie('name', 'value'); //set
```
```javascript
wu.cookie('name', 'value', {
	expires: day,
	path: '',
	domain: '',
	secure: true
}); //options
```

### delete
```javascript
wu.cookie('name', null);    //delete
```
```javascript
wu.cookie(null);            //delete all
```

### get
```javascript
wu.cookie()                 //get all {}
```
```javascript
wu.cookie().name            //get
```
```javascript
wu.cookie()['name']         //get
```
```javascript
wu.cookie('name')           //get
```
