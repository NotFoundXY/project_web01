const foot = [1]
const fourAd = [2]
const freshFood = [3]
const gift = [4]
const search = [5]
const worldFruit = [6]
import fs from 'fs'
fs.writeFile('./data/foot.json', JSON.stringify(foot), () => { })
fs.writeFile('./data/fourAd.json', JSON.stringify(fourAd), () => { })
fs.writeFile('./data/freshFood.json', JSON.stringify(freshFood), () => { })
fs.writeFile('./data/gift.json', JSON.stringify(gift), () => { })
fs.writeFile('./data/search.json', JSON.stringify(search), () => { })
fs.writeFile('./data/worldFruit.json', JSON.stringify(worldFruit), () => { })