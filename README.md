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
