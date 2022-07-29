import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';

function Header() {
  const [oder, setOder] = useState(0)


  useEffect(() => {
    const listProduct = localStorage.getItem('products')

    if (listProduct) {
      const array = JSON.parse(listProduct)
      setOder(array.length)
    }
  }, [])
  return (
    <header className="fixed z-10 bg-[#FFFFFFCC] w-full">
      <div className="flex justify-around items-center h-12 w-[900px] m-auto">
        <div className="flex h-5 items-center ">
          <img
            className="mr-2"
            alt=""
            src="https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png"
          />
          <span>155 Cửa hàng khắp cả nước</span>
        </div>
        <div className="flex h-5 items-center">
          <img
            className="mr-2"
            alt=""
            src="https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png"
          />
          <span>Đặt hàng: 1800.6936</span>
        </div>
        <div className="flex h-5 items-center">
          <img
            className="mr-2"
            alt=""
            src="https://file.hstatic.net/1000075078/file/vector_c337310f409d440f890b370ff9cefe44.png"
          />
          <span>Freeship từ 50.000vnd</span>
        </div>
      </div>
      <div className="h-14  w-full flex ml-10 ">
        <a href="/">
          <span className="font-baron font-black text-[25px] my-auto  ">
            THE COFFEE HOuSE
          </span>
        </a>
        <ul className="font-medium flex justify-around my-auto w-[1000px] ml-16">
          <li>
            <a href="/coffe">Cà phê</a>
          </li>
          <li>
            <a href="/Tea">Trà</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Chuyện nhà</a>
          </li>
          <li>
            <a href="/">Cảm hứng CloudFee</a>
          </li>
          <li>
            <a href="/">Cửa hàng</a>
          </li>
          <li>
            <a href="/">Tuyển dụng</a>
          </li>
          <li>
            <a href="/">Đăng nhập</a>
          </li>
        </ul>

        <div className="animate-bounce -mt-5">
          <a href="/cart">
            <p className="ml-10">{oder}</p>
            <img
              className="w-16 ml-10"
              alt=""
              src="https://sieuthibansi.com/wp-content/uploads/2021/10/1922209-removebg-preview.png"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
