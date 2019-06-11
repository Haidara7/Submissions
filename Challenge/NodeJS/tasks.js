
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var arr = ['task1','task2','task3','task4'];
function onDataReceived(text) {
  var arg = text.trim('').split(" ")
  var arg1= text.trim('').split(" ")

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(arg[0] === 'hello' || text === 'hello\n'){
    hello(arg);
  }
  
  else if (text === 'help\n'){
    help();

  }
  else if (text === 'list\n'){
    list(arr);
  }
  else if (arg1[0] === 'add' ||text === 'add\n'){
    add(arg1,arr);
  }
  else if (text === 'remove\n'){
    remove();
  }
  // else if(text === 'remove 1\n'){
  //   removeFirst();
  // }
  // else if (text === 'remove 2\n'){
  //   removeSecond();
  // }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(pr){
  console.log(pr.join(" ") + "!")
}
// help  that lists all the possible commands , if the user wants to know the commands in our code.
function help(){
  console.log('if you write "hello" + text you will get "hello + your text + !"\nquit\nexit\nunknown command\n')
}
function list(haidara){
  for(var i =0; i<haidara.length; i++){
  console.log([i+1] +")"+ haidara[i])
  }
}
function add(haidaraArr,arr){
  if(haidaraArr[1]){
    haidaraArr.shift()
    arr.push(haidaraArr.join(" "))
  }
  else{
  
  console.log("error")
  }
}
function remove(){
  
arr.pop();

}
function removeFirst(){
arr.shift();
}
function removeSecond (){
arr.splice(1,1);
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Haidara Soifeh")
