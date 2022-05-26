import { CircularProgress } from "@mui/material"
import { NextPage } from "next"
import dynamic from "next/dynamic"
import React from "react"
import HeaderTeam from "../../components/pages/team/HeaderTeam"
import MainLayout from "../../layouts/MainLayout"

const DynamicTeamBody = dynamic(
  () => import("../../components/pages/team/TeamBody"),
  { loading: () => <CircularProgress /> }
)

const TeamPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderTeam />
      <DynamicTeamBody />
    </MainLayout>
  )
}

export default TeamPage
