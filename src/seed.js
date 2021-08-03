/* eslint-disable no-plusplus */
// NOTE: replace 'ccHV1cbdyCULiw7auyODAKnt65j2' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'ccHV1cbdyCULiw7auyODAKnt65j2',
      username: 'ravi',
      fullName: 'Ravi Ranjan Ojha',
      emailAddress: 'ravirojha7@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'anuj',
      fullName: 'Anuj Agrawal',
      emailAddress: 'anuj@agrawal.com',
      following: [],
      followers: ['ccHV1cbdyCULiw7auyODAKnt65j2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'prashant',
      fullName: 'Prashant Jaiswal',
      emailAddress: 'prashant@jaiswal.com',
      following: [],
      followers: ['ccHV1cbdyCULiw7auyODAKnt65j2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'sara',
      fullName: 'Sara Hussain',
      emailAddress: 'sara@hussain.com',
      following: [],
      followers: ['ccHV1cbdyCULiw7auyODAKnt65j2'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/anuj/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'prashant',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'sara',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
