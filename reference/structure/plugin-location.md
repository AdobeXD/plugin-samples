# Plugin Location

Adobe XD loads plugins from the `plugins` and `develop` folder in specific storage locations based on your platform:

```
# macOS
~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/

# Windows 10
C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD.Prerelease_adky2gkssdxte\LocalState\
```

The `develop` folder is used during plugin development, and is the only folder XD will reload plugins from when you trigger _Plugins | Development | Reload Plugins_.

If there _isn't_ a folder that already exists with the name of `develop`, you can go ahead and create it if you need.

```bash
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/
$ mkdir develop
```
