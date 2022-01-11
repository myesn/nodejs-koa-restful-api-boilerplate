# TypeScript风格指南和编码约定

[原文](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md)

## Variable

变量和函数名使用驼峰大小写(`camelCase`)

```typescript
var fooVar;
function barFunc() { }
```

## Class

使用 `PascalCase` 来命名

```typescript
class Foo { }
```

类成员和类函数使用驼峰大小写(`camelCase`)

```typescript
class Foo {
    bar: number;
    baz() { }
}
```

## Interface

使用 `PascalCase` 来命名

成员使用驼峰大小写(`camelCase`)

不要使用 `I` 作为前缀

```typescript
interface Foo {
  name: string;
  say(): void;
}
```

## Type

使用 `PascalCase` 来命名

成员使用驼峰大小写(`camelCase`)

## Namespace

使用 `PascalCase` 来命名

正常情况下禁止使用 `namespace`，请采用 `ES6 Module` 形式

```typescript
namespace Foo {
}
```

## Enum

使用 `PascalCase` 来命名

```typescript
enum Color {
}
```

成员使用 `PascalCase` 来命名

```typescript
enum Color {
    Red
}
```

## null vs. undefined

对于显式的不可用性，最好不要使用这两种方法

```typescript
// Bad
let foo = { x: 123, y: undefined };

// Good
let foo: { x: number, y?: number } = { x:123 };
```

一般使用 `undefined`(请考虑返回一个类似 `{valid:boolean, value?: Foo}` )

```typescript
// Bad
return null;

// Good
return undefined;
```

如果它是 API 或常规的一部分，则使用 `null`

```typescript
// Bad
cb(undefined)

// Good
cb(null)
```

对为空或未定义的对象使用真值检查

```typescript
// Bad
if (error === null)

// Good
if (error)
```

使用 `== null` / `!= null` (非 `===` / `!==`) 来检查基元上的 `null` / `undefined`，因为它适用于 `null` / `undefined` ，但不适用于其他虚假值(如 `''`，`0`，`false`)

```typescript
// Bad
if (error !== null) // 不排除 undefined
  
// Good
if (error != null) // 排除 null 和 undefined
```

## Formatting

除了使用`单引号`，其他风格统一使用 `Prettier` 默认值

## Single vs. Double Quotes

除非转义，否则使用单引号(`'`)

当不能使用双引号时，请尝试使用反引号(``` ` ```)

## Tabs vs. Spaces

使用`两个`空格，不要使用 `Tab` 键

## Use Semicolons

使用分号

## Annotate Arrays as Type[]

将数组注释为 `Foo: Foo[]` 而不是 `Foo: Array<Foo>`

## File Names

文件名使用 `camelCase`，例如 `accordion.ts`, `myControl.ts`, `utils.ts`, `map.ts` 等

## type vs interface

当需要一个`联合类型`或`交叉类型`时使用 `type`

```typescript
type Foo = number | { someProperty: number }
```

当你想要扩展或实现时，使用接口

```typescript
interface Foo {
  foo: string;
}
interface FooBar extends Foo {
  bar: string;
}
class X implements FooBar {
  foo: string;
  bar: string;
}
```

否则，就用那天让你开心的东西吧。我使用 [type](https://www.youtube.com/watch?v=IXAT3If0pGI)

### 联合类型(Union Types)

联合类型表示取值可以为多种类型中的一种

用竖线（|）分隔每个类型，所以number | string | boolean表示一个值可以是number，string，或boolean

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员

### 交叉类型（Intersection Types)

交叉类型是将多个类型合并为一个类型

这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 例如，Person & Serializable & Loggable同时是Person和Serializable和Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员

## == or ===

对于 TypeScript 用户来说，这两种方法都是安全的。推荐使用 `===`，因为这是 TypeScript 代码库中使用的