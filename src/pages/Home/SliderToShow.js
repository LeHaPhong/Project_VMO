import Slider from 'react-slick'
import { ImagesDetail } from './ImagesDetail'
import { ImagesDetailTwo } from './ImagesDetailTwo'

function RightArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#e57905',
        marginRight: '1130px',
        marginTop: '150px',
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
        marginLeft: '200px',
        marginTop: '150px',
        position: 'absolute',
        zIndex: '1',
        borderRadius: '100%',
      }}
      onClick={onClick}
    />
  )
}
export function SliderToShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }
  return (
    <div>
      <Slider {...settings}>
        <div className="mt-60 ml-40 h-570">
          <div className="">
            <h3 className="text-3xl font-medium">
              The Coffee House
              <br /> Chung cư The Park Home,
              <br />
              Cầu Giấy
            </h3>
            <p className="w-80 mt-2 mb-6">
              Nhà mới tại Cầu Giấy mang đến không gian “chanh sả” hiện đại với
              tone cam trẻ trung, thiết kế nhấn nhá những ô cửa kính lớn cùng hệ
              thống đèn chiếu sáng hứa hẹn cho ra đời những chiếc ảnh check-in
              siêu xinh.
            </p>
            <a
              className=" bg-[#E57905] rounded-xl text-center py-2 px-20 font-bold text-white"
              href="/coffe"
            >
              <span>Tìm hiểu thêm</span>
            </a>
          </div>
          <div className="w-850 ml-[510px] -mt-96">
            <ImagesDetail />
          </div>
        </div>

        <div className="mt-60 ml-40 h-570 ">
          <div className="">
            <h3 className="text-3xl font-medium">
              The Coffee House - Vincom
              <br />
              Mega Mall Smart City,<br /> Hà Nội
            </h3>
            <p className="w-80 mt-2 mb-6">
              Hà Nội chào Nhà mới tại đô thị Smart City, với không gian rộng rãi
              cùng những ô cửa kính lớn cho nhiều ánh sáng và những góc chụp
              sống ảo vô cùng lung linh. Hãy tới trải nghiệm cùng bạn bè
            </p>
            <a
              className=" bg-[#E57905] rounded-xl text-center py-2 px-20 font-bold text-white"
              href="/coffe"
            >
              <span>Tìm hiểu thêm</span>
            </a>
          </div>
          <div className="w-850 ml-[510px] -mt-80">
            <ImagesDetailTwo />
          </div>
        </div>
      </Slider>
    </div>
  )
}
