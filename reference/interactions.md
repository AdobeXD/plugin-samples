<a name="module_interactions"></a>

## interactions
The `interactions` module represents all document interactions.

**Example**  
```js
// Get the home Artboard
var home = interactions.homeArtboard;
console.log(`Home artboard name: ${home.name} guid: ${home.guid}`);

// Get all of the document interactions
var allInter = interactions.allInteractions;
allInter.forEach(inter => {
     console.log(`triggerNode guid: ${inter.triggerNode.guid}`);
     console.log(`triggerNode Name: ${inter.triggerNode.name}`);
     console.log(JSON.stringify(inter.interactions, null, 2));
})
```

**Since**: XD 19  

* [interactions](#module_interactions)
    * [.homeArtboard](#module_interactions) : <code>!{?Artboard}</code>
    * [.allInteractions](#module_interactions) : <code>{!Array<{triggerNode: !SceneNode, interactions: !Array<!Interaction>}>}</code>

* * *

<a name="module_interactions-homeArtboard"></a>

### *interactions.homeArtboard : <code>!{?Artboard}</code>*
The home artboard of the interaction model. This is a special designation indicating this is the first artboard to display in a shared prototype.

**Kind**: static property of [<code>interactions</code>](#module_interactions)
**Read only**: true

* * *

<a name="module_interactions-allInteractions"></a>

### *interactions.allInteractions : <code>{!Array<{triggerNode: !SceneNode, interactions: !Array<!Interaction>}>}</code>*
Get all interactions by serializing the document interactions to JSON. An array of all the interactions is returned.

**Kind**: static property of [<code>interactions</code>](#module_interactions)
**Read only**: true
