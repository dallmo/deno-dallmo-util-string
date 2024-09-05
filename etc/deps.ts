
/**
 * --------------------------
 * for deno modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * deno.land/x ; when this is used for publishing to jsr,
 * it will cause errors.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assertEquals

//} from "https://deno.land/std@0.218.2/assert/mod.ts";
// assum latest version instead
} from "https://deno.land/std/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////

export * as dallmo_util_array from "https://deno.land/x/dallmo_util_array/mod.ts";
export * as dallmo_util_math  from "https://deno.land/x/dallmo_util_math/mod.ts";

export * as util_random_string from "../lib/util-random-string.ts";

