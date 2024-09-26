// 1. Destructure the following object and extract the id of the location.
const room = {
  building: {
    id: "LX1001",
    name: "ActiveLearning",
    location: {
      id: "North1",
      street: "Pracha-Uthit",
    },
  },
};

const {
  building: {
    location: { id },
  },
} = room;

console.log(id);

//2.extract notifications
const userProfile = {
  name: "John Doe",
  contact: {
    email: "johndoe@example.com",
    phone: {
      home: "123-456",
      work: "987-654",
    },
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
};
const {
  preferences: { notifications },
} = userProfile;
console.log(notifications);

//3. extract main home and main work contacts
const userProfiles = {
  name: "John Doe",
  contact: {
    email: "johndoe@example.com",
    phone: {
      home: {
        main: "123-456",
      },
      work: {
        main: "987-654",
      },
    },
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
};

const {
  contact: {
    phone: {
      home: { main: homeMain },
      work: { main: workMain },
    },
  },
} = userProfiles;
console.log(homeMain);
console.log(workMain);
