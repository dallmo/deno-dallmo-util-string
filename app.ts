
/*
 * @module dallmo-util-string
 */

//////////////////////////////////////////////////////////////
/*
 * capitalize the first char of input_string,
 * return as a new string.
 *
 * @function capitalize 
 * @param {string} input_string
 * @returns {string} 
 */
function capitalize( input_string: string ): string{

  return input_string.charAt(0).toUpperCase() + input_string.slice(1);

}; // function
const cap = capitalize; // function alias
//////////////////////////////////////////////////////////////
/*
 * extract num char(s) from input_string, 
 * count from the first char,
 * then return as a new string.
 * 
 * @function head
 * @param {string} input_string - the input string to process
 * @param {number} num -  
 * @returns {string} return a string in the length of num
 */
function head( input_string: string, num: number ): string{

  return input_string.slice( 0,num );

}; // function
//////////////////////////////////////////////////////////////
/*
 * extract the last num char(s) from input_string, 
 * then return as a new string.
 * 
 * @function tail
 * @param {string} input_string - the input string to process
 * @param {number} num - 
 * @returns {string} return a string in the length of num
 */
function tail( input_string: string, num: number ): string{

  return input_string.slice( -num );

}; // function
//////////////////////////////////////////////////////////////
/*
 * @function test
 * @returns {string}
 */
function test(): string{
  return "ok";
}// 
//////////////////////////////////////////////////////////////
export {

  test,

  capitalize, cap,
  head,
  tail,

}; // export

