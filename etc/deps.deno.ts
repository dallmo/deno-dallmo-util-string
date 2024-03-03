
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

} from "https://deno.land/std@0.218.2/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////
