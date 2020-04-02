import './Home.css';
import React, { Component } from 'react';

class Canvas extends Component
{

  constructor(props) 
  {
    super(props);
    this.state = 
    {
      particles : [],
    }
    this.ref = React.createRef();
  }

  componentDidMount() 
  {
    let canvas = this.ref.current;
    this.resizeCanvas();
    this.interval = setInterval(() => this.update(), 1000/60);
    this.initParticles(100 , canvas);
    window.addEventListener('resize', this.resizeCanvas());
  }

  componentWillUnmount() 
  {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.updateDimensions);
  }

  initParticles(amount, canvas)
  {
    let particles = [];

    for (let i = 0; i < amount; i++) 
    {
      let size = 1;
      let x = getRandom(0, canvas.width);
      let y = getRandom(0, canvas.height);
      let dx = getRandom(-1.0, 1.0);
      let dy = getRandom(-1.0, 1.0);

      particles.push({ size, x, y, dx, dy, attached: new Set() });
    }

    this.setState(prevState => (
    {
      ...prevState,
      particles : particles
    }));
  }

  resizeCanvas()
  {
    let canvas = this.ref.current;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    
    canvas.width = width;
    canvas.height = height;
  }

  update()
  {
    let canvas = this.ref.current;
    let particles = this.state.particles;

    particles.forEach((particle, index) => 
    {

      if(particle.x > canvas.width || particle.x < 0)
      {
        particle.dx = -particle.dx;
      }

      if(particle.y > canvas.height || particle.y < 0)
      {
        particle.dy = -particle.dy;
      }

      particle.x = particle.x + particle.dx;
      particle.y = particle.y + particle.dy;

      particles.forEach(other =>
      {
        if(particle !== other)
        {
          if(distance(particle.x, particle.y, other.x , other.y) < 100 && !other.attached.has(particle))
          {
            particle.attached.add(other);
          }
          else
          {
            particle.attached.delete(other);
          }
        }
      });

      particles[index] = particle;
    });

    this.setState(prevState => ({
      ...prevState,
      particles : particles
    }));

    this.draw(canvas);
  }

  draw(canvas)
  {
    let context = canvas.getContext('2d');
    let particles = this.state.particles;

    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => 
    {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
      context.fill();

      particle.attached.forEach(other => 
        {
          context.strokeStyle = "rgba(0, 0, 0, 0.3)";
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();  
        })
    });
  }

  render()
  {
    return(
      <canvas ref={this.ref}/>
    );
  }
}
export default Canvas;


function distance (x1, y1, x2, y2)
{
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

function getRandom(min, max)
{
  return Math.random() * (max - min) + min;
}




