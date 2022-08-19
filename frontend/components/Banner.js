import { useEffect, useRef, useState } from "react";
import styles from './styles/Banner.module.sass';
import { textEN, textRU } from '../assets/text';
import { useSelector } from "react-redux";


export default function Banner() {
    const text = useSelector(state => state.language.text);
    const listWord = useRef('');
    const canvas = useRef('');

    useEffect(() => {

        if(listWord.current !== null) {
            showWord(listWord.current.childNodes);
            // requestAnimationFrame((time) => {
                
            // })
        }

        let ctx = canvas.current.getContext('2d'),
        w = canvas.current.width = window.innerWidth,
        h = canvas.current.height = window.innerHeight,
        particles = [],
        properties = {
            bgColor: '#fff',
            particleColor: Math.random() * 2 < 1 ? '#f01456' : '#2cf00e',
            particleRadius: w < 429 ? 3 : 4,
            particleCount: 30,
            particleMaxVelocity: 0.5,
            lineLength: w < 429 ? 74 : 170,
            particleLife: 10
        }

        window.onresize = () => {
            w = canvas.current.width = window.innerWidth;
            h = canvas.current.height = window.innerHeight
        }

        class Particle{
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.life = Math.random() * properties.particleLife * 60;
            }

            position() {
                this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *=-1 : this.velocityX;
                this.y + this.velocityY > w && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *=-1 : this.velocityY;
                this.x += this.velocityX;
                this.y += this.velocityY;
            }

            reDraw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = properties.particleColor;  
                ctx.fill();
            }

            reCalculateLife() {
                if(this.life < 1) {
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                    this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                    this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                    this.life = Math.random() * properties.particleLife * 60;
                }

                this.life --;
            }
        }

        function reDrawBackrgound() {
            ctx.fillStyle = properties.bgColor;
            ctx.fillRect(0, 0, w, h);
        }
        
        function drowLines() {
            let x1, y1, x2, y2, length, opacity;

            for (let i in particles) {
                
                for (let j in particles) {
                    x1 = particles[i].x;
                    y1 = particles[i].y;
                    x2 = particles[j].x;
                    y2 = particles[j].y;
                
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

                    if(length < properties.lineLength) {
                        opacity = 1 - length / properties.lineLength;
                        ctx.lineWidth = '0,2';
                        ctx.strokeStyle = `rgba(56, 138, 243, ${ opacity })`;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        ctx.stroke()
                    }

                }   

            }
        }

        function reDrawParticles() {
            for (let i in particles) {
                particles[i].reCalculateLife();
                particles[i].position();
                particles[i].reDraw();
            }
        }

        function loop() {
            reDrawBackrgound();
            reDrawParticles();
            drowLines();
            requestAnimationFrame((time) => {
                loop();
            })
        }

        function init() {
            for (let i = 0; i < properties.particleCount; i++) {
                particles.push(new Particle);
            };
            loop();
        }
        
        init();
    }, [])

    function showWord(words) {
        let count = 0;

        words.forEach((word, currentIndex) => {

            setTimeout(() => {
                count += 1;

                // show word

                word.classList.remove(styles.hideWord);


                // repeat anim
                
                if(count === words.length) {
                
                count = 0;

                setTimeout(() => {

                    showWord(words);

                }, 3300);

                }
                
                // hide word after show word

                setTimeout(() => {

                hideWord(words);

                }, 2200);

            }, 3000 * currentIndex);
        });
    }

    function hideWord(words) {

        words.forEach((word, currentIndex) => {

        setTimeout(() => {
            
            word.classList.add(styles.hideWord);

        }, 3200 * currentIndex);

        });
    }
    
    // components

    function ListWord(props) {
        const words = props.words;

        return words.map((word, index) => {


            return(

            <h1 
                className={ styles.hideWord }
                key={ index }
            >
                {word}
            </h1>

            )
        });

    }
    return (
        <section className={ styles.banner }>
            <div className={ styles.caption }>
                <h1 className={ styles.text }>{ text.banner.caption.text }</h1>
                <div 
                    className={ styles.word }
                    ref={ listWord }
                >
                    <ListWord words={ text.banner.caption.words }/>
                </div>
            </div>
            <canvas ref={ canvas } id={ styles.canvas }>

            </canvas>
        </section>
    )
}