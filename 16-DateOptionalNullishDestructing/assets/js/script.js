// Task1
const now = new Date();
const hour = now.getHours();

let greeting = "";

if (hour >= 5 && hour < 12) {
  greeting = "Sabahiniz xeyir!";
} else if (hour >= 12 && hour < 17) {
  greeting = "Gunortaniz xeyir!";
} else if (hour >= 17 && hour < 21) {
  greeting = "Axsaminiz xeyir!";
} else {
  greeting = "Geceniz xeyre qalsin!";
}

alert(greeting);


// Task2
const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
      email: "farid.ali@example.com",
      phone: "555-1234",
      emergencyContact: {
        name: "Far For",
        relation: "Spouse"
      }
    }
  };
  
  const {
    name,
    department,
    contact: {
      email,
      phone,
      emergencyContact: {
        name: emergencyContactName,
        relation: emergencyRelation
      }
    }
  } = employee;
  
  console.log(name, department, email, phone, emergencyContactName, emergencyRelation);

  
//   Task3
const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsasları",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30]
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];
  
  const { title, author, stats } = apiResponse[1];
  const [oxunma, bəyənmə, şərhlər] = stats;
  
  console.log(`Məqalə: ${title}, Müəllif: ${author}, ${oxunma} oxunma, ${bəyənmə} bəyənmə, ${şərhlər} şərh`);
  

// Task4
function renderUserProfile(userData) {
    return {
      username: userData?.user?.username ?? "Qonaq",
      avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
      bio: userData?.user?.profile?.bio ?? "Melumat yoxdur",
      email: userData?.user?.contact?.email ?? "teyin edilmeyib",
      premium: userData?.user?.account?.premium ?? false
    };
  }
  
  console.log(renderUserProfile({
    user: {
      username: "aysu2023",
      profile: {
        avatar: "/users/aysu.jpg",
        bio: "JavaScript developer",
      },
      contact: {
        email: "aysu@example.com"
      },
      account: {
        premium: true
      }
    }
  }));
  
  console.log(renderUserProfile({
    user: {
      username: "aysu",
      profile: {
        bio: ""
      },
      contact: {}
    }
  }));
  
  console.log(renderUserProfile({
    user: {
      username: null
    }
  }));
  
  console.log(renderUserProfile({}));
  