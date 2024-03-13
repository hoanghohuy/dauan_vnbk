import React from "react";

export default function TabThele() {
  return (
    <div>
      <div>
        <ul
          className="nav nav-pills nav-fill mb-3 bg-[#F8F9FF] rounded-full xs:rounded-none"
          id="pills-tab"
          role="tablist"
        >
          <li
            className="nav-item w-[25%] sm:w-[50%] xs:w-full"
            role="presentation"
          >
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <h2 className="text-[16px] font-[600] mb-0">Quy định chung</h2>
            </button>
          </li>
          <li
            className="nav-item w-[25%] sm:w-[50%] xs:w-full"
            role="presentation"
          >
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <h2 className="text-[16px] font-[600] mb-0">Giải thưởng</h2>
            </button>
          </li>
          <li
            className="nav-item w-[25%] sm:w-[50%] xs:w-full"
            role="presentation"
          >
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <h2 className="text-[16px] font-[600] mb-0">
                Hình thức đánh giá
              </h2>
            </button>
          </li>
          <li
            className="nav-item w-[25%] sm:w-[50%] xs:w-full"
            role="presentation"
          >
            <button
              className="nav-link"
              id="pills-time-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-time"
              type="button"
              role="tab"
              aria-controls="pills-time"
              aria-selected="false"
            >
              <h2 className="text-[16px] font-[600] mb-0">
                Thời gian tổ chức
                {/* Thời gian tổ chức cuộc thi */}
              </h2>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {/* TAB QUY DINH BAI VIET */}
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <div className="font-bold text-[#1239A7]">
              Quy định về tác phẩm dự thi:
            </div>
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">
                Bài viết có độ dài <strong>100 - 1000 từ.</strong>
              </li>
              <li className="py-1">
                Tác phẩm phải có <strong>tiêu đề.</strong>
              </li>
              <li className="py-1">
                Tác phẩm có{" "}
                <strong>hình ảnh/clip thu hút là một điểm cộng lớn.</strong>
              </li>
              <li className="py-1">
                BTC khuyến khích người tham gia tải ảnh ở dạng JPEG có dung
                lượng dưới 5MB (tối đa 4 ảnh/1 tác phẩm).
              </li>
              <li className="py-1">
                Đối với những tác phẩm có video, người tham gia sẽ gửi link
                tiktok hoặc link youtube để chế độ public hoặc unlisted.
              </li>
              <li className="py-1">
                Không giới hạn số lượng tác phẩm dự thi của mỗi cá nhân.
              </li>
              <li className="py-1">
                Bài viết dự thi chưa từng tham gia cuộc thi nào và chưa từng
                đăng tải trên các phương tiện truyền thông.
              </li>
              <li className="py-1">
                BTC không chịu bất kỳ trách nhiệm nào liên quan đến bản quyền
                tác phẩm.
              </li>
              <li className="py-1">
                BTC có quyền biên tập và sử dụng tác phẩm vào mục đích truyền
                thông.
              </li>
            </ul>
            <div className="font-bold text-[#1239A7]">
              Quy định về giải thưởng:
            </div>
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">
                Giải thưởng voucher không quy đổi thành tiền mặt.
              </li>
              <li className="py-1">
                Mỗi voucher có thời hạn 3 tháng tính từ ngày trao giải và có thể
                sử dụng tất cả các dịch vụ tại Vietnam Booking.
              </li>
              <li className="py-1">
                Giải thưởng chỉ được trao khi người tham gia thực hiện đủ các
                bước và tuân thủ đủ quy định của chương trình.
              </li>
              <li className="py-1">
                Sau khi công bố kết quả, BTC sẽ chủ động liên hệ với chủ nhân
                của những giải thưởng dựa trên thông tin đã cung cấp.
              </li>
              <li className="py-1">
                Trường hợp sau 48h không nhận được phản hồi, BTC sẽ tiến hành
                trao giải cho người tham gia khác.
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">
                01 Giải nhất: <strong>1.000.000 VNĐ tiền mặt</strong>
              </li>
              <li className="py-1">
                01 Giải nhì: <strong>1 Voucher trị giá 500.000 VNĐ</strong>
              </li>
              <li className="py-1">
                01 Giải tác phẩm được yêu thích nhất:{" "}
                <strong>1 Voucher trị giá 500.000 VNĐ</strong>
              </li>
            </ul>
            <div className="text-[14px]">
              Người tham gia đạt giải sẽ nhận thưởng bằng hình thức chuyển
              khoản/nhận giải trực tiếp tại văn phòng. Và những những bài dự thi
              xuất sắc nhất sẽ được Vietnam Booking cập nhật trên fanpage và
              trang blog du lịch với lượng truy cập hơn 2.000.000 lượt mỗi
              tháng.
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabIndex="0"
          >
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">
                <strong>Đối với giải nhất và giải nhì:</strong> BTC sẽ chọn ra 2
                tác phẩm xuất sắc nhất để tiến hành trao giải.
              </li>
              <li className="py-1">
                <strong>Đối với giải tác phẩm được yêu thích nhất:</strong> BTC
                sẽ chọn thêm 10 bài dự thi xuất sắc để đăng trên fanpage Vietnam
                Booking. Trong đó, tác phẩm đạt giải sẽ là bài dự thi có số điểm
                cao nhất dựa trên phương thức tính điểm bình chọn sau:{" "}
                <strong>
                  1 like = 1 điểm, 1 tim = 2 điểm, 1 share = 3 điểm.
                </strong>
              </li>
            </ul>
            <div className="text-[14px] text-justify">
              <strong className="text-[#dc2626]">Lưu ý:</strong> Trường hợp số
              điểm bình chọn cao nhất thuộc về tác phẩm đạt giải nhất hoặc giải
              nhì thì BTC sẽ trao giải cho người tham gia sở hữu tác phẩm có số
              điểm bình chọn cao kế tiếp. Nếu BTC phát hiện bài viết có dấu hiệu
              sao chép thì tác phẩm dự thi xem như không đủ điều kiện đạt giải.
              Và trong mọi trường hợp, quyết định của BTC là quyết định cuối
              cùng.
            </div>
          </div>
          {/* Thời gian tổ chức cuộc thi: */}
          <div
            className="tab-pane fade"
            id="pills-time"
            role="tabpanel"
            aria-labelledby="pills-time-tab"
            tabIndex="0"
          >
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">
                Thời gian nhận tác phẩm: từ ngày{" "}
                <strong>17/03/2024 đến 17/04/2024.</strong>
              </li>
              <li className="py-1">
                Thời gian kêu gọi bình chọn giải tác phẩm được yêu thích nhất:
                từ ngày <strong>20/04/2024 đến 25/04/2024</strong> (like, tim,
                share bài viết trực tiếp trên trang fanpage Vietnam Booking).
              </li>
              <li className="py-1">
                Thời gian công bố kết quả: <strong>Ngày 07/05/2024.</strong>
              </li>
            </ul>
            <div className="text-[14px]">
              Những bài dự thi xuất sắc nhất sẽ được Vietnam Booking cập nhật
              trên trang blog du lịch với lượng truy cập hơn 2.000.000 lượt mỗi
              tháng. Vậy còn chần chờ gì mà không trao gửi “đứa con tinh thần”
              của bạn để cùng Vietnam Booking lan tỏa niềm đam mê du lịch đi
              khắp nơi và nhận về nhiều phần thưởng hấp dẫn!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
