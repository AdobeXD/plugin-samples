> **Danger**
>
> The XD Plugin Experience Guidelines are being drafted now, and are likely to change before release. Even so, you should be able to use these guidelines to craft compelling user experiences for your users.

# 1.0 Performance

One of Adobe XD's core tenants is performance. As such, your plugin should be as performant as possible, and should avoid introducing bottlenecks or impediments to your user's workflow.

## 1.1 Startup

Adobe XD executes your plugin’s main JavaScript file whenever it is launched or a new document is opened or created. This is done to determine the various entry points and handlers your plugin provides. As part of this process, your plugin could conceivably perform other work at startup. You should avoid running arbitrary code at startup because this slows down loading all of the user’s plugins.

- [ ] (1.1.1) Test creating a blank document with your plugin installed. Ensure that creating a new document is as fast as it was when no plugins were installed.
- [ ] (1.1.2) If your plugin has a lot of code, *parsing* that code may take more than 10ms. Consider using a bundler to minify and split your code, using lazy loading as appropriate.

You should also avoid displaying any user interface or launching an external URL during startup.

- [ ] (1.1.3) ***Never*** render a modal dialog during startup.
- [ ] (1.1.4) ***Never*** open a URL during startup.

While performing I/O is a great way to load user preferences, ping a backend server, etc., this can cause delays during startup. Instead, handle your I/O tasks lazily — only performing the I/O when needed. For example, when loading user preferences, load them on the first invocation of your plugin, rather than at startup.

- [ ] (1.1.5) Avoid performing I/O at startup.

## 1.2 While Idle

It is possible to execute your code asynchronously, and as such, you could schedule actions to occur in the future. It is important, then, not to throw up obstacles or impediments to the user's workflow unless they have explicitly initiated an action that results in such a behavior.

- [ ] (1.2.1) ***Never*** open a modal dialog when the user has not triggered a plugin action using a menu item or other method.
- [ ] (1.2.2) ***Never*** open a URL when the user has not triggered a plugin action using a menu item or other method.
- [ ] (1.2.3) ***Never*** put the user's machine into a hard loop while idle. This can waste battery life, slow down XD and other plugins, and cause other disturbances.

## 1.3 While Executing

Your plugin should strive to perform its tasks as quickly as possible. What this means depends largely upon your plugin, but you should avoid blocking the user for a significant period of time without providing some means of cancellation. There are also two modes of execution: synchronous (blocking) and asynchronous. You should avoid running synchronous (blocking) code for more than any longer than necessary, since the user can't interact with your plugin or their document while your plugin is processing.

- [ ] (1.3.1) Avoid blocking the user for more than a couple seconds.
- [ ] (1.3.2) If your plugin needs several seconds to work, provide the user a way to cancel the operation.
- [ ] (1.3.3) If your plugin is going to take some time to complete, consider providing a progress indicator.



