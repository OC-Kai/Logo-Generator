//shape class to be extended

class shape {
constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
}
};




class square extends shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render(){
       return `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="150" height="150" stroke="black" stroke-width="3" fill="${this.color}" />
        <text x="80" y="80" font-size="60" text-anchor="middle" alignment-baseline="central" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}



class triangle extends shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render(){
       return `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="75,10 0,140, 150,140" stroke="black" stroke-width="3" fill="${this.color}" />
        <text x="75" y="100" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class circle extends shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render(){
       return `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="100" stroke="black" stroke-width="3" fill="${this.color}" />
        <text x="150" y="150" font-size="70" text-anchor="middle" alignment-baseline="central" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = {circle, square, triangle};