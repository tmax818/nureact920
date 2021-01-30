import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// Helper Functions
const res = (response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(`Error ${response.status}: ${response.statusText}`);
    error.response = response;
    throw error;
  }
};

const err = (error) => {
  console.log("error");
  const errMess = new Error(error.message);
  throw errMess;
};

//COMMENTS

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (campsiteId, rating, author, text) => (dispatch) => {
  const newComment = {
    campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text,
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res, err)
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("post comment", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(res, err)
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};
export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

// CAMPSITES

export const fetchCampsites = () => (dispatch) => {
  dispatch(campsitesLoading());

  return fetch(baseUrl + "campsites")
    .then(res, err)
    .then((response) => response.json())
    .then((campsites) => dispatch(addCampsites(campsites)))
    .catch((error) => dispatch(campsitesFailed(error.message)));
};

export const campsitesFailed = (errMess) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});

// PROMOTIONS

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());

  return fetch(baseUrl + "promotions")
    .then(res, err)
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((error) => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

// PARTNERS

export const fetchPartners = () => (dispatch) => {
  dispatch(partnersLoading());

  return fetch(baseUrl + "partners")
    .then(res, err)
    .then((response) => response.json())
    .then((partners) => dispatch(addPartners(partners)))
    .catch((error) => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
  type: ActionTypes.PARTNERS_LOADING,
});

export const partnersFailed = (errMess) => ({
  type: ActionTypes.PARTNERS_FAILED,
  payload: errMess,
});

export const addPartners = (partners) => ({
  type: ActionTypes.ADD_PARTNERS,
  payload: partners,
});

// FEEDBACK

export const postFeedback = (feedback) => (dispatch) => {
  const message = JSON.stringify(feedback);
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: message,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => alert("Thank you for your feedback: " + message))

    .catch((error) => {
      console.log("post Feedback", error.message);
      alert("Your Feedback could not be posted\nError: " + error.message);
    });
};
