<a name="module_interactions"></a>

## interactions
The `interactions` module and related APIs provide _read only_ information about the document's interactive prototype mode, including:

* The blue "wires" seen in XD's prototyping UI, known as "interactions," which specify gestures/events which trigger actions to
  occur in the prototype. Accessible as a single consolidated global listing via this module's [`allInteractions`](#module_interactions-allInteractions) API,
  or you can access information from specific nodes in the scenegraph via [`SceneNode.triggeredInteractions`](./scenegraph.md#SceneNode-triggeredInteractions)
  and [`Artboard.incomingInteractions`](./scenegraph.md#Artboard-incomingInteractions).

* Which artboard the prototype experience begins on: [`homeArtboard`](#module_interactions-homeArtboard).

* Properties that affect Artboard scrolling behavior: Artboard [`viewportHeight`](./scenegraph.md#Artboard-viewportHeight) and
  node [`fixedWhenScrolling`](./scenegraph.md#SceneNode-fixedWhenScrolling).

**Since**: XD 19

**Example**
```js
// Get all interactions in the entire document (grouped by triggering node)
var allInteractions = require("interactions").allInteractions;

// Get interactions triggered by the selected node
var nodeInteractions = selection.items[0].triggeredInteractions;

// Get all interactions leading to a particular artboard
var artboard = ...
var interactionsToArtboard = artboard.incomingInteractions;

// Print out details of one particular interaction
var interaction = ...
console.log("Trigger: " + interaction.trigger.type + " -> Action: " + interaction.action.type);
```

See [Interaction documentation](#Interaction) below for an example of what an Interaction object looks like.

* [interactions](#module_interactions)
    * [.homeArtboard](#module_interactions-homeArtboard) : <code>?Artboard</code>
    * [.allInteractions](#module_interactions-allInteractions) : <code>!Array&lt;!{triggerNode: !SceneNode, interactions: !Array&lt;!Interaction&gt;}&gt;</code>
* Typedefs:
    * [Interaction](#Interaction)
    * [Trigger](#Trigger)
    * [Action](#Action)
    * [Transition](#Transition)


## Typedefs

<a name="Interaction" id="Interaction"></a>

### Typedef Interaction
An interaction consists of a Trigger + Action pair and is attached to a single, specific scenenode.

| Property | Type | Description |
| --- | --- | --- |
| trigger | \![Trigger](#Trigger) | User gesture or other event which will trigger the action. |
| action | \![Action](#Action) | Action that occurs. |

**Example:**
```js
{
    trigger: { 
        type: "tap"
    },
    action: {
        type: "goToArtboard",
        destination: /* Artboard node */,
        preserveScrollPosition: false,
        transition: {
            type: "dissolve",
            duration: 0.4,
            easing: "ease-out"
        }
    }
}
```

> **Tip**
> Note: Interaction objects are _not_ plain JSON -- they may reference scenenodes (as seen above) and other strongly-typed objects.

<a name="Trigger" id="Trigger"></a>

### Typedef Trigger
Event which triggers an interaction.

| Property | Type | Description |
| --- | --- | --- |
| type | string | One of the trigger types listed below. |

> **Tip**
> Note: Additional trigger types may be added in the future. Always be sure to have a default case for unknown triggers when
> working with Interaction objects.

##### "tap"
When the user clicks or taps on a scenenode.

##### "drag"
When the user drags or swipes a scenenode. Can only trigger a `goToArtboard` action with the `autoAnimate` transition style.

##### "time"
Once a set amount of time elapses (this trigger type only exists on Artboard nodes). Additional Trigger properties:

| Property | Type | Description |
| --- | --- | --- |
| delay | number | Delay time in ms. |

##### "voice"
When the user speaks a specific voice command. Additional Trigger properties:

| Property | Type | Description |
| --- | --- | --- |
| speechCommand | string | Phrase the user speaks to trigger this command. |

<a name="Action" id="Action"></a>

### Typedef Action
Action performed when the trigger occurs.

| Property | Type | Description |
| --- | --- | --- |
| type | string | One of the action types listed below. |

> **Tip**
> Note: Additional action types may be added in the future. Always be sure to have a default case for unknown actions when
> working with Interaction objects.

##### "goToArtboard"
Navigate the entire screen to view a different artboard. Additional Action properties:

| Property | Type | Description |
| --- | --- | --- |
| destination | !Artboard | Artboard to navigate to. |
| transition | \![Transition](#Transition) | Animation style with which the view transitions from the old Artboard to the new one. |
| preserveScrollPosition | boolean | If both Artboards are [taller than the viewport](./scenegraph.md#Artboard-viewportHeight), attempts to keep the user's current scroll position the same as in the outgoing artboard. |

##### "overlay"
Displays a second artboard overlaid on top of the current one. Additional Action properties:

| Property | Type | Description |
| --- | --- | --- |
| overlay | !Artboard | Artboard to show on top. |
| transition | \![Transition](#Transition) | Animation style in which the second Artboard transitions into view. Only certain transition types are allowed for overlays. |
| overlayTopLeft | `!{x:number, y:number}` | Position of the overlay Artboard, in the current/base Artboard's coordinate space. |

##### "goBack"
Reverse the last `"goToArtboard"` or `"overlay"` action, replaying in reverse whatever transition it used.

##### "speak"
Speak with audio output to the user. Additional Action properties:

| Property | Type | Description |
| --- | --- | --- |
| speechOutput | string | Phrase to speak to the user. |
| locale | string | Locale determines the pronounciation and accent of the digital voice. Includes both language *and* region (e.g. "en-us"). |
| voice | string | "Persona" of the digital voice to use. Available personas vary by locale. |

<a name="Transition" id="Transition"></a>

### Typedef Transition
Animation style with which `"goToArtboard"` and `"overlay"` actions transition from/to Artboards.

| Property | Type | Description |
| --- | --- | --- |
| type | string | One of: `"autoAnimate"`, `"dissolve"`, `"push"`, `"slide"`, `"none"` |
| fromSide | string | _(If type = "push" or "slide")._ One of: `"L"`, `"R"`, `"T"`, `"B"` |
| duration | number | Length of animation in seconds. |
| easing | string | One of: `"linear"`, `"ease-in"`, `"ease-out"`, `"ease-in-out"`, `"wind-up"`, `"bounce"`, `"snap"` |


* * *

<a name="module_interactions-homeArtboard"></a>

### *interactions.homeArtboard : <code>?Artboard</code>*
The starting Artboard seen when the interactive prototype is launched.

**Kind**: static property of [<code>interactions</code>](#module_interactions)
**Read only**: true

**See**: [`Artboard.isHomeArtboard`](./scenegraph.md#Artboard-isHomeArtboard)


* * *

<a name="module_interactions-allInteractions"></a>

### *interactions.allInteractions : <code>!Array&lt;!{triggerNode: !SceneNode, interactions: !Array&lt;\![Interaction](#Interaction)&gt;}&gt;</code>*
Returns a collection of *all* interactions across the entire document, grouped by triggering scenenode. Each entry in this array
specifies a `triggerNode` and the result of getting [`triggerNode.triggeredInteractions`](./scenegraph.md#SceneNode-triggeredInteractions).

May include interactions that are impossible to trigger because the trigger node (or one of its ancestors) has `visible` = false.

Note: currently, this API excludes all of the document's keyboard/gamepad, hover, and component state-transition interactions.

**Kind**: static property of [<code>interactions</code>](#module_interactions)
**Read only**: true
