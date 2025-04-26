export const initialState = JSON.parse(localStorage.getItem("users")) || [];

export const userReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "CREATE":
      newState = [
        ...state,
        {
          id: action.id,
          name: action.name,
          surname: action.surname,
        },
      ];
      break;

    case "UPDATE":
      newState = state.map((user) =>
        user.id === action.id
          ? { ...user, name: action.name, surname: action.surname }
          : user
      );
      break;

    case "DELETE":
      newState = state.filter((user) => user.id !== action.id);
      break;

    case "RESET":
      newState = [];
      break;

    default:
      newState = state;
  }

  localStorage.setItem("users", JSON.stringify(newState));
  return newState;
};
