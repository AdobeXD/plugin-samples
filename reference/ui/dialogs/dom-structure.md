# Modal Dialog HTML5 DOM Structure

The visual structure of a Modal Dialog can be translated to HTML5 DOM elements. If you were to inspect the example's structure in a browser, you'd see something that looks like this:

```html
<style>
    #dialog form {
        width: 360px;
    }
    .h1 {
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
    .icon {
        border-radius: 4px;
        width: 24px;
        height: 24px;
        overflow: hidden;
    }
</style>
<dialog id="dialog">
    <form method="dialog">
        <h1 class="h1">
            <span>Create Shape</span>
            <img class="icon" src="./assets/icon.png" />
        </h1>
        <hr />
        <p>Please enter the kind of shape you'd like to create. You can also include additional options by separating them with spaces.</p>
        <label>
            <span>Shape</span>
            <input type="text" placeholder="e.g., Rectangle 10 10 20 40" />
        </label>
        <footer>
            <button uxp-variant="primary">Cancel</button>
            <button type="submit" uxp-variant="cta">Create</button>
        </footer>
    </form>
</dialog>
```
