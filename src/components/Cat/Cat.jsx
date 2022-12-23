import React from 'react';
import './Cat.css';


class CatRun extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        cats: []
      }
    }
  
    componentDidMount() {
      window.addEventListener('mousemove', this.onMove);
    }

    componentWillUnmount () {}
  
    onCall = () => {
        let newCats=[]
        for(let i=0; i < Math.random()*10; i++) {
            newCats.push({name:'cate', id:Math.random()}); 
        }
        this.setState({ cats: newCats });
    }

    randPosition =() => Math.floor(Math.random()*100)
     
    randAnimation = () => Math.random().toFixed(1)
       
    randColors = () => Math.floor(Math.random()*255)

    onMove = (e) => {
        let cat = document.getElementById('cat')
        cat.style.top = e.offsetY +'px'
        cat.style.left = e.offsetX +'px'
  
        let catsBig = document.getElementById('cats-big')
        for(let i=0; i<catsBig.parentElement.children.length; i++) {
          catsBig.parentElement.children[i].style.top = e.offsetY +'px'
          catsBig.parentElement.children[i].style.left = e.offsetX +'px'
        }
      }
  
    render() {
      return (
        <div className='wrapper'>
          <div id='cat' className='cat'>
            cat
          </div>
          <div className='overflow'>
            <button onClick={this.onCall}>Call CATS</button>
            <div className='cats-group'>
                {this.state.cats.map(() => (
                    <div id='cats-big' className='one' 
                      style={{top: this.randPosition()+'%', left: this.randPosition()+'%',
                        background : "rgb("+this.randColors()+", "+ this.randColors()+", "+this.randColors()+")",
                        transition : 'all '+ this.randAnimation() + 's'
                      }}
                    >cat</div>
                  )   
                )}
            </div>
          </div>
        </div>
      )
    }
  }
  export default CatRun;