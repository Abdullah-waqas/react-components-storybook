import React, { PropTypes, Component } from 'react'
import '../styles/card.css';

class Card extends Component {

  render() {
    return (
      <a className="card" href="#">
        <span className="card-header" style={{backgroundImage: "url(http://placeimg.com/400/200/animals)"}}>
          <span className="card-title">
            <h3>This is a title for a card</h3>
          </span>
        </span>
        <span className="card-summary">
          A summary will also be present. Usually two to three brief sentences about the content on the detail page.
        </span>
        <span className="card-meta">
          Published: June 18th, 2015
        </span>
      </a>
      // <div className="container">
      //   <div className="cards">
      //     <a className="card" href="#">
      //       <span className="card-header" style={{backgroundImage: "url(http://placeimg.com/400/200/animals)"}}>
      //         <span className="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span className="card-summary">
      //         A summary will also be present. Usually two to three brief sentences about the content on the detail page.
      //       </span>
      //       <span className="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/640/480/nature);">
      //         <span class="card-title">
      //           <h3>This is a title for a card that is a bit longer in length</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         Each card is created from an &lt;a&gt; tag so the whole card is linked.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/400/400/people)">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards height will expand to match the longest item.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/400/200/tech);">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         A summary will also be present. Usually two to three brief sentences about the content on the detail page.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/400/200/people);">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         Each card is created from an &lt;a&gt; tag so the whole card is linked.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/400/250/nature);">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards height will expand to match the longest item.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/400/250/animals);">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         A summary will also be present. Usually two to three brief sentences about the content on the detail page.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/600/600/people);">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         Each card is created from an &lt;a&gt; tag so the whole card is linked.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>

      //     <a class="card" href="#">
      //       <span class="card-header" style="background-image: url(http://placeimg.com/400/400/tech);">
      //         <span class="card-title">
      //           <h3>This is a title for a card</h3>
      //         </span>
      //       </span>
      //       <span class="card-summary">
      //         Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards height will expand to match the longest item.
      //       </span>
      //       <span class="card-meta">
      //         Published: June 18th, 2015
      //       </span>
      //     </a>
      //   </div>
      // </div>
    )
  }
}

Card.propTypes = {
  // addTodo: PropTypes.func.isRequired
}

export default Card;
