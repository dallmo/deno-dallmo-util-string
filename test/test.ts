
// deno test methods and other util methods
import { 

  assertEquals,
  dallmo_util_math,

} from "../etc/deps.ts";

import {

  default_random,

} from "../etc/default-random.ts";

// the methods of this module to be tested
import * as dallmo_util_string from "../mod.ts";


//////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-string", () => {

  assertEquals( dallmo_util_string.test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test - case_title", () => {

  let input_string: string;
  let result: string;
  const expected_result: string = "Abcde";

      input_string = "abcde";
      result = dallmo_util_string.case_title( input_string );
      assertEquals( result, expected_result );
      
      input_string = "ABCDE";
      result = dallmo_util_string.case_title( input_string );
      assertEquals( result, expected_result );
      
      input_string = "Abcde";
      result = dallmo_util_string.case_title( input_string );
      assertEquals( result, expected_result );
      
      input_string = "aBcDe";
      result = dallmo_util_string.case_title( input_string );
      assertEquals( result, expected_result );

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test - case_lower", () => {

  let input_string: string;
  let result: string;
  const expected_result: string = "abcde";

      input_string = "abcde";
      result = dallmo_util_string.case_lower( input_string );
      assertEquals( result, expected_result );
      
      input_string = "ABCDE";
      result = dallmo_util_string.case_lower( input_string );
      assertEquals( result, expected_result );
      
      input_string = "Abcde";
      result = dallmo_util_string.case_lower( input_string );
      assertEquals( result, expected_result );
      
      input_string = "aBcDe";
      result = dallmo_util_string.case_lower( input_string );
      assertEquals( result, expected_result );

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test - case_upper", () => {

  let input_string: string;
  let result: string;
  const expected_result: string = "ABCDE";

      input_string = "abcde";
      result = dallmo_util_string.case_upper( input_string );
      assertEquals( result, expected_result );
      
      input_string = "ABCDE";
      result = dallmo_util_string.case_upper( input_string );
      assertEquals( result, expected_result );
      
      input_string = "Abcde";
      result = dallmo_util_string.case_upper( input_string );
      assertEquals( result, expected_result );
      
      input_string = "aBcDe";
      result = dallmo_util_string.case_upper( input_string );
      assertEquals( result, expected_result );

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test - head", async(t) => {

  const input_string: string = "abcde";
  let num: number;
  let result: string;
  let expected_result: string;

  //---------------------------------------------------------
  // steps to test on different cases
  // num < input_string char num
  await t.step("step : num < input_string char num", () => {
    
    num = 2; expected_result = "ab";
    result = dallmo_util_string.head( input_string, num );
    assertEquals( result, expected_result );
    
  }); // step
  //.................................................
  // num > input_string char num
  await t.step("step : num > input_string char num", () => {
    
    num = 20; expected_result = input_string;
    result = dallmo_util_string.head( input_string, num );
    assertEquals( result, expected_result );
    
  }); // step
  //.................................................
  // num = 0
  await t.step("step : num = 0", () => {

    num = 0; expected_result = "";
    result = dallmo_util_string.head( input_string, num );
    assertEquals( result, expected_result );
  
  }); // step
  //.................................................
  // num < 0
  await t.step("step : num < 0", () => {

    num = -1; expected_result = "";
    result = dallmo_util_string.head( input_string, num );
    assertEquals( result, expected_result );

  }); // step
  //.................................................
}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test - tail", async(t) => {

  const input_string: string = "abcde";
  let num: number;
  let result: string;
  let expected_result: string;

  //---------------------------------------------------------
  // steps to test on different cases
  // num < input_string char num
  await t.step("step : num < input_string char num", () => {
    
    num = 2; expected_result = "de";
    result = dallmo_util_string.tail( input_string, num );
    assertEquals( result, expected_result );
    
  }); // step
  //.................................................
  // num > input_string char num
  await t.step("step : num > input_string char num", () => {
    
    num = 20; expected_result = input_string;
    result = dallmo_util_string.tail( input_string, num );
    assertEquals( result, expected_result );
    
  }); // step
  //.................................................
  // num = 0
  await t.step("step : num = 0", () => {

    num = 0; expected_result = "";
    result = dallmo_util_string.tail( input_string, num );
    assertEquals( result, expected_result );
  
  }); // step
  //.................................................
  // num < 0
  await t.step("step : num < 0", () => {

    num = -1; expected_result = "";
    result = dallmo_util_string.tail( input_string, num );
    assertEquals( result, expected_result );

  }); // step
  //.................................................
}); // Deno.test, tail
//////////////////////////////////////////////////////////////
Deno.test( "test - random", async(t) => {

  let result: string;
  let result_length: number;
  //.................................................
  // 1. output length : == 6, default
  await t.step("step: output string length, default is 6", () => {

    result = dallmo_util_string.random();
    result_length = result.length;
    assertEquals( result_length, 6 );

  }); // step
  //.................................................
  // 2. output length : random integer 1 - 999
  await t.step("step: output string length, random 1 - 999 ", () => {

    const random_string_length: number = dallmo_util_math.random_integer(1,999);
    const option_obj: any = {
      random_string_length: random_string_length,
      array_char_avoid: default_random.array_char_avoid,
    };
    result = dallmo_util_string.random( option_obj );
    result_length = result.length;
    assertEquals( result_length, random_string_length );

  }); // step
  //.................................................

}); // Deno.test, random
//////////////////////////////////////////////////////////////



