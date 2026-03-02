export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  eta: string;
  description: string;
};

export const restaurants: Restaurant[] = [
  {
    id: "spice-route",
    name: "Spice Route Kitchen",
    cuisine: "Indian Fusion",
    rating: 4.7,
    eta: "35-45 min",
    description: "North + coastal plates with house spice blends."
  },
  {
    id: "tokyo-bowl",
    name: "Tokyo Bowl Lab",
    cuisine: "Japanese",
    rating: 4.5,
    eta: "25-35 min",
    description: "Rice bowls, karaage, and miso comforts."
  },
  {
    id: "green-grill",
    name: "Green Grill Co.",
    cuisine: "Healthy",
    rating: 4.4,
    eta: "20-30 min",
    description: "Protein bowls and seasonal salad plates."
  }
];
