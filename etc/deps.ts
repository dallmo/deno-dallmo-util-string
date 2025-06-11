
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 * version contraints are required when publishing to jsr
 */

////////////////////////////////////////////////////////////////////////
// for testing
export {

  assertEquals

} from "jsr:@std/assert@^1.0.13";
////////////////////////////////////////////////////////////////////////
// remote modules
export * as dallmo_util_array from "jsr:@dallmo/util-array@^1.4.1"; // 
export * as dallmo_util_math  from "jsr:@dallmo/util-math@^1.3.1";  // 

////////////////////////////////////////////////////////////////////////
// local modules
export * as util_random_string from "../lib/util-random-string.ts";
