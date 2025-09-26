import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component{
    state = {
        head : 0,
        tail : 0,
        tossResultImage : HEADS_IMG_URL,
    }

    onTossCoin = () =>{
        const {head,tail} = this.state
        const toss = Math.floor(Math.random()*2)
        let tossResultNewImage = ''
        let newTail = tail 
        let newHead = head
        if(toss === 0 ){
            tossResultNewImage = HEADS_IMG_URL
            newHead +=1
        }else{
            tossResultNewImage = TAILS_IMG_URL
            newTail +=1
        }
        this.setState({
            tossResultImage : tossResultNewImage,
            head : newHead,
            tail : newTail
        })
    }
    render(){
        const {tossResultImage,head,tail}  = this.state
        const total = head + tail
        return(
            <div className="bg-container">
                <div className="coin-toss-container">
                    <h1 className="heading">Coin Toss Game</h1>
                    <p className="paragraph">Heads (or) Tails</p>
                    <img src={tossResultImage} alt="toss result" className="coin-image"/>
                    <button className="toss-button" type="button" onClick={this.onTossCoin}>Toss Coin</button>
                    <div className="results-container">
                        <p className="result">Total:{total}</p>
                        <p className="result">Heads: {head}</p>
                        <p className="result">Tails: {tail}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinToss