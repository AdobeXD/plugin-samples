# Plugin Location

Adobe XD loads plugins from a `plugins` folder in specific storage location based on your platform:

Platform | Path
---------|-----------
macOS    | `~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/`  (note: ~/Library, not /Library)
Windows  |  `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD.Prerelease_adky2gkssdxte\LocalState\`

If there _isn't_ a folder that already exists with the name of `plugins`, you can go ahead and create it if you need.

```bash
$ cd ~/Library/Application\ Support/Adobe/Adobe\ XD\ CC\ \(Prerelease\)/
$ mkdir plugins
```
