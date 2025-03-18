"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useToast } from "@/contexts/ToastContext";
import { useEffect, useRef, useState } from "react";

export default function Snake() {
    const [score, setScore] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { addToast } = useToast();

    useEffect(() => {
        if (!isRunning) return;
        console.log("Snake game mounted");
        
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (!canvas || !context) return;

        const gridSize = 20;
        const canvasSize = 400;
        const snake = [{ x: 200, y: 200 }, { x: 180, y: 200 }];
        let direction = { x: gridSize, y: 0 };
        let food = {
            x: Math.floor((Math.random() * canvasSize) / gridSize) * gridSize,
            y: Math.floor((Math.random() * canvasSize) / gridSize) * gridSize,
        };

        const drawGame = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "#ff0000";
            context.fillRect(food.x, food.y, gridSize, gridSize);

            const head = {
                x: snake[0].x + direction.x,
                y: snake[0].y + direction.y
            };
            snake.unshift(head);

            if (head.x === food.x && head.y === food.y) {
                setScore((prev) => prev + 1);
                food = {
                    x: Math.floor((Math.random() * canvasSize) / gridSize) * gridSize,
                    y: Math.floor((Math.random() * canvasSize) / gridSize) * gridSize
                };
            } else {
                snake.pop();
            }

            if (
                head.x < 0 || 
                head.x >= canvasSize || 
                head.y < 0 || 
                head.y >= canvasSize || 
                snake.slice(1).some(s => s.x === head.x && s.y === head.y)
            ) {
                clearInterval(gameInterval);
                addToast(`Game over! Your score: ${score}`, 'info', 5000);
                setIsRunning(false);
                return;
            }

            snake.forEach((s: {x:number, y:number}, i: number) => {
                context.fillStyle = i === 0 ? "#00ff00" : "#008000";
                context.fillRect(s.x, s.y, gridSize, gridSize);
            });
        };

        const handleKeydown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp":
                    if (direction.y === 0) direction = { x: 0, y: -gridSize };
                    break;
                case "ArrowDown":
                    if (direction.y === 0) direction = { x: 0, y: gridSize };
                    break;
                case "ArrowLeft":
                    if (direction.x === 0) direction = { x: -gridSize, y: 0 };
                    break;
                case "ArrowRight":
                    if (direction.x === 0) direction = { x: gridSize, y: 0 };
                    break;
            }
        };

        window.addEventListener("keydown", handleKeydown);

        const gameInterval: ReturnType<typeof setInterval> = setInterval(drawGame, 500);

        return () => {
            clearInterval(gameInterval);
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [isRunning]);

    const startGame = () => setIsRunning(true);
    const stopGame = () => setIsRunning(false);

    return (
        <>
            <Navbar />
                <main className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold mb-4">Snake Game</h1>
                    <canvas
                        ref={canvasRef}
                        width={400}
                        height={400}
                        className="border-2 border-black"
                    ></canvas>
                    <div className="flex items-center justify-between">
                        <p className="mt-4">Score: {score}</p>
                        <div>
                            {
                                !isRunning 
                                ? <button 
                                    onClick={startGame}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Start
                                </button>
                                : <button
                                    onClick={stopGame}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Stop
                                </button>
                            }
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    );
};