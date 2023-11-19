// const dots = [[1, 1], [2, 1], [2, 2], [1, 2]]
const dots= [[-1, -1], [1, 1], [1, -1], [-1, 1]]

// 각 원소에서 x - y 값을 구한다.
const getRectangleSize = (dots) => {

    const width = []
    const height = []

    dots.forEach(el => {
   
        width.push(el[0])
        height.push(el[1])
    });
    const x = Math.max(...width) - Math.min(...width)
    const y = Math.max(...height)- Math.min(...height)

    return x*y
}
console.log(getRectangleSize(dots))


