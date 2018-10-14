# Input

`<input>` type supportes different values for its attribute "type". Depending upon the value, it supports different attributes.


<!--
<style>
    label.row {
        align-items: center;
    }
    label.row input[type=range] {
        flex: 1 0 auto;
    }
</style>

<label>
    <span>Label</span>
    <input type="text" placeholder="Enter some text..." />
</label>

<label class="row">
    <span>Label</span>
    <input type="text" placeholder="Enter some text..." />
</label>

<label>
    <span>Label</span>
    <input uxp-quiet="true" type="text" placeholder="Enter some text..." />
</label>

<label class="row">
    <span>Label</span>
    <input uxp-quiet="true" type="text" placeholder="Enter some text..." />
</label>


<label class="row">
    <input type="checkbox" />
    <span>Checkbox</span>
</label>

<label>
    <span>Range</span>
    <input type="range" min=0 max=100 value=25/>
</label>

<label class="row">
    <span>Range</span>
    <input type="range" min=0 max=100 value=50/>
</label>

<label>
    <span>Step</span>
    <input type="range" min=0 max=100 value=25 step=5/>
</label>

<label class="row">
    <span>Step</span>
    <input type="range" min=0 max=100 value=50 step=5/>
</label>

-->


## Type = text

### Syntax
The code below generates the following UI
```html
   <input type="text" uxp-quiet="true" id="name" placeholder="Your name"/>
```
<img src="./assets/input-text.png" width="50%" height="50%">

### Supported attributes
* id
```html
        <input type="text" id="name" />
```
* title
```html
        <input type="text" id="name" title="Hello World"/>
```

* place holder
```html
        <input type="text" id="name" placeholder="Your name"/>
```

* disabled
```html
        <input type="text" id="name" disabled = "true"/>
```

* value
```html
        <input type="text" id="name" value="Your name"/>
```

* title
```html
        <input type="text" id="name" title="Your title"/>
```

* readonly
```html
        <input type="text" id="name" readonly="true"/>
```

* uxp-quiet
```html
   		 <input uxp-quiet="true" type="text" id="name" placeholder="Your name"/>
```

## Type = checkbox

### Syntax
The code below generates the following UI
```html
        <label class = "row">
            <input type="checkbox" id="name" placeholder="Your name"/>
            <span>I agree  </span>
        </label>
```

<img src="./assets/input-checkbox.png" width="50%" height="50%">

### Supported attributes
* id
```html
        <input type="checkbox" id="name" />
```

* title
```html
        <input type="checkbox" id="name" />
```

* value
```html
        <input type="checkbox" id="name" value="someValue"/>
```

* checked
```html
        <input type="checkbox" id="name" value="someValue" checked/>
```

* disabled
```html
        <input type="checkbox" id="name" value="someValue" disabled/>
```

* indeterminate
```html
        <input type="checkbox" id="name" />
```

This value for this attribute can only be set in javascript like this:

	```
		let input = document.getElementById("name");
		 input.indeterminate = true;
	```


## Type = range

### Syntax
The code below generates the following UI
```html
        <label>
            <span> Temperature </span>
            <input type="range" id="name" min="1" max="100" value="55"/>
        </label>
```

<img src="./assets/input-range.png" width="50%" height="50%">

### Supported attributes

* id
```html
        <input type="range" id="name" />
```

* title
```html
        <input type="range" id="name" title="someTitle" />
```

* disabled
```html
         <input type="range" id="name" disabled />
```

* min
```html
        <input type="range" id="name" min="10" />
```

* max
```html
         <input type="range" id="name" max="20" />
```

* step
```html
       <input type="range" id="name" step="2" />
```

* value
```html
      <input type="range" value="90" />
```


## Type = number

### Syntax
The code below generates the following UI
```html
        <label>
            <span> Input number </span>
            <input type="number" id="name"/>
        </label>
```

<img src="./assets/input-number.png" width="50%" height="50%">

### Supported attributes

* id
```html
        <input type="number" id="name" />
```
* title
```html
        <input type="number" id="name" title="Hello World"/>
```

* place holder
```html
        <input type="number" id="name" placeholder="Your name"/>
```

* disabled
```html
        <input type="number" id="name" disabled = "true"/>
```

* value
```html
        <input type="number" id="name" value="Your name"/>
```

* title
```html
        <input type="number" id="name" title="Your title"/>
```

* readonly
```html
        <input type="number" id="name" readonly="true"/>
```

* uxp-quiet
```html
   		 <input uxp-quiet="true" type="number" id="name" placeholder="Your name"/>
```

<!--
<style>
    .colorrow {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .colorrow span {
        flex: 0 0 32px;
    }
    .colorrow input[type=text] {
        flex: 0 0 64px;
    }
    .colorrow input[type=range] {
        flex: 1 1 auto;
    }
</style>
<label class="colorrow">
    <span>R</span>
    <input type="range" min=0 max=255 value=128 />
    <input type="text" value="128" />
</label>
<label class="colorrow">
    <span>G</span>
    <input type="range" min=0 max=255 value=64 />
    <input type="text" value="64" />
</label>
<label class="colorrow">
    <span>B</span>
    <input type="range" min=0 max=255 value=32 />
    <input type="text" value="32" />
</label>
-->