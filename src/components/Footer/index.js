function Footer() {
  return (
    <footer>
      <div className="bg-black h-[290px] text-[white] flex justify-around">
      <ul className="mt-10">
        <li className="text-lg">Giới thiệu</li>
        <li>
          <a href="/">Về chúng tôi</a>
        </li>
        <li>
          <a href="/">Sản phẩm</a>
        </li>
        <li>
          <a href="/">Khuyến mại</a>
        </li>
        <li>
          <a href="/">Chuyện cà phê</a>
        </li>
        <li>
          <a href="/">Cửa hàng</a>
        </li>
        <li>
          <a href="/">Tuyển dụng</a>
        </li>
      </ul>
      <ul className="mt-10">
        <li className="text-lg">Điều khoản</li>
        <li>
          <a href="/">Điều khoản sủ dụng</a>
        </li>
        <li>
          <a href="/">quy tắc bảo mật</a>
        </li>
      </ul>
      <ul className="mt-10 mr-[500px]">
        <li className="text-lg flex">
          <img
            alt=""
            src="https://file.hstatic.net/1000075078/file/phone_0a42df1c753c4fa0910108daa73fe2ef.png"
          />
          Đặt hàng: 1800 6936
        </li>
        <li>
          <a className="text-lg flex mt-10 mb-10" href="/">
            <img
              alt=""
              src="https://file.hstatic.net/1000075078/file/map-pin-2-line_575ccb91b6f94a308d1bd507d4ae72a7.png"
            />
            Liên hệ
          </a>
        </li>
        <li>
          <p>
            Tầng 3-4 Hub Building<br/> 195/10E Điện Biên Phủ,<br/> P.15 , Q.Bình Thạnh,
            TP.Hồ Chí Minh
          </p>
        </li>
      </ul>
      </div>
      <div className="absolute  ">
        {/* <img alt="" src="https://scontent.xx.fbcdn.net/v/t39.30808-6/289278215_3279663558974314_3408757151280356072_n.jpg?stp=dst-jpg_s526x296&_nc_cat=108&ccb=1-7&_nc_sid=dd9801&_nc_ohc=s7jlVJXMJJoAX9kvaBV&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8gIs9F2r1f5GTLb738_Xpukawtdcbms62prur_pKbtOg&oe=62CD40A9&_nc_fr=fhan3c03"/> */}
      </div>
    </footer>
  )
}

export default Footer
