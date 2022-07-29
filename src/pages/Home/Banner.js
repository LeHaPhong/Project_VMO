import Slider from 'react-slick'
function RightArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#e57905',
        marginRight: '25px',
        borderRadius: '100%',
      }}
      onClick={onClick}
    />
  )
}

function LeftArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#e57905',
        marginLeft: '25px',
        borderRadius: '100%',
        position: 'absolute', zIndex:'1'
      }}
      onClick={onClick}
    />
  )
}
export function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }
  return (
    <div>
      <Slider {...settings}>
        <div className="mt-20">
          <a href="/coffe">
            <img
              alt=""
              src="https://file.hstatic.net/1000075078/file/web_desktop_4c0ab0d1f3004192b940539a803c42c3.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              src="https://file.hstatic.net/1000075078/file/desktop_d4070b708ee14678845e556b2d05f870.jpg"
            />
          </a>
        </div>
      </Slider>
    </div>
  )
}
