import path from 'path'
// 1.提取扩展名
console.log(path.extname('./data/student.txt'));//.txt
console.log(path.extname('./data/student.txt.json'));//.json
console.log(path.extname('.json'));//.json
// 2.拼接路径
console.log(path.join('a', 'b', 'c'));
console.log(path.join('a', 'b', '../c', 'd'));
console.log(path.join('a', 'b', '..', 'c'));
// 3.拼接路径（绝对路径）
console.log(path.resolve('a', 'b', 'c'));
console.log(path.resolve('a', 'b', '../c', 'd'));
console.log(path.resolve('a', 'b', '..', 'c'));