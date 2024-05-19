class WaterfallFlowLayout {

  wrapNode = null;

  column = 3;

  imgWith = 0;

  // 存储每一列的高度
  columnHeights = [];

  imgList = [];

  constructor({ wrapNode, column, imgList }) {
    this.wrapNode = wrapNode;
    this.column = column;
    this.imgList = imgList;

    const wrapWidth = this.wrapNode.getBoundingClientRect().width;
    this.imgWith = wrapWidth / this.column;
    this.columnHeights = Array.from({ length: this.column }, () => 0);
    this.preloadImg();
  }

  // 预加载图片
  preloadImg() {
    this.imgList.forEach((imgItem) => {
      const imgEle = new Image();
      imgEle.src = imgItem.url;
      imgEle.alt = imgItem.alt;
    
      imgEle.addEventListener('load', () => {
        this.appendImage(imgEle);
      });
    
      imgEle.addEventListener('error', () => {
        console.error(`Image load error - ${imgItem.url}`);
      });
    });
  }

  appendImage(imgEle) {
    const imgGap = 10;
    const currentHeight = (this.imgWith / imgEle.width) * imgEle.height;
    const minHeight = Math.min(...this.columnHeights);
    const colIndex = this.columnHeights.findIndex(height => height === minHeight);

    imgEle.style.width = this.imgWith + 'px';
    imgEle.style.position = 'absolute';
    imgEle.style.top = minHeight + 'px';
    imgEle.style.left = colIndex * (this.imgWith + imgGap) + 'px';

    // 更新最小的高度
    this.columnHeights[colIndex] = minHeight + currentHeight + imgGap;

    this.wrapNode.appendChild(imgEle);
  }
}

new WaterfallFlowLayout({
  wrapNode: document.getElementById('waterfall-wrap'),
  column: 3,
  imgList: [
    { url: './images/1.jpg', alt: 'image-1' },
    { url: './images/2.jpg', alt: 'image-2' },
    { url: './images/3.jpg', alt: 'image-3' },
    { url: './images/4.jpg', alt: 'image-4' },
    { url: './images/5.jpg', alt: 'image-5' },
    { url: './images/6.jpg', alt: 'image-6' },
    { url: './images/7.png', alt: 'image-7' },
    { url: './images/8.jpg', alt: 'image-8' },
    { url: './images/9.jpg', alt: 'image-9' },
    { url: './images/10.jpg', alt: 'image-10' },
    { url: './images/11.png', alt: 'image-11' },
    { url: './images/12.jpg', alt: 'image-12' },
    { url: './images/13.jpg', alt: 'image-13' },
    { url: './images/14.jpg', alt: 'image-14' },
    { url: './images/15.png', alt: 'image-15' },
    { url: './images/16.png', alt: 'image-16' },
    { url: './images/17.jpg', alt: 'image-17' },
    { url: './images/18.jpg', alt: 'image-18' },
  ],
});