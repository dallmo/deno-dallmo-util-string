
// deno test methods
import { assertEquals } from "../deps.ts";

// the methods of this module to be tested
import { 

  test,
  capitalize,
  cap,
  head,
  tail, 

} from "../mod.ts";

//////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-string", () => {

  assertEquals( test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test method Cap / Capitalize", () => {

  const input_string: string = "abcde";
  let result: string;

      result = cap( input_string );
      assertEquals( result, "Abcde");

      result = capitalize( input_string );
      assertEquals( result, "Abcde");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test module method head", () => {

  const input_string: string = "abcde";
  const num: number = 2;
  const result: string = head( input_string, num );

        assertEquals( result, "ab");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test module method tail", () => {

  const input_string: string = "abcde";
  const num: number = 2;
  const result: string = tail( input_string, num );

        assertEquals( result, "de");

}); // Deno.test
//////////////////////////////////////////////////////////////

