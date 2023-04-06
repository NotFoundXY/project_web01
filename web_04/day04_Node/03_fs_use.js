//fs.access(路径，回调函数) 判断文件是否存在
import fs from 'fs'
const filePath = './data/student.txt'
fs.access(filePath, (err) => {
    if (err) {
        console.log('此路径文件不存在');
    } else {
        console.log('文件存在');
        // 写入内容 fs.writeFile(路径，写入数据，回调函数)
        fs.writeFile(filePath, '你好 node', (err) => {
            if (err) {
                console.log('写入失败');
            } else {
                console.log('写入成功');
            }
        })
        // 读取内容
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                console.log('读取失败');
            } else {
                console.log(data);
                console.log(data.toString());
            }
        })
    }

})