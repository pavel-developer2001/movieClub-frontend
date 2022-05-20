import { NextPage } from "next"
import MainLayout from "../layouts/MainLayout"

const Custom404: NextPage = () => {
  return (
    <MainLayout>
      Произошла ошибка на стороне админов. Извиняемся за неудобства, наши
      специалисты уже разбираются.
    </MainLayout>
  )
}

export default Custom404
