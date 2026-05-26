import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Define morning/day as between 6:00 AM and 6:00 PM (18:00)
  const [isMorning, setIsMorning] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
  });

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsMorning(hour >= 6 && hour < 18);
    };
    // Check every 30 seconds
    const interval = setInterval(checkTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMorning) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters (Japanese katakana + numbers + symbols)
    const chars = "アイウエオカキクケコサシスセソタチツテト...0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\@#$%^&*";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track Y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      const isDark = theme === "dark" || 
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

      // Semi-transparent background to create fade effect
      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Varying opacity for depth effect
        const opacity = Math.random() * 0.4 + 0.15;
        ctx.fillStyle = isDark 
          ? `rgba(93, 186, 125, ${opacity})` // Green (#5dba7d) in Dark Theme (Green Theme)
          : `rgba(74, 111, 165, ${opacity})`; // Blue (#4a6fa5) in Light Theme (Blue Theme)
        ctx.fillText(char, x, y);

        // Brighter/darker leading character
        if (Math.random() > 0.98) {
          ctx.fillStyle = isDark ? "#ffffff" : "#000000";
          ctx.fillText(char, x, y);
        }

        // Reset drop to top with random delay
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Run the animation
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme, isMorning]);

  // If it is night, we do not render the Matrix Rain (showing only the simple background grid/dots)
  if (!isMorning) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.08 }}
    />
  );
};

export default MatrixRain;
