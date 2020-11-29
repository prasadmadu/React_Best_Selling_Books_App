import React from 'react';
import '../../css/Cards.css';

const Cards = (props) => {
  const { title, author, book_image, description, rank, publisher, amazon_product_url } = props.book;

  const mystyles = {
    background: `url(${book_image})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `repeat`
  }
  const amarzonbutton= {
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "20px"
  }

  const modid = `#${title}`;
  const titlebackground = {background:"#6C63FF"};


  return ( 
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="cardbody" data-toggle="modal" data-target={modid} >
        <div className="cardimg">
          <div className="cardmain" style={mystyles}>

          </div>
        </div>
        <div className="cardcont">
          <h6><b><i>{title}</i></b></h6>
          <h6>{author}</h6>
          <div className="buybutton">
            <div href="">
              <span className="front" data-toggle="modal" data-target={modid} >More info</span>
              <span className="center"></span>
              <span className="back" data-toggle="modal" data-target={modid} >Or Buy</span>
            </div>
            </div>
        </div>
      </div>

      <div className="modal fade mod" id={title} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header modalhead" style={titlebackground}>
              <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="row modlcont">
              <div class="col-sm-5">
                <div className="modelmain" style={mystyles}>
                </div>
                
              </div>
              <div class="col-sm-5">
                <div className="moddes">
                  <h4>Rank #{rank}</h4>
                  <h4>{title}</h4>
                  <h5><b>By {author}</b></h5>
                  <h6>Publish by {publisher}</h6>
                  <br/>
                  <p>{description}</p>
                  <br/>
                  <a className="btn btn-primary" href={amazon_product_url} role="button" style={amarzonbutton} target="_blank" rel="noreferrer">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;