# vcss
A 1% improved scss plugin
***

## ALERT
> It's still in Dev level so hold on and don't use it in production.

## Why?
> Because i hate the css variables syntax.

## How?
> Just write your scss code then use vcss to compile it into a cute css code.

## When?
> When you aren't defining your ` $var ` outside ` :root {  }. `

## Cool!
> Thank you!

## Cli options ?
> you have 2 options for now `[--r/--replace]` `[--w/--watch]`
### Examples on cli usage
```
vcss file.scss 
#will replace variables and compile it to css file
```

```
vcss file.scss --r 
#will replace variables and produce a scss (if you're using a bundler)
```

```
vcss *.scss --w
#will watch all scss files and compile them for you <3
```
## Any example?
> sure

```
/* scss code */
:root{
    $bg : red;
    $fg : yellow;
}

@media (max-width : 480px){
    :root{
        $bg : yellow;
        $fg : red;
    }
}


body{
    background: $bg;
    color: $fg;
}
```
### turned into :

```
/* css code */
:root {
  --bg: red;
  --fg: yellow; }

@media (max-width: 480px) {
  :root {
    --bg: yellow;
    --fg: red; } }

body {
  background: var(--bg);
  color: var(--fg);
 }
```

## ToDo
* Create plugins for bundlers
