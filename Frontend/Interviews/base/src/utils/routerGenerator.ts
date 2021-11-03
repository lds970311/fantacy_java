const routerGenerator = (routeArr: IRoute[]) => {
    const ul: HTMLElement = document.querySelector('.main > ul')!
    for (let i = 0; i < routeArr.length; i++) {
        const li: HTMLElement = document.createElement('li');
        const a: HTMLElement = document.createElement('a')
        a.setAttribute("href", routeArr[i].url)
        a.innerHTML = routeArr[i].name
        li.appendChild(a)
        ul?.appendChild(li)
    }
}

export default routerGenerator
