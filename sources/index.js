import './style.css';

class CircularProgressBar {
  constructor({ pieName }) {
    this.pieName = pieName;
    this.pieElement = document.querySelectorAll(`.${pieName}`);
    this.pieElement.forEach((dataConfig, index) => {
      const jsonData = JSON.parse(dataConfig.dataset.pie);
      const {
        percent,
        colorSlice,
        strokeWidth,
        opacity,
        number,
        colorCircle,
        size,
        fontSize,
        fontWeight,
        fontColor,
        time,
        end
      } = jsonData;
      this.test = jsonData;
      this.index = index;
      this.percent = percent || 65;
      this.colorSlice = colorSlice || '#00a1ff';
      this.strokeWidth = strokeWidth || 10;
      this.opacity = opacity || 0.1;
      this.number = typeof number === "undefined" ? true : false;
      this.colorCircle = colorCircle;
      this.size = size || 200;
      this.fontSize = fontSize || '3rem';
      this.fontWeight = fontWeight || 700;
      this.fontColor = fontColor || '#365b74';
      this.time = time || 30;
      this.end = 264;

      this.createSvg();
    })
  }

  hexTorgb(fullhex) {
    const hex = fullhex.substring(1, 7);
    const rgb = `${parseInt(hex.substring(0, 2), 16)}, ${parseInt(hex.substring(2, 4), 16)}, ${parseInt(hex.substring(4, 6), 16)}`;
    return rgb;
  }

  circularBar() {
    let stroke = document.querySelector(`.${this.pieName}-circle-${this.index}`);
    
    this.percentElement();
    
    const options = {
      colorSlice: this.colorSlice,
      strokeWidth: this.strokeWidth,
      end: this.end,
      time: this.time,
      percent: this.percent,
      number: this.number,
      index: this.index
    }

    for (let i = 0; i <= options.end; i++) {
      setTimeout(() => {
        if (i > options.percent) return;
        if (options.number) {
          this.percentElementUpdate(i, options.index)
        }

        let d = parseInt(i * 2.64);
        stroke.setAttribute('style', `fill: transparent; stroke: ${options.colorSlice}; stroke-width: ${options.strokeWidth}; stroke-dashoffset: 66; stroke-dasharray: ${d} ${options.end - d}`);
      }, i * options.time);
    }

    const boxShadow = !this.colorCircle
      ? `border-radius: 50%; box-shadow: inset 0px 0px ${this.strokeWidth}px ${this.strokeWidth}px rgba(${this.hexTorgb(this.colorSlice)}, ${this.opacity})`
      : '';

    this.pieElement[this.index].setAttribute('style', `width: ${this.size}px; height: ${this.size}px;  position: relative; ${boxShadow}`);

  }

  percentElement() {
    const percent = document.createElement('div');
    percent.className = `percent-${this.index}`
    percent.setAttribute('style', `position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: ${this.fontSize}; font-weight: ${this.fontWeight}; color: ${this.fontColor}`);
    
    this.pieElement[this.index].appendChild(percent);
  }

  percentElementUpdate(numbers, index) {
    return document.querySelector(`.percent-${index}`).innerText = `${numbers}%`;
  }

  createSvg() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    const circleTop = this.circleSvg();
    const circleBottom = this.circleSvg();
    circleTop.setAttributeNS(null, 'class', `${this.pieName}-circle-${this.index}`);

    if (this.colorCircle) {
      circleBottom.setAttributeNS(null, 'fill', 'transparent');
      circleBottom.setAttributeNS(null, 'style', `fill: transparent; stroke: ${this.colorCircle}; stroke-width: ${this.strokeWidth}px;`);
      svg.appendChild(circleBottom);
    }

    svg.setAttributeNS(null, 'width', this.size);
    svg.setAttributeNS(null, 'height', this.size);
    svg.setAttributeNS(null, 'viewBox', '0 0 100 100');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

    svg.appendChild(circleTop);

    this.pieElement[this.index].appendChild(svg);
    this.circularBar();
  }

  circleSvg() {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttributeNS(null, 'cx', 50);
    circle.setAttributeNS(null, 'cy', 50);
    circle.setAttributeNS(null, 'r', 42);
    return circle;
  }

}

export default CircularProgressBar;