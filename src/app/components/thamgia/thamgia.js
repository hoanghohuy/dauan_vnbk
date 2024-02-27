import React from "react";

export default function Thamgia() {
  return (
    <section id="dangky" className="mt-4">
      <div className=" bg-white px-8 py-6 rounded-xl max-w-[672px] mx-auto flex flex-col gap-3">
        <div className="text-[#1239A7] font-[700] text-[20px] text-center">
          ĐĂNG KÝ BÀI DỰ THI CỦA BẠN
        </div>
        <div>
          <div className="row">
            <div class="col-6 pb-3">
              <input
                type="text"
                required
                placeholder="Họ và tên"
                className="dangky-input"
              />
            </div>
            <div class="col-6 pb-3">
              <input
                type="email"
                required
                placeholder="Email"
                className="dangky-input"
              />
            </div>
            <div class="col-6 pb-3">
              <input
                type="number"
                required
                placeholder="Số điện thoại"
                className="dangky-input"
              />
            </div>
            <div class="col-6 pb-3">
              <input
                type="text"
                required
                placeholder="Link Facebook cá nhân"
                className="dangky-input"
              />
            </div>
            <div class="col-12 pb-3">
              <input
                type="text"
                required
                placeholder="Tiêu đề bài viết"
                className="dangky-input"
              />
            </div>
            <div class="col-12 pb-6">
              <textarea
                minLength={100}
                required
                maxLength={1000}
                type="text"
                placeholder="Chia sẻ những kỉ niệm của bạn (tối đa 1000 từ)"
                className="dangky-input min-h-[150px]"
              />
            </div>
            <div className="col-12 text-[14px] font-[600] pb-2">
              Chia sẻ hình ảnh về chuyến đi của bạn{" "}
              <span className="text-[#808288]">(Tối đa 4 ảnh)</span>
            </div>
            <div id="upload-image" className="col-12 w-full">
              <div className="text-center py-10 px-5 border-[1px] border-dashed border-[#B1B5C3] rounded-md">
                <input className="hidden" id="upload-input-image" type="file" />
                <div className="text-center text-[14px] font-[500]">
                  Kéo và thả file của bạn vào khung này, hoặc{" "}
                  <label
                    htmlFor="upload-input-image"
                    className="text-[#3772FF] cursor-pointer"
                  >
                    tải lên từ đây
                  </label>
                </div>
                <div className="mt-2 max-w-[400px] text-[12px] mx-auto">
                  2048x1365px - Dung lượng hình ảnh phải dưới 5MB và định dạng
                  JPEG nếu có thể.
                </div>
              </div>
            </div>
            <div className="text-[14px] font-[600] pb-2 mt-6">
              Link video ghi lại chuyến đi của bạn (nếu có){" "}
              <span className="text-[#808288]">(Tối đa 1 video)</span>
            </div>
            <div class="col-12 pb-3">
              <input
                type="text"
                required
                placeholder="Link video"
                className="dangky-input"
              />
            </div>
          </div>
          <button className="float-end px-6 py-[10px] bg-[#131212] text-white rounded-md">
            Gửi bài dự thi
          </button>
        </div>
      </div>
    </section>
  );
}
