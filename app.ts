
/*
 * @module dallmo-util-string
 */

//////////////////////////////////////////////////////////////
/**
 * convert the input_string as title case,
 * then return as a new string.
 * --------------------
 * @function case_title 
 * @param {string} input_string
 * @returns {string} 
 */
function case_title( input_string: string ): string{

  /**
   * 1. convert the whole string to lowercase ;
   * 2. capture the first character ; 
   * 3. make it to uppercase ; 
   * 4. concate it with another string, which was the input_string
   *    with the 1st char removed ; 
   */
  const string_head: string = input_string.slice(0,1).toUpperCase();
  const string_tail: string = input_string.slice(1).toLowerCase();

  return string_head.concat( string_tail );

}; // function
//////////////////////////////////////////////////////////////
/**
 * convert the input_string as lowercase,
 * then return as a new string.
 * just an alise function to "toLowerCase()".
 * --------------------
 * @function case_lower
 * @param {string} input_string
 * @returns {string} 
 */
function case_lower( input_string: string ): string{

  return input_string.toLowerCase();

}; // function
//////////////////////////////////////////////////////////////
/**
 * convert the input_string as uppercase,
 * then return as a new string.
 * just an alise function to "toUpperCase()".
 * --------------------
 * @function case_upper
 * @param {string} input_string
 * @returns {string} 
 */
function case_upper( input_string: string ): string{

  return input_string.toUpperCase();

}; // function
//////////////////////////////////////////////////////////////
/**
 * extract num char(s) from input_string, 
 * count from the first char,
 * then return as a new string.
 * --------------
 * @function head
 * @param {string} input_string - the input string to process
 * @param {number} num - num of chars to return 
 * @returns {string} 
 */
function head( input_string: string, num: number ): string{

  let return_string: string;
  if( num <= 0 ){
    return_string = "";
  }else{
    return_string = input_string.slice( 0,num );
  }; // if else

  return return_string;

}; // function
//////////////////////////////////////////////////////////////
/**
 * extract the last num char(s) from input_string, 
 * then return as a new string.
 * --------------
 * @function tail
 * @param {string} input_string - the input string to process
 * @param {number} num - num of chars to return
 * @returns {string} 
 */
function tail( input_string: string, num: number ): string{

  let return_string: string;
  if( num <= 0 ){
    return_string = "";
  }else{
    return_string = input_string.slice( -num );
  }; // if else

  return return_string;

}; // function
//////////////////////////////////////////////////////////////
/**
 * test connecting to this module from parent
 * --------------
 * @function test
 * @returns {string}
 */
function test(): string{
  return "ok";
}// 
//////////////////////////////////////////////////////////////
export {

  test,

  case_title,
  case_lower,
  case_upper,
  head,
  tail,

}; // export
