
import "../styles/publisherinformation.css"

function PublisherInformation() {

    return (
      <>
        <div className="publisher-outer">
            <div className="publisher-wrapper-outer">

                <div className="publisher-wrapper-left">
                    <img src="https://media.istockphoto.com/id/1439837596/photo/blank-tv-or-picture-frame-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=OZmkq3tJ1nXJ_DzOsTHQlnMi8VVZX6EZrJP8Mb1V844="></img>
                </div>
                
                <div className="publisher-wrapper-right">
                    <div className="publisher-wrapper-right-inner">
                        <h1>Publisher Title</h1>
                        <p className="publisher-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet convallis metus, sit amet faucibus metus condimentum bibendum. Vivamus blandit at urna eu tincidunt.</p>
                    </div>
                    <div className="publisher-wrapper-right-inner">
                        <p>Website: 'url here'</p>
                        <p>Founding year: 20XX</p>
                        <p>Revenue 20xx: 1 000 000 €</p>
                    </div>
                    <div className="publisher-wrapper-right-inner">
                        <p>Company type: Indie / AAA</p>
                        <p>Number of employees: 100500 </p>
                    </div>
            
                </div>
                
            </div>
        </div>
      </>
    )
  }
  
export default PublisherInformation
  