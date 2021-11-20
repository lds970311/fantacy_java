//CREATE AT: 2021-11-20
export default function insertImage(imgPath: string, element: HTMLElement, width: number, height: number) {
    const img = new Image();
    img.src = imgPath;
    img.width = width;
    img.height = height
    element.appendChild(img);
}
