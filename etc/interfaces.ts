
/**
 * this file defines all interfaces used in app.ts
*/
//////////////////////////////////////////////////////
interface Random_String_Option_Obj {

  random_string_length: number,
  array_char_avoid: string[],

}; // interface
//////////////////////////////////////////////////////
interface Random_String_Range_Obj {

  start: string,
  end: string,

}; // interface
//////////////////////////////////////////////////////
export type {

  Random_String_Option_Obj,
  Random_String_Range_Obj,

}; // export

