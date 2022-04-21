import styled from "styled-components"
import AdminAuthForm from "../components/auth/admin-auth"
import PageHead from "../components/common/other/Head"
import AdminPage from "../components/screen/admin/AdminPage"

const AdminWrapper = styled.div`
  min-height: 350px;
  width: 325px;
  background: var(--col-white);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const admin = ({ trekking, rafting }) => {
  return (
    <>
      {" "}
      <PageHead
        title="Admin"
        name="Tourvaille."
        content="Make your trip best memory with us."
      />
      <AdminPage trekking={trekking} rafting={rafting} />
    </>
  )
}

export async function getServerSideProps() {
  const resTrekking = await fetch("http://localhost:3000/api/travel/trekking")
  const resRafting = await fetch("http://localhost:3000/api/travel/rafting")
  const trekData = await resTrekking.json()
  const raftData = await resRafting.json()
  return {
    props: {
      trekking: trekData,
      rafting: raftData,
    },
  }
}

export default admin
