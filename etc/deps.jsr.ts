
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * jsr, which does not allow importing modules from deno.land/x via http.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assertEquals

//} from "jsr:@std/assert@^0.224.0";
} from "jsr:@std/assert"; // assume latest
////////////////////////////////////////////////////////////////////////////////
// remote modules
export * as dallmo_util_array from "jsr:@dallmo/util-array"; // assume latest
export * as dallmo_util_math  from "jsr:@dallmo/util-math";  // assume latest

////////////////////////////////////////////////////////////////////////////////
// local modules
export * from "../lib/util-random-string.ts";


