import { NextPage } from "next"
import React from "react"
import HeaderTeam from "../../components/pages/team/HeaderTeam"
import TeamBody from "../../components/pages/team/TeamBody"
import MainLayout from "../../layouts/MainLayout"

const TeamPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderTeam />
      <TeamBody />
    </MainLayout>
  )
}

export default TeamPage
