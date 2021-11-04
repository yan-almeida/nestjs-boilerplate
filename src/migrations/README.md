# Entidades base e como adicioná-las na migrations:

<br/>

## Enumeration Entity

```js
{
  columns: [
    {
      name: 'id',
      type: 'number',
      isPrimary: true,
    },
    {
      name: 'description',
      type: 'varchar',
      length: '120',
    },
  ];
}
```

<br/>

## Incremental Identifier Entity

```js
{
  columns: [
    ...,
    {
      name: 'id',
      type: 'number',
      isPrimary: true,
    },
    {
      name: 'created_at',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    },
    {
      name: 'updated_at',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    },
  ];
}
```

<br/>

## Unique Identifier (GUID) Entity

```js
{
  columns: [
    ...,
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
    },
    {
      name: 'created_at',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    },
    {
      name: 'updated_at',
      type: 'timestamp',
      default: 'CURRENT_TIMESTAMP',
    },
  ];
}
```
