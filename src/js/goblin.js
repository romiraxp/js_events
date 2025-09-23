export class Goblin {
    constructor(imageUrl) {
        this.imageUrl = imageUrl;
    }
    
    show(cell) {
        const img = document.createElement("img"); // создаем элемент image - наш гоблин
        numCol[cell].append(img);
    }
    
    hide() {
    
    }
}