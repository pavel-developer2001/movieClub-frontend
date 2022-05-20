import { Chip } from "@mui/material"
import React from "react"
import Slider from "react-slick"
import PersonData from "../PersonData"
import styles from "./DescriptionMovie.module.scss"

const DescriptionMovie = () => {
  const tagsArray = new Array(20)
    .fill("")
    .map((_, i) => ({ id: i, name: `Tag ${i + 1}` }))
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    touchMove: false,
    //centerMode: true,
    arrows: false,
    focusOnSelect: true,
    slidesToScroll: 1,
  }
  return (
    <div className={styles.wrapper}>
      <p>
        Стивен Грант — кассир в сувенирном магазине в лондонском музее, который
        страдает от лунатизма и часто теряет счет времени. Однажды Стивен
        обнаруживает, что самые ужасные ночные кошмары начинают воплощаться в
        жизнь, а он на самом деле делит свое сознание с бывшим военным наемником
        Марком Спектром. Страдая от расстройства личности, Стивен превращается в
        бесстрашного супергероя, известного как Лунный рыцарь. Тем временем
        лидер культа Артур Хэрроу, поклоняющийся древнеегипетской богине Амат,
        совершает массовые убийства людей, которые имеют плохую
        наследственность. Лунный рыцарь вступает в кровопролитное противостояние
        с Хэрроу, попутно пытаясь разобраться в своей множественной личности.
      </p>
      <div className={styles.categories}>
        {tagsArray.map((tag) => (
          <Chip key={tag.id} label={tag.name} className={styles.tag} />
        ))}
      </div>
      <div className={styles.person}>
        <strong>Режисёр</strong>
        <div className={styles.list}>
          {new Array(2).fill("").map((_, index) => (
            <PersonData key={index} />
          ))}
        </div>
      </div>
      <div className={styles.person}>
        <strong>Актёры</strong>
        <div style={{ paddingTop: "15px" }}>
          <Slider {...settings}>
            {new Array(8).fill("").map((_, index) => (
              <PersonData key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default DescriptionMovie
