import { NextPage } from "next"
import React from "react"
import BodyUserProfile from "../../components/pages/user/BodyUserProfile"
import HeaderUserProfile from "../../components/pages/user/HeaderUserProfile"
import MainLayout from "../../layouts/MainLayout"

const UserPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderUserProfile />
      <BodyUserProfile />
    </MainLayout>
  )
}

export default UserPage
