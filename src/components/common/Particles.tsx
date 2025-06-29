import { useEffect, useRef } from "react";

type Firefly = {
  x: number;
  y: number;
  s: number;
  ang: number;
  v: number;
  move: () => void;
  show: () => void;
};

const Particles = ({
  particlesColor = "#ff00ff",
  particlesCount = 2000,
}: {
  particlesColor?: string;
  particlesCount?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireflies = useRef<Firefly[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    let w: number, h: number;

    if (canvas) {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    class Firefly {
      x: number;
      y: number;
      s: number;
      ang: number;
      v: number;

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
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        if (ctx) ctx.fillStyle = particlesColor;
        ctx?.fill();
      }
    }

    const draw = () => {
      if (fireflies.current.length < particlesCount) {
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
      ctx?.clearRect(0, 0, w, h);
      draw();
      requestAnimationFrame(loop);
    };

    const handleResize = () => {
      if (canvas) {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }
      ctx?.fillRect(0, 0, w, h);
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
      className="fixed inset-0 pointer-events-none -z-[999999]"
    />
  );
};

export default Particles;
