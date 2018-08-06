# How to read the reference documentation

Please take a moment to familiarize yourself with the types of symbols you'll see throughout the technical documentation.

## Type Annotations

This shorthand is used to indicate the types of arguments, return values, and object properties.

| Annotation | Meaning |
|---|---|
| `[day]` | The parameter is optional. If it is not supplied, it will be `undefined`. |
| `[day="Monday"]` | The parameter is optional, but will be supplied a default value if not provided. |
| `?Array` | Type can be an Array OR `null`. |
| `!Array` | Type must be an Array; _cannot_ be `null`. Primitive types (`string`, `number`, `boolean`) imply `!` unless explicitly denoted otherwise with `?`. |
| `string|number` | Type can be either `string` or `number`. |
| `{foo:number, bar:string}` | Type is an object with two properties: `foo`, which is type `number`; and `bar`, which is type `string`.  |
| `string[]` | Type is an array of strings. |
| `Array<string>` | Type is an array of strings. |
| `Promise<string>` | Type is a Promise that is asynchronously fulfilled with a string. |
| `*` | Can be any type. **NOTE:** In this early stage, `*` is sometimes used as a placeholder for incomplete documentation. |

