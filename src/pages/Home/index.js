import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Banner } from './Banner'
import { SliderToShow } from './SliderToShow'

import { getListProduct } from '../../api/productsApi'

function Home() {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await getListProduct()
        if (response) {
          setProductList(response)
        }
      } catch (error) {
        console.log('Failed', error)
      }
    }
    fetchProductList()
  }, [])

  // console.log('day la list product', productList)

  return (
    <>
      <main>
        <>
          <Banner />
          {/* <ul className="mt-24 ml-40 mr-40 grid grid-cols-4 gap-y-10">
            <li className="w-570 h-371 col-span-2">
              <Link to="/coffe">
                <img
                  className="shadow-3xl rounded-2xl w-570 h-371"
                  alt=""
                  src="https://file.hstatic.net/1000075078/file/1700x1050_01e2477dc7f4421a93f7c263272b1819.jpg"
                />
              </Link>
            </li>
            <li className="w-270 h-270">
              <Link to="/Detail">
                <img
                  className="shadow-3xl rounded-2xl w-370 h-72"
                  alt=""
                  src="https://product.hstatic.net/1000075078/product/almond---cm_21624edbe6a645e29fe436783edeeade_large.jpg"
                />
                <p className="font-semibold">CloudFee Creamy Hạnh Nhân Nướng</p>
              </Link>
              <span>39.000 đ</span>
            </li>
            <li className="w-270 h-270">
              <Link to="/coffe">
                <img
                  className="shadow-3xl rounded-2xl w-370 h-72"
                  alt=""
                  src="https://product.hstatic.net/1000075078/product/pandan-coconut-cm_9b2cdabfc79d42529d93f24462f07148_large.jpg"
                />
                <p className="font-semibold">CloudFee Creamy Pandan Coconut</p>
              </Link>
              <span>39.000 đ</span>
            </li>

          </ul> */}
          
          <div>
            
            <ul className="mt-24 ml-40 mr-40 grid grid-cols-4 gap-y-32 gap-10">
              {productList.map((products, index) => {
                return (
                  <li className="w-270 h-270" key={index}>
                    <Link to={`/product-detail/${products.id}`}>
                      <img
                        className="shadow-3xl rounded-2xl w-370 h-72"
                        alt=""
                        src={products.image}
                      />
                      <p className="font-semibold">{products.name}</p>
                    </Link>
                    <span>{products.price}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <div className="text-center mt-60">
              <p className="text-8xl font-black font-baron text-[#7D5230] mb-10">
                CLOuDEFF
              </p>
              <p>
                Được kết hợp từ <span className="font-bold">Cloud</span> (đám
                mây) và cofFee (cà phê),{' '}
                <span className="font-black">CloudFee</span> gợi mở
                <br />
                về một thế hệ cà phê mới, êm mượt như mây.
              </p>
            </div>
            <div className="ml-40 mt-14">
              <img
                alt=""
                src="https://hrv.hstatic.net/s_1000266602/_creme-brulee.png"
              />
            </div>
            <div className="ml-[773px] mt-[-500px]">
              <p className="font-baron text-[#7D5230] text-2xl font-black">
                CLOuDFEE
              </p>
              <p className='="font-baron font-bold text-[#7D5230] text-6xl mt-2'>
                Creme Brulee
              </p>
              <p className="w-[530px] mt-8 mb-5">
                <span className="font-bold">
                  Thức uống "đánh thức" năng lượng ngày mới
                </span>
                hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê
                nhưng muốn khám phá thêm nhiều hương vị mới.
              </p>
              <a
                className=" bg-[#E57905] rounded-xl text-center py-2 px-20 font-bold text-white"
                href="/coffe"
              >
                <span>Thử ngay</span>
              </a>
            </div>
            <div className="mt-[570px] ml-40">
              <p className="font-baron text-[#7D5230] text-2xl font-black">
                CLOuDFEE
              </p>
              <p className='="font-baron font-bold text-[#7D5230] text-6xl'>
                Creamy
              </p>
              <p className="w-[530px] mt-8 mb-5">
                <span className="font-bold">
                  Thức uống "chiều chuộng bản thân" bậc nhất
                </span>
                cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp
                độc đáo giữa món tráng miệng và thức uống.
              </p>
              <a
                className=" bg-[#E57905] rounded-xl text-center py-2 px-20 font-bold text-white"
                href="/coffe"
              >
                <span>Thử ngay</span>
              </a>
            </div>
            <div className="ml-[776px] mt-[-500px]">
              <img
                alt=""
                src="https://hrv.hstatic.net/s_1000266602/_creamy.png"
              />
            </div>
            <div className="absolute top-[1550px] -z-10">
              <img
                alt=""
                src="https://file.hstatic.net/1000075078/file/home_cloudfee_bg_d0aafa7f96c746329eaa1451a8441448.png"
              />
            </div>
          </div>

          <SliderToShow />

          <div className="bg-[#FFF7E6] w-full h-[1700px] mt-10">
            <h2 className="flex justify-center text-[28px] font-bold pt-10 items-center">
              <img
                className="w-5 h-8 mr-5"
                alt=""
                src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png"
              />
              Chuyện Nhà
            </h2>
            <div>
              <h3 class="border-l-4 border-[#e57905] ml-44 mb-7">
                <a className="pl-2 text-[24px] font-semibold" href="/">
                  Coffeeholic
                </a>
              </h3>
              <div className="grid grid-cols-3 ml-44 mr-44">
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg"
                    />
                    <span>11/03/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">
                        CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ
                        DÀNG NHẤT
                      </a>
                    </h3>
                    <p className="">
                      Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được
                      sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế
                      giới. Với nhiều đặc điểm riêng, không...
                    </p>
                  </a>
                </div>
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_7_db8def55acbf426ea725921529f6f01e_grande.jpg"
                    />
                    <span>07/03/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">
                        BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ
                        HƯƠNG VỊ
                      </a>
                    </h3>
                    <p className="">
                      Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên
                      những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý
                      tưởng để pha...
                    </p>
                  </a>
                </div>
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_2_aacf152c62064c40ab804a66ffc706d1_grande.jpg"
                    />
                    <span>04/03/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ</a>
                    </h3>
                    <p className="">
                      Có nhiều cách để pha một ly cà phê ngon, nhưng đối với
                      nhiều người Việt giây phút đợi chờ những giọt cà phê rơi
                      từ chiếc phin đã trở thành...
                    </p>
                  </a>
                </div>
              </div>
              <h3 class="border-l-4 border-[#e57905] ml-44 mt-72 mb-7">
                <a className="pl-2 text-[24px] font-semibold" href="/">
                  Teaholic
                </a>
              </h3>
              <div className="grid grid-cols-3 ml-44 mr-44">
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/pr-cover_41de066c6f654ee9b318dbffe7e5e5f0_grande.jpg"
                    />
                    <span>07/06/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS</a>
                    </h3>
                    <p className="">
                      Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được
                      nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải
                      thiện sắc đẹp và giúp tinh...
                    </p>
                  </a>
                </div>
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/thecoffeehouse_atiso_xanh_01_ac85a05481ae4756a24f48b6bdb139de_grande.jpg"
                    />
                    <span>01/06/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">
                        BẠN CÓ ĐANG NHẦM LẪN GIỮA ATISO ĐỎ VÀ ATISO XANH?
                      </a>
                    </h3>
                    <p className="">
                      Trà Atiso vốn là thức uống phổ biến tại Việt Nam và được
                      biết đến với 2 loại: Atiso đỏ (Hibiscus) và Atiso xanh.
                      Thế nhưng, hai loại này lại...
                    </p>
                  </a>
                </div>
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/thecoffeehouse_hiteahealthy_03_89263a1a922e4813a894c245b1145b7f_grande.png"
                    />
                    <span>11/03/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">UỐNG TRÀ HIBISCUS CÓ BỊ MẤT NGỦ HAY KHÔNG?</a>
                    </h3>
                    <p className="">
                      Trà hoa Hibiscus luôn nằm trong top những loại trà healthy
                      được nhiều người ưa chuộng bởi sở hữu nhiều dược tính tốt
                      cho sức khỏe và sắc đẹp. Tuy...
                    </p>
                  </a>
                </div>
              </div>
              <h3 class="border-l-4 border-[#e57905] ml-44 mt-64 mb-7">
                <a className="pl-2 text-[24px] font-semibold" href="/">
                  Blog
                </a>
              </h3>
              <div className="grid grid-cols-3 ml-44 mr-44">
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/123232891_2820303564910318_4578047210373311456_n_699bea2973ec4087886ab888d5434de4_grande.jpg"
                    />
                    <span>14/02/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?</a>
                    </h3>
                    <p className="">
                      Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến
                      rồi nè. Lễ tình nhân, dẫn crush đi quán nào? Nhất định
                      phải cùng người ấy đến Nhà hẹn...
                    </p>
                  </a>
                </div>
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/hn-le-thanh-nghi2_d161f1f7755249cba30f2ecc7a591e47_master_1bbacee733084b93a400eaa54762bf12_grande.jpg"
                    />
                    <span>11/02/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">
                        THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN
                        BÈ MÙA TẾT NÀY
                      </a>
                    </h3>
                    <p className="">
                      Những ngày cuối năm, đầu năm mới, bạn lên kế hoạch để gặp
                      gỡ những người yêu, thương, quý, mến... Vậy bạn đã tìm
                      được điểm hẹn lý tưởng chưa,...
                    </p>
                  </a>
                </div>
                <div className="w-370 h-178">
                  <a href="/">
                    <img
                      alt=""
                      className="rounded-2xl w-370 h-72"
                      src="https://file.hstatic.net/1000075078/article/tch206857_stacking_d4325b7f7a5945d7b2abee4eb7ad51d5_grande.jpg"
                    />
                    <span>24/01/2022</span>
                    <h3 className="font-semibold text-lg w-[325px] whitespace-nowrap overflow-hidden text-ellipsis">
                      <a href="/">
                        CHAI FRESH LUÔN BÊN BẠN TRONG MỌI KHOẢNH KHẮC
                      </a>
                    </h3>
                    <p className="">
                      Với sự kết nối của The Coffee House, những thức trà và cà
                      phê dạng chai Fresh sẽ là người bạn thân thiết, tuyệt vời
                      của bạn trên mọi nẻo...
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
      <nav>{/* <Link to="/coffe">coffe</Link> */}</nav>
    </>
  )
}

export default Home
