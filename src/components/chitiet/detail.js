"use client";
import React, { useState } from "react";
import Danhsach from "../baithi/danhsach";
import Slider from "react-slick";
import "./customSlider.css";
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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

export default function Detail({ id }) {
  const [detailPost, setDetailPost] = useState({});
  const [loading, setLoading] = useState(true);

  const getDataPostByID = async () => {
    const data = await getPostByID(id);
    setDetailPost(data);
    setLoading(false);
  };
  useState(() => {
    getDataPostByID();
  }, []);
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
                <path d="M8 1L2 7L8 13" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <Link href="/">Quay lại</Link>
          </div>
          <div className="bg-white rounded-xl px-12 py-6">
            <h1 className="text-[#102561] font-[700] text-[24px]">
              {detailPost?.title ? (
                detailPost?.title
              ) : (
                <div className="placeholder-glow">
                  <span className="placeholder w-full h-auto rounded-md"></span>
                </div>
              )}
            </h1>
            <div className="flex gap-10 pt-1 text-[12px]">
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
            <div id="slider-image" className="py-3">
              <Slider {...settings} className="custom__slider">
                {detailPost?.images ? (
                  detailPost?.images.map((item) => (
                    <div key={item}>
                      <img
                        className="w-full"
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
            <div className="w-full pb-3">
              <div className="text-[14px] pb-1">
                Video đính kèm:{" "}
                <a className="underline" href={`${detailPost?.videoLink}`}>
                  {detailPost?.videoLink}
                </a>
              </div>
              {detailPost?.content && (
                <iframe
                  width="100%"
                  height="315"
                  src={detailPost?.videoLink}
                ></iframe>
              )}
            </div>
            <div className="text-[14px]" id="content">
              <div
                dangerouslySetInnerHTML={{
                  __html: detailPost?.content,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Danhsach />
    </main>
  );
}
