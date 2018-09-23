> **Danger**
>
> The XD Plugin Experience Guidelines are being drafted now, and are likely to change before release. Even so, you should be able to use these guidelines to craft compelling user experiences for your users.

# 3.0 Network I/O

Interacting with the network is a useful feature — you can communicate with remote or local servers to transmit data, images, and more. However, this can be an area with a lot of edge cases, error conditions, and more, so it is wise to be diligent with your logic.


## 3.1 Always use SSL/TLS when communicating with remote endpoints

You should never transmit data *in the clear.* This means that your plugin should only ever target `https://` or `wss://` endpoints.


- [ ] (3.1.1) Your plugin must ***always*** use `https` or `wss` when communicating with remote endpoints.


## 3.2 Correctly handle online/offline and failure states

If your plugin requires network access in order to function, you should be sure that your plugin works correctly if there is no route to your remote endpoint, or if the network is flaky or down for some reason.


- [ ] (3.2.1) Network requests must ***always*** have reasonable timeouts in case of network issues.
- [ ] (3.2.2) Your plugin should ***never*** assume that your host is available just because the network appears to be online. The user may be on a network without outside access.
- [ ] (3.2.3) If your plugin requires access to a remote host in order to function, the plugin should ***always*** notify the user upon invocation when there is no route present to the host rather than failing silently.
- [ ] (3.2.4) If a network request fails, your plugin should ***always*** attempt to recover gracefully (perhaps including retrying the attempt). If no recovery is possible, ***always*** inform the user instead of failing silently.

## 3.3 Handle long network requests

If you expect that your plugin may make a network request that takes a considerable amount of time, don’t leave your user in doubt! Keep them up-to-date with your plugin’s progress, and provide a way to cancel the operation.


- [ ] (3.3.1) If a network request may take a considerable amount of time, display a progress UI.
- [ ] (3.3.2) Allow network requests to be cancellable.

## 3.9 Privacy Implications

Sending the user’s data or analytics information to a remote endpoint has a whole host of privacy implications in today’s world, especially with the recent introduction of GDPR in Europe.


- [ ] (3.9.1) If your plugin sends data of any sort to a remote endpoint, your plugin should have a privacy statement. Where this is displayed is up to you (website, plugin’s “about” screen, etc.)
- [ ] (3.9.2) Plugin analytics should be configurable and *opt-in*.