import { useContext } from 'react'
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Button from "../../common/ui/inputs/Button"
import TextField from "../../common/ui/inputs/TextField"
import NotificationContext from "../../../store/notification-store"

const FormWrapper = styled.div`
  h1 {
    margin: 0;
    text-align: center;
  }
  height: 100%;
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 94%;
    label {
      font-size: 12px;
      color: var(--col-brand);
      font-weight: 500;
      margin: 3px 0;
    }
    input {
      height: 34px;
      border: none;
      /* outline: 1px solid var(--col-brand); */
      outline: none;
      padding: 0 1rem;
      border-radius: 4px;
    }
    .error-message {
      font-size: 12px;
      color: var(--col-warning);
      font-weight: 500;
      margin-top: 4px;
    }
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
    width: 94%;
    margin: 0 auto;
    margin-top: 2rem;
    span {
      font-size: 13px;
      margin-top: 12px;
      color: var(--col-teal);
      /* text-decoration: underline; */
      cursor: pointer;
    }
  }
`

interface Prop {
  setShowAddRaft?: Function
}

const RaftForm = ({setShowAddRaft}: Prop) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const notificationCtx = useContext(NotificationContext)

  const onSubmit = (data) => {
    notificationCtx.showNotification({
      title: "",
      message: "Adding raft...",
      status: "pending",
    })
    fetch(`http://localhost:3000/api/travel/rafting`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(
              data
            ), // body data type must match "Content-Type" header
          }).then(res => {
            if(res.status === 201) {
              notificationCtx.showNotification({
                title: "",
                message: "Rafting Added!",
                status: "success",
              })
              setShowAddRaft(false)
            }
          }).catch(err => {
            notificationCtx.showNotification({
              title: "",
              message: "Could not add!",
              status: "error",
            })
          })

  }
  return (
    <FormWrapper>
      {/* <h1>Add Rafting</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="name">Image</label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="raftingStarts">Rafting Starts</label>
          <input
            type="text"
            id="raftingStarts"
            {...register("RaftingStarts", { required: true })}
          />
          {errors.RaftingStarts && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="raftingEnds">Rafting Ends</label>
          <input
            type="text"
            id="raftingEnds"
            {...register("RaftingEnds", { required: true })}
          />
          {errors.RaftingEnds && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="grades">Grades</label>
          <input
            type="text"
            id="grades"
            {...register("Grades", { required: true })}
          />
          {errors.Grades && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            {...register("Duration", { required: true })}
          />
          {errors.Duration && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="distance">Distance</label>
          <input
            type="text"
            id="distance"
            {...register("Distance", { required: true })}
          />
          {errors.Distance && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="bestSeason">Best Season</label>
          <input
            type="text"
            id="bestSeason"
            {...register("BestSeason", { required: true })}
          />
          {errors.BestSeason && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="perfectFor">Perfect For</label>
          <input
            type="text"
            id="perfectFor"
            {...register("PerfectFor", { required: true })}
          />
          {errors.PerfectFor && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="text"
            id="difficulty"
            {...register("Difficulty", { required: true })}
          />
          {errors.Difficulty && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="tourStartsAt">Tour Starts At</label>
          <input
            type="text"
            id="tourStartsAt"
            {...register("TourStartsAt", { required: true })}
          />
          {errors.TourStartsAt && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("desc", { required: true })}
          />
          {errors.desc && (
            <span className="error-message">This field is required</span>
          )}
        </div>
       <div className="form-group">
            <Button text="Add" type="primary" size="medium"/>
       </div>
      </form>
    </FormWrapper>
  )
}

export default RaftForm
