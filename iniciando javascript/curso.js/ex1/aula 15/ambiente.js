let num = [8, ,5 ,2, 8 , 9]

num.push(1)
num.sort()
console.log(num)
console.log('O vetor tem ' + num.length + ' posições')
console.log('O primeiro valor do vetor é ' + num[0])
let pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else{
    console.log('O valor 4 está ma posição ' + pos)
}