Single-line text field. Focus shows a neon-green ring; errors turn it red.

```jsx
<Input label="Endpoint name" placeholder="my-endpoint" />
<Input label="API key" mono prefix="sk-" suffix={<CopyIcon/>} value="sk-…f3a2" readOnly />
<Input label="Region" error="Required" />
```

- Use `mono` for keys, IDs, hashes, and code-like values.
- Pair `prefix`/`suffix` with 16px icons or short units.
