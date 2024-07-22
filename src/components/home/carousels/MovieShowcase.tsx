import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { getMovieData, QUERY_KEYS } from "../../../api/movieApi";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MovieCard from "./MovieCard";
import { TMovie } from "../../../utils/types";
import MovieCardDetails from "./MovieCardDetails";
import { useWindowDims } from "../../../utils/hooks/useWindowDims";
import CardSkeleton from "./CardSkeleton";
import PlaybackModal from "../PlaybackModal";
interface MovieShowcaseProps {}

const minSlideSize: number = 300;
const MovieShowcase: React.FC<MovieShowcaseProps> = () => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const { width } = useWindowDims();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.GET_ALL],
    queryFn: getMovieData,
  });

  //all data fetched form the api
  console.log({ data });

  const slidesToShow = useMemo(() => {
    const visibleSlides = Math.floor(width / minSlideSize);

    return visibleSlides > 4 ? 4 : visibleSlides;
  }, [width]);
  return isLoading ? (
    <div className="loading-container">
      {[1, 2, 3, 4]?.map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  ) : (
    <div className="showcase-container">
      {Boolean(selectedMovie) && (
        <PlaybackModal
          open={Boolean(selectedMovie)}
          handleClose={() => setSelectedMovie("")}
          title={selectedMovie}
          link="TcMBFSGVi1c"
        />
      )}
      <div className="carousel-container">
        <h1>Top 10</h1>
        <Swiper
          slidesPerView={slidesToShow}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          <>
            {data
              ?.filter((item: TMovie) => item?.id <= 10)
              ?.map((movie: TMovie, index: number) => (
                <SwiperSlide key={index}>
                  <MovieCard
                    movie={movie}
                    setSelectedMovie={setSelectedMovie}
                  />
                </SwiperSlide>
              ))}
          </>
        </Swiper>
      </div>
      <div className="carousel-container">
        <h1>Top Movies</h1>
        <Swiper slidesPerView={slidesToShow} spaceBetween={5}>
          <>
            {data
              ?.filter((item: TMovie) => item?.id > 10)
              ?.map((movie: TMovie, index: number) => (
                <SwiperSlide key={index}>
                  <MovieCardDetails
                    movie={movie}
                    setSelectedMovie={setSelectedMovie}
                  />
                </SwiperSlide>
              ))}
          </>
        </Swiper>
      </div>
    </div>
  );
};

export default MovieShowcase;
