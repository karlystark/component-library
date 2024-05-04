/** PhotoCard renders a customizable card with a photo on top and a text box
 * with heading and text underneath.
 *
 * Props:
 *  => data: an object with image url, alt, heading, body text.
 *    ex. {
 *          image: 'dog.jpg',
 *          alt: 'a great dane',
 *          heading: 'header text',
 *          text: ['paragraph text', 'another section of text',...],
 *        }
 *
 * State: none
 *
 * Considerations:
 *    => Be sure that alt-text is clear and concise for your image. if the image
 *    is not important/purely decorative for your card, you can pass an empty
 *    string as the alt.
 */

function PhotoCard({ data }) {

  const { image, alt, heading, text } = data;

  return (
    <div className="PhotoCard flex flex-col w-[300px] h-[500px] overflow-hidden
    rounded-lg m-4 shadow-lg bg-white transition-shadow transition-transform
    hover:-translate-y-[5px] hover:shadow-xl">
      <img src={image} alt={alt} className="PhotoCard-img h-[70%] object-cover object-top" />
      <div className="PhotoCard-info">
        <h3 className="text-5xl mb-5 mt-4 font-serif"><b>{heading}</b></h3>
        {text.map((item, idx) => <p key={idx}>{item}</p>)}
      </div>
    </div>
  );
}

export default PhotoCard;

