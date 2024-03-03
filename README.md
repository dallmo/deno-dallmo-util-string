# @dallmo/util-string

# overview
- a collection of string util under dallmo-util, published as deno module.
- re-written in typescript, migrated from nodejs to base only on deno standard libraries ; 
- published on both [deno land][link-1] and [jsr][link-2] ; 


# list of methods

- case_title
- case_lower
- case_upper
- head
- tail


# usage

## 1. running on deno, import via deno module

1. nothing to add via CLI.
2. create `test-via-deno-modules.ts` ; 

```
// this assumes the latest version
import * as dallmo_util_string from "https://deno.land/x/dallmo_util_string/mod.ts";

const input_string: string = "abcde";
console.log( "case title : ", dallmo_util_string.case_title( input_string ));
```

3. run the test file
```
deno run test-via-deno-modules.ts
```

## 2. running on deno, import via jsr

1. in CLI, add the module with :
```
deno add @dallmo/util-string
```

2. create `test-via-jsr.ts` ; 

```
import * as dallmo_util_string from "@dallmo/util-string";

const input_string: string = "abcde";
console.log( "case title : ", dallmo_util_string.case_title( input_string ));
```

3. run the test file
```
deno run test-via-jsr.ts
```




# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test with dependencies via deno modules : 
  - run `deno task test-deno` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 


[comments]: ----------------------------------
[link-1]: https://deno.land/x/dallmo_util_string
[link-2]: https://jsr.io/@dallmo/util-string
