# Rules

Rules are used to visually segment your user interface. There are three variations of rules.

{% tabs rulemac="Example (macOS)", ruleuwp="Example (Windows)", rulecode="HTML" %}

{% content "rulemac" %}

![macOS Rules](assets/macOS%20Rules.png)

{% content "ruleuwp" %}

![Windows Rules](assets/Windows%20Rules.png)

{% content "rulecode" %}

```html
<h1>Large Rule</h1>
<hr class="large" />
<h2>Normal Rule</h2>
<hr />
<h3>Small Rule</h3>
<hr class="small" />
```

{% endtabs %}

## Usage

The standard sized rule is created whenever you use the `<hr>` tag:

```html
<hr />
```

You can control the size of a rule by using the `small` and `large` classes.

## Guidelines

##### Using Rules with Titles

Place rules _below_ titles, not above them. A large rule should always be accompanied with text, although the other rule sizes can be on their own.

##### Don't Overuse Rules

Too many rules can be visually confusing. Keep it simple by restricting the number of rules you use.