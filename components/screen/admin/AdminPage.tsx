import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import AdminAuthForm from "../../auth/admin-auth"
import { useSession, getSession, signOut } from "next-auth/react"
import Modal from "../../common/ui/modal/Modal"
import { useForm } from "react-hook-form"
import TrekForm from "./TrekForm"
import RaftForm from "./RaftForm"
import { AiOutlineDelete } from "react-icons/ai"
import { FaRegEdit } from "react-icons/fa"
import Button from "../../common/ui/inputs/Button"
import NotificationContext from "../../../store/notification-store"
import Link from "next/link"

const AdminWrapper = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 4rem;
    .admin_info {
      margin: 2rem auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .right {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        h2 {
          color: var(--col-brand);
          font-size: 16px;
          margin-bottom: 8px;
        }
        button {
          background: var(--col-blue);
          padding: 5px 12px;
          border: none;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
    .add_types {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      @media (max-width: 500px) {
        flex-direction: column;
      }
      div {
        height: 150px;
        width: 45%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
        }
        p {
          font-size: 13px;
          font-weight: bold;
          margin-top: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 500px) {
          width: 100%;
          margin: 1rem 0;
        }
      }
      .rafting {
        background: rgb(21, 211, 222);
        background: linear-gradient(
          90deg,
          rgba(21, 211, 222, 0.8774860285911239) 25%,
          rgba(12, 198, 249, 1) 50%,
          rgba(102, 147, 221, 1) 92%
        );
      }
      .trekking {
        background: rgb(21, 222, 145);
        background: linear-gradient(
          90deg,
          rgba(21, 222, 145, 0.8774860285911239) 25%,
          rgba(53, 249, 12, 1) 50%,
          rgba(102, 205, 221, 1) 92%
        );
      }
    }
  }
`
const AuthWrapper = styled.div`
  min-height: 350px;
  width: 325px;
  background: var(--col-white);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h2 {
    text-align: center;
    font-size: 14px;
  }
`

const AdCard = styled.div`
  margin-top: 1rem;
`
const Div = styled.div`
  padding: 8px;
  background: #eee;
  margin: 5px 0;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    p {
      padding: 0;
      margin-top: 5px;
    }
  }
  .right {
    font-size: 20px;
    .icon {
      cursor: pointer;
    }
  }
`

const DeleteDiv = styled.div`
  .form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    width: 70%;
  }
