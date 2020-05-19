<a name="PerPluginStorage"></a>

## PerPluginStorage
**Kind**: interface

**Since**: XD 29

Stores metadata accessible to multiple plugins, separated into silos by plugin ID. Your plugin can read & write the storage for its own plugin ID, but storage for other plugin IDs is *read-only*.

Each per-plugin storage silo is a collection of key-value pairs. Keys and values must both be strings.

*Each* scenenode has its own metadata storage, accessed via [`SceneNode.sharedPluginData`](scenegraph.md#SceneNode-sharedPluginData). To store general metadata that is not specific to one scenenode, use `sharedPluginData` on the [document's scenegraph root](scenegraph.md#module_scenegraph-root).

**Example**
```js
// This example shows how to save & retrieve rich JSON data in shared metadata storage.
// See below for simpler examples of using individual APIs.
const PLUGIN_ID = "<your manifest's plugin ID here>";

let richObject = {
    list: [2, 4, 6],
    name: "Hello world"
};
node.sharedPluginData.setItem(PLUGIN_ID, "richData", JSON.stringify(richObject));

// Later on...
// (This could be in a different plugin, if it passes the original plugin's ID here)
let jsonString = node.sharedPluginData.getItem(PLUGIN_ID, "richData");
if (jsonString) {  // may be undefined
    let richObjectCopy = JSON.parse(jsonString);
    console.log(richObjectCopy.list.length);  // 3
}
```

* [PerPluginStorage](#PerPluginStorage)
    * [.getAll()](#getAll) ⇒ <code>!Object&lt; string, !Object&lt;string, string&gt; &gt;</code>
    * [.getForPluginId(pluginId)](#getForPluginId) ⇒ <code>!Object&lt;string, string&gt;</code>
    * [.keys(pluginId)](#keys) ⇒ <code>!Array&lt;string&gt;</code>
    * [.getItem(pluginId, key)](#getItem) ⇒ <code>?string</code>
    * [.setItem(pluginId, key, value)](#setItem)
    * [.removeItem(pluginId, key)](#removeItem)
    * [.toString()](#toString) ⇒ <code>string</code>
    * [.toJSON()](#toJSON) ⇒ <code>!Object</code>


<a name="getAll"></a>
## perPluginStorage.getAll() ⇒ <code>!Object&lt; string, !Object&lt;string, string&gt; &gt;</code>

Returns a map where key is plugin ID and value is a nested map containing all the shared metadata for that plugin ID (i.e. the result of calling `getForPluginId()` with that ID).

This map is a clone of the stored metadata, so modifying it has no effect.

**Example**
```js
let allSharedMetadata = node.sharedPluginData.getAll();
console.log("Plugin A's 'foo' value:",
            allSharedMetadata["A"] && allSharedMetadata["A"].foo);
console.log("All of plugin B's shared metadata on this node:",
            allSharedMetadata["B"]);
console.log("List of plugins storing shared metadata on this node:",
            Object.keys(allSharedMetadata));
```


* * *

<a name="getForPluginId"></a>
## perPluginStorage.getForPluginId(pluginId) ⇒ <code>!Object&lt;string, string&gt;</code>

Returns a map of key-value string pairs containing all shared metadata stored on this node by the given plugin. May be an empty object (zero keys), but is never null.

This map is a clone of the stored metadata, so modifying it has no effect.

| Param | Type |
| ----- | ---- |
| pluginId | `string` |

**Example**
```js
const MY_PLUGIN_ID = "<your manifest's plugin ID here>";
let mySharedMetadata = node.sharedPluginData.getForPluginId(MY_PLUGIN_ID);
console.log("My shared 'foo' & 'bar' values:",
            mySharedMetadata.foo, mySharedMetadata.bar);

console.log("Plugin B's shared 'foo' value:",
            node.sharedPluginData.getForPluginId("B").foo);
```


* * *

<a name="keys"></a>
## perPluginStorage.keys(pluginId) ⇒ <code>!Array&lt;string&gt;</code>

Returns a list of all keys stored on this node by the given plugin. May be empty (length zero), but is never null.

| Param | Type |
| ----- | ---- |
| pluginId | `string` |


**Example**
```js
console.log("All properties stored by plugin A on this node:",
            node.sharedPluginData.keys("A"));
```


* * *

<a name="getItem"></a>
## perPluginStorage.getItem(pluginId, key) ⇒ <code>?string</code>

Returns the value stored under the given key on this node by the given plugin, or undefined if the plugin hasn't stored anything under the given key.

Because metadata is stored separately per plugin, two plugins can store two different values under the same key.

| Param | Type |
| ----- | ---- |
| pluginId | `string` |
| key | `string` |


**Example**
```js
// These are two different values, stored independently per plugin
console.log("Plugin A's 'foo' value:", node.sharedPluginData.getItem("A", "foo"));
console.log("Plugin B's 'foo' value:", node.sharedPluginData.getItem("B", "foo"));
```


* * *

<a name="setItem"></a>
## perPluginStorage.setItem(pluginId, key, value)

Set a metadata key which can be read by any other plugin.

| Param | Type | Description |
| ----- | ---- | ----------- |
| pluginId | `string` | *Must* be equal to your plugin's ID. |
| key | `string` | |
| value | `string` or `undefined` | If undefined, behaves as if you'd called `removeItem()` instead. |


**Example**
```js
const MY_PLUGIN_ID = "<your manifest's plugin ID here>";
node.sharedPluginData.setItem(MY_PLUGIN_ID, "foo", "42");

node.sharedPluginData.setItem("other_plugin_id", "foo", "42");
// ^ ERROR: other plugin's metadata is read-only

console.log(node.sharedPluginData.getItem(MY_PLUGIN_ID, "foo"));  // "42"
```


* * *

<a name="removeItem"></a>
## perPluginStorage.removeItem(pluginId, key)

Clears a shared metadata key stored by your plugin.

| Param | Type | Description |
| ----- | ---- | ----------- |
| pluginId | `string` | *Must* be equal to your plugin's ID. |
| key | `string` | &nbsp; |


**Example**
```js
const MY_PLUGIN_ID = "<your manifest's plugin ID here>";
node.sharedPluginData.setItem(MY_PLUGIN_ID, "foo", "42");
console.log(node.sharedPluginData.getItem(MY_PLUGIN_ID, "foo"));  // "42"

node.sharedPluginData.removeItem(MY_PLUGIN_ID, "foo");
console.log(node.sharedPluginData.getItem(MY_PLUGIN_ID, "foo"));  // undefined
```


* * *

<a name="toString"></a>
## perPluginStorage.toString() ⇒ <code>string</code>

Provided for convenience: you can `console.log(node.sharedPluginData)` to see the value of `getAll()`.


* * *

<a name="toJSON"></a>
## perPluginStorage.toJSON() ⇒ <code>!Object</code>

Provided for convenience: you can include a PerPluginStorage object inside data you are going to convert to JSON, even though it is not a plain JavaScript object. Returns the same value as `getAll()`.

**Example**
```js
let myData = {
    foo: 42,
    bar: "Some other data",
    metadata: node.sharedPluginData
};
let jsonString = JSON.stringify(myData);
```
