import { useContext } from 'react'
import { useForm } from "react-hook-form"
import styled from "styled-components"
import NotificationContext from "../../../store/notification-store"
import Button from "../../common/ui/inputs/Button"
import TextField from "../../common/ui/inputs/TextField"

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
  setShowAddTrek?: Function
}
const TrekForm = ({setShowAddTrek}: Prop) => {
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
      message: "Adding trek...",
      status: "pending",
    })
    fetch(`http://localhost:3000/api/travel/trekking`, {
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
                message: "Trekking Added!",
                status: "success",
              })
              setShowAddTrek(false)
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
      {/* <h1>Add Trekking</h1> */}
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
          <label htmlFor="highestAccess">Highest Access</label>
          <input
            type="text"
            id="highestAccess"
            {...register("HighestAccess", { required: true })}
          />
          {errors.HighestAccess && (
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
          <label htmlFor="groupSize">Group Size</label>
          <input
            type="text"
            id="groupSize"
            {...register("DaysGroupSize", { required: true })}
          />
          {errors.DaysGroupSize && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Coordinates">Coordinates</label>
          <input
            type="text"
            id="Coordinates"
            {...register("Coordinates", { required: true })}
          />
          {errors.Coordinates && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            id="Location"
            {...register("ELocation", { required: true })}
          />
          {errors.ELocation && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            id="Country"
            {...register("Country", { required: true })}
          />
          {errors.Country && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Airport">Airport</label>
          <input
            type="text"
            id="Airport"
            {...register("Airport", { required: true })}
          />
          {errors.Airport && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="DepartureFrom">DepartureFrom</label>
          <input
            type="text"
            id="DepartureFrom"
            {...register("DepartureFrom", { required: true })}
          />
          {errors.DepartureFrom && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Grade">Grade</label>
          <input
            type="text"
            id="Grade"
            {...register("Grade", { required: true })}
          />
          {errors.Grade && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Accommodation">Accommodation</label>
          <input
            type="text"
            id="Accommodation"
            {...register("Accommodation", { required: true })}
          />
          {errors.Accommodation && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="tMeals">tMeals</label>
          <input
            type="text"
            id="tMeals"
            {...register("tMeals", { required: true })}
          />
          {errors.tMeals && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Transportation">Transportation</label>
          <input
            type="text"
            id="Transportation"
            {...register("Transportation", { required: true })}
          />
          {errors.Transportation && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="BestSeason">BestSeason</label>
          <input
            type="text"
            id="BestSeason"
            {...register("BestSeason", { required: true })}
          />
          {errors.BestSeason && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="MajorActivity">MajorActivity</label>
          <input
            type="text"
            id="MajorActivity"
            {...register("MajorActivity", { required: true })}
          />
          {errors.MajorActivity && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="IncludeActivity">IncludeActivity</label>
          <input
            type="text"
            id="IncludeActivity"
            {...register("IncludeActivity", { required: true })}
          />
          {errors.IncludeActivity && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Culture">Culture</label>
          <input
            type="text"
            id="Culture"
            {...register("Culture", { required: true })}
          />
          {errors.Culture && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Himalayansights">Himalayansights</label>
          <input
            type="text"
            id="Himalayansights"
            {...register("Himalayansights", { required: true })}
          />
          {errors.Himalayansights && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
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

export default TrekForm
