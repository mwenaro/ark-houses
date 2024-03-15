export const EAST_AFRICAN_TOWNS = [
  { town: "Nairobi", country: "Kenya" },
  { town: "Mombasa", country: "Kenya" },
  { town: "Kisumu", country: "Kenya" },
  { town: "Nakuru", country: "Kenya" },
  { town: "Eldoret", country: "Kenya" },

  { town: "Kampala", country: "Uganda" },
  { town: "Entebbe", country: "Uganda" },
  { town: "Gulu", country: "Uganda" },
  { town: "Jinja", country: "Uganda" },
  { town: "Mbale", country: "Uganda" },

  { town: "Dar es Salaam", country: "Tanzania" },
  { town: "Dodoma", country: "Tanzania" },
  { town: "Arusha", country: "Tanzania" },
  { town: "Mwanza", country: "Tanzania" },
  { town: "Zanzibar City", country: "Tanzania" },

  { town: "Kigali", country: "Rwanda" },
  { town: "Gisenyi", country: "Rwanda" },
  { town: "Butare", country: "Rwanda" },
  { town: "Ruhengeri", country: "Rwanda" },
  { town: "Kibuye", country: "Rwanda" },

  { town: "Bujumbura", country: "Burundi" },
  { town: "Ngozi", country: "Burundi" },
  { town: "Gitega", country: "Burundi" },
  { town: "Rutana", country: "Burundi" },
  { town: "Kayanza", country: "Burundi" },

  { town: "Juba", country: "South Sudan" },
  { town: "Malakal", country: "South Sudan" },
  { town: "Wau", country: "South Sudan" },
  { town: "Bor", country: "South Sudan" },
  { town: "Torit", country: "South Sudan" },

  { town: "Mogadishu", country: "Somalia" },
  { town: "Hargeisa", country: "Somaliland" },
  { town: "Kismayo", country: "Somalia" },
  { town: "Baidoa", country: "Somalia" },
  { town: "Garoowe", country: "Puntland" },

  { town: "Asmara", country: "Eritrea" },
  { town: "Keren", country: "Eritrea" },
  { town: "Massawa", country: "Eritrea" },
  { town: "Assab", country: "Eritrea" },
  { town: "Mendefera", country: "Eritrea" },

  { town: "Djibouti City", country: "Djibouti" },
  { town: "Ali Sabieh", country: "Djibouti" },
  { town: "Tadjoura", country: "Djibouti" },
  { town: "Obock", country: "Djibouti" },
  { town: "Dikhil", country: "Djibouti" },
];

export const EAST_AFRICAN_COUNTRIES = Array.from(
  new Set(EAST_AFRICAN_TOWNS.map((c) => c.country))
);
