import Slider from 'react-slick'
export function ImagesDetail() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <div >
      <Slider {...settings}>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2697_2fee8885875b4e6cab3c14b9cb15856f_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2555_bc6234d2477c4b58971ef25e13638448_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2484_08dd5618d97249e2bd30c2d603cfa17a_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2592_abd501ac16bb44bbbf17fd5635c654d0_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2908__1__998e46cb5ed044769449c39f9f9290f8_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2559_39c6f5d9d51043fda30c49a51aba6063_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2863_01d668ddff2e4dccb5f0b7e73c017d5f_master.jpg"
            />
          </a>
        </div>
        <div>
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/img_2499_e46f21dec9b94536bcc8bb1a7cadda4a_master.jpg"
            />
          </a>
        </div>
      </Slider>
    </div>
  )
}
