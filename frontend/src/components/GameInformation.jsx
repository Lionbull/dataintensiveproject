
import "../styles/gameinformation.css"

function gameInformation() {

    return (
      <>
        <div className="game-outer">
            <div className="game-wrapper-outer">

                <div className="game-wrapper-left">
                    <img src="https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="></img>
                </div>
                
                <div className="game-wrapper-right">
                    <div className="game-wrapper-right-inner">
                        <h1>Game Title</h1>
                        <p className="game-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet convallis metus, sit amet faucibus metus condimentum bibendum. Vivamus blandit at urna eu tincidunt.</p>
                    </div>
                    
                    <div className="game-wrapper-right-wrapper-inner">
                        <div className="game-wrapper-right-inner">
                            <p>20XX</p>
                            <p>Genre</p>
                            <p>Age limit</p>
                        </div>
                        <div className="game-wrapper-right-inner">
                            <p className="price">Price</p>
                            <p>Store links</p>
                        </div>
                    </div>
            
                </div>
                
            </div>
        </div>
      </>
    )
  }
  
export default gameInformation
  