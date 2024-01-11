
// deno test methods and other util methods
import { 

  assertEquals 

} from "../deps.ts";

// the methods of this module to be tested
import * as dallmo_util_string from "../mod.ts";


//////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-string", () => {

  assertEquals( dallmo_util_string.test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test method Cap / Capitalize", () => {

  const input_string: string = "abcde";
  let result: string;

      result = dallmo_util_string.cap( input_string );
      assertEquals( result, "Abcde");

      result = dallmo_util_string.capitalize( input_string );
      assertEquals( result, "Abcde");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test module method head", () => {

  const input_string: string = "abcde";
  const num: number = 2;
  const result: string = dallmo_util_string.head( input_string, num );

        assertEquals( result, "ab");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test module method tail", () => {

  const input_string: string = "abcde";
  const num: number = 2;
  const result: string = dallmo_util_string.tail( input_string, num );

        assertEquals( result, "de");

}); // Deno.test
//////////////////////////////////////////////////////////////

