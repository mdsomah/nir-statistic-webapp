const AuthService = {
  // Login User
  login: (user) => {
    return fetch("/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { userName: "", role: "" } };
    });
  },

  // Register New User
  register: (user) => {
    return fetch("/users/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  // Update User Profile Photo
  profilePhoto: (user) => {
    return fetch("/users/profile/photo", {
      method: "POST",
      body: user,
      // headers: {
      //   // "Content-Type": "application/json",
      //   "Content-Type": "multipart/form-data",
      // },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  // Update User Profile Password
  profilePassword: (user) => {
    return fetch("/users/profile/password", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  // Logout User
  logout: () => {
    return fetch("/users/logout")
      .then((res) => res.json())
      .then((data) => data);
  },

  // Authenticate User
  isAuthenticated: () => {
    return fetch("/users/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { userName: "", role: "" } };
    });
  },
};

export default AuthService;
