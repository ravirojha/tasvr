import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.length > 0;
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  // eslint-disable-next-line prettier/prettier
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));

  return user;
}

// check all conditions before limit results
export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection('users').limit(10).get();

  return (
    result.docs
      .map((user) => ({ ...user.data(), docId: user.id }))
      // eslint-disable-next-line prettier/prettier
      .filter(
        (profile) =>
          profile.userId !== userId && !following.includes(profile.userId)
      )
  );
}

// updateLoggedInUserFollowing,
// updateFollowedUserFollowers(spDocId, userId)

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, // currently logged in user document id ( ravi's profile)
  profileId, // the user that ravi request to follow
  isFollowingProfile // true/false am i currently following this person
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId)
    });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId)
    });
}
