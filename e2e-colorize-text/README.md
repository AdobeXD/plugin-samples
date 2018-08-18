# Colorize Text

This plugin provides several text color utilities, accessible from the **Plugins** > **Colorize Text** submenu.

## Gradientize

**Gradientize** will interpolate a gradient and apply it to the entire text node, character by character. The first character's color will be used for the starting color and the last character's color will be used for the ending color. The character colors in between will then be modified to fit between the first and last colors, based on the position in the text node.

## Repeat

**Repeat** will collect the colors in your text node and repeat them over the entire length of the string. There are two ways to use this tool:

* Create a text node and assign the color you want to be repeated last. Then change each character's color at the front of the text node until you're ready to repeat the colors. Then invoke the plugin.
* Create a text node with any color. Assign colors you want to be repeated to the initial letters in the text node. When you're done, take the same color you assigned to the first letter and apply it to the next letter. This letter will signal the repeat point. Invoke the plugin.

## Randomize

**Randomize** will assign random web-safe colors to each letter in your text node.

## License

MIT
