<a name="module_interactions"></a>

## interactions
The `interactions` module represents all document interactions.

**Example**  
```js
// Get the home Artboard
const home = interactions.homeArtboard;
console.log(`Home artboard name: ${home.name} guid: ${home.guid}`);

// Get all of the document interactions
const allInter = interactions.allInteractions;
allInter.forEach(inter => {
     console.log(`triggerNode guid: ${inter.triggerNode.guid}`);
     console.log(`triggerNode Name: ${inter.triggerNode.name}`);
     console.log(JSON.stringify(inter.interactions, null, 2));
})
```

**Since**: XD 19  

* [interactions](#module_interactions)
    * [.homeArtboard](#module_interactions) : <code>?Artboard</code>
    * [.allInteractions](#module_interactions) : <code>!Array&lt;!{triggerNode:!SceneNode, interactions:!Array&lt;!Interaction&gt;}&gt;</code>

* * *

<a name="module_interactions-homeArtboard"></a>

### *interactions.homeArtboard : <code>?[Artboard](scenegraph.md#Artboard)</code>*
The home artboard of the interaction model. This is a special designation indicating this is the first artboard to display in a shared prototype.

**Kind**: static property of [<code>interactions</code>](#module_interactions)
**Read only**: true

* * *

<a name="module_interactions-allInteractions"></a>

### *interactions.allInteractions : <code>!Array&lt;!{triggerNode:!SceneNode, interactions:!Array&lt;!Interaction&gt;}&gt;</code>*
Get all interactions by serializing the document interactions to JSON. An array of all the interactions is returned.

**Kind**: static property of [<code>interactions</code>](#module_interactions)  

**Read only**: true

Example
```js
[ 
    {
        triggerNode: 
            Rectangle ('Rectangle 1') {
                width: 376, height: 57
                global X,Y: 1466, 506
                parent: Artboard ('Home')
                stroke: ff707070
                fill: ffffffff
            },
        interactions: [
            [interactionData]
        ] 
    },
    { 
        triggerNode: 
            Group ('Left Accessory') {
                width: 180, height: 44
                global X,Y: 1469, 21
                parent: Artboard ('Second')
                children: [Rectangle, Group]
            },
        interactions: [
            [interactionData]
        ] 
    }
]
```
| Field Name | Type | Description |
| --- | --- | --- |
| triggerNode | !SceneNode | The scenegraph node that triggers interactions |
| interactions | Array&lt;InteractionData> | Data about interactions triggered by `triggerNode` |  

**Typedef InteractionData**

Example 

```js
{
    trigger: { 
        type: 'tap'
    },
    action: {
        type: 'goToArtboard',
        destination: 
            Artboard ('iPhone 6/7/8') {
                width: 375, height: 667
                global X,Y: 1040, -14
                parent: RootNode
                children: [Group, Group, Group]
                fill: ffffffff
            },
       preserveScrollPosition: false,
       transition: [transitionData]
    }
}
```
| Field Name | Type | Description |
| --- | --- | --- |
| trigger.type | String | Possible values: `tap`, `voice`, `time`, `drag` |
| action.type | String | Possible values: `goToArtboard`, `overlay`, `speak`, `goBack` |
| action.destination | !SceneNode | The destination scenegraph node |
| preserveScrollPosition | Boolean | Fixed scroll position indicator |
| transition | Array&lt;TransitionData> | Data about transitions triggerd by `trigger` |  

**Typedef TransitionData**  

Example  

```js
{ 
    type: 'dissolve',
    easing: 'ease-out',
    duration: 0.4
}
```
| Field Name | Type | Description |
| --- | --- | --- |
| type | String | Possible values: `autoAnimate`, `dissolve`, `push`, `slide`, `none` |
| easing | String | Possible values: `linear`, `ease-in`, `ease-out`, `ease-in-out`, `wind-up`, `bounce`, `snap` |
| duration | Number | Time taken for this transition in seconds |
