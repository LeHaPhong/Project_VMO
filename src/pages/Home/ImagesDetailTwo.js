import Slider from 'react-slick'
export function ImagesDetailTwo() {
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
        <div >
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/smc_3ed6cf4787fc41f8873c5dd67207a97d_master.jpg"
            />
          </a>
        </div>
        <div >
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/smc2_03cf8d2d26074395af4ccdcf23282e7a_master.jpg"
            />
          </a>
        </div>
        <div >
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/smc1_b788039ccb1a4cc1986fa64195fcd2b0_master.jpg"
            />
          </a>
        </div>
        <div >
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/smc3_e9d8db0a42aa44df87058605f416c744_master.jpg"
            />
          </a>
        </div>
        <div >
          <a href="/coffe">
            <img
              alt=""
              className="w-850 h-570"
              src="https://file.hstatic.net/1000075078/file/smc4_0fccc98e69c147c48a7684f040e94866_master.jpg"
            />
          </a>
        </div>
      </Slider>
    </div>
  )
}
