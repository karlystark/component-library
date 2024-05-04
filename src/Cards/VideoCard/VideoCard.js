import "./VideoCard.css";

/** VideoCard renders a customizable card with an mp4 video on top, a circle img
 * icon, and a text box with heading and text.
 *
 * Props:
 *  => data: an object with video, image, alt, and text data.
 *    ex. {
 *          video: 'video.mp4',
 *          image: 'dog.jpg',
 *          alt: 'a great dane',
 *          text: ['header text', 'paragraph text'],
 *        }
 *
 * State: none
 *
 * Considerations:
 *    => Be sure that header text is short (may need to experiment to find a
 *    length that works, but two short words looks particularly good).
 *    => Be sure that alt-text is clear and concise for your image. if the image
 *    is not important/purely decorative for your card, you can pass an empty
 *    string as the alt.
 *    => custom styles/css was used to make this component. you'll need it for
 *    this component to work.
 */

function VideoCard({ data }) {

  const { video, image, alt, text } = data;

  return (
    <div className="card relative mt-10 w-80 h-108 bg-[#fcf1e9] flex flex-col
    justify-between rounded-lg shadow-lg ml-24">
      <div className="box relative rounded-lg">
        <div className="imgBx">
          <video src={video} type="video/mp4" autoPlay loop muted />
        </div>
      </div>
      <div className="box bg-[#fcf1e9] w-24">
        <div className="content mt-2">
          <h2>{text[0]}</h2>
          <p className="mt-4">{text[1]} </p>
        </div>
      </div>
      <div className="circle">
        <div className="imgBx">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;