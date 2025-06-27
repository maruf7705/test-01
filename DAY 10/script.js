

username = prompt("What is your name")

count = username.length
username = `@${username}`
username_2= username.concat("a",count)
username_1 = `${username}${count}`
console.log(username_1)
console.log(username_2)