"use client";
import moment from "moment";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "@/components/chitiet/customSlider.css";
import { Alert } from "@/components/alert/alert";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
    >
      <path d="M8 1L2 7L8 13" stroke="#131313" strokeWidth="2" />
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
      <path d="M1 13L7 7L0.999999 1" stroke="#131313" strokeWidth="2" />
    </svg>
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

export default function ViewBaithi({ baithi, callBack }) {
  const [dataBaithi, setDataBaiThi] = useState({});
  const [note, setNote] = useState("");
  const [points, setPoints] = useState(0);
  const closeModalRef = useRef();

  const onClickView = () => {
    setDataBaiThi({});
    setDataBaiThi(baithi);
    setPoints(baithi.points);
    setNote(baithi.note);
  };

  const handleUpdate = async (type) => {
    let published = dataBaithi.published;
    let pointsInput = dataBaithi.points;
    switch (type) {
      case "approve":
        published = 1;
        break;
      case "reject":
        published = 0;
        break;
      case "updatePoints":
        pointsInput = points;
        break;
      default:
        break;
    }
    try {
      const data = await fetch(`/api/exam/${baithi._id}`, {
        method: "PUT",
        body: JSON.stringify({ published, points: pointsInput, note }),
      });
      if (data.status === 200) {
        Alert("sucess", "Thành công!");
        closeModalRef.current.click();
        callBack();
      }
    } catch (error) {}
  };

  return (
    <>
      <button
        id={baithi.id}
        onClick={onClickView}
        data-bs-toggle="modal"
        data-bs-target={`#view_${baithi._id}`}
        className="btn btn-primary"
      >
        Xem
      </button>
      <div
        className="modal fade"
        id={`view_${baithi._id}`}
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
                    value={moment(dataBaithi?.createdAt).format(
                      "DD/MM/YYYY hh:mm"
                    )}
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
                    value={dataBaithi.phoneNumber}
                    className="dangky-input"
                  />
                </div>
                <div className="col-6 pb-3">
                  <label>Link facebook</label>
                  <input
                    readOnly
                    value={dataBaithi.facebookLink}
                    className="dangky-input"
                  />
                </div>
                <div className="col-6 pb-3">
                  <label>Link video Tiktok, youtube,...</label>
                  <input
                    readOnly
                    value={dataBaithi.videoLink}
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
                    value={dataBaithi.content}
                    className="dangky-input min-h-[300px]"
                  />
                </div>
                {dataBaithi?.images && dataBaithi?.images.length ? (
                  <div className="col-12 pb-3">
                    <label>Hình ảnh đính kèm</label>
                    <div className="flex flex-col gap-4">
                      {dataBaithi?.images && dataBaithi?.images.length > 0 ? (
                        // neu hinh anh chi co 1 thi chi hien thi 1 anh
                        dataBaithi?.images.length == 1 ? (
                          <div key={1}>
                            <img
                              className="w-full"
                              src={`${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/${process.env.NEXT_PUBLIC_SITE_NAME}${dataBaithi?.images[0]}`}
                            />
                          </div>
                        ) : (
                          <Slider {...settings} className="custom__slider">
                            {dataBaithi?.images.map((item) => (
                              <div key={item}>
                                <img
                                  src={`${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/${process.env.NEXT_PUBLIC_SITE_NAME}${item}`}
                                />
                              </div>
                            ))}
                          </Slider>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="col-12">Không có hình ảnh đính kèm</div>
                )}
                <div className="col-12 pb-3">
                  <label>Ghi chú</label>
                  <textarea
                    onChange={(e) => setNote(e.target.value)}
                    value={note}
                    className="dangky-input"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <input
                className="form-control !w-[80px]"
                type="number"
                value={points}
                onChange={(e) => {
                  const point = e.target.value;
                  if (point == "") {
                    setPoints("");
                  }
                  if (point && parseInt(point) <= 10 && point.length <= 3) {
                    setPoints(e.target.value);
                  }
                }}
              />
              <button
                onClick={() => handleUpdate("updatePoints")}
                type="button"
                className="btn btn-info bg-[#157347] text-white"
              >
                Cập nhật
              </button>
              <button
                onClick={() => handleUpdate("approve")}
                type="button"
                className="btn btn-success bg-[#157347]"
              >
                Phê duyệt
              </button>
              <button
                onClick={() => handleUpdate("reject")}
                type="button"
                className="btn btn-danger bg-[#dc3545]"
              >
                Từ chối
              </button>
              <button
                type="button"
                className="btn btn-secondary bg-[#5c636a]"
                data-bs-dismiss="modal"
                ref={closeModalRef}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
