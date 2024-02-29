"use client";
import React from "react";
import Danhsach from "../baithi/danhsach";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customSlider.css";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
    >
      <path d="M8 1L2 7L8 13" stroke="#131313" stroke-width="2" />
    </svg>
  </div>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
    >
      <path d="M1 13L7 7L0.999999 1" stroke="#131313" stroke-width="2" />
    </svg>
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

export default function Detail() {
  return (
    <main>
      <section className="pt-5 sm:px-5 sm:!pt-4">
        <div className=" max-w-[672px] mx-auto flex flex-col gap-3 sm:px-6">
          <div className="text-white flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
              >
                <path d="M8 1L2 7L8 13" stroke="white" stroke-width="2" />
              </svg>
            </div>

            <div>Quay lại</div>
          </div>
          <div className="bg-white rounded-xl px-12 py-6">
            <h1 className="text-[#102561] font-[700] text-[24px]">
              Sài Gòn Nơi Hồn Tết Hòa Mình Trong Sắc Xuân
            </h1>
            <div className="flex gap-10 pt-1">
              <div>
                <b>Tác giả: </b>Hồ Huy Hoàng
              </div>
              <div>
                <b>Ngày dự thi:: </b>29/02/2024
              </div>
            </div>
            <div id="slider-image" className="py-3">
              <Slider {...settings} className="custom__slider">
                {[1, 2, 3, 4].map((item) => (
                  <div>
                    <img src="https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324,https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324,https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324,https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324" />
                  </div>
                ))}
              </Slider>
            </div>
            <div id="content">
              Trong những ngày cuối năm, tinh thần Tết đã ngập tràn khắp nơi ở
              Thành phố Hồ Chí Minh. Đây không chỉ là một kỳ nghỉ lễ, mà còn là
              dịp để mọi người sum vầy bên gia đình, tận hưởng không khí xuân
              tươi mới và đón chào một năm mới tràn đầy hy vọng. Bước chân vào
              Sài Gòn, bạn sẽ được chìm đắm trong những trải nghiệm Tết độc đáo,
              từ những truyền thống lâu đời đến những xu hướng mới mẻ, tạo nên
              một không gian phong phú, sôi động và ấm áp. Những Ngày Cuối Năm
              Dọc theo các con đường của Sài Gòn, ánh đèn vàng ấm áp lung linh,
              tạo nên bức tranh lung linh, rực rỡ của một Sài Gòn Tết. Những
              ngày cuối năm, những người dân Sài Gòn vội vã hoàn thiện những
              công việc cuối cùng, chuẩn bị cho một cái Tết trọn vẹn. Các chợ
              hoa mọc lên khắp nơi, đem lại không khí sôi động, hứng khởi với
              hàng trăm loại hoa đủ màu sắc, từ hoa đào, mai truyền thống đến
              những loài hoa phương Tây hiện đại. Mỗi ngõ ngách, mỗi phố phường
              đều rộn ràng tiếng cười, tiếng chào hỏi của người dân địa phương.
              Chợ Bến Thành – Trái Tim Sài Gòn Chợ Bến Thành, biểu tượng của Sài
              Gòn, trở nên sôi động hơn bao giờ hết trong những ngày cuối năm.
              Các gian hàng bày bán những món đặc sản Tết như bánh chưng, dưa
              hấu, mứt Tết, tạo nên không gian mua sắm sôi động và đa dạng.
              Những người phụ nữ bán hàng mỉm cười niềm nở, tận tâm tư vấn cho
              khách hàng, mang đến cho họ sự ấm áp, an yên của một Tết truyền
              thống. Bước qua hàng quần áo, hàng điện tử, bạn cũng có thể tìm
              thấy những món đồ trang trí Tết để làm mới không gian sống của
              mình. Hương Vị Tết Sài Gòn Nếu có dịp ghé thăm Sài Gòn vào dịp
              Tết, không thể bỏ qua việc thưởng thức những món ăn đặc trưng của
              vùng miền. Phố đi bộ Nguyễn Huệ trở nên rực rỡ hơn bao giờ hết với
              những gian hàng bày bán đủ loại món ngon từ các miền đất nước. Bạn
              có thể thưởng thức một tô bánh mì chảo nóng hổi, thơm phức hoặc
              một đĩa bún riêu cay nồng đầy hấp dẫn. Những quán ăn vỉa hè nổi
              tiếng của Sài Gòn như ở phố ẩm thực Tân Định, Quận 1 cũng mở cửa
              đón chào du khách. Đêm Xuân Rực Rỡ Khi đêm về, Sài Gòn lung linh
              hơn bao giờ hết với ánh đèn Tết lung linh. Các con đường chính như
              Đồng Khởi, Lê Lợi, Nguyễn Huệ được trang hoàng lộng lẫy bằng hàng
              ngàn đèn LED đủ màu sắc. Khắp nơi tràn ngập âm nhạc vui tươi,
              tiếng cười của du khách và người dân Sài Gòn cùng nhau đón mừng
              năm mới. Công viên 23/9 trở thành điểm hẹn của các gia đình và bạn
              bè, nơi họ cùng nhau thả diều, thưởng thức pháo hoa và tận hưởng
              khoảnh khắc sum vầy bên nhau. Những Kỷ Niệm Đáng Nhớ Trải qua
              những ngày Tết ở Sài Gòn, bạn không chỉ được tận hưởng không khí
              hân hoan của một kỳ nghỉ lễ truyền thống mà còn đắm chìm trong vẻ
              đẹp và sức sống của thành phố này. Những khoảnh khắc sum vầy bên
              gia đình, những món ăn ngon lành, những trò chơi dân gian và những
              buổi hòa nhạc sôi động sẽ luôn là những ký ức đáng nhớ với bất kỳ
              ai từng đặt chân đến đất Sài Thành trong dịp Tết Nguyên Đán.
            </div>
          </div>
        </div>
      </section>
      <Danhsach />
    </main>
  );
}