`

const AdminPage = ({ trekking, rafting }) => {
  const notificationCtx = useContext(NotificationContext)
  const [showTreks, setShowTreks] = useState(false)
  const [showRafts, setShowRafts] = useState(false)
  const [showAddTrek, setShowAddTrek] = useState(false)
  const [showAddRaft, setShowAddRaft] = useState(false)
  const [deleteRaftModal, setDeleteRaftModal] = useState(false)
  const [deleteTrekModal, setDeleteTrekModal] = useState(false)
  const [editTrekModal, setEditTrekModal] = useState(false)
  const [editRaftModal, setEditRaftModal] = useState(false)

  const [deleteRaftId, setDeleteRaftId] = useState("")
  const [deleteTrekId, setDeleteTrekId] = useState("")

  const { data: session, status } = useSession()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const logoutHandler = () => [signOut()]

  const showTrekList = () => {
    return (
      // <Modal show={true} onClose={() => setShowTreks(false)}>
      <AdCard>
        {trekking?.map((trek) => (
          <Div key={trek._id} className="show_card" image={trek.image}>
            <div className="left">
              <h4>{trek.name}</h4>
              <p>{trek.ELocation}</p>
            </div>
            <div className="right">
              <FaRegEdit
                className="icon"
                onClick={() => setEditTrekModal(true)}
              />{" "}
              <AiOutlineDelete
                className="icon"
                onClick={() => {
                  setDeleteTrekId(trek._id)
                  setDeleteRaftModal(true)
                }}
              />
            </div>
          </Div>
        ))}
      </AdCard>
      // </Modal>
    )
  }

  const showRaftList = () => {
    return (
      // <Modal show={true} onClose={() => setShowRafts(false)}>
      <AdCard>
        {rafting?.map((raft) => (
          <Div key={raft._id} className="show_card" image={raft.image}>
            <div className="left">
              <h4>{raft.name}</h4>
              <p>{raft.RaftingStarts}</p>
            </div>
            <div className="right">
              <FaRegEdit
                className="icon"
                onClick={() => setEditRaftModal(true)}
              />
              <AiOutlineDelete
                className="icon"
                onClick={() => {
                  setDeleteRaftId(raft._id)
                  setDeleteRaftModal(true)
                }}
              />
            </div>
          </Div>
        ))}
      </AdCard>
      // </Modal>
    )
  }

  const addTrek = () => {
    return (
      <Modal
        show={true}
        onClose={() => setShowAddTrek(false)}
        title="Add Trekking"
      >
        <TrekForm setShowAddTrek={setShowAddTrek} />
      </Modal>
    )
  }

  const addRaft = () => {
    return (
      <Modal
        show={true}
        onClose={() => setShowAddRaft(false)}
        title="Add Rafting"
      >
        <RaftForm setShowAddRaft={setShowAddRaft} />
      </Modal>
    )
  }

  const raftDeleteRequest = () => {
    notificationCtx.showNotification({
      title: "",
      message: "Deleting raft...",
      status: "pending",
    })
    fetch(`http://localhost:3000/api/travel/rafting`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(deleteRaftId), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 201) {
          notificationCtx.showNotification({
            title: "",
            message: "Rafting deleted!",
            status: "success",
          })
          setDeleteRaftModal(false)
        }
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "",
          message: "Could not delete!",
          status: "error",
        })
      })
  }

  const trekDeleteRequest = () => {
    notificationCtx.showNotification({
      title: "",
      message: "Deleting trek...",
      status: "pending",
    })
    fetch(`http://localhost:3000/api/travel/trekking`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(deleteRaftId), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 201) {
          notificationCtx.showNotification({
            title: "",
            message: "Trekking deleted!",
            status: "success",
          })
          setDeleteRaftModal(false)
        }
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "",
          message: "Could not delete!",
          status: "error",
        })
      })
  }

  const deleteConfirm = () => {
    return (
      <Modal show={true} onClose={() => setDeleteRaftModal(false)}>
        <DeleteDiv>
          <h2>Are you sure?</h2>
          <div className="form-group">
            <Button
              text="Delete"
              type="primary"
              size="medium"
              onClick={() => raftDeleteRequest()}
            />
            <Button
              text="Cancel"
              type="outlined"
              size="medium"
              onClick={() => setDeleteRaftModal(false)}
            />
          </div>
        </DeleteDiv>
      </Modal>
    )
  }

  const deleteTrekConfirm = () => {
    return (
      <Modal show={true} onClose={() => setDeleteTrekModal(false)}>
        <DeleteDiv>
          <h2>Are you sure?</h2>
          <div className="form-group">
            <Button
              text="Delete"
              type="primary"
              size="medium"
              onClick={() => trekDeleteRequest()}
            />
            <Button
              text="Cancel"
              type="outlined"
              size="medium"
              onClick={() => setDeleteTrekModal(false)}
            />
          </div>
        </DeleteDiv>
      </Modal>
    )
  }

  const trekEditConfirm = () => {
    return (
      <Modal
        show={true}
        onClose={() => setEditTrekModal(false)}
        title="Edit Trekking"
      >
        <TrekForm />
      </Modal>
    )
  }

  const raftEditConfirm = () => {
    return (
      <Modal
        show={true}
        onClose={() => setEditRaftModal(false)}
        title="Edit Rafting"
      >
        <RaftForm />
      </Modal>
    )
  }

  // if (!session?.user) {
  //   return <h2>Loading...</h2>
  // }

  if (session?.user?.email !== "admin@admin.com") {
    return (
      <AuthWrapper>
        <AdminAuthForm />
        <Link href="/">
          <a>
            <h2>Home</h2>
          </a>
        </Link>
      </AuthWrapper>
    )
  }
  return (
    <AdminWrapper>
      {showAddTrek && addTrek()}
      {showAddRaft && addRaft()}
      {deleteRaftModal && deleteConfirm()}
      {deleteTrekModal && deleteTrekConfirm()}
      {editTrekModal && trekEditConfirm()}
      {editRaftModal && raftEditConfirm()}
      <div className="container">
        <div className="admin_info">
          <h1>Welcome Admin!</h1>
          <div className="right">
            <h2>{session?.user?.email}</h2>
            <button onClick={() => logoutHandler()}>Signout</button>
          </div>
        </div>

        <div className="add_types">
          <div className="trekking">
            <h2 onClick={() => setShowAddTrek(true)}>Add Trekking</h2>
            <p
              onClick={() => {
                setShowTreks(true)
                setShowRafts(false)
              }}
            >
              View current list.
            </p>
          </div>
          <div className="rafting">
            <h2 onClick={() => setShowAddRaft(true)}>Add Rafting</h2>
            <p
              onClick={() => {
                setShowRafts(true)
                setShowTreks(false)
              }}
            >
              View current list.
            </p>
          </div>
        </div>
        <div className="showcase">
          {showTreks ? showTrekList() : showRafts ? showRaftList() : null}
        </div>
      </div>
    </AdminWrapper>
  )
}

export default AdminPage
