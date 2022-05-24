import { GetServerSideProps, NextPage } from "next"
import React from "react"
import { useSelector } from "react-redux"
import BodyUserProfile from "../../components/pages/user/BodyUserProfile"
import HeaderUserProfile from "../../components/pages/user/HeaderUserProfile"
import MainLayout from "../../layouts/MainLayout"
import { wrapper } from "../../store"
import { getUserData } from "../../store/modules/user/user.actions"
import {
  selectUserData,
  selectUserLoading,
} from "../../store/modules/user/user.selector"

const UserPage: NextPage = () => {
  const user = useSelector(selectUserData)
  const isLoading = useSelector(selectUserLoading)
  return (
    <MainLayout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <HeaderUserProfile user={user} />
          <BodyUserProfile user={user} />
        </>
      )}
    </MainLayout>
  )
}
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params, res }) => {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    )
    try {
      //@ts-ignore
      await store.dispatch(getUserData(params?.id))
      return {
        props: {},
      }
    } catch (error) {
      console.log("ERROR!", error)
      return {
        props: {},
      }
    }
  })
export default UserPage
