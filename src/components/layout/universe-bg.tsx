import { useEffect, useRef } from "react";

const FireflyCanvas = ({
  starColor = "#ff00ff",
  starCount = 2000,
}: {
  starColor?: string;
  starCount?: number;
}) => {
  const canvasRef = useRef(null);
  const fireflies = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 4;
      }

      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
      }

      show() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        ctx.fillStyle = starColor;
        ctx.fill();
      }
    }

    const draw = () => {
      if (fireflies.current.length < starCount) {
        for (let j = 0; j < 10; j++) {
          fireflies.current.push(new Firefly());
        }
      }

      for (let i = fireflies.current.length - 1; i >= 0; i--) {
        const f = fireflies.current[i];
        f.move();
        f.show();
        if (f.x < 0 || f.x > w || f.y < 0 || f.y > h) {
          fireflies.current.splice(i, 1);
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      draw();
      requestAnimationFrame(loop);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.fillRect(0, 0, w, h);
    };

    // Initial setup
    handleResize();
    loop();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="bg-transparent fixed top-0 left-0 mix-blend-overlay pointer-events-none -z-[999999]"
    />
  );
};

export default FireflyCanvas;
