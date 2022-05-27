import React, { FC, memo, useEffect } from "react"
import styles from "./AsPartOfTheTeam.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import {
  selectTeamLoading,
  selectTeamsUserData,
} from "../../../../store/modules/team/team.selector"
import { useActions } from "../../../../hooks/useActions"
import { CircularProgress } from "@mui/material"
import { ITeamsForUser } from "../../../../store/modules/team/types/ITeamMember"

const AsPartOfTheTeam = () => {
  const router = useRouter()
  const teams = useSelector(selectTeamsUserData)
  const isLoading = useSelector(selectTeamLoading)
  const { getTeamsForUser } = useActions()
  useEffect(() => {
    //@ts-ignore
    getTeamsForUser(router.query.id)
  }, [router])
  return (
    <div className={styles.wrapper}>
      <strong>В составе</strong>
      <div className={styles.data}>
        {isLoading ? (
          <CircularProgress />
        ) : teams.length > 0 ? (
          teams.map((team) => <TeamList key={team._id} team={team} />)
        ) : (
          <p>Нигде не состоите </p>
        )}
      </div>
    </div>
  )
}
const TeamList: FC<{ team: ITeamsForUser }> = memo(({ team }) => {
  return (
    <Link href={`/team/${team.team._id}`}>
      <div className={styles.userData}>
        <Image
          src={
            team.team.teamCover
              ? team.team.teamCover
              : "https://api.remanga.org//media/publishers/assault_team/high_cover.jpg"
          }
          width={66}
          height={66}
        />
        <strong className={styles.title}>{team.team.teamName}</strong>
        <span>{team.roleInTeam}</span>
      </div>
    </Link>
  )
})

export default AsPartOfTheTeam
