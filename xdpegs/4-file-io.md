
# 4.0 File I/O

In many cases, your plugin may need to create, read, and write files on the user’s persistent storage mediums. Your plugin should be respectful of the fact that it has access to a lot of potentially privileged information and should respect the user’s privacy. The plugin should also be mindful of not wasting a lot of space.


## 4.1 Handle I/O Exceptions

There may well be cases when your File I/O attempt will fail. Your plugin should always handle the exceptions gracefully.


- [ ] (4.1.1) An exception encountered during a File I/O operation should ***never*** cause the plugin to fail silently. The plugin should attempt to recover if possible. If no recovery is possible, ***always*** inform the user via a modal dialog.
- [ ] (4.1.2) Don’t use “programmer-speak” when showing File I/O error messages. For example, if the user is out of disk space, give the user some options instead of throwing up a terse error message instead. For example, “**You’re out of disk space. This plugin requires more disk space in order to complete its operation. Try removing temporary or unneeded files and then try again.**”


## 4.2 Respect the user’s disk space


- [ ] (4.2.1) Don’t store unnecessary data in the plugin’s data folder.
- [ ] (4.2.2) Don’t expect data stored in the plugin’s temporary folder to persist for any considerable length of time.
- [ ] (4.2.3) Clean up after yourself — delete files stored in temporary or persistent storage when they are no longer needed.


## 4.3 Don’t store sensitive information on the user’s disk

Although plugin’s can’t access other plugin data without the user first giving permission, the files that you store are themselves accessible to other applications running on your user’s machine. This means that if you were to save a user’s password to the file system, that password would now be accessible to any other application running on the machine.


- [ ] (4.3.1) ***Never*** store sensitive information (like passwords) to the user’s storage.
- [ ] (4.3.2) Request sensitive information each time it is needed (either from the user, or from a remote endpoint).
- [ ] (4.3.3) You can cache sensitive information in memory for the life of the current document.
- [ ] (4.3.4) Use time-limited, revokable tokens instead of passwords.


## 4.4 Never access user files without permission

Although the File I/O API surface makes it difficult to access files outside of the plugin data folder and temporary folder without the user first providing some sort of permission using a file picker, it is incumbent upon your plugin to ensure that it doesn’t circumvent the user’s permissions to do so.


- [ ] (4.4.1) ***Always*** invoke a picker once per document session when accessing a user file (excludes temporary and plugin data).
- [ ] (4.4.2) Your plugin can cache access to a file for the lifetime of the document session.
- [ ] (4.4.3) ***Never*** ask for access to the root folder of the user’s storage volume.
- [ ] (4.4.4) Avoid asking for access to the user’s “Documents” folder (and other similar files.)
- [ ] (4.4.5) ***Never*** ask for permission to access files in another plugin’s folder.