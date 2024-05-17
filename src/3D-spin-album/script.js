const allImg = document.getElementsByTagName("img");
const centerAxisEle = document.getElementById("center-axis");

// 半径
const radius = 60 * allImg.length;

let x = -10;
let y = 0;
let z = -radius;

centerAxisEle.style.transform = `translateZ(${z}px) rotateX(${x}deg) rotateY(${y}deg)`;

Array.prototype.forEach.call(allImg, function (el, index) {
  // 旋转角度
  const rotateDeg = index * (360 / allImg.length);
  // 动画时间
  const animateTime = index * 0.1;
  el.style.transform = `rotateY(${rotateDeg}deg) translateZ(${radius}px)`;
  el.style.transition = `transform 1s ${animateTime}s`;

  el.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
});

// 实现鼠标拖动效果
const useMouseMove = (callback) => {
  // 鼠标拖动偏移量
  let preX = null;
  let preY = null;

  const handleMouseMove = (event) => {
    if (preX === null || preY === null) {
      return;
    } else {
      const offsetX = event.clientX - preX;
      const offsetY = event.clientY - preY;

      //除以 10 ，降低灵敏度
      x -= (offsetY / 10);
      y += (offsetX / 10);

      callback();

      preX = event.clientX;
      preY = event.clientY;
    }
  };

  const handleMouseDown = (event) => {
    preX = event.clientX;
    preY = event.clientY;
    document.addEventListener('mousemove', handleMouseMove);
  };
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);

  return () => {
    document.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mouseup', handleMouseUp);
  };
};

// 鼠标滚轮缩放效果
const useMouseWheel = (callback) => {
  const handleMouseRoll = (event) => {
    z += (event.deltaY < 0) ? 50 : -50;
    callback();
  };

  document.addEventListener('wheel', handleMouseRoll);

  return () => {
    document.removeEventListener('wheel', handleMouseRoll);
  };
}

useMouseMove(() => {
  centerAxisEle.style.transform = `translateZ(${z}px) rotateX(${x}deg) rotateY(${y}deg)`;
});

useMouseWheel(() => {
  centerAxisEle.style.transform = `translateZ(${z}px) rotateX(${x}deg) rotateY(${y}deg)`;
});