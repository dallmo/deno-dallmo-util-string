/*
  default parameter values for the function random in app.ts
*/

import {

  Random_String_Option_Obj,

} from "./interfaces.ts";
//////////////////////////////////////////////////
// to avoid a certain set of chars
const array_char_avoid: string[] = [
  "1,", "i", "l",
  "0", "o",
  "b", "d",
  "m", "n",
];

// the length of final output string
const random_string_length: number = 6;

// group these together
const default_random: Random_String_Option_Obj = {

  random_string_length: random_string_length,
  array_char_avoid: array_char_avoid,

}; // default

//////////////////////////////////////////////////
export {

  default_random,

}; // export

