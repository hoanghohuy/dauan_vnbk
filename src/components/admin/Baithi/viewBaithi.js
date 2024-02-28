import React, { useState } from "react";

export default function ViewBaithi({ baithi }) {
  const [dataBaithi, setDataBaiThi] = useState({});

  const onClickView = () => {
    setDataBaiThi({});
    setDataBaiThi(baithi);
  };
  return (
    <>
      <button
        id={baithi.id}
        onClick={onClickView}
        data-bs-toggle="modal"
        data-bs-target={`#view_${baithi.id}`}
        className="btn btn-primary"
      >
        Xem
      </button>
      <div
        className="modal fade"
        id={`view_${baithi.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thông tin bài thi của {dataBaithi.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-3 pb-3">
                  <label>Họ và tên</label>
                  <input
                    readOnly
                    value={dataBaithi.name}
                    className="dangky-input"
                  />
                </div>
                <div className="col-3 pb-3">
                  <label>Tham gia vào</label>
                  <input
                    readOnly
                    value={dataBaithi.time}
                    className="dangky-input"
                  />
                </div>
                <div className="col-3 pb-3">
                  <label>Email</label>
                  <input
                    readOnly
                    value={dataBaithi.email}
                    className="dangky-input"
                  />
                </div>
                <div className="col-3 pb-3">
                  <label>Số điện thoại</label>
                  <input
                    readOnly
                    value={dataBaithi.phone}
                    className="dangky-input"
                  />
                </div>
                <div className="col-6 pb-3">
                  <label>Link facebook</label>
                  <input
                    readOnly
                    value={dataBaithi.facebook}
                    className="dangky-input"
                  />
                </div>
                <div className="col-6 pb-3">
                  <label>Link video</label>
                  <input
                    readOnly
                    value={dataBaithi.video}
                    className="dangky-input"
                  />
                </div>
                <div className="col-12 pb-3">
                  <label>Tiêu đề bài dự thi</label>
                  <input
                    readOnly
                    value={dataBaithi.title}
                    className="dangky-input"
                  />
                </div>
                <div className="col-12 pb-3">
                  <label>Nội dung bài thi</label>
                  <textarea
                    readOnly
                    value={dataBaithi.title}
                    className="dangky-input min-h-[300px]"
                  />
                </div>
                <div className="col-12 pb-3">
                  <label>Hình ảnh đính kèm</label>
                  <div className="flex flex-col gap-4">
                    {dataBaithi.image &&
                      dataBaithi.image.length > 0 &&
                      dataBaithi.image.map((item, index) => (
                        <img className="w-full" src={item} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary bg-[#5c636a]"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-warning bg-[#ffca2c]">
                Từ chối
              </button>
              <button type="button" className="btn btn-success bg-[#157347]">
                Phê duyệt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
