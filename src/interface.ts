interface WithId {
  id: string;
}

interface User extends WithId {
  name: string;
}

const user: User = {
  id: "123",
  name: "Karl",
};
