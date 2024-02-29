"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Alert } from "../alert/alert";
import { validateEmail, validatePhoneNumber } from "@/validation";

export default function Thamgia() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkFacebook, setLinkFacebook] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [linkSelectedImage, setLinkSelectedImage] = useState([]);
  const [linkVideo, setLinkVideo] = useState([]);
  const buttonShowModalRef = useRef();
  const buttonCloseModalRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const contentRef = useRef();
  const [disabled, setDisabled] = useState(false);

  const handleCheckBeforeSubmit = () => {
    if (name == "") {
      Alert("warning", "Vui lòng nhập vào tên của bạn!");
      nameRef.current.focus();
      return;
    }
    if (!validateEmail(email)) {
      Alert("warning", "Vui lòng nhập email đúng định dạng!");
      emailRef.current.focus();
      return;
    }

    if (!validatePhoneNumber(phone)) {
      Alert("warning", "Vui lòng nhập số điện thoại đúng định dạng!");
      phoneRef.current.focus();
      return;
    }

    if (content.trim().length > 1000) {
      Alert("warning", "Nội dung của bạn phải có độ dài dưới 1000 từ!");
      phoneRef.current.focus();
      return;
    }

    buttonShowModalRef.current.click();
  };

  const handleSubmit = async () => {
    setDisabled(true);
    console.log({
      name,
      email,
      phone,
      linkFacebook,
      title,
      content,
      image,
      linkVideo,
    });
    buttonCloseModalRef.current.click();
    Alert(
      "success",
      "Bài thi của bạn đã được hệ thống ghi nhận. Cảm ơn bạn đóng góp của bạn!"
    );
    setDisabled(false);
  };
  return (
    <section id="dangky" className="mt-4 sm:px-5">
      <div className=" bg-white px-8 py-6 rounded-xl max-w-[672px] mx-auto flex flex-col gap-3 sm:px-6">
        <div className="text-[#1239A7] font-[700] text-[20px] text-center">
          ĐĂNG KÝ BÀI DỰ THI CỦA BẠN
        </div>
        <div>
          <div className="row">
            <div className="col-6 pb-3 sm:w-full">
              <input
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Họ và tên"
                className="dangky-input"
              />
            </div>
            <div className="col-6 pb-3 sm:w-full">
              <input
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email"
                className="dangky-input"
              />
            </div>
            <div className="col-6 pb-3 sm:w-full">
              <input
                ref={phoneRef}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                required
                placeholder="Số điện thoại"
                className="dangky-input"
              />
            </div>
            <div className="col-6 pb-3 sm:w-full">
              <input
                onChange={(e) => setLinkFacebook(e.target.value)}
                type="text"
                required
                placeholder="Link Facebook cá nhân"
                className="dangky-input"
              />
            </div>
            <div className="col-12 pb-3">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="Tiêu đề bài viết"
                className="dangky-input"
              />
            </div>
            <div className="col-12 pb-6">
              <textarea
                onChange={(e) => setContent(e.target.value)}
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
                <input
                  className="hidden"
                  id="upload-input-image"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={({ target }) => {
                    if (target.files) {
                      const listFile = target.files;
                      if (listFile) {
                        if (listFile.length > 4) {
                          Alert("error", "Vui lòng chỉ tải lên tối đa 4 ảnh!");
                          return;
                        }
                        const listLinkImage = [];
                        for (let i = 0; i < listFile.length; i++) {
                          listLinkImage.push(
                            URL ? URL?.createObjectURL(listFile[i]) : ""
                          );
                        }
                        setLinkSelectedImage(listLinkImage);
                        setImage(listFile);
                      }
                    }
                  }}
                />
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
            {linkSelectedImage && linkSelectedImage.length > 0 && (
              <div className="col-12 py-3">
                <div className="text-[14px] font-[600] pb-2">
                  Hình ảnh đã chọn:
                </div>
                <div className="flex gap-4">
                  {linkSelectedImage &&
                    linkSelectedImage.length > 0 &&
                    linkSelectedImage.map((item, index) => (
                      <img key={item} className="w-auto h-[50px]" src={item} />
                    ))}
                </div>
              </div>
            )}

            <div className="text-[14px] font-[600] pb-2 mt-6">
              Link video ghi lại chuyến đi của bạn (nếu có){" "}
              <span className="text-[#808288]">(Tối đa 1 video)</span>
            </div>
            <div className="col-12 pb-3">
              <input
                onChange={(e) => setLinkVideo(e.target.value)}
                type="text"
                required
                placeholder="Link video"
                className="dangky-input"
              />
            </div>
          </div>
          <button
            disabled={disabled}
            onClick={handleCheckBeforeSubmit}
            className="float-end px-6 py-[10px] bg-[#0A2E97] text-white rounded-md xs:w-full disabled:bg-[#60A5FA]"
          >
            {disabled ? "Đang gửi..." : "Gửi bài dự thi"}
          </button>
          <button
            ref={buttonShowModalRef}
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
            className="hidden"
          >
            Gửi bài dự thi
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex="-1"
        aria-labelledby="confirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="confirmModalLabel">
                Xác nhận gửi bài thi
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Thông tin nội dung bài thi của bạn đã chính xác?
            </div>
            <div className="modal-footer">
              <button
                ref={buttonCloseModalRef}
                type="button"
                className="rounded-md px-6 py-[8px]"
                data-bs-dismiss="modal"
              >
                Xem lại
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-[#0A2E97] px-6 py-[8px] text-white rounded-md"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
