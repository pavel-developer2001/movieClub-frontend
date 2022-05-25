import React, { FC, useEffect } from "react"
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
          <p>loading...</p>
        ) : (
          teams.map((team) => <TeamList key={team._id} team={team} />)
        )}
      </div>
    </div>
  )
}
const TeamList: FC<{ team: any }> = ({ team }) => {
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
}

export default AsPartOfTheTeam
