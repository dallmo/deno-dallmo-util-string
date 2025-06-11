
/////////////////////////////////////////////
import{

  dallmo_util_array,

} from "../etc/deps.ts";
/////////////////////////////////////////////
import {

  Random_String_Option_Obj,
  Random_String_Range_Obj,

} from "../etc/interfaces.ts";
/////////////////////////////////////////////

/*
// optional, to avoid a certain set of chars
const array_char_avoid: string[] = [
  "1,", "i", "l",
  "0", "o",
  "b", "d",
  "m", "n",
];

// optional, default 6
const random_string_length: number = 6;
*/

/////////////////////////////////////////////
/*
function random_string( 
  option_obj: Random_String_Option_Obj = {
    random_string_length: random_string_length,
    array_char_avoid: array_char_avoid,
  }): string {
*/

function main( option_obj: Random_String_Option_Obj ): string {

  const random_string_length: number = option_obj.random_string_length;
  const array_char_avoid: string[]   = option_obj.array_char_avoid;

  //---------------------------------------------------------------
  // get the charcode on each of the above
  const array_code_avoid: number[] = array_char_avoid.map( i => i.charCodeAt(0));
        // console.log( "the list of char codes to avoid : ", array_code_avoid );

  //---------------------------------------------------------------
  /*
    in this app, only numbers and lowercase letters will be used
  */
  const range_num: Random_String_Range_Obj = {
    start: "0",
    end: "9",
  }; // range_num

  const range_letter: Random_String_Range_Obj = {
    start: "a",
    end: "z",
  }; // range_letter


  //---------------------------------------------------------------
  // get the complete range of num and char
  const code_range_num: Random_String_Range_Obj = {
          start: range_num.start.charCodeAt(0).toString(),
          end:   range_num.end.charCodeAt(0).toString(),
        }; // code_range_num
        //  console.log( code_range_num );

  const code_range_letter: Random_String_Range_Obj = {
          start: range_letter.start.charCodeAt(0).toString(),
          end:   range_letter.end.charCodeAt(0).toString(),
        }; // code_range_letter
        //  console.log( code_range_letter );


  //---------------------------------------------------------------
  // generate the char code array with complete range
  let array_code_num: number[] = dallmo_util_array.gen_array_by_range( 
      parseInt( code_range_num.start ), 
      parseInt( code_range_num.end   ));
      //console.log( "array_code_num : ", array_code_num );

  let array_code_letter: number[] = dallmo_util_array.gen_array_by_range( 
      parseInt( code_range_letter.start ), 
      parseInt( code_range_letter.end   ));
      //console.log( "array_code_letter : ", array_code_letter );



  //---------------------------------------------------------------
  /*
    loop thro' the array of chars to avoid
    see if each item can be found in either of the above 2 array,
    once it is found ( with indexOf()), remove it ( with splice())
  */
  array_code_avoid.forEach( item => {

    array_code_num    = dallmo_util_array.remove_item( array_code_num, item );
    array_code_letter = dallmo_util_array.remove_item( array_code_letter, item );

  }); // array_char_avoid, loop

    //  console.log( "array_code_num : ", array_code_num );
    //  console.log( "array_code_letter : ", array_code_letter );


  //---------------------------------------------------------------
  // combine the 2 arrays of charcodes
  const array_code_filtered: number[] = array_code_num.concat( array_code_letter );

  //---------------------------------------------------------------
  // convert each code as char
  const array_char_filtered: string[] = array_code_filtered.map( i => String.fromCharCode(i) );
    //    console.log( "array_char_filtered : ", array_char_filtered );

    //---------------------------------------------------------------
    // generate the random string

    // generate a temp array, in the same length of the require random string
    const array_temp_1: number[] = Array.from( Array( random_string_length ).keys() );
  //        console.log( array_temp_1 );

    // map each value as a random char
    const array_temp_2: string[] = array_temp_1.map( item => dallmo_util_array.random_item( array_char_filtered ));

    // join array elements as the result string
    const result_rand_string: string = array_temp_2.join("");

  return result_rand_string;

}; // function
/////////////////////////////////////////////
export {

  main,

}; // export
