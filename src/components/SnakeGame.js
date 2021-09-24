/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import './../index.css';
import Snake from './Snake';
import Food from './Food';
import Modal from './Modal'
import { useEffect, useState } from 'react';
import { useInterval } from "./../useInterval";

const getRandomCordinates = () => {
    let min = 1;
    let max = 99;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x, y];
}

const SnakeGame = ({ onAbort }) => {
    const initialSnakeDots = [[6,12],[8,12],[10,12]];
    const initialFoodDot = getRandomCordinates();

    const [snakeDots, setSnakeDots] = useState(initialSnakeDots);
    const [foodDot, setFoodDot] = useState(initialFoodDot);
    const [direction, setDirection] = useState('RIGHT');
    const [speed, setSpeed] = useState(200);
    const [score, setScore] = useState(0)
    const [showModal, setShowModal] = useState(false);

    useInterval(() => moveSnake(), speed);

    useEffect(() => {
        checkIfOutOfBorders();
        checkIfCollapsed();
        checkFoodEat();
    }, [snakeDots])

    useEffect(() => {
        const onKeyDown = (e) => {
            e = e || window.event;
            switch (e.keyCode) {
                case 38:
                    setDirection('UP');
                    break;
                case 40:
                    setDirection('DOWN');
                    break;
                case 37:
                    setDirection('LEFT');
                    break;
                case 39:
                    setDirection('RIGHT');
                    break;
            }
        }
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [])

    const moveSnake = () => {
        let dots = [...snakeDots];
        let head = dots[dots.length - 1];
    
        switch (direction) {
          case 'RIGHT':
            head = [head[0] + 2, head[1]];
            break;
          case 'LEFT':
            head = [head[0] - 2, head[1]];
            break;
          case 'DOWN':
            head = [head[0], head[1] + 2];
            break;
          case 'UP':
            head = [head[0], head[1] - 2];
            break;
        }

        dots.push(head);
        dots.shift();
        setSnakeDots(dots);
    }

    const checkIfOutOfBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
          onGameOver();
        }
      }

    const checkIfCollapsed = () => {
        let snake = [...snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach((dot) => {
            if(head[0] === dot[0] && head[1] === dot[1]){
                onGameOver();
            }
        })
    }

    const checkFoodEat = () => {
        let head = snakeDots[snakeDots.length - 1];
        let food = foodDot;
        if(head[0] === food[0] && head[1] === food[1]){
            setScore(score + 1);
            setFoodDot(getRandomCordinates);
            enlargeSnake();
            increaseSpeed()
        }
    }

    const enlargeSnake = () => {
        let newSnake = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
    }

    const increaseSpeed = () => {
        if (speed > 10) {
          setSpeed(speed - 10)
        }
      }

    const onGameOver = () => {
        setShowModal(true);
    }

    return (
        <div>
            {showModal ?
                <Modal onClose={onAbort} /> :
                <div>
                    <div className="game-area">
                        <Snake snakes={snakeDots} />
                        <Food dot={foodDot} />
                    </div>
                    <div className="score-card">
                        <p>Your Score</p>
                        <p>{score}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default SnakeGame
