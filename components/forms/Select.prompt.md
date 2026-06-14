Dropdown built on a native `<select>` so it stays accessible and keyboard-friendly.

```jsx
<Select label="Region" options={["eu-west", "us-east", "ap-south"]} />
<Select label="Model" options={[{value:"l70", label:"Llama 3.1 70B"}]} />
```

- Use for ≤ ~12 known options. For search/multi-select, build a custom popover.
