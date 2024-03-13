"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Alert } from "../alert/alert";
import { validateEmail, validatePhoneNumber } from "@/validation";
import Swal from "sweetalert2";

export default function Thamgia() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkFacebook, setLinkFacebook] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [linkSelectedImage, setLinkSelectedImage] = useState([]);
  const [linkVideo, setLinkVideo] = useState("");
  const buttonShowModalRef = useRef();
  const buttonCloseModalRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const contentRef = useRef();
  const facebookLinkRef = useRef();
  const titleRef = useRef();
  const linkVideoRef = useRef();
  const uploadRef = useRef();
  const [disabled, setDisabled] = useState(false);

  const handleCancelImage = (item) => {
    setLinkSelectedImage(linkSelectedImage.filter((child) => child !== item));
    let copyImage = [...image];
    const imageAfterRemoved = copyImage.filter(
      (imageItem) => imageItem.name !== item.name
    );
    setImage(imageAfterRemoved);
  };

  const handleCheckBeforeSubmit = () => {
    if (name.trim().length < 1) {
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

    if (linkFacebook.trim().length < 10) {
      Alert("warning", "Vui lòng nhập vào link facebook cá nhân của bạn!");
      facebookLinkRef.current.focus();
      return;
    }
    if (title.trim().length < 1) {
      Alert("warning", "Tiêu đề bài thi không được để trống!");
      titleRef.current.focus();
      return;
    }

    const count = content.trim().split(" ").length;
    if (
      content.trim().length > 6000 ||
      content.trim().length < 2 ||
      count > 1000 ||
      count < 1
    ) {
      Alert(
        "warning",
        "Nội dung của bạn không được để trống và phải có độ dài dưới 1000 từ!"
      );
      contentRef.current.focus();
      return;
    }
    buttonShowModalRef.current.click();
  };

  const handleSubmit = async () => {
    setDisabled(true);
    let listImage = [];
    if (image.length > 0) {
      let fd = new FormData();
      Object.keys(image).map((item) => {
        fd.append("images", image[item]);
      });
      try {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/images`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
            body: fd,
          }
        );
        if (resp.status == 413) {
          Alert("warning", "Hình ảnh bạn tải lên có dung lượng quá lớn!");
          return;
        }
        const respJson = await resp.json();
        listImage = await respJson?.uploadedImageNames;
      } catch (error) {
        Alert("warning", "File của bạn chưa được tải lên!");
      }
    }
    buttonCloseModalRef.current.click();
    const dataBody = {
      name: name,
      email: email,
      phoneNumber: phone,
      facebookLink: linkFacebook,
      title: title,
      content: content,
      images: listImage,
      videoLink: linkVideo,
      published: 2,
      points: 0,
      note: "",
    };
    try {
      const resp = await fetch("/api/exam", {
        method: "POST",
        body: JSON.stringify(dataBody),
      });
      if (resp.status === 201) {
        Swal.fire({
          title: "Gửi bài dự thi thành công",
          text: "Cám ơn bạn đã gửi bài dự thi cho chúng tôi.",
          icon: "success",
          confirmButtonText: "Xác nhận",
          customClass: {
            title: "customTitle",
            confirmButton: "customConfirmButton",
            htmlContainer: "customHtmlContainer",
          },
        });
        resetForm();
        setDisabled(false);
      } else {
        setDisabled(false);
        Alert(
          "warning",
          "Bài viết của bạn chưa được tải lên. Hãy thử lại sau!"
        );
      }
    } catch (error) {
      Alert("warning", "Bài viết của bạn chưa được tải lên. Hãy thử lại sau!");
    }
  };

  const resetForm = () => {
    setName("");
    nameRef.current.value = "";
    setEmail("");
    emailRef.current.value = "";
    setPhone("");
    phoneRef.current.value = "";
    setLinkFacebook("");
    facebookLinkRef.current.value = "";
    setTitle("");
    titleRef.current.value = "";
    setContent("");
    contentRef.current.value = "";
    setLinkVideo("");
    linkVideoRef.current.value = "";
  };

  return (
    <section id="dangky" className="mt-4 md:px-5 sm:px-5">
      <div className=" bg-white px-8 py-6 rounded-xl max-w-[850px] mx-auto flex flex-col gap-3 sm:px-6">
        <h1 className="text-[#1239A7] font-[700] text-[20px] text-center">
          ĐĂNG KÝ BÀI DỰ THI CỦA BẠN
        </h1>
        <div>
          <div className="row">
            <div className="col-6 pb-3 sm:!w-full">
              <input
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Họ và tên"
                className="dangky-input"
              />
            </div>
            <div className="col-6 pb-3 sm:!w-full">
              <input
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email"
                className="dangky-input"
              />
            </div>
            <div className="col-6 pb-3 sm:!w-full">
              <input
                ref={phoneRef}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                required
                placeholder="Số điện thoại"
                className="dangky-input"
              />
            </div>
            <div className="col-6 pb-3 sm:!w-full">
              <input
                ref={facebookLinkRef}
                onChange={(e) => setLinkFacebook(e.target.value)}
                type="text"
                required
                placeholder="Link Facebook cá nhân"
                className="dangky-input"
              />
            </div>
            <div className="col-12 pb-3">
              <input
                ref={titleRef}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="Tiêu đề bài viết"
                className="dangky-input"
              />
            </div>
            <div className="col-12 pb-6">
              <textarea
                ref={contentRef}
                onChange={(e) => {
                  const valueInput = e.target.value;
                  if (valueInput.trim().split(" ").length < 1000) {
                    setContent(e.target.value);
                  } else {
                    Alert(
                      "warning",
                      "Nội dung bài viết của bạn đã vượt quá 1000 từ!"
                    );
                  }
                }}
                minLength={100}
                required
                maxLength={6000}
                type="text"
                placeholder="Chia sẻ những kỉ niệm của bạn (tối đa 1000 từ)"
                className="dangky-input min-h-[150px] text-justify"
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
                  ref={uploadRef}
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
                        let listFileCurrent = [...image];
                        const listLinkImage = linkSelectedImage;
                        for (let i = 0; i < listFile.length; i++) {
                          listLinkImage.push({
                            name: listFile[i].name,
                            link: URL ? URL?.createObjectURL(listFile[i]) : "",
                          });
                          listFileCurrent.push(listFile[i]);
                        }
                        setLinkSelectedImage(listLinkImage);
                        setImage(listFileCurrent);
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
                  Dung lượng hình ảnh dưới 5MB và khuyến khích định dạng JPEG.
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
                      <div className="relative">
                        <img
                          key={item.name}
                          className="w-auto h-[80px] rounded-md"
                          src={item.link}
                        />
                        <button
                          onClick={() => handleCancelImage(item)}
                          className="absolute top-[-6px] right-[-6px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="white"
                          >
                            <path
                              d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.35355 4.64645C5.15829 4.45118 4.84171 4.45118 4.64645 4.64645C4.45118 4.84171 4.45118 5.15829 4.64645 5.35355L7.29289 8L4.64645 10.6464C4.45118 10.8417 4.45118 11.1583 4.64645 11.3536C4.84171 11.5488 5.15829 11.5488 5.35355 11.3536L8 8.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.70711 8L11.3536 5.35355C11.5488 5.15829 11.5488 4.84171 11.3536 4.64645C11.1583 4.45118 10.8417 4.45118 10.6464 4.64645L8 7.29289L5.35355 4.64645Z"
                              fill="red"
                            />
                          </svg>
                        </button>
                      </div>
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
                ref={linkVideoRef}
                onChange={(e) => setLinkVideo(e.target.value)}
                type="text"
                required
                placeholder="Link video tiktok, youtube,..."
                className="dangky-input"
              />
            </div>
          </div>
          <button
            disabled={disabled}
            onClick={handleCheckBeforeSubmit}
            className="float-end px-6 py-[10px] bg-[#0A2E97] text-white rounded-md xs:w-full disabled:bg-[#60A5FA] hover:bg-[#00196B]"
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
              <div className="modal-title fs-5" id="confirmModalLabel">
                Xác nhận gửi bài thi
              </div>
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
