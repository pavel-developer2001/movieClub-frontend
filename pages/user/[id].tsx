import { CircularProgress } from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import dynamic from "next/dynamic"
import React from "react"
import { useSelector } from "react-redux"
import HeaderUserProfile from "../../components/pages/user/HeaderUserProfile"
import MainLayout from "../../layouts/MainLayout"
import { wrapper } from "../../store"
import { getUserProfile } from "../../store/modules/user/user.actions"
import {
  selectProfileData,
  selectUserLoading,
} from "../../store/modules/user/user.selector"

const DynamicBodyUserProfile = dynamic(
  () => import("../../components/pages/user/BodyUserProfile"),
  { loading: () => <CircularProgress /> }
)

const UserPage: NextPage = () => {
  const user = useSelector(selectProfileData)
  const isLoading = useSelector(selectUserLoading)
  return (
    <MainLayout>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <HeaderUserProfile user={user} />
          <DynamicBodyUserProfile user={user} />
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
      await store.dispatch(getUserProfile(params.id))
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
