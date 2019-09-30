// https://codepen.io/sndrgb/pen/jLNbma

export default class Scroller {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.options = Object.assign({}, this.getDefaultOptions, options);
    this.ratio = window.devicePixelRatio || 1;

    this.textHeight = this.measureFontHeight().height;
    this.resize();

    this.yloc = 0;
    this.xloc = this.canvas.width;

    // eslint-disable-next-line no-unused-expressions
    this.animId;
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  get getDefaultOptions() {
    return {
      text: 'Ok, this is the default text',
      speed: 1,
      color: '#CC0000',
      font: '5rem Arial',
      padding: 20,
    };
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth * this.ratio;

    this.textHeight = this.measureFontHeight().height;
    const lineh = this.measureFontHeight().firstPixel;
    const h = (this.textHeight + (lineh * 2));
    this.canvas.height = h * this.ratio;

    this.canvas.style.width = `${this.canvas.clientWidth}px`;
    this.canvas.style.height = `${h}px`;

    this.context.scale(this.ratio, this.ratio);
  }

  init() {
    this.context.font = this.options.font;
    this.textWidth = this.context.measureText(this.options.text).width + this.options.padding;
    this.duplicator = Math.ceil(this.canvas.width / this.textWidth) + 1;

    this.x = [];

    for (let i = 0; i < this.duplicator; i += 1) {
      const pos = (i * this.textWidth) + (this.options.padding * (i + 1)) + this.canvas.width;
      this.x.push(pos);

      if (i === 1) {
        this.originalX = pos;
      }
    }
  }

  animate() {
    this.animId = requestAnimationFrame(() => {
      this.animate();
    });

    this.x.forEach((el, i) => {
      if (this.textWidth + this.x[i] < 0) {
        this.x[i] = (this.textWidth * (this.duplicator - 1)) + (this.options.padding * (this.duplicator + 1));
      } else {
        this.x[i] -= this.options.speed;
      }
    });

    this.drawText();
  }

  setFont() {
    this.context.font = this.options.font;
    this.context.fillStyle = this.options.textColor;
    this.context.textAlign = 'left';
    this.context.textBaseline = 'top';
  }

  drawText() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.setFont();

    for (let i = 0; i < this.duplicator; i += 1) {
      this.context.fillText(this.options.text, this.x[i], this.yloc);
    }
  }

  measureFontHeight() {
    this.setFont();
    this.context.fillText(this.options.text, 0, 0);
    const { data } = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

    let firstY = -1;
    let lastY = -1;

    // loop through each row
    for (let y = 0; y < this.canvas.height; y += 1) {
      // loop through each column
      for (let x = 0; x < this.canvas.width; x += 1) {
        const alpha = data[((this.canvas.width * y) + x) * 4 + 3];

        if (alpha > 0) {
          firstY = y;
          break;
        }
      }

      if (firstY >= 0) break;
    }

    // loop through each row, this time beginning from the last row
    for (let y = this.canvas.height; y > 0; y -= 1) {
      // loop through each column
      for (let x = 0; x < this.canvas.width; x += 1) {
        const alpha = data[((this.canvas.width * y) + x) * 4 + 3];

        if (alpha > 0) {
          lastY = y;
          // exit the loop
          break;
        }
      }

      if (lastY >= 0) break;
    }

    return {
      height: lastY - firstY,
      firstPixel: firstY,
      lastPixel: lastY,
    };
  }
}
