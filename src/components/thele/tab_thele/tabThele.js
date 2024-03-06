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
          <li className="nav-item w-[33.333%] xs:w-[100%]" role="presentation">
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
              <h2 className="text-[16px] font-[600] mb-0">Quy định bài viết</h2>
            </button>
          </li>
          <li className="nav-item w-[33.333%]" role="presentation">
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
          <li className="nav-item w-[33.333%]" role="presentation">
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
              <h2 className="text-[16px] font-[600] mb-0">Thể lệ</h2>
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
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">Tác phẩm có độ dài từ (100 - 1000 từ).</li>
              <li className="py-1">
                Tác phẩm có hình ảnh/clip thu hút là một điểm cộng.
              </li>
              <li className="py-1">
                Không giới hạn số lượng tác phẩm dự thi của mỗi cá nhân.
              </li>
              <li className="py-1">
                Bài dự thi chưa từng tham gia cuộc thi nào và chưa từng đăng tải
                trên các phương tiện truyền thông, mạng xã hội.
              </li>
              <li className="py-1">
                BTC không chịu bất kỳ trách nhiệm nào liên quan đến bản quyền
                tác phẩm.
              </li>
              <li className="py-1">
                BTC có quyền sử dụng và biên tập bài viết vào mục đích truyền
                thông, quảng bá thương hiệu.
              </li>
            </ul>
            <div className="text-[#383B43] font-[700] py-3">
              Thời gian tổ chức cuộc thi:
            </div>
            <ul className="list-disc pl-4 text-[14px]">
              <li className="py-1">
                Thời gian nhận tác phẩm: từ ngày 17/03/2024 đến 17/04/2024
              </li>
              <li className="py-1">
                Thời gian kêu gọi bình chọn: 19/04/2024 đến hết ngày 25/04/2024
                (đối với giải bài viết được yêu thích nhất)
              </li>
              <li className="py-1">
                Thời gian công bố kết quả: Ngày 07/05/2024
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
                <b>1 Giải nhất:</b> 1.000.000 VNĐ tiền mặt (hình thức chuyển
                khoản).
              </li>
              <li className="py-1">
                <b>1 Giải nhì:</b> 1 voucher sử dụng dịch vụ tại Vietnam Booking
                trị giá 500.000 VNĐ.
              </li>
              <li className="py-1">
                <b>1 Giải bài viết được yêu thích nhất:</b> 1 voucher sử dụng
                dịch vụ tại Vietnam Booking trị giá 500.000 VNĐ.
              </li>
              <li className="py-1">
                Hình thức nhận thưởng: Chuyển khoản/nhận giải trực tiếp tại văn
                phòng.
              </li>
              <li className="py-1">
                BTC sẽ tuyển chọn những bài viết hay nhất để được cập nhật trên
                trang blog quảng bá du lịch của Vietnam Booking.
              </li>
            </ul>
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
                <b>Đối với giải nhất và nhì:</b> BTC sẽ lựa chọn ra 2 tác phẩm
                hay nhất để tiến hành trao giải.
              </li>
              <li className="py-1">
                <b>Đối với giải bài viết được yêu thích nhất:</b> BTC sẽ chọn ra
                10 tác phẩm hay nhất để đăng trên trang fanpage. Bài viết có
                lượt tương tác cao nhất dựa trên phương thức tính điểm 1 like =
                1 điểm, 1 tym = 2 điểm, 1 share = 3 điểm.
              </li>
              <li className="py-1">
                <b>
                  <i>Quyết định của Ban Tổ Chức là quyết định cuối cùng.</i>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
