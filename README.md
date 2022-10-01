# Nekos-Best-Deno <img src="https://github.com/Yakiyo/nekos-best-deno/actions/workflows/test.yml/badge.svg">

Unofficial Deno module for [nekos.best](https://nekos.best).

If you're using Nodejs please use the
[official javascript wrapper](https://github.com/nekos-best/nekos-best.js).

## Usage

Import the module in your code

```ts
import { getMultiple, getRandom } from "https://deno.land/x/nekos_best/mod.ts";
```

The module only exports these two functions.

## Functions

### `getRandom(category?: string): NBResponse`

Gets a random data from the specified category. If category is not specified, it
uses a random category. Returns an [NBResponse](#nbresponse)

```ts
await getRandom("neko"); // Returns a result from neko endpoint
await getRandom(); // Returns a result from a random endpoint
```

### `getMultiple(category: string, amount: number = 5): NBResponse[]`

Gets multiple data from specified category. Category is required here. Argument
amount is the number of results to get. Defaults to 5 when unspecified and
maximum is 20. Returns an array of [NBResponse](#nbresponse)

```ts
await getMultiple("slap"); // [data1, data2, data3, ....]
```

## Types

### `NBResponse`

property `url` is always present, if the endpoint returns a gif, then it has
`anime_name` in it, otherwise it contains the other three properties for a
static image endpoint

```ts
{
  url: string,
  artist_href: string | undefined,
  artist_name: string | undefined,
  source_url: string | undefined,,
  anime_name: string | undefined,
}
```

## Author

**Nekos-Best-Deno** © [Yakiyo](https://github.com/Yakiyo). Authored and
maintained by Yakiyo.

Released under [MIT](https://opensource.org/licenses/MIT) License
