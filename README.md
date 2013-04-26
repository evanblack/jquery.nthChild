jquery.nthChild
===============

jQuery nthChild is a simple Polyfill plugin to provide IE&lt;9 support for nth Child CSS selectors.

Usage
-----

**Default Settings**
```js
$('.lt-ie9 .ie-nthchild').nthChild();
```

A `data-reset` data attribute can be used to set a zero-based reset index when cycling through large numbers of items or modifying behavior of the plugin.

**HTML**
This:
```html
<ul class="grid-list ie-nthchild" data-reset="3">
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
    <li><img src="http://placehold.it/200x200" /></li>
</ul>
```
Will turn into this:
```html
<ul class="grid-list ie-nthchild" data-reset="3">
    <li class="first"><img src="http://placehold.it/200x200" /></li>
    <li class="second"><img src="http://placehold.it/200x200" /></li>
    <li class="third"><img src="http://placehold.it/200x200" /></li>
    <li class="first"><img src="http://placehold.it/200x200" /></li>
    <li class="second"><img src="http://placehold.it/200x200" /></li>
    <li class="third"><img src="http://placehold.it/200x200" /></li>
    <li class="first"><img src="http://placehold.it/200x200" /></li>
    <li class="second"><img src="http://placehold.it/200x200" /></li>
    <li class="third"><img src="http://placehold.it/200x200" /></li>
</ul>
```

So you can do **this** in your CSS and have it work in IE 7 or 8:
```css
.grid-list li:nth-child(3n+1) {
    margin-left: 0; // Style the first item differently
}
.lt-ie9 .grid-list li.first {
    margin-left: 0; // Style the first item differently
}
```

**Custom Settings**
You could use this plugin to add even/odd classes to elements for IE. Use along with `data-reset="2"`.
```js
$('.lt-ie9 .ie-even-odd').nthChild({
    cssClasses: ['even','odd']
});
```

Settings
--------

* **cssClasses** _(Default: ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'])_ An array of string values to be used as your fallback CSS hooks.
