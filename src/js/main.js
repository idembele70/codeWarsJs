class reversemode {
        reverseWord(str="hello world!"){
              return  str.split(' ').reverse().join(' ')
        }
}

console.log(new reversemode().reverseWord());