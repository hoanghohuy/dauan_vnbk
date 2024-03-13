"use client";
import React, { useState } from "react";
import Danhsach from "../baithi/danhsach";
import Slider from "react-slick";
import "./customSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPostByID } from "@/libs/getPost";
import moment from "moment";
import Link from "next/link";

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
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

export default function Detail({ id }) {
  const [detailPost, setDetailPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataVideoTiktok, setDataVideoTiktok] = useState({});

  const embedTiktok = async (link) => {
    const get = await fetch(`https://www.tiktok.com/oembed?url=${link}`);
    if (get.status == 200) {
      const data = await get.json();
      setDataVideoTiktok(data);
    }
  };

  const getDataPostByID = async () => {
    const data = await getPostByID(id);
    if (data) {
      setDetailPost(data);
      if (data.videoLink && data.videoLink.includes("tiktok")) {
        await embedTiktok(data.videoLink);
      }
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };
  useState(() => {
    getDataPostByID();
  }, []);
  return (
    <main>
      <section className="pt-5 sm:px-5 sm:!pt-4">
        <div className=" max-w-[850px] mx-auto flex flex-col gap-3 sm:px-0">
          <div className="text-white flex items-center gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
              >
                <path d="M8 1L2 7L8 13" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <Link href="/">Quay lại</Link>
          </div>
          <div className="bg-white rounded-xl px-12 py-6 sm:px-6">
            {!error ? (
              <>
                <h1 className="text-[#102561] font-[700] text-[24px]">
                  {detailPost?.title ? (
                    detailPost?.title
                  ) : (
                    <div className="placeholder-glow">
                      <span className="placeholder w-full h-auto rounded-md"></span>
                    </div>
                  )}
                </h1>
                <div className="flex gap-10 pt-1 text-[12px] sm:flex-col sm:gap-1">
                  <div>
                    <b>Tác giả: </b>
                    {detailPost?.name ? detailPost?.name : "Đang tải"}
                  </div>
                  <div>
                    <b>Ngày dự thi: </b>
                    {detailPost?.createdAt
                      ? moment(detailPost?.createdAt).format("DD/MM/YYYY")
                      : "Đang tải"}
                  </div>
                </div>
                {detailPost?.images && detailPost?.images.length > 0 ? (
                  // neu so anh lon hon 1 moi lam slide
                  detailPost?.images.length !== 1 ? (
                    <div id="slider-image" className="py-3">
                      <Slider {...settings} className="custom__slider">
                        {detailPost?.images ? (
                          detailPost?.images.map((item) => (
                            <div key={item}>
                              <img
                                className="w-full rounded-md"
                                src={`${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/${process.env.NEXT_PUBLIC_SITE_NAME}${item}`}
                              />
                            </div>
                          ))
                        ) : (
                          <div className="placeholder-glow">
                            <span className="placeholder w-full h-[380px] rounded-md"></span>
                          </div>
                        )}
                      </Slider>
                    </div>
                  ) : (
                    // neu chi co 1 anh thi lay anh ra luon
                    detailPost?.images.map((item) => (
                      <div id="slider-image" className="py-3">
                        <div key={item}>
                          <img
                            className="w-full rounded-md"
                            src={`${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/${process.env.NEXT_PUBLIC_SITE_NAME}${item}`}
                          />
                        </div>
                      </div>
                    ))
                  )
                ) : (
                  // neu khong co anh
                  ""
                )}
                {detailPost?.videoLink ? (
                  <div className="w-full pb-3">
                    <div className="text-[14px] pb-1">
                      Video đính kèm:{" "}
                      <a
                        className="underline"
                        href={`${detailPost?.videoLink}`}
                        target="_blank"
                      >
                        {detailPost?.videoLink}
                      </a>
                    </div>
                    {detailPost?.videoLink &&
                      detailPost?.videoLink.includes("youtube") && (
                        <iframe
                          width="100%"
                          height="315"
                          src={`https://www.youtube.com/embed/${
                            detailPost?.videoLink.split("=")?.[1]
                          }`}
                        ></iframe>
                      )}
                    {detailPost?.videoLink &&
                      detailPost?.videoLink.includes("tiktok") && (
                        <div className="w-full">
                          <iframe
                            className="!max-w-full"
                            width="100%"
                            height="760"
                            src={`https://www.tiktok.com/embed/${dataVideoTiktok.embed_product_id}`}
                          ></iframe>
                        </div>
                      )}
                  </div>
                ) : (
                  ""
                )}
                <div className="text-[14px] pt-2" id="content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detailPost?.content,
                    }}
                  ></div>
                </div>
              </>
            ) : (
              <div className="text-[#102561] font-[700] text-[24px]">
                Bài viết không tồn tại
              </div>
            )}
          </div>
        </div>
      </section>
      <Danhsach />
    </main>
  );
}
