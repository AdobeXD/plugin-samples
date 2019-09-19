# Distribution options

Once you have a packaged plugin, you're ready to distribute. You can make your plugin available to users through the XD in-app plugin manager or via direct distribution.

## Prerequisite

- [A packaged plugin](./packaging.md)

## The XD plugin manager

The XD plugin manager lets users discover and install XD plugin right from within the app. Installation is as easy as a single click.

![XD Plugin Manager](/images/plugin-manager.png)

To learn how to publish your plugin on the XD plugin manager, [see our publishing tutorial](./how-to-submit-to-plugin-manager.md).


## Direct distribution

Direct distribution lets you choose how to provide users with access to your plugin. Your website? Email? Cloud file share? It's up to you!

If you distribute a .XDX file, installation is as simple as one double-click.

> **Info**
>
> Note that attaching a .XDX file directly to an email might cause the email to get blocked.
>
> - Outlook fails silently; the message disappears into the void, without being delivered to the recipient.
> - Gmail notifies the sender that the message will be blocked.
> 
> If you also have the same listing in the Plugin Manager, make sure the `id` and `name` fields in the manifest match the same fields in the Plugin Manager listing.


## Next steps

- If you plan to publish on the XD plugin manager, see our [publishing tutorial](./how-to-submit-to-plugin-manager.md)
- No matter how you plan to distribute, be sure to see our [plugin marketing tutorial](./marketing.md)